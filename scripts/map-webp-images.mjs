import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const html = fs.readFileSync(path.join(__dirname, '..', 'docs', 'research', 'target_decoded.html'), 'utf-8');

// Find all matches for framer images URLs
const imgRegex = /https:\/\/framerusercontent\.com\/images\/([^"?\s>]+)/g;
let match;
const imgToNames = {};

while ((match = imgRegex.exec(html)) !== null) {
  const filename = match[1];
  const index = match.index;
  
  // Find names in surrounding HTML (500 chars before, 100 chars after)
  const surrounding = html.substring(Math.max(0, index - 500), Math.min(html.length, index + 200));
  const nameMatch = surrounding.match(/data-framer-name="([^"]+)"/g);
  const names = nameMatch ? nameMatch.map(n => n.replace('data-framer-name=', '').replace(/"/g, '')) : [];
  
  if (!imgToNames[filename]) {
    imgToNames[filename] = [];
  }
  names.forEach(name => {
    if (!imgToNames[filename].includes(name)) {
      imgToNames[filename].push(name);
    }
  });
}

console.log('--- IMAGE TO FRAMER SECTION MAPPING ---');
for (const [img, sections] of Object.entries(imgToNames)) {
  console.log(`- ${img}: used in sections: [${sections.join(', ')}]`);
}
