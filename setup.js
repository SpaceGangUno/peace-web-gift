
const { execSync } = require('child_process');
const fs = require('fs');

console.log('Installing Vite and related dependencies...');

try {
  // Install Vite and React plugin as dev dependencies
  execSync('npm install --save-dev vite@latest @vitejs/plugin-react-swc@latest', { stdio: 'inherit' });
  console.log('Successfully installed Vite and related dependencies');
  
  // Create a simple startup script to help the user
  const content = `
#!/usr/bin/env node

/**
 * This is a helper script to start the development server
 * It works around the package.json limitations
 */

const { execSync } = require('child_process');

try {
  console.log('Starting development server...');
  execSync('npx vite', { stdio: 'inherit' });
} catch (error) {
  console.error('Failed to start development server:', error);
  process.exit(1);
}
`;

  fs.writeFileSync('start-dev.js', content);
  console.log('Created start-dev.js helper script');
  
  // Make the script executable (for Unix systems)
  try {
    fs.chmodSync('start-dev.js', 0o755);
  } catch (err) {
    // Ignore chmod errors on Windows
  }
  
  console.log('\nSetup complete!');
  console.log('To start the development server, run:');
  console.log('  node start-dev.js');
  
} catch (error) {
  console.error('Setup failed:', error);
  process.exit(1);
}
