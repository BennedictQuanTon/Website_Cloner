import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mappingPath = path.join(__dirname, '..', 'docs', 'research', 'assets-mapping.json');
const htmlPath = path.join(__dirname, '..', 'docs', 'research', 'target_decoded.html');

const mapping = JSON.parse(fs.readFileSync(mappingPath, 'utf-8'));
const html = fs.readFileSync(htmlPath, 'utf-8');

console.log('Mapping SVGs to their labels:');
for (const item of mapping) {
  if (item.url.endsWith('.svg') || item.url.includes('.svg?')) {
    const filename = path.basename(item.url.split('?')[0]);
    // Search around this filename in the HTML (e.g. preceding/following 200 chars)
    const index = html.indexOf(filename);
    if (index !== -1) {
      const context = html.substring(Math.max(0, index - 300), Math.min(html.length, index + 300));
      // Let's look for "data-framer-name" or similar attributes in context
      const nameMatch = context.match(/data-framer-name="([^"]+)"/g);
      const names = nameMatch ? nameMatch.map(n => n.replace('data-framer-name=', '')) : [];
      console.log(`- ${filename}: used in context with names: ${names.join(', ')}`);
    } else {
      console.log(`- ${filename}: NOT found in HTML`);
    }
  }
}
