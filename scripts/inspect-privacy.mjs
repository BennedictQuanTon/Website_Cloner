import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const html = fs.readFileSync(path.join(__dirname, '..', 'docs', 'research', 'target_decoded.html'), 'utf-8');

const start = 660000;
const end = 678000;
const slice = html.substring(start, end);

console.log('--- DATA AND PRIVACY HEADINGS ---');
const hMatches = [...slice.matchAll(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/g)];
hMatches.forEach((m, idx) => {
  console.log(`${idx}: ${m[1].replace(/<[^>]*>/g, '').trim()}`);
});

console.log('\n--- DATA AND PRIVACY PARAGRAPHS ---');
const pMatches = [...slice.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)];
pMatches.forEach((m, idx) => {
  console.log(`${idx}: ${m[1].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()}`);
});

console.log('\n--- DATA AND PRIVACY IMAGES ---');
const imgMatches = [...slice.matchAll(/src="([^"]+)"/g)];
const urls = [...new Set(imgMatches.map(m => m[1]))];
console.log(urls);
