import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const html = fs.readFileSync(path.join(__dirname, '..', 'docs', 'research', 'target_decoded.html'), 'utf-8');

const webps = [
  'emEabgUGaj1mrFtUh9nCcNLOsk.webp',
  '4ABnXaFshXBVkaMyEU2NjeeqE.webp',
  'XXSw2JqvtikgOcaexTTozzVsO54.webp',
  '4fEwCxLuKCW6ZaczMzoeCElmzBg.webp',
  'K53jEm1inmwk6lcSyDVU5W7rvLM.webp',
  'FMpJMmyNTqRd8oGYputAzs8cso.webp',
  '3ez5Goty6KdEzujpWDVyu8Um6Ns.webp'
];

console.log('--- MAPPING WEBPS TO COPY ---');
for (const webp of webps) {
  const index = html.indexOf(webp);
  if (index !== -1) {
    console.log(`\n=== Asset: ${webp} (index ${index}) ===`);
    const context = html.substring(Math.max(0, index - 800), Math.min(html.length, index + 800));
    
    // Strip tags and print
    const clean = context.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    console.log(clean.substring(0, 500));
  } else {
    console.log(`\n=== Asset: ${webp} (NOT FOUND) ===`);
  }
}
