import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon'
};

const distDir = path.join(__dirname, 'dist');
const publicDir = path.join(__dirname, 'public');

const server = http.createServer((req, res) => {
  let reqUrl = decodeURI(req.url.split('?')[0]);
  if (reqUrl === '/') reqUrl = '/index.html';

  // Candidate paths to check in order of priority:
  // 1. dist/ + reqUrl (production bundle)
  // 2. public/ + reqUrl (static assets like /images/... or /audio/...)
  // 3. __dirname + reqUrl (root files)
  const candidatePaths = [
    path.join(distDir, reqUrl),
    path.join(publicDir, reqUrl),
    path.join(__dirname, reqUrl)
  ];

  const tryNext = (index) => {
    if (index >= candidatePaths.length) {
      // If requesting an HTML or SPA page, try dist/index.html fallback
      const distIndex = path.join(distDir, 'index.html');
      if (fs.existsSync(distIndex)) {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        fs.createReadStream(distIndex).pipe(res);
        return;
      }
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found');
      return;
    }

    const filePath = candidatePaths[index];
    fs.stat(filePath, (err, stats) => {
      if (!err && stats.isFile()) {
        const ext = path.extname(filePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';
        res.writeHead(200, { 'Content-Type': contentType });
        fs.createReadStream(filePath).pipe(res);
      } else {
        tryNext(index + 1);
      }
    });
  };

  tryNext(0);
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
