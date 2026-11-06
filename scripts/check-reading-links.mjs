import { additionalLibrary } from '../src/curriculum/edition-content.js';
import { freeLibrary } from '../src/curriculum/readings.js';
import { writeFile } from 'node:fs/promises';

const entries = Object.entries({ ...freeLibrary, ...additionalLibrary });
const result = [];
let cursor = 0;
async function worker() {
  while (cursor < entries.length) {
    const [key, [, url]] = entries[cursor++];
    try {
      const response = await fetch(url, { signal: AbortSignal.timeout(15000), headers: { 'User-Agent': 'RoadmapLinkCheck/2.0' } });
      result.push({ key, url, status: response.status, finalUrl: response.url });
      await response.body?.cancel();
    } catch (err) { result.push({ key, url, error: err.message }); }
  }
}
await Promise.all(Array.from({ length: 5 }, worker));
result.sort((a, b) => a.key.localeCompare(b.key));
await writeFile(new URL('../docs/READING-LINKS.json', import.meta.url), JSON.stringify({ checkedAt: new Date().toISOString(), note: 'HTTP reachability only; free-access policy is reviewed separately from author/publisher pages.', result }, null, 2) + '\n');
console.log(JSON.stringify({ total: result.length, reachable: result.filter(r => r.status >= 200 && r.status < 400).length, issues: result.filter(r => !(r.status >= 200 && r.status < 400)) }, null, 2));
