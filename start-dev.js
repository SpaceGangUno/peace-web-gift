
#!/usr/bin/env node

/**
 * This is a helper script to start the development server
 * It works around the package.json limitations
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Check if node_modules exists
const nodeModulesPath = path.join(__dirname, 'node_modules');
if (!fs.existsSync(nodeModulesPath)) {
  console.log('Node modules are missing. Running npm install...');
  try {
    execSync('npm install', { stdio: 'inherit' });
    console.log('Successfully installed dependencies');
  } catch (error) {
    console.error('Failed to install dependencies:', error);
    process.exit(1);
  }
}

// Check if vite is installed
const vitePath = path.join(nodeModulesPath, '.bin', 'vite');
if (!fs.existsSync(vitePath)) {
  console.log('Vite is not installed. Running setup...');
  try {
    execSync('node setup.js', { stdio: 'inherit' });
  } catch (error) {
    console.error('Failed to run setup:', error);
    process.exit(1);
  }
}

try {
  console.log('Starting development server...');
  execSync('npx vite', { stdio: 'inherit' });
} catch (error) {
  console.error('Failed to start development server:', error);
  process.exit(1);
}
