import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const html = fs.readFileSync(path.join(__dirname, '..', 'docs', 'research', 'target_decoded.html'), 'utf-8');

const index = html.indexOf('Exceptionalities');
if (index !== -1) {
  const sectionHtml = html.substring(index, index + 100000);
  
  // Find all text inside headers <h1...h6>
  const hMatches = [...sectionHtml.matchAll(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/g)];
  console.log('--- ALL HEADINGS IN EXCEPTIONALITIES SECTION ---');
  hMatches.forEach((m, idx) => {
    const text = m[1].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    if (text) {
      console.log(`${idx}: ${text}`);
    }
  });

  // Find all text inside paragraphs <p>
  const pMatches = [...sectionHtml.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)];
  console.log('\n--- ALL PARAGRAPHS IN EXCEPTIONALITIES SECTION ---');
  pMatches.forEach((m, idx) => {
    const text = m[1].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    if (text) {
      console.log(`${idx}: ${text}`);
    }
  });
} else {
  console.log('Exceptionalities not found');
}
