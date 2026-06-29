import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const html = fs.readFileSync(path.join(__dirname, '..', 'docs', 'research', 'target_decoded.html'), 'utf-8');

const index = html.indexOf('Flexibility');
if (index !== -1) {
  const context = html.substring(index - 100, index + 1500);
  console.log('--- RAW FLEXIBILITY CONTEXT ---');
  console.log(context);
} else {
  console.log('Flexibility not found');
}
