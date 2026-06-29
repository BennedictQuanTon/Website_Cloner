import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const html = fs.readFileSync(path.join(__dirname, '..', 'docs', 'research', 'target_decoded.html'), 'utf-8');

const start = 530000;
const end = 750000;
const slice = html.substring(start, end);

console.log('--- HEADINGS 0 - 30 ---');
const hMatches = [...slice.matchAll(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/g)];
hMatches.slice(0, 30).forEach((m, idx) => {
  console.log(`${idx}: ${m[1].replace(/<[^>]*>/g, '').trim()} (around index ${start + m.index})`);
});

// Let's also print the images in the first part of this section (530k - 600k)
console.log('\n--- IMAGES IN PRODUCTS SECTION ---');
const imgMatches = [...html.substring(530000, 600000).matchAll(/src="([^"]+)"/g)];
const urls = [...new Set(imgMatches.map(m => m[1]))];
console.log(urls);
