import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TARGET_URL = 'https://cosmoq.framer.website';
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function main() {
  console.log(`Fetching HTML from ${TARGET_URL}...`);
  try {
    const response = await fetch(TARGET_URL);
    const html = await response.text();
    
    // Write HTML to a temp file to inspect if needed
    fs.writeFileSync(path.join(__dirname, '..', 'docs', 'research', 'target.html'), html);
    console.log('Saved raw target.html to docs/research/target.html');

    // Find all image URLs (Framer assets are usually on framerusercontent.com)
    // Regex matches URLs like https://framerusercontent.com/images/xyz.png, https://framerusercontent.com/images/xyz.svg, etc.
    const urlRegex = /https:\/\/framerusercontent\.com\/(?:images|assets)\/[a-zA-Z0-9_\-\.\/]+/g;
    const urls = [...new Set(html.match(urlRegex) || [])];
    
    console.log(`Found ${urls.length} unique asset URLs on the page.`);
    
    // Also scan for other assets in srcset, src, etc.
    const imgSrcRegex = /src="([^"]+)"|src='([^']+)'|srcset="([^"]+)"|srcset='([^']+)'/g;
    let match;
    const additionalUrls = [];
    while ((match = imgSrcRegex.exec(html)) !== null) {
      const val = match[1] || match[2] || match[3] || match[4];
      if (val) {
        // Split by whitespace or comma for srcset
        const parts = val.split(/[\s,]+/);
        for (const part of parts) {
          if (part.startsWith('http')) {
            additionalUrls.push(part);
          } else if (part.startsWith('//')) {
            additionalUrls.push('https:' + part);
          }
        }
      }
    }
    
    const allUrls = [...new Set([...urls, ...additionalUrls])].filter(url => {
      // Keep only images/videos/svgs
      const ext = path.extname(url.split('?')[0]);
      return ['.png', '.jpg', '.jpeg', '.svg', '.webp', '.gif', '.mp4', '.webm'].includes(ext.toLowerCase()) || url.includes('/images/');
    });
    
    console.log(`Filtered down to ${allUrls.length} image/video/SVG URLs.`);
    
    const downloadedFiles = [];
    for (let i = 0; i < allUrls.length; i++) {
      const url = allUrls[i];
      try {
        const cleanUrl = url.split('?')[0];
        let ext = path.extname(cleanUrl);
        if (!ext) {
          // Guess extension if it is from framerusercontent.com/images
          if (url.includes('/images/')) {
            ext = '.webp'; // Framer serves webp mostly
          } else {
            ext = '.png';
          }
        }
        
        // Generate a clean local filename from the URL hash or original name
        const urlObj = new URL(url);
        const nameParts = urlObj.pathname.split('/');
        let baseName = nameParts[nameParts.length - 1];
        if (!baseName.endsWith(ext)) {
          baseName = baseName + ext;
        }
        
        // Limit filename length
        if (baseName.length > 50) {
          baseName = baseName.slice(-50);
        }
        
        const localPath = path.join(OUTPUT_DIR, baseName);
        
        console.log(`[${i+1}/${allUrls.length}] Downloading ${url} to public/images/${baseName}...`);
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`HTTP status ${res.status}`);
        }
        
        const buffer = await res.arrayBuffer();
        fs.writeFileSync(localPath, Buffer.from(buffer));
        downloadedFiles.push({ url, localPath: `/images/${baseName}` });
      } catch (err) {
        console.error(`Failed to download ${url}: ${err.message}`);
      }
    }
    
    // Save mapping to a file for reference
    fs.writeFileSync(
      path.join(__dirname, '..', 'docs', 'research', 'assets-mapping.json'), 
      JSON.stringify(downloadedFiles, null, 2)
    );
    console.log('Saved assets-mapping.json');
    console.log('Asset download completed.');
  } catch (err) {
    console.error('Fatal error in main script:', err);
  }
}

main();
