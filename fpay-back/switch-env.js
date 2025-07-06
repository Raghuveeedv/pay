const fs = require('fs');
const path = require('path');

const env = process.argv[2];

if (!env || !['dev', 'prod'].includes(env)) {
  console.log('Usage: node switch-env.js [dev|prod]');
  console.log('  dev  - Switch to development (localhost)');
  console.log('  prod - Switch to production (deployed)');
  process.exit(1);
}

const envFile = env === 'dev' ? '.env' : '.env.production';
const targetFile = '.env';

try {
  // Copy the appropriate env file
  fs.copyFileSync(envFile, targetFile);
  
  console.log(`✅ Switched to ${env === 'dev' ? 'development' : 'production'} environment`);
  console.log(`📁 Using ${envFile}`);
  
  // Show current settings
  const envContent = fs.readFileSync(targetFile, 'utf8');
  console.log('\n📋 Current settings:');
  console.log(envContent);
  
} catch (error) {
  console.error('❌ Error switching environment:', error.message);
  process.exit(1);
} 