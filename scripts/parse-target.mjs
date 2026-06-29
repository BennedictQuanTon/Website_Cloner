import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const htmlPath = path.join(__dirname, '..', 'docs', 'research', 'target.html');
const rawHtml = fs.readFileSync(htmlPath, 'utf-8');

// Let's decode HTML entities like &quot;, &amp;, &lt;, &gt;
function decodeHtml(html) {
  return html
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#x27;/g, "'")
    .replace(/&#x2F;/g, '/');
}

const decodedHtml = decodeHtml(rawHtml);

// Save decoded HTML for easier inspection
fs.writeFileSync(path.join(__dirname, '..', 'docs', 'research', 'target_decoded.html'), decodedHtml);
console.log('Saved decoded HTML to docs/research/target_decoded.html');

// Let's search for interesting strings
const keywords = [
  'Beta Version',
  'Exceptionalities',
  'Speed',
  'Deep capabilites',
  'Control',
  'Flexibility',
  'All-in-one AI',
  'AI Agent for work',
  'Alpha Technology',
  'Enterprise data sources',
  'Multiple Products',
  'Process Automation',
  'Healthcare',
  '3 Steps to Kickstart',
  'One account, endless',
  'Choose the Agent',
  'Prompt or Set to Automation',
  'Data and privacy',
  'Trusted by customers',
  'Daniel Reyes',
  'Sarah Mitchell',
  'Priya Nair',
  'Flexible Plans',
  'Curious About Cosmoq',
  'Smart Versatile Agent',
  'Step Into COSMOQ'
];

console.log('Searching for keywords in decoded HTML:');
for (const keyword of keywords) {
  const index = decodedHtml.indexOf(keyword);
  if (index !== -1) {
    console.log(`- Found "${keyword}" at index ${index}. Snippet: ...${decodedHtml.substring(index - 50, index + 150)}...`);
  } else {
    console.log(`- Keyword "${keyword}" NOT found`);
  }
}
