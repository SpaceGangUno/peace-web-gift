
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Installing Vite and related dependencies...');

try {
  // Install Vite and React plugin as dev dependencies
  execSync('npm install --save-dev vite@latest @vitejs/plugin-react-swc@latest lovable-tagger@latest', { stdio: 'inherit' });
  console.log('Successfully installed Vite and related dependencies');
  
  // Create start-dev.js script
  const startDevContent = `#!/usr/bin/env node

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
`;

  fs.writeFileSync('start-dev.js', startDevContent);
  console.log('Created start-dev.js helper script');
  
  // Make the script executable (for Unix systems)
  try {
    fs.chmodSync('start-dev.js', 0o755);
  } catch (err) {
    // Ignore chmod errors on Windows
  }
  
  // Add a simple vite.config.ts if it doesn't exist
  if (!fs.existsSync('vite.config.ts')) {
    const viteConfigContent = `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    // This is required for Next.js compatibility
    "process.env": {
      NODE_ENV: mode === "production" ? "production" : "development",
      __DEV__: mode !== "production",
    },
  }
}));
`;
    fs.writeFileSync('vite.config.ts', viteConfigContent);
    console.log('Created vite.config.ts file');
  }
  
  console.log('\nSetup complete!');
  console.log('To start the development server, run:');
  console.log('  node start-dev.js');
  
} catch (error) {
  console.error('Setup failed:', error);
  process.exit(1);
}
