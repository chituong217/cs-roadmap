import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { tracks, chapters, tasks, edition, capstoneProjects, chapterToTrackId } from '../src/curriculum.js';

test('curriculum defines exactly 7 tracks with complete metadata', () => {
  assert.equal(tracks.length, 7);
  const trackIds = tracks.map(t => t.id);
  const expectedTrackIds = ['track-0', 'track-1', 'track-2', 'track-3', 'track-4', 'track-5', 'track-6'];
  assert.deepEqual(trackIds, expectedTrackIds);

  for (let i = 0; i < 7; i++) {
    const tr = tracks[i];
    assert.equal(tr.trackNumber, i);
    assert.equal(tr.id, `track-${i}`);
    assert.ok(tr.slug && typeof tr.slug === 'string');
    assert.ok(tr.title && tr.title.includes(`Track ${i}`));
    assert.ok(tr.shortTitle && typeof tr.shortTitle === 'string');
    assert.ok(tr.description && tr.description.length > 30);
    assert.ok(tr.icon && typeof tr.icon === 'string');
    assert.match(tr.colorAccent, /^#[0-9a-fA-F]{6}$/);
    assert.ok(Array.isArray(tr.hcmusAlignment) && tr.hcmusAlignment.length >= 1);
    assert.ok(typeof tr.totalEstimatedHours === 'number' && tr.totalEstimatedHours >= 50);
    assert.ok(Array.isArray(tr.chapterIds) && tr.chapterIds.length >= 1);
  }
});

test('every chapter maps cleanly and uniquely to a valid track', () => {
  assert.equal(chapters.length, 27);
  const validTrackIds = new Set(tracks.map(t => t.id));

  for (const ch of chapters) {
    assert.ok(ch.trackId, `Chapter ${ch.id} missing trackId`);
    assert.ok(validTrackIds.has(ch.trackId), `Chapter ${ch.id} has invalid trackId ${ch.trackId}`);
    assert.equal(chapterToTrackId[ch.id], ch.trackId, `Mismatch for chapter ${ch.id}`);
  }

  // Ensure all 7 tracks have chapters
  for (const tr of tracks) {
    const mappedChapters = chapters.filter(c => c.trackId === tr.id);
    assert.ok(mappedChapters.length >= 1, `Track ${tr.id} has no mapped chapters`);
    assert.deepEqual(tr.chapterIds, mappedChapters.map(c => c.id));
  }
});

test('every task possesses a valid trackId matching its chapter', () => {
  assert.ok(tasks.length >= 355);
  const validTrackIds = new Set(tracks.map(t => t.id));

  for (const task of tasks) {
    assert.ok(task.trackId, `Task ${task.id} missing trackId`);
    assert.ok(validTrackIds.has(task.trackId), `Task ${task.id} has invalid trackId ${task.trackId}`);
    const parentChapter = chapters.find(c => c.id === task.chapter);
    assert.ok(parentChapter, `Task ${task.id} references missing chapter ${task.chapter}`);
    assert.equal(task.trackId, parentChapter.trackId, `Task ${task.id} trackId does not match chapter trackId`);
  }
});

test('defines the 5 Practical Capstone Mini-Projects with authentic specs and valid task links', () => {
  assert.equal(capstoneProjects.length, 5);
  const validTaskIds = new Set(tasks.map(t => t.id));
  const validTrackIds = new Set(tracks.map(t => t.id));

  for (let i = 0; i < 5; i++) {
    const proj = capstoneProjects[i];
    assert.equal(proj.projectNumber, i + 1);
    assert.ok(proj.id && proj.id.startsWith('project-'));
    assert.ok(proj.title && proj.title.includes(`Mini-Project ${i + 1}`));
    assert.ok(validTrackIds.has(proj.trackId));
    assert.ok(proj.targetTrack && typeof proj.targetTrack === 'string');
    assert.ok(proj.pedagogicalObjective && proj.pedagogicalObjective.length > 50);
    assert.ok(Array.isArray(proj.technicalScope) && proj.technicalScope.length >= 3);
    assert.ok(Array.isArray(proj.verificationCriteria) && proj.verificationCriteria.length >= 3);
    assert.ok(Array.isArray(proj.relatedTaskIds) && proj.relatedTaskIds.length >= 3);

    for (const taskId of proj.relatedTaskIds) {
      assert.ok(validTaskIds.has(taskId), `Project ${proj.id} references non-existent task ${taskId}`);
    }
  }

  // Specifically verify the 5 projects:
  const titles = capstoneProjects.map(p => p.title);
  assert.ok(titles.some(t => t.includes('Space Invaders')));
  assert.ok(titles.some(t => t.includes('Web Server')));
  assert.ok(titles.some(t => t.includes('Graph Routing')));
  assert.ok(titles.some(t => t.includes('Naive Bayes')));
  assert.ok(titles.some(t => t.includes('Scaffold')));
});

test('public/ROADMAP.md contains the 7-track overview table, 5 projects, and checklist format', () => {
  const roadmapPath = fileURLToPath(new URL('../public/ROADMAP.md', import.meta.url));
  assert.ok(existsSync(roadmapPath));
  const content = readFileSync(roadmapPath, 'utf8');

  // Verify 7 tracks overview table
  assert.ok(content.includes('## Bảng Tổng quan 7 Tiến trình Học tập (7 Tracks)'));
  for (const tr of tracks) {
    assert.ok(content.includes(tr.shortTitle));
  }

  // Verify 5 mini-projects section
  assert.ok(content.includes('## 5 Đồ án Thực hành Trọng điểm (Practical Capstone Mini-Projects)'));
  for (const proj of capstoneProjects) {
    assert.ok(content.includes(proj.title));
    assert.ok(content.includes(proj.pedagogicalObjective));
  }

  // Verify checklist format
  assert.ok(content.includes('- [ ]'));
});
