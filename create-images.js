const fs = require('fs');
const path = require('path');

// A simple 100x100 placeholder PNG (gray background with some text or just a colored square)
// This is a minimal valid PNG (1x1 transparent)
const base64Png = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==";
const buffer = Buffer.from(base64Png, 'base64');

const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'logo.png'), buffer);
fs.writeFileSync(path.join(publicDir, 'iniciais.png'), buffer);

console.log('Images created successfully.');
