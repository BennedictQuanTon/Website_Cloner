import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const html = fs.readFileSync(path.join(__dirname, '..', 'docs', 'research', 'target_decoded.html'), 'utf-8');

const start = 935000;
const end = 970000;
const slice = html.substring(start, end);

console.log('--- Bottom CTA Headings ---');
const hMatches = [...slice.matchAll(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/g)];
hMatches.forEach((m, idx) => {
  console.log(`${idx}: ${m[1].replace(/<[^>]*>/g, '').trim()}`);
});

console.log('\n--- Bottom CTA Paragraphs ---');
const pMatches = [...slice.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)];
pMatches.forEach((m, idx) => {
  const text = m[1].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  if (text.length > 10) {
    console.log(`${idx}: ${text}`);
  }
});

console.log('\n--- Bottom CTA Images ---');
const imgMatches = [...slice.matchAll(/src="([^"]+)"/g)];
const urls = [...new Set(imgMatches.map(m => m[1]))];
console.log(urls);
