import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const html = fs.readFileSync(path.join(__dirname, '..', 'docs', 'research', 'target_decoded.html'), 'utf-8');

const tabKeywords = [
  { tab: 'Usage', search: 'AI Agent for work' },
  { tab: 'Technology', search: 'Alpha Technology' },
  { tab: 'Data', search: 'Enterprise data sources' }
];

console.log('--- FEATURES TABS EXTRACTED ---');
for (const item of tabKeywords) {
  const index = html.indexOf(item.search);
  if (index !== -1) {
    console.log(`\n=== TAB: ${item.tab} (found via "${item.search}" at index ${index}) ===`);
    const context = html.substring(index - 100, index + 3000);
    
    // Print all headings and paragraphs
    const hMatches = [...context.matchAll(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/g)];
    const headings = hMatches.map(m => m[1].replace(/<[^>]*>/g, '').trim());
    console.log('Headings:', headings);

    const pMatches = [...context.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)];
    const paragraphs = pMatches.map(m => m[1].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim());
    console.log('Paragraphs:', paragraphs);

    // Find images
    const imgMatches = [...context.matchAll(/src="([^"]+)"/g)];
    const imgUrls = [...new Set(imgMatches.map(m => m[1]))];
    console.log('Images:', imgUrls);
  } else {
    console.log(`\n=== TAB: ${item.tab} (Keyword "${item.search}" NOT found) ===`);
  }
}
