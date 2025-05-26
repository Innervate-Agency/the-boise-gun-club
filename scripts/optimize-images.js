#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Check if sharp is available
let sharp;
try {
  sharp = require('sharp');
} catch (error) {
  console.log('Sharp not found. Installing...');
  execSync('npm install sharp --save-dev', { stdio: 'inherit' });
  sharp = require('sharp');
}

const IMAGES_DIR = path.join(__dirname, '../public/images');
const MAX_WIDTH = 1920;
const MAX_HEIGHT = 1080;
const QUALITY = 80;

async function optimizeImage(inputPath, outputPath) {
  try {
    const stats = fs.statSync(inputPath);
    const originalSize = stats.size;
    
    await sharp(inputPath)
      .resize(MAX_WIDTH, MAX_HEIGHT, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ quality: QUALITY })
      .toFile(outputPath);
    
    const newStats = fs.statSync(outputPath);
    const newSize = newStats.size;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ ${path.basename(inputPath)} -> ${path.basename(outputPath)}`);
    console.log(`   ${(originalSize / 1024 / 1024).toFixed(1)}MB -> ${(newSize / 1024 / 1024).toFixed(1)}MB (${savings}% smaller)`);
    
    return { originalSize, newSize, savings: parseFloat(savings) };
  } catch (error) {
    console.error(`❌ Failed to optimize ${inputPath}:`, error.message);
    return null;
  }
}

async function optimizeDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let totalOriginal = 0;
  let totalNew = 0;
  let optimizedCount = 0;
  
  for (const item of items) {
    const itemPath = path.join(dirPath, item);
    const stat = fs.statSync(itemPath);
    
    if (stat.isDirectory()) {
      const subResults = await optimizeDirectory(itemPath);
      totalOriginal += subResults.totalOriginal;
      totalNew += subResults.totalNew;
      optimizedCount += subResults.optimizedCount;
    } else if (stat.isFile() && /\.(jpg|jpeg|png)$/i.test(item)) {
      const outputPath = itemPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      
      // Skip if WebP version already exists and is newer
      if (fs.existsSync(outputPath)) {
        const outputStat = fs.statSync(outputPath);
        if (outputStat.mtime > stat.mtime) {
          console.log(`⏭️  Skipping ${item} (WebP version is newer)`);
          continue;
        }
      }
      
      const result = await optimizeImage(itemPath, outputPath);
      if (result) {
        totalOriginal += result.originalSize;
        totalNew += result.newSize;
        optimizedCount++;
      }
    }
  }
  
  return { totalOriginal, totalNew, optimizedCount };
}

async function main() {
  console.log('🖼️  Starting image optimization...\n');
  
  const results = await optimizeDirectory(IMAGES_DIR);
  
  console.log('\n📊 Optimization Summary:');
  console.log(`   Files optimized: ${results.optimizedCount}`);
  console.log(`   Original total: ${(results.totalOriginal / 1024 / 1024).toFixed(1)}MB`);
  console.log(`   Optimized total: ${(results.totalNew / 1024 / 1024).toFixed(1)}MB`);
  console.log(`   Total savings: ${((results.totalOriginal - results.totalNew) / results.totalOriginal * 100).toFixed(1)}%`);
  
  console.log('\n💡 Next steps:');
  console.log('   1. Update your components to use .webp versions');
  console.log('   2. Add fallbacks for older browsers');
  console.log('   3. Consider removing original large files after testing');
}

main().catch(console.error); 