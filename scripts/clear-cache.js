const fs = require('fs');
const path = require('path');

const nodeModulesPath = path.join(__dirname, '..', 'node_modules');
const cachePath = path.join(nodeModulesPath, '.cache');

try {
  fs.rmdirSync(cachePath, { recursive: true });
  console.log('.cache directory inside node_modules deleted successfully.');
} catch (err) {
  console.error(`Error deleting .cache directory: ${err.message}`);
}
