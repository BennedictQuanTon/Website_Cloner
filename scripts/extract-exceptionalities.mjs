import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const html = fs.readFileSync(path.join(__dirname, '..', 'docs', 'research', 'target_decoded.html'), 'utf-8');

const keywords = ['Speed', 'Deep capabilites', 'Control', 'Flexibility'];

console.log('EXTRACTED EXCEPTIONALITIES INFO (v2):');
for (const kw of keywords) {
  let idx = html.indexOf(kw);
  if (idx !== -1) {
    console.log(`\n=== ${kw} ===`);
    const slice = html.substring(idx, idx + 1200);
    // Find all matches for text inside paragraph tags in this slice
    const pMatches = [...slice.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)];
    pMatches.forEach((m, i) => {
      const clean = m[1].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
      if (clean) {
        console.log(`P${i+1}: ${clean}`);
      }
    });
    // Let's also print H4 or div text if no paragraphs are matched
    if (pMatches.length === 0) {
      console.log('Raw Slice:', slice.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().substring(0, 300));
    }
  }
}
