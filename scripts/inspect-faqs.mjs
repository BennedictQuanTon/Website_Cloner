import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const html = fs.readFileSync(path.join(__dirname, '..', 'docs', 'research', 'target_decoded.html'), 'utf-8');

// FAQs are usually after pricing (approx index 830k - 930k). Let's search from 830k.
const start = 830000;
const end = 930000;
const slice = html.substring(start, end);

console.log('--- FAQ QUESTIONS & ANSWERS ---');
// Let's find matches for paragraph or heading tags containing question/answer texts
const pMatches = [...slice.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)];
pMatches.forEach((m, idx) => {
  const text = m[1].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  if (text.endsWith('?') || text.length > 30) {
    console.log(`${idx}: ${text}`);
  }
});
