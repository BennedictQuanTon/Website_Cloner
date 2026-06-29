import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const html = fs.readFileSync(path.join(__dirname, '..', 'docs', 'research', 'target_decoded.html'), 'utf-8');

const start = 740000;
const end = 860000;
const slice = html.substring(start, end);

// Let's search for dollar sign followed by numbers
const priceMatches = [...slice.matchAll(/\$[0-9]+/g)];
console.log('--- ALL PRICE VALUES FOUND ---');
priceMatches.forEach(m => {
  console.log(`Match: ${m[0]} at index ${start + m.index}`);
});
