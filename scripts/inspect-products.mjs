import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const html = fs.readFileSync(path.join(__dirname, '..', 'docs', 'research', 'target_decoded.html'), 'utf-8');

// Features was around 450k-530k. Let's look between 530k and 750k.
const start = 530000;
const end = 750000;
const slice = html.substring(start, end);

console.log('--- HEADINGS IN MIDDLE SECTION ---');
const hMatches = [...slice.matchAll(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/g)];
hMatches.forEach((m, idx) => {
  const text = m[1].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  if (text) {
    console.log(`${idx}: ${text} (around index ${start + m.index})`);
  }
});

console.log('\n--- PARAGRAPHS IN MIDDLE SECTION ---');
const pMatches = [...slice.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)];
pMatches.forEach((m, idx) => {
  const text = m[1].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  if (text && text.length > 15) {
    console.log(`${idx}: ${text.substring(0, 120)}... (around index ${start + m.index})`);
  }
});
