import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const html = fs.readFileSync(path.join(__dirname, '..', 'docs', 'research', 'target_decoded.html'), 'utf-8');

console.log('--- CONTROL TEXT DETECT ---');
const cIdx = html.indexOf('The power of a standardized platform');
if (cIdx !== -1) {
  console.log(html.substring(cIdx - 100, cIdx + 500).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' '));
}

console.log('\n--- FLEXIBILITY TEXT DETECT ---');
const fIdx = html.indexOf('Our design approach is ecosystem agnostic');
if (fIdx !== -1) {
  console.log(html.substring(fIdx - 100, fIdx + 500).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' '));
}
