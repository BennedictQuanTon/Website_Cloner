import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const html = fs.readFileSync(path.join(__dirname, '..', 'docs', 'research', 'target_decoded.html'), 'utf-8');

const index = html.indexOf('FEATURES');
if (index !== -1) {
  const context = html.substring(index - 500, index + 35000);
  console.log('--- FEATURES SECTION DETAILED ---');
  
  // Log all H4 and P tags in this context
  const pMatches = [...context.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)];
  pMatches.forEach((m, idx) => {
    const text = m[1].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    if (text) {
      console.log(`P${idx}: ${text}`);
    }
  });

  const hMatches = [...context.matchAll(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/g)];
  hMatches.forEach((m, idx) => {
    const text = m[1].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    if (text) {
      console.log(`H${idx}: ${text}`);
    }
  });

  // Find all images / webp
  const imgMatches = [...context.matchAll(/src="([^"]+)"/g)];
  const urls = [...new Set(imgMatches.map(m => m[1]))];
  console.log('\n--- UNIQUE IMAGES IN FEATURES ---');
  console.log(urls);
} else {
  console.log('FEATURES not found');
}
