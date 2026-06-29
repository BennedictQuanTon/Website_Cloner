import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const html = fs.readFileSync(path.join(__dirname, '..', 'docs', 'research', 'target_decoded.html'), 'utf-8');

// Footer index is near the end. Let's look from 955k to the end.
const start = 955000;
const slice = html.substring(start);

console.log('--- Footer Paragraphs and Spans ---');
const matches = [...slice.matchAll(/<p[^>]*>([\s\S]*?)<\/p>|<span[^>]*>([\s\S]*?)<\/span>/g)];
matches.forEach((m, idx) => {
  const text = (m[1] || m[2] || '').replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  if (text.length > 3) {
    console.log(`${idx}: ${text}`);
  }
});
