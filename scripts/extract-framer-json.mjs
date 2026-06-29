import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const html = fs.readFileSync(path.join(__dirname, '..', 'docs', 'research', 'target_decoded.html'), 'utf-8');

// Find all occurrences of the questions and check their surrounding characters in detail (raw)
const q = "What is COSMOQ?";
let idx = html.indexOf(q);
while (idx !== -1) {
  console.log(`\n=== Found "${q}" at index ${idx} ===`);
  const rawContext = html.substring(idx - 100, idx + 4000);
  console.log(rawContext);
  idx = html.indexOf(q, idx + 1);
}
