import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const html = fs.readFileSync(path.join(__dirname, '..', 'docs', 'research', 'target_decoded.html'), 'utf-8');

const images = [
  'rYyqmKb6ZW8scPMDoDnkLicukfc.png',
  'LSyUU59PqiiX3GNMxMMlFDJb8I.png',
  '7vqU2Ppdy0G0UGP9mrAcNuH6Lo.png',
  'PEUUUxYckhxt8G82fn4Y0LPz5s.png'
];

console.log('--- PRODUCTS IMAGE LOCATIONS ---');
for (const img of images) {
  const index = html.indexOf(img);
  if (index !== -1) {
    console.log(`\n=== Image: ${img} (index ${index}) ===`);
    const context = html.substring(Math.max(0, index - 1200), Math.min(html.length, index + 300));
    
    // Find headings in context
    const hMatches = [...context.matchAll(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/g)];
    const headings = hMatches.map(m => m[1].replace(/<[^>]*>/g, '').trim());
    console.log('Surrounding Headings:', headings);

    // Find framer names
    const nameMatch = context.match(/data-framer-name="([^"]+)"/g);
    const names = nameMatch ? nameMatch.map(n => n.replace('data-framer-name=', '').replace(/"/g, '')) : [];
    console.log('Surrounding Framer Names:', names);
  } else {
    console.log(`\n=== Image: ${img} (NOT FOUND) ===`);
  }
}
