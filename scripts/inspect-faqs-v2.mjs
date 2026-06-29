import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const html = fs.readFileSync(path.join(__dirname, '..', 'docs', 'research', 'target_decoded.html'), 'utf-8');

const start = 860000;
const end = 950000;
const slice = html.substring(start, end);

console.log('--- FAQ EXTENDED PARAGRAPHS ---');
const pMatches = [...slice.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)];
pMatches.forEach((m, idx) => {
  const text = m[1].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  if (text.length > 20) {
    console.log(`${idx}: ${text} (at index ${start + m.index})`);
  }
});
