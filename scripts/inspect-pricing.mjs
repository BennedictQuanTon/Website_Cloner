import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const html = fs.readFileSync(path.join(__dirname, '..', 'docs', 'research', 'target_decoded.html'), 'utf-8');

// Testimonials ended around 740k. Let's look between 740k and 860k.
const start = 740000;
const end = 860000;
const slice = html.substring(start, end);

console.log('--- PRICING HEADINGS ---');
const hMatches = [...slice.matchAll(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/g)];
hMatches.forEach((m, idx) => {
  console.log(`${idx}: ${m[1].replace(/<[^>]*>/g, '').trim()}`);
});

console.log('\n--- PRICING PARAGRAPHS ---');
const pMatches = [...slice.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)];
pMatches.forEach((m, idx) => {
  const text = m[1].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  if (text && text.length > 5) {
    console.log(`${idx}: ${text}`);
  }
});
