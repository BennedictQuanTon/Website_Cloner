import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const html = fs.readFileSync(path.join(__dirname, '..', 'docs', 'research', 'target_decoded.html'), 'utf-8');

const keywords = ['Speed', 'Deep capabilites', 'Control', 'Flexibility'];

for (const kw of keywords) {
  const idx = html.indexOf(`data-framer-name="${kw}"`);
  if (idx !== -1) {
    console.log(`\n=== Found ${kw} Section ===`);
    const sectionHtml = html.substring(idx, idx + 5000);
    // Find all images in this sectionHtml
    const imgMatches = [...sectionHtml.matchAll(/src="([^"]+)"/g)];
    const urls = imgMatches.map(m => m[1]);
    console.log('Image URLs:', urls);

    // Find any titles or text
    const textMatches = [...sectionHtml.matchAll(/<h4[^>]*>([\s\S]*?)<\/h4>/g)];
    const titles = textMatches.map(m => m[1].replace(/<[^>]*>/g, '').trim());
    console.log('Titles (H4):', titles);

    const descMatches = [...sectionHtml.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)];
    const descs = descMatches.map(m => m[1].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim());
    console.log('Descriptions (P):', descs);
  } else {
    // If not found with data-framer-name, search simple index
    const simpleIdx = html.indexOf(kw);
    if (simpleIdx !== -1) {
      console.log(`\n=== Found ${kw} Section (Simple Index) ===`);
      const sectionHtml = html.substring(simpleIdx - 200, simpleIdx + 3000);
      const imgMatches = [...sectionHtml.matchAll(/src="([^"]+)"/g)];
      const urls = imgMatches.map(m => m[1]);
      console.log('Image URLs:', urls);

      const textMatches = [...sectionHtml.matchAll(/<h4[^>]*>([\s\S]*?)<\/h4>/g)];
      const titles = textMatches.map(m => m[1].replace(/<[^>]*>/g, '').trim());
      console.log('Titles (H4):', titles);

      const descMatches = [...sectionHtml.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)];
      const descs = descMatches.map(m => m[1].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim());
      console.log('Descriptions (P):', descs);
    }
  }
}
