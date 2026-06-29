import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const html = fs.readFileSync(path.join(__dirname, '..', 'docs', 'research', 'target_decoded.html'), 'utf-8');

let pos = html.indexOf('Flexibility');
let count = 0;
while (pos !== -1) {
  console.log(`\n=== Match #${++count} at index ${pos} ===`);
  console.log(html.substring(pos - 100, pos + 800));
  pos = html.indexOf('Flexibility', pos + 1);
}
