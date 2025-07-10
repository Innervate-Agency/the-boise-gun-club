#!/usr/bin/env node

/**
 * AST-Based Component Enhancement Script (2025 Best Practices)
 * 
 * Modern TypeScript AST manipulation using ts-morph for safe component enhancement.
 * Based on 2024-2025 industry best practices from ts-morph documentation and community.
 * 
 * SAFETY FEATURES:
 * - Uses proper AST parsing instead of regex
 * - Creates timestamped backups before modification
 * - Validates AST structure before changes
 * - Dry-run mode for testing
 * - Comprehensive error handling and rollback
 * - TypeScript-aware transformations
 */

const { Project, Node, SyntaxKind } = require('ts-morph');
const fs = require('fs').promises;
const path = require('path');

// Backup directory for safety
const BACKUP_DIR = path.join(__dirname, '..', '.component-backups');

// Component enhancement templates with AST-aware definitions

const componentTemplates = {
  badge: {
    cvaPattern: /badgeVariants.*=.*cva/,
    variantObjectName: 'variant',
    variants: {
      premium: '"bg-gradient-to-r from-leonard-yellow to-lahoma-orange text-black shadow-md border border-leonard-yellow/20 hover:shadow-lg hover:scale-105 transition-all duration-300 relative overflow-hidden group"',
      elite: '"bg-gradient-to-r from-leonard-yellow via-lahoma-orange to-leonard-yellow bg-[length:200%_100%] text-black shadow-lg border-2 border-leonard-yellow/30 animate-shimmer hover:shadow-xl hover:scale-110 transition-all duration-300 relative overflow-hidden group"'
    },
    requiredImports: ['cn']
  },
  
  input: {
    cvaPattern: /inputVariants.*=.*cva/,
    variantObjectName: 'variant',
    variants: {
      premium: '"border-leonard-yellow/30 focus:border-leonard-yellow focus:ring-leonard-yellow/20 bg-gradient-to-r from-background to-leonard-yellow/5 hover:border-leonard-yellow/50 transition-all duration-300 relative overflow-hidden group"',
      elite: '"border-2 border-leonard-yellow/50 focus:border-leonard-yellow focus:ring-leonard-yellow/30 bg-gradient-to-r from-background via-leonard-yellow/5 to-lahoma-orange/5 hover:border-leonard-yellow transition-all duration-300 relative overflow-hidden group"'
    },
    requiredImports: ['cn']
  },
  
  alert: {
    cvaPattern: /alertVariants.*=.*cva/,
    variantObjectName: 'variant',
    variants: {
      premium: '"border-leonard-yellow/40 bg-gradient-to-r from-leonard-yellow/10 to-lahoma-orange/10 shadow-md relative overflow-hidden group"',
      elite: '"border-2 border-leonard-yellow/60 bg-gradient-to-r from-leonard-yellow/15 to-lahoma-orange/15 shadow-lg relative overflow-hidden group"'
    },
    requiredImports: ['cn']
  },
  
  select: {
    cvaPattern: /selectTriggerVariants.*=.*cva/,
    variantObjectName: 'variant',
    variants: {
      premium: '"border-leonard-yellow/30 focus:border-leonard-yellow focus:ring-leonard-yellow/20 hover:border-leonard-yellow/50 transition-all duration-300"',
      elite: '"border-2 border-leonard-yellow/50 focus:border-leonard-yellow focus:ring-leonard-yellow/30 hover:border-leonard-yellow transition-all duration-300"'
    },
    requiredImports: ['cn']
  }
};

/**
 * Create backup directory if it doesn't exist
 */
async function ensureBackupDir() {
  try {
    await fs.mkdir(BACKUP_DIR, { recursive: true });
  } catch (error) {
    console.error('Failed to create backup directory:', error);
    throw error;
  }
}

/**
 * Create timestamped backup of component file
 */
async function createBackup(componentName, originalPath) {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const backupFileName = `${componentName}-${timestamp}.tsx.backup`;
  const backupPath = path.join(BACKUP_DIR, backupFileName);
  
  try {
    await fs.copyFile(originalPath, backupPath);
    console.log(`📦 Backup created: ${backupPath}`);
    return backupPath;
  } catch (error) {
    console.error('Failed to create backup:', error);
    throw error;
  }
}

/**
 * Validate component structure using AST analysis
 */
function validateComponentStructure(sourceFile, template) {
  const fileText = sourceFile.getFullText();
  
  // Check for CVA pattern
  if (!template.cvaPattern.test(fileText)) {
    throw new Error(`Component does not contain expected CVA pattern: ${template.cvaPattern}`);
  }
  
  // Look for existing variants
  const existingPremium = fileText.includes('premium:');
  const existingElite = fileText.includes('elite:');
  
  if (existingPremium || existingElite) {
    throw new Error(`Component already contains premium (${existingPremium}) or elite (${existingElite}) variants`);
  }
  
  // Check for variants object in AST
  const variantObjects = sourceFile.getDescendantsOfKind(SyntaxKind.ObjectLiteralExpression)
    .filter(obj => {
      const parent = obj.getParent();
      return parent && parent.getKind() === SyntaxKind.PropertyAssignment &&
             parent.getName() === 'variants';
    });
  
  if (variantObjects.length === 0) {
    throw new Error('No variants object found in component');
  }
  
  console.log('✅ Component structure validation passed');
}

/**
 * Find the variants object within a CVA call using AST navigation
 */
function findVariantsObject(sourceFile, template) {
  // Find all object literals that could be the variants object
  const objectLiterals = sourceFile.getDescendantsOfKind(SyntaxKind.ObjectLiteralExpression);
  
  for (const obj of objectLiterals) {
    const parent = obj.getParent();
    if (parent && parent.getKind() === SyntaxKind.PropertyAssignment) {
      const prop = parent;
      if (prop.getName() === 'variants') {
        // Found the variants object
        return obj;
      }
    }
  }
  
  throw new Error('Could not locate variants object in AST');
}

/**
 * Find the variant property object within the variants object
 */
function findVariantProperty(variantsObj, template) {
  const properties = variantsObj.getProperties();
  
  for (const prop of properties) {
    if (Node.isPropertyAssignment(prop) && prop.getName() === template.variantObjectName) {
      const initializer = prop.getInitializer();
      if (Node.isObjectLiteralExpression(initializer)) {
        return initializer;
      }
    }
  }
  
  throw new Error(`Could not find ${template.variantObjectName} property in variants object`);
}

/**
 * Add premium and elite variants to the variant object using AST manipulation
 */
function addVariantsToAST(sourceFile, template) {
  try {
    // Find the variants object
    const variantsObj = findVariantsObject(sourceFile, template);
    
    // Find the specific variant property (usually 'variant')
    const variantObj = findVariantProperty(variantsObj, template);
    
    // Add premium variant
    variantObj.addPropertyAssignment({
      name: 'premium',
      initializer: template.variants.premium
    });
    
    // Add elite variant  
    variantObj.addPropertyAssignment({
      name: 'elite',
      initializer: template.variants.elite
    });
    
    console.log('✅ Successfully added premium and elite variants to AST');
    
  } catch (error) {
    console.error('Failed to add variants to AST:', error);
    throw error;
  }
}

/**
 * Validate the AST modifications before saving
 */
function validateASTModifications(sourceFile, template) {
  const fileText = sourceFile.getFullText();
  
  // Check that both variants were added
  if (!fileText.includes('premium:')) {
    throw new Error('Premium variant not found in modified AST');
  }
  
  if (!fileText.includes('elite:')) {
    throw new Error('Elite variant not found in modified AST');
  }
  
  // Basic syntax validation (check for balanced braces)
  const openBraces = (fileText.match(/{/g) || []).length;
  const closeBraces = (fileText.match(/}/g) || []).length;
  
  if (openBraces !== closeBraces) {
    throw new Error(`Brace mismatch: ${openBraces} open, ${closeBraces} close`);
  }
  
  console.log('✅ AST modifications validated successfully');
}

/**
 * Main enhancement function using AST manipulation
 */
async function astEnhanceComponent(componentName, dryRun = false) {
  const componentPath = path.join(__dirname, '..', 'src', 'components', 'ui', `${componentName}.tsx`);
  
  // Validate inputs
  if (!await fs.access(componentPath).then(() => true).catch(() => false)) {
    console.log(`❌ Component ${componentName} not found at ${componentPath}`);
    return false;
  }
  
  const template = componentTemplates[componentName];
  if (!template) {
    console.log(`❌ No AST enhancement template available for ${componentName}`);
    console.log(`📋 Available templates: ${Object.keys(componentTemplates).join(', ')}`);
    return false;
  }
  
  try {
    console.log(`🔍 Analyzing ${componentName} component with AST...`);
    
    // Initialize ts-morph project
    const project = new Project({
      tsConfigFilePath: path.join(__dirname, '..', 'tsconfig.json'),
      skipAddingFilesFromTsConfig: true
    });
    
    // Add the component file
    const sourceFile = project.addSourceFileAtPath(componentPath);
    
    // Validate component structure
    validateComponentStructure(sourceFile, template);
    
    // Create backup (always, even in dry run)
    const backupPath = await createBackup(componentName, componentPath);
    
    // Perform AST modifications
    addVariantsToAST(sourceFile, template);
    
    // Validate modifications
    validateASTModifications(sourceFile, template);
    
    if (dryRun) {
      console.log(`🔬 DRY RUN: AST enhancement would be successful for ${componentName}`);
      console.log(`📊 Original length: ${sourceFile.getFullText().length} characters`);
      console.log('📊 Modifications validated via AST');
      return true;
    }
    
    // Save the modified file
    await sourceFile.save();
    console.log(`✅ Successfully enhanced ${componentName} using AST manipulation`);
    console.log(`💾 Backup available at: ${backupPath}`);
    
    return true;
    
  } catch (error) {
    console.log(`❌ AST enhancement failed for ${componentName}:`, error instanceof Error ? error.message : error);
    return false;
  }
}

/**
 * Rollback component from backup
 */
async function rollbackComponent(componentName) {
  const componentPath = path.join(__dirname, '..', 'src', 'components', 'ui', `${componentName}.tsx`);
  
  try {
    // Find the most recent backup
    const backupFiles = await fs.readdir(BACKUP_DIR);
    const componentBackups = backupFiles
      .filter(file => file.startsWith(`${componentName}-`) && file.endsWith('.tsx.backup'))
      .sort()
      .reverse();
    
    if (componentBackups.length === 0) {
      console.log(`❌ No backup found for ${componentName}`);
      return false;
    }
    
    const latestBackup = path.join(BACKUP_DIR, componentBackups[0]);
    await fs.copyFile(latestBackup, componentPath);
    console.log(`↩️  Rolled back ${componentName} from ${latestBackup}`);
    return true;
    
  } catch (error) {
    console.log(`❌ Rollback failed for ${componentName}:`, error);
    return false;
  }
}

/**
 * CLI interface following 2025 best practices
 */
async function main() {
  const args = process.argv.slice(2);
  
  // Ensure backup directory exists
  await ensureBackupDir();
  
  if (args.length === 0) {
    console.log(`
🚀 AST-Based Component Enhancement Script (2025)

Modern TypeScript AST manipulation using ts-morph for safe component enhancement.

Usage:
  node scripts/ast-enhance-components.js [component-name]     # Enhance component
  node scripts/ast-enhance-components.js --dry-run [name]    # Test enhancement
  node scripts/ast-enhance-components.js --rollback [name]   # Rollback component
  node scripts/ast-enhance-components.js --list             # List templates

Examples:
  node scripts/ast-enhance-components.js badge
  node scripts/ast-enhance-components.js --dry-run badge
  node scripts/ast-enhance-components.js --rollback badge
    `);
    return;
  }
  
  if (args[0] === '--list') {
    console.log('🚀 Available AST enhancement templates:');
    Object.entries(componentTemplates).forEach(([name, template]) => {
      console.log(`  ✅ ${name} (${template.variantObjectName} variants)`);
    });
    return;
  }
  
  if (args[0] === '--dry-run') {
    const componentName = args[1];
    if (!componentName) {
      console.log('❌ Please specify a component name for dry run');
      return;
    }
    await astEnhanceComponent(componentName, true);
    return;
  }
  
  if (args[0] === '--rollback') {
    const componentName = args[1];
    if (!componentName) {
      console.log('❌ Please specify a component name to rollback');
      return;
    }
    await rollbackComponent(componentName);
    return;
  }
  
  // Enhance specific component
  const componentName = args[0];
  const success = await astEnhanceComponent(componentName, false);
  
  if (success) {
    console.log(`\n🎉 Successfully enhanced ${componentName} using AST manipulation!`);
    console.log('💡 Next steps:');
    console.log(`  1. Test the component: npm run dev`);
    console.log(`  2. Check TypeScript: npm run type-check`);
    console.log(`  3. View in Storybook: npm run storybook`);
    console.log(`  4. Rollback if needed: node scripts/ast-enhance-components.js --rollback ${componentName}`);
  }
}

// Run the CLI if this script is executed directly
if (require.main === module) {
  main().catch(console.error);
}