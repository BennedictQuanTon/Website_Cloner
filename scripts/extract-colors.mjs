import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const htmlPath = path.join(__dirname, '..', 'docs', 'research', 'target_decoded.html');
const html = fs.readFileSync(htmlPath, 'utf-8');

// Find all CSS variable declarations like --token-xyz: ... or --xyz: ...
const cssVarRegex = /(--[\w\-]+):\s*([^;}]+)/g;
let match;
const vars = {};

while ((match = cssVarRegex.exec(html)) !== null) {
  vars[match[1]] = match[2].trim();
}

console.log(`Found ${Object.keys(vars).length} CSS variables.`);

// Filter for tokens or variables that look like colors
const colorVars = {};
for (const [key, val] of Object.entries(vars)) {
  if (val.includes('rgb') || val.includes('#') || val.includes('hsl') || key.includes('color') || key.includes('token')) {
    colorVars[key] = val;
  }
}

console.log('Sample color variables:');
console.log(JSON.stringify(colorVars, null, 2).substring(0, 1000));

fs.writeFileSync(path.join(__dirname, '..', 'docs', 'research', 'design-tokens.json'), JSON.stringify(colorVars, null, 2));
console.log('Saved to docs/research/design-tokens.json');
