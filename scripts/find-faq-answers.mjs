import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const html = fs.readFileSync(path.join(__dirname, '..', 'docs', 'research', 'target_decoded.html'), 'utf-8');

const questions = [
  'What is COSMOQ?',
  'How are AI Agents different from automation tools?',
  'Can COSMOQ integrate with our existing systems?',
  'Is COSMOQ secure for enterprise use?'
];

console.log('--- FAQ DETAILS (RAW TEXT) ---');
for (const q of questions) {
  const index = html.indexOf(q);
  if (index !== -1) {
    console.log(`\n=== Question: ${q} ===`);
    const slice = html.substring(index, index + 1000);
    const cleanText = slice
      .replace(/<[^>]*>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    console.log(cleanText.substring(0, 400));
  } else {
    console.log(`Question "${q}" NOT found.`);
  }
}
