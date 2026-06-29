import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const html = fs.readFileSync(path.join(__dirname, '..', 'docs', 'research', 'target_decoded.html'), 'utf-8');

const index = html.indexOf('Simplify, accelerate, and transform');
if (index !== -1) {
  const context = html.substring(index - 1000, index + 35000);
  console.log('--- CORRECT FEATURES SECTION ---');
  
  // Find all paragraphs
  const pMatches = [...context.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)];
  pMatches.forEach((m, idx) => {
    const text = m[1].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    if (text) {
      console.log(`P${idx}: ${text}`);
    }
  });

  // Find all headings
  const hMatches = [...context.matchAll(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/g)];
  hMatches.forEach((m, idx) => {
    const text = m[1].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    if (text) {
      console.log(`H${idx}: ${text}`);
    }
  });

  // Find all images
  const imgMatches = [...context.matchAll(/src="([^"]+)"/g)];
  const urls = [...new Set(imgMatches.map(m => m[1]))];
  console.log('\n--- IMAGES ---');
  console.log(urls);
} else {
  console.log('Keyword not found');
}
