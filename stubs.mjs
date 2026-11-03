// Writes a copy of 404.html at <path>/index.html for every path in paths.txt, so known old
// wiki links answer 200 (and pass link checkers like Crowd Supply's) before forwarding to vdbx.io.
// paths.txt = vdbx.io's redirect keys plus its page paths. Rerun after editing it: node stubs.mjs
import fs from 'node:fs';
const page = fs.readFileSync('404.html', 'utf8');
const paths = fs.readFileSync('paths.txt', 'utf8').split('\n').map((p) => p.trim().replace(/^\/+|\/+$/g, '')).filter(Boolean);
for (const p of paths) { fs.mkdirSync(p, { recursive: true }); fs.writeFileSync(`${p}/index.html`, page); }
console.log(`${paths.length} stubs`);
