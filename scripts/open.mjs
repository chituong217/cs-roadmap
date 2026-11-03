import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const address = 'http://127.0.0.1:4178/';
async function ready() {
  try { const response = await fetch(address, { signal: AbortSignal.timeout(1000) }); return response.ok && (await response.text()).includes('Lộ trình KHMT'); } catch { return false; }
}
if (!await ready()) {
  const vite = path.join(root, 'node_modules', 'vite', 'bin', 'vite.js');
  if (!existsSync(vite) || !existsSync(path.join(root, 'dist', 'index.html'))) { console.error('Chua co ban chay. Mo terminal trong thu muc nay, chay npm ci va npm run build truoc.'); process.exit(1); }
  const server = spawn(process.execPath, [vite, 'preview', '--host', '127.0.0.1', '--port', '4178', '--strictPort'], { cwd: root, detached: true, stdio: 'ignore', windowsHide: true });
  server.on('error', err => { console.error(err.message); process.exitCode = 1; });
  server.unref();
  let available = false;
  for (let attempt = 0; attempt < 15; attempt++) { if (await ready()) { available = true; break; } await new Promise(resolve => setTimeout(resolve, 300)); }
  if (!available) { console.error('Khong mo duoc roadmap o cong 4178. Kiem tra cong hoac xem README.'); process.exit(1); }
}
console.log('Mo roadmap: ' + address);
if (process.platform === 'win32') {
  const opener = spawn('cmd.exe', ['/d', '/c', 'start', '', address], { stdio: 'ignore', windowsHide: true });
  opener.on('error', () => console.log('Hay mo dia chi tren bang trinh duyet.'));
}
