import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const html = fs.readFileSync(path.join(__dirname, '..', 'docs', 'research', 'target_decoded.html'), 'utf-8');

function cleanAndLog(keyword, size = 4000) {
  const index = html.indexOf(keyword);
  if (index !== -1) {
    console.log(`\n=== KEYWORD: ${keyword} ===`);
    const slice = html.substring(index - 200, index + size);
    
    // Log raw text with tags replaced by spaces
    const cleanText = slice
      .replace(/<[^>]*>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    console.log(cleanText.substring(0, 1000));

    // Log image sources
    const imgUrls = [...slice.matchAll(/src="([^"]+)"/g)].map(m => m[1]);
    console.log('Images in slice:', [...new Set(imgUrls)]);
  } else {
    console.log(`Keyword "${keyword}" not found.`);
  }
}

cleanAndLog('Multi-Agent');
cleanAndLog('SharePoint');
