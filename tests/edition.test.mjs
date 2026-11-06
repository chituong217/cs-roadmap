import test from 'node:test';
import assert from 'node:assert/strict';
import { tasks, chapters, previousTaskIds } from '../src/curriculum/index.js';
import { learnerProfile } from '../src/curriculum/edition.js';
import { emptyProgress, nextTask, validateProgress } from '../src/progress.mjs';
import { buildLearningPrompt } from '../src/learning-prompt.mjs';

test('all 355 previous IDs retain their states after reorganization', () => {
  assert.equal(previousTaskIds.length, 355);
  const statuses = Object.fromEntries(previousTaskIds.map((id, i) => [id, ['done', 'learning', 'todo', 'deferred'][i % 4]]));
  assert.deepEqual(validateProgress({ ...emptyProgress(), statuses, lastTask: previousTaskIds[0] }, tasks.map(t => t.id)).data.statuses, statuses);
  assert.equal(new Set(tasks.map(t => t.id)).size, tasks.length);
});
test('courses expose entry conditions, outcomes and learner history without pre-completing work', () => {
  for (const c of chapters) {
    assert.ok(c.goal.length > 20 && c.evidence.length > 25 && c.baseline);
    assert.ok(Array.isArray(c.prerequisites));
    assert.ok(tasks.some(t => t.chapter === c.id));
  }
  assert.deepEqual(emptyProgress().statuses, {});
  assert.match(learnerProfile.summary, /nạp chồng hàm/);
  assert.match(learnerProfile.summary, /chương 2/);
});
test('new learning states round-trip and resuming favors active work and revision over optional entry', () => {
  const sample = [{ id: 'intro', optional: true }, { id: 'core' }, { id: 'later' }];
  assert.equal(nextTask(sample, {}).id, 'core');
  assert.equal(nextTask(sample, { core: 'done', later: 'revisit' }).id, 'later');
  assert.equal(nextTask(sample, { intro: 'learning', later: 'revisit' }).id, 'intro');
  assert.deepEqual(validateProgress({ ...emptyProgress(), statuses: { core: 'reviewed', later: 'revisit' } }, sample.map(t => t.id)).data.statuses, { core: 'reviewed', later: 'revisit' });
});
test('systems enter early and advanced courses have foundations before their projects', () => {
  const at = id => tasks.findIndex(t => t.id === id);
  for (const [a,b] of [['debug-reproduce','git-first'], ['sys-fd','sys-shell-lab'], ['sys-shell-lab','os-boundary'], ['os-process','deep-xv6'], ['db-transaction','db-recovery'], ['pl-higher-order','pl-interpreter'], ['compiler-bytecode','compiler-project-lab']]) {
    // Git's historical ID can vary: use the course boundary for that condition.
    if (b === 'git-first') assert.ok(at(a) < tasks.findIndex(t => t.chapter === 'git'));
    else assert.ok(at(a) >= 0 && at(b) > at(a), `${a} before ${b}`);
  }
  assert.ok(tasks.findIndex(t => t.chapter === 'architecture') < tasks.findIndex(t => t.chapter === 'algorithms'));
});
test('prompts carry actual course conditions and distinguish beginner entry from specialization', () => {
  const debug = tasks.find(t => t.id === 'debug-breakpoint');
  const text = buildLearningPrompt(debug, tasks);
  assert.ok(text.includes(debug.course.goal) && text.includes(debug.course.evidence));
  assert.match(text, /Git, Linux và OS chưa học/);
  assert.match(buildLearningPrompt(tasks.find(t => t.id === 'zero-program'), tasks), /Lối vào cho người mới/);
});

test('finishing an optional entry task continues that chosen course', () => {
  assert.equal(nextTask(tasks, { 'zero-program': 'done' }, 'zero-program').id, 'zero-variable');
  assert.equal(nextTask(tasks, {}, null).id, 'debug-reproduce');
  assert.equal(nextTask(tasks, { 'compiler-resolve': 'done' }, 'compiler-resolve').id, 'compiler-bytecode');
});
