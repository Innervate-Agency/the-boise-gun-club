#!/usr/bin/env node

/**
 * Mass Component Enhancement Script
 * 
 * This script automatically adds Premium and Elite variants to existing
 * shadcn/ui components following our Stripe+ClickUp fusion design system.
 * 
 * Usage: node scripts/enhance-components.js [component-name]
 * Example: node scripts/enhance-components.js badge
 * Or: node scripts/enhance-components.js --all (for all components)
 */

const fs = require('fs');
const path = require('path');

// Component enhancement templates
const componentTemplates = {
  badge: {
    imports: `import { cn } from "@/lib/utils"`,
    variants: {
      premium: `"bg-gradient-to-r from-leonard-yellow to-lahoma-orange text-black shadow-md border border-leonard-yellow/20 hover:shadow-lg hover:scale-105 transition-all duration-300"`,
      elite: `"bg-gradient-to-r from-leonard-yellow via-lahoma-orange to-leonard-yellow bg-[length:200%_100%] text-black shadow-lg border-2 border-leonard-yellow/30 animate-shimmer hover:shadow-xl hover:scale-110 transition-all duration-300"`
    },
    effects: `
      {/* Premium badge glow effect */}
      {variant === 'premium' && (
        <div className="absolute inset-0 bg-gradient-to-r from-lahoma-orange/30 to-leonard-yellow/30 blur-md opacity-50 group-hover:opacity-70 transition-all duration-300 -z-10" />
      )}
      
      {/* Elite badge shimmer effect */}
      {variant === 'elite' && (
        <div className="absolute inset-0 bg-gradient-to-r from-lahoma-orange/40 to-leonard-yellow/40 blur-lg opacity-60 group-hover:opacity-80 transition-all duration-500 -z-10" />
      )}
    `
  },

  input: {
    imports: `import { cn } from "@/lib/utils"`,
    variants: {
      premium: `"border-leonard-yellow/30 focus:border-leonard-yellow focus:ring-leonard-yellow/20 bg-gradient-to-r from-background to-leonard-yellow/5 hover:border-leonard-yellow/50 transition-all duration-300"`,
      elite: `"border-2 border-leonard-yellow/50 focus:border-leonard-yellow focus:ring-leonard-yellow/30 bg-gradient-to-r from-background via-leonard-yellow/5 to-lahoma-orange/5 hover:border-leonard-yellow transition-all duration-300"`
    },
    effects: `
      {/* Premium input subtle glow */}
      {variant === 'premium' && (
        <div className="absolute inset-0 bg-leonard-yellow/10 rounded-md opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
      
      {/* Elite input enhanced glow */}
      {variant === 'elite' && (
        <div className="absolute inset-0 bg-gradient-to-r from-leonard-yellow/15 to-lahoma-orange/15 rounded-md opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
    `
  },

  select: {
    imports: `import { cn } from "@/lib/utils"`,
    variants: {
      premium: `"border-leonard-yellow/30 focus:border-leonard-yellow focus:ring-leonard-yellow/20 hover:border-leonard-yellow/50 transition-all duration-300"`,
      elite: `"border-2 border-leonard-yellow/50 focus:border-leonard-yellow focus:ring-leonard-yellow/30 hover:border-leonard-yellow transition-all duration-300"`
    },
    effects: ``
  },

  alert: {
    imports: `import { cn } from "@/lib/utils"`,
    variants: {
      premium: `"border-leonard-yellow/40 bg-gradient-to-r from-leonard-yellow/10 to-lahoma-orange/10 shadow-md"`,
      elite: `"border-2 border-leonard-yellow/60 bg-gradient-to-r from-leonard-yellow/15 to-lahoma-orange/15 shadow-lg"`
    },
    effects: ``
  },

  accordion: {
    imports: `import { cn } from "@/lib/utils"`,
    variants: {
      premium: `"border-leonard-yellow/30 bg-gradient-to-r from-background to-leonard-yellow/5 hover:from-leonard-yellow/10 hover:to-lahoma-orange/10 transition-all duration-300"`,
      elite: `"border-2 border-leonard-yellow/50 bg-gradient-to-r from-background via-leonard-yellow/10 to-lahoma-orange/10 hover:border-leonard-yellow transition-all duration-300"`
    },
    effects: ``
  },

  avatar: {
    imports: `import { cn } from "@/lib/utils"`,
    variants: {
      premium: `"ring-2 ring-leonard-yellow/30 shadow-lg hover:ring-leonard-yellow/50 hover:shadow-xl transition-all duration-300"`,
      elite: `"ring-4 ring-gradient-to-r ring-leonard-yellow/50 shadow-xl hover:ring-leonard-yellow hover:scale-105 transition-all duration-300"`
    },
    effects: `
      {/* Premium avatar glow */}
      {variant === 'premium' && (
        <div className="absolute inset-0 rounded-full bg-leonard-yellow/20 blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300" />
      )}
      
      {/* Elite avatar enhanced glow */}
      {variant === 'elite' && (
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-leonard-yellow/30 to-lahoma-orange/30 blur-md opacity-50 hover:opacity-80 transition-opacity duration-300" />
      )}
    `
  }
};

// High-priority components to enhance first
const highPriorityComponents = [
  'badge', 'input', 'select', 'alert', 'accordion', 
  'avatar', 'checkbox', 'label', 'switch', 'toggle'
];

function enhanceComponent(componentName) {
  const componentPath = path.join(__dirname, '..', 'src', 'components', 'ui', `${componentName}.tsx`);
  
  if (!fs.existsSync(componentPath)) {
    console.log(`❌ Component ${componentName} not found at ${componentPath}`);
    return false;
  }

  const template = componentTemplates[componentName];
  if (!template) {
    console.log(`❌ No enhancement template available for ${componentName}`);
    return false;
  }

  let content = fs.readFileSync(componentPath, 'utf8');
  
  // Check if already enhanced
  if (content.includes('premium:') && content.includes('elite:')) {
    console.log(`⚠️  Component ${componentName} already appears to be enhanced`);
    return false;
  }

  console.log(`🚀 Enhancing ${componentName} component...`);

  // Add imports if needed
  if (template.imports && !content.includes('import { cn }')) {
    content = content.replace(
      /import \* as React/,
      `${template.imports}\nimport * as React`
    );
  }

  // Find the variants section and add premium/elite
  const variantsMatch = content.match(/variants:\s*{([^}]+)}/s);
  if (variantsMatch) {
    const variantsContent = variantsMatch[1];
    const newVariants = variantsContent.replace(
      /(\s*})(\s*},?\s*defaultVariants)/,
      `,\n        premium: ${template.variants.premium},\n        elite: ${template.variants.elite}$1$2`
    );
    content = content.replace(variantsMatch[0], `variants: {${newVariants}}`);
  }

  // Add effects if provided
  if (template.effects && template.effects.trim()) {
    // Find the return statement and add effects before closing
    const returnMatch = content.match(/(return\s*\(\s*<[^>]+>)(.*?)(<\/[^>]+>\s*\))/s);
    if (returnMatch) {
      const newReturn = `${returnMatch[1]}${returnMatch[2]}\n      \n      ${template.effects}\n    ${returnMatch[3]}`;
      content = content.replace(returnMatch[0], newReturn);
    }
  }

  // Write the enhanced content
  fs.writeFileSync(componentPath, content);
  console.log(`✅ Successfully enhanced ${componentName}`);
  return true;
}

function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log(`
🎯 Component Enhancement Script

Usage:
  node scripts/enhance-components.js [component-name]  # Enhance specific component
  node scripts/enhance-components.js --all            # Enhance all high-priority components
  node scripts/enhance-components.js --list           # List available components

Examples:
  node scripts/enhance-components.js badge
  node scripts/enhance-components.js --all
    `);
    return;
  }

  if (args[0] === '--list') {
    console.log('📋 Available component templates:');
    Object.keys(componentTemplates).forEach(name => {
      console.log(`  - ${name}`);
    });
    console.log('\n🔥 High-priority components:');
    highPriorityComponents.forEach(name => {
      console.log(`  - ${name}`);
    });
    return;
  }

  if (args[0] === '--all') {
    console.log('🚀 Enhancing all high-priority components...\n');
    let enhanced = 0;
    
    highPriorityComponents.forEach(componentName => {
      if (enhanceComponent(componentName)) {
        enhanced++;
      }
    });
    
    console.log(`\n🎉 Enhanced ${enhanced} components successfully!`);
    console.log('💡 Next steps:');
    console.log('  1. Test the enhanced components in Storybook');
    console.log('  2. Update component stories with new variants');
    console.log('  3. Run type checking and linting');
    return;
  }

  // Enhance specific component
  const componentName = args[0];
  if (enhanceComponent(componentName)) {
    console.log(`\n🎉 Successfully enhanced ${componentName}!`);
    console.log('💡 Next steps:');
    console.log(`  1. Check src/components/ui/${componentName}.tsx`);
    console.log(`  2. Update ${componentName} Storybook story`);
    console.log('  3. Test in development environment');
  }
}

if (require.main === module) {
  main();
}

module.exports = { enhanceComponent, componentTemplates };