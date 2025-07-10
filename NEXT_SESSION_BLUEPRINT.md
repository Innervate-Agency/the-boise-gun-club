# 🚀 NEXT SESSION BLUEPRINT

## 📋 IMMEDIATE COPY-PASTE STARTER

```
🚨 CRITICAL CONTEXT ENFORCEMENT PROMPT

STOP. READ THIS FIRST. FOLLOW THESE RULES EXACTLY:

1. TAILWIND v4 CSS-FIRST ONLY: Use @theme in globals.css. NO tailwind.config.js. Standard Tailwind classes automatically use our custom CSS variables.

2. ENHANCE EXISTING COMPONENTS: Never create new files. Only edit existing shadcn components in /src/components/ui/. Add Premium/Elite variants to existing CVA patterns.

3. STORYBOOK IN UI CATEGORY: All components belong in Components/UI/. Never create separate "Fusion" categories. Enhance existing stories with variant showcases.

4. STRIPE-INSPIRED DESIGN: Clean, minimal, professional. Use subtle hover effects like hover:scale-[1.02] and proper shadow progression (shadow-sm → shadow-md). No complex animations or multiple wrapper divs.

5. LEONARD YELLOW + LAHOMA ORANGE: Premium variants use border-orange-200 bg-gradient-to-br from-white to-orange-50. Elite variants add amber: border-amber-200 bg-gradient-to-br from-white via-amber-50 to-orange-50.

6. READ THE DOCS FIRST: Check /src/docs/CODE_GUIDELINES.md and /src/docs/DESIGN_SYSTEM.md before making changes. Follow the established patterns.

7. NO OVERTHINKING: If shadows/styles aren't working, the issue is usually simple CSS conflicts or missing CSS variables in globals.css, not complex configuration problems.

ACKNOWLEDGE THESE RULES BEFORE PROCEEDING WITH ANY COMPONENT WORK.
```

## 🎯 IMMEDIATE TASKS (Priority Order)

### ❗ CRITICAL BUG FIXES
1. **FIX CARD SHADOWS** - Cards still don't have proper shadows despite Tailwind v4 fixes
   - Location: `src/components/ui/card.tsx`
   - Issue: Shadow classes not working with custom CSS variables
   - Solution: Debug CSS variable connection in `globals.css` @theme section

### 🔄 CONTINUE COMPONENT ENHANCEMENT  
2. **Fix transparent backgrounds** in dropdowns/popups
3. **Enhance medium-priority UI components**:
   - Dropdown Menu (transparent background fix)
   - Popover  
   - Sheet
   - Form
   - Label
   - Tabs
   - Dialog
   - Breadcrumb

## 📊 SESSION STATE SNAPSHOT

### ✅ COMPLETED THIS SESSION
- Automated session management system (90% context trigger)
- Copy-paste enforcement prompt created
- SESSION_COMPACTION_LOG.md system
- CHANGELOG.md updated (keepachangelog.com format)
- Tailwind v4 CSS-first configuration corrected
- Card component simplified (but shadows still broken)

### 🚧 IN PROGRESS
- Card component shadow system (technical issue remains)
- Premium/Elite fusion component enhancement

### 📦 READY FOR ENHANCEMENT
- 35+ shadcn components waiting for Premium/Elite variants
- Storybook stories need variant showcases
- Transparent background fixes needed

## 🛠️ TECHNICAL CONTEXT

### Current Tech Stack Status
- **Next.js**: 15.3.2 ✅
- **React**: 19 ✅  
- **Tailwind**: v4 CSS-first ✅
- **Storybook**: 9.0.15 ✅
- **TypeScript**: Strict mode ✅

### Component Enhancement Pattern
```tsx
// ESTABLISHED PATTERN - USE THIS:
const componentVariants = cva(
  "base-classes transition-all duration-200",
  {
    variants: {
      variant: {
        default: "border-border shadow-sm hover:shadow-md",
        premium: "border-orange-200 bg-gradient-to-br from-white to-orange-50 shadow-md hover:shadow-lg",
        elite: "border-amber-200 bg-gradient-to-br from-white via-amber-50 to-orange-50 shadow-lg hover:shadow-xl relative overflow-hidden",
        glass: "border-white/20 bg-white/10 backdrop-blur-md shadow-lg hover:shadow-xl"
      }
    }
  }
)
```

## 🎨 DESIGN SYSTEM STANDARDS

### Color Implementation
- **Leonard Yellow**: `#F2CB05` (primary accent)
- **Lahoma Orange**: `#F28705` (secondary accent) 
- **Premium Gradient**: `from-white to-orange-50`
- **Elite Gradient**: `from-white via-amber-50 to-orange-50`

### Shadow System (defined in globals.css)
- `shadow-sm` → `shadow-md` → `shadow-lg` → `shadow-xl`
- Custom CSS variables: `--shadow-sm`, `--shadow-md`, etc.

## 🚨 KNOWN ISSUES TO ADDRESS
1. **Card shadows not working** despite proper Tailwind v4 setup
2. **Transparent backgrounds** in dropdown/popup components
3. **Missing Premium/Elite variants** in 35+ components

## 🔄 AUTOMATION STATUS
- ✅ Session management (90% trigger)
- ✅ CHANGELOG.md automation  
- ✅ Blueprint creation
- ✅ Context preservation
- 🔄 Git commit automation (next session)

---
**Created**: 2025-01-10 (93% context usage)
**Next Session**: Start with enforcement prompt + card shadow debug