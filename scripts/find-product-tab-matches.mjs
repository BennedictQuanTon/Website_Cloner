import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const html = fs.readFileSync(path.join(__dirname, '..', 'docs', 'research', 'target_decoded.html'), 'utf-8');

const headings = ['Process Automation', 'Healthcare', 'Marketing', 'Ecommerce', 'Development'];

console.log('--- PRODUCTS MATCHING DETAILS ---');
for (const heading of headings) {
  let index = html.indexOf(`>${heading}<`);
  if (index === -1) {
    index = html.indexOf(heading);
  }
  
  if (index !== -1) {
    console.log(`\n=== Product: ${heading} (index ${index}) ===`);
    const context = html.substring(index - 200, index + 3500);
    
    // Find all paragraphs in this context
    const pMatches = [...context.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)];
    const paras = pMatches.map(m => m[1].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()).filter(Boolean);
    console.log('Paragraphs:', paras.slice(0, 5));

    // Find images in this context
    const imgMatches = [...context.matchAll(/src="([^"]+)"/g)];
    const imgUrls = [...new Set(imgMatches.map(m => m[1]))];
    console.log('Images:', imgUrls);
  } else {
    console.log(`Product Heading "${heading}" NOT found.`);
  }
}
