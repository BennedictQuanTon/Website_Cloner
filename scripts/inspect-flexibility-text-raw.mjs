import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const html = fs.readFileSync(path.join(__dirname, '..', 'docs', 'research', 'target_decoded.html'), 'utf-8');

const idx = html.indexOf('allowing you to choose');
if (idx !== -1) {
  console.log(html.substring(idx - 20, idx + 200));
}
