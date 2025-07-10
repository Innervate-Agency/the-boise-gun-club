#!/usr/bin/env node

/**
 * SAFE Component Enhancement Script
 * 
 * This script safely adds Premium and Elite variants to existing
 * shadcn/ui components with proper validation and backup mechanisms.
 * 
 * SAFETY FEATURES:
 * - Creates backups before modification
 * - Validates component structure before changes
 * - Dry-run mode for testing
 * - Detailed logging and rollback capability
 */

const fs = require('fs');
const path = require('path');

// Backup directory
const BACKUP_DIR = path.join(__dirname, '..', '.component-backups');

// Enhanced safety templates (more conservative)
const componentTemplates = {
  badge: {
    checkPattern: /badgeVariants.*cva/s,
    variantNames: ['premium', 'elite'],
    variants: {
      premium: '"bg-gradient-to-r from-leonard-yellow to-lahoma-orange text-black shadow-md border border-leonard-yellow/20 hover:shadow-lg hover:scale-105 transition-all duration-300 relative overflow-hidden group"',
      elite: '"bg-gradient-to-r from-leonard-yellow via-lahoma-orange to-leonard-yellow bg-[length:200%_100%] text-black shadow-lg border-2 border-leonard-yellow/30 animate-shimmer hover:shadow-xl hover:scale-110 transition-all duration-300 relative overflow-hidden group"'
    }
  },
  
  input: {
    checkPattern: /inputVariants.*cva/s,
    variantNames: ['premium', 'elite'],
    variants: {
      premium: '"border-leonard-yellow/30 focus:border-leonard-yellow focus:ring-leonard-yellow/20 bg-gradient-to-r from-background to-leonard-yellow/5 hover:border-leonard-yellow/50 transition-all duration-300 relative overflow-hidden group"',
      elite: '"border-2 border-leonard-yellow/50 focus:border-leonard-yellow focus:ring-leonard-yellow/30 bg-gradient-to-r from-background via-leonard-yellow/5 to-lahoma-orange/5 hover:border-leonard-yellow transition-all duration-300 relative overflow-hidden group"'
    }
  },
  
  alert: {
    checkPattern: /alertVariants.*cva/s,
    variantNames: ['premium', 'elite'],
    variants: {
      premium: '"border-leonard-yellow/40 bg-gradient-to-r from-leonard-yellow/10 to-lahoma-orange/10 shadow-md relative overflow-hidden group"',
      elite: '"border-2 border-leonard-yellow/60 bg-gradient-to-r from-leonard-yellow/15 to-lahoma-orange/15 shadow-lg relative overflow-hidden group"'
    }
  }
};

// Create backup directory if it doesn't exist
function ensureBackupDir() {
  if (!fs.existsSync(BACKUP_DIR)) {
    fs.mkdirSync(BACKUP_DIR, { recursive: true });
  }
}

// Create backup of component file
function createBackup(componentName, originalPath) {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const backupFileName = `${componentName}-${timestamp}.tsx.backup`;
  const backupPath = path.join(BACKUP_DIR, backupFileName);
  
  fs.copyFileSync(originalPath, backupPath);
  console.log(`📦 Backup created: ${backupPath}`);
  return backupPath;
}

// Validate component structure
function validateComponent(content, template) {
  // Check if component follows expected pattern
  if (!template.checkPattern.test(content)) {
    throw new Error('Component does not match expected structure pattern');
  }
  
  // Check if variants already exist
  for (const variantName of template.variantNames) {
    if (content.includes(`${variantName}:`)) {
      throw new Error(`Variant '${variantName}' already exists`);
    }
  }
  
  // Check for variants object
  if (!content.includes('variants:')) {
    throw new Error('No variants object found');
  }
  
  return true;
}

// Safe variant injection using conservative string replacement
function injectVariants(content, template) {
  // Find the last variant in the variants object
  const variantsMatch = content.match(/variants:\s*{([^}]+)}/s);
  if (!variantsMatch) {
    throw new Error('Could not locate variants object');
  }
  
  const variantsContent = variantsMatch[1];
  
  // Find the last property in variants (look for the last comma or property)
  const lines = variantsContent.split('\n');
  let insertIndex = -1;
  
  for (let i = lines.length - 1; i >= 0; i--) {
    if (lines[i].trim() && !lines[i].trim().startsWith('//')) {
      insertIndex = i;
      break;
    }
  }
  
  if (insertIndex === -1) {
    throw new Error('Could not find insertion point in variants');
  }
  
  // Add comma to last line if it doesn't have one
  if (!lines[insertIndex].trim().endsWith(',')) {
    lines[insertIndex] = lines[insertIndex] + ',';
  }
  
  // Add new variants
  const premiumVariant = `        premium: ${template.variants.premium},`;
  const eliteVariant = `        elite: ${template.variants.elite}`;
  
  lines.splice(insertIndex + 1, 0, premiumVariant, eliteVariant);
  
  const newVariantsContent = lines.join('\n');
  const newContent = content.replace(variantsMatch[0], `variants: {${newVariantsContent}}`);
  
  return newContent;
}

// Validate the result
function validateResult(originalContent, newContent, componentName) {
  // Basic sanity checks
  const originalLines = originalContent.split('\n').length;
  const newLines = newContent.split('\n').length;
  
  if (newLines <= originalLines) {
    throw new Error('Enhanced content is not longer than original - possible corruption');
  }
  
  if (!newContent.includes('premium:') || !newContent.includes('elite:')) {
    throw new Error('New variants not found in enhanced content');
  }
  
  // Check for syntax errors (basic)
  const braceCount = (newContent.match(/{/g) || []).length - (newContent.match(/}/g) || []).length;
  if (braceCount !== 0) {
    throw new Error('Brace mismatch detected - possible syntax error');
  }
  
  console.log(`✅ Validation passed for ${componentName}`);
  return true;
}

// Main enhancement function with safety checks
function safeEnhanceComponent(componentName, dryRun = false) {
  const componentPath = path.join(__dirname, '..', 'src', 'components', 'ui', `${componentName}.tsx`);
  
  // Check if file exists
  if (!fs.existsSync(componentPath)) {
    console.log(`❌ Component ${componentName} not found at ${componentPath}`);
    return false;
  }
  
  // Check if we have a template for this component
  const template = componentTemplates[componentName];
  if (!template) {
    console.log(`❌ No safe enhancement template available for ${componentName}`);
    console.log(`📋 Available templates: ${Object.keys(componentTemplates).join(', ')}`);
    return false;
  }
  
  try {
    console.log(`🔍 Analyzing ${componentName} component...`);
    
    // Read original content
    const originalContent = fs.readFileSync(componentPath, 'utf8');
    
    // Validate component structure
    validateComponent(originalContent, template);
    console.log(`✅ Component structure validation passed`);
    
    // Create backup (always, even in dry run)
    const backupPath = createBackup(componentName, componentPath);
    
    // Perform enhancement
    const enhancedContent = injectVariants(originalContent, template);
    
    // Validate result
    validateResult(originalContent, enhancedContent, componentName);
    
    if (dryRun) {
      console.log(`🔬 DRY RUN: Enhancement would be successful for ${componentName}`);
      console.log(`📊 Original lines: ${originalContent.split('\n').length}`);
      console.log(`📊 Enhanced lines: ${enhancedContent.split('\n').length}`);
      return true;
    }
    
    // Write enhanced content
    fs.writeFileSync(componentPath, enhancedContent);
    console.log(`✅ Successfully enhanced ${componentName}`);
    console.log(`💾 Backup available at: ${backupPath}`);
    
    return true;
    
  } catch (error) {
    console.log(`❌ Enhancement failed for ${componentName}: ${error.message}`);
    return false;
  }
}

// Rollback function
function rollbackComponent(componentName) {
  const componentPath = path.join(__dirname, '..', 'src', 'components', 'ui', `${componentName}.tsx`);
  
  // Find the most recent backup
  const backupFiles = fs.readdirSync(BACKUP_DIR)
    .filter(file => file.startsWith(`${componentName}-`) && file.endsWith('.tsx.backup'))
    .sort()
    .reverse();
  
  if (backupFiles.length === 0) {
    console.log(`❌ No backup found for ${componentName}`);
    return false;
  }
  
  const latestBackup = path.join(BACKUP_DIR, backupFiles[0]);
  fs.copyFileSync(latestBackup, componentPath);
  console.log(`↩️  Rolled back ${componentName} from ${latestBackup}`);
  return true;
}

// Main CLI function
function main() {
  const args = process.argv.slice(2);
  
  // Ensure backup directory exists
  ensureBackupDir();
  
  if (args.length === 0) {
    console.log(`
🛡️  SAFE Component Enhancement Script

Usage:
  node scripts/safe-enhance-components.js [component-name]     # Enhance specific component
  node scripts/safe-enhance-components.js --dry-run [name]    # Test enhancement without changes
  node scripts/safe-enhance-components.js --rollback [name]   # Rollback component to backup
  node scripts/safe-enhance-components.js --list             # List available templates

Examples:
  node scripts/safe-enhance-components.js badge
  node scripts/safe-enhance-components.js --dry-run badge
  node scripts/safe-enhance-components.js --rollback badge
    `);
    return;
  }
  
  if (args[0] === '--list') {
    console.log('🛡️  Available safe enhancement templates:');
    Object.keys(componentTemplates).forEach(name => {
      console.log(`  ✅ ${name}`);
    });
    return;
  }
  
  if (args[0] === '--dry-run') {
    const componentName = args[1];
    if (!componentName) {
      console.log('❌ Please specify a component name for dry run');
      return;
    }
    safeEnhanceComponent(componentName, true);
    return;
  }
  
  if (args[0] === '--rollback') {
    const componentName = args[1];
    if (!componentName) {
      console.log('❌ Please specify a component name to rollback');
      return;
    }
    rollbackComponent(componentName);
    return;
  }
  
  // Enhance specific component
  const componentName = args[0];
  if (safeEnhanceComponent(componentName, false)) {
    console.log(`\n🎉 Successfully enhanced ${componentName}!`);
    console.log('💡 Next steps:');
    console.log(`  1. Test the component: npm run dev`);
    console.log(`  2. Check TypeScript: npm run type-check`);
    console.log(`  3. Rollback if needed: node scripts/safe-enhance-components.js --rollback ${componentName}`);
  }
}

if (require.main === module) {
  main();
}

module.exports = { safeEnhanceComponent, rollbackComponent, componentTemplates };