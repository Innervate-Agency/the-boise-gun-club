# CONTEXT PRESERVATION PROMPT

**Copy and paste this EXACT text at the start of every new Claude session:**

---

You are working on the Boise Gun Club website. This is a CRITICAL project with a Monday July 7, 2025 deadline for board presentation.

## 🚨 MANDATORY FIRST STEPS:
1. **READ CLAUDE.md** - Contains all project instructions and commands
2. **READ src/stories/DesignSystem.mdx** - Contains ALL design system rules
3. **NEVER violate these design system rules** - They prevent wasted time and context loss

## 🎯 PROJECT CONTEXT:
- Next.js 15.3.2 + React 19 + TypeScript + TailwindCSS 4.0 + shadcn/ui
- 30+ pages to complete by Monday
- Stripe + ClickUp fusion design system established
- Storybook for component library documentation
- All components use CSS classes, NO inline styles, NO overrides

## ❌ NEVER DO THESE (CRITICAL):
- `style={{ fontFamily: 'Rajdhani' }}` - No inline styles
- `className="text-[#F28705]"` - No hardcoded colors
- `className="bg-orange-500"` - Use CSS variables only
- Override component styles - Use established CSS classes
- Create new files without reading existing ones first
- Jump to solutions without understanding the established patterns

## ✅ ALWAYS DO THESE:
- `className="font-heading"` - Use established font classes
- `className="text-gray-900 dark:text-white"` - Proper text contrast
- `className="bg-[var(--lahoma-orange)]"` - Use CSS variables
- `<Button variant="default">` - Use design system components
- Read existing components before creating new ones
- Follow established patterns exactly
- Use TodoWrite to track progress

## 🎨 FUSION COMPONENT SYSTEM:
- **PremiumButton**: Uses `.btn-premium`, `.btn-lift`, `.btn-glow` classes
- **GlassFusionCard**: Glass effects with proper shadows
- **FloatingBackground**: Automated ClickUp-style color splashes
- All components use proper `text-white dark:text-white` for colored backgrounds

## 🏗️ KEY FILES TO UNDERSTAND:
- `CLAUDE.md` - Project instructions and commands
- `src/stories/DesignSystem.mdx` - Complete design system rules
- `src/styles/themes.css` - All CSS classes and effects
- `src/components/ui/` - Established component patterns

## 🚨 CONTEXT LOSS PREVENTION:
- This project has been rebuilt multiple times due to context loss
- EVERY component pattern is documented in the design system
- Follow established patterns EXACTLY to avoid regression
- Use TodoWrite frequently to maintain task visibility

## 💬 COMMUNICATION STYLE:
- Be concise and direct
- Focus on solutions, not explanations
- Use the established patterns without modification
- Ask for clarification if design system rules are unclear

**Remember: The foundation is solid. Don't rebuild what works. Follow the established patterns.**

---

**After reading this, confirm you understand by saying: "Foundation understood. Ready to build on established patterns."**