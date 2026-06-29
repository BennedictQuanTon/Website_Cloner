import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const html = fs.readFileSync(path.join(__dirname, '..', 'docs', 'research', 'target_decoded.html'), 'utf-8');

const startIndex = html.indexOf('Exceptionalities');
if (startIndex !== -1) {
  console.log('--- EXCEPTIONALITIES SECTION ---');
  console.log(html.substring(startIndex - 500, startIndex + 35000));
} else {
  console.log('Could not find Exceptionalities in HTML.');
}
