# UI Component System Guide (2025 Standard)

## 🚦 Philosophy
- **No direct `<button>` for user-facing UI.**
- **No inline styles for fonts, colors, or layout.**
- **No style drift.** All UI elements use design system components.
- **Component-driven, not utility-driven:** Use Tailwind classes inside components, not in app-level code.
- **Accessibility, theming, and performance are non-negotiable.**

---

## 🧩 Component Usage Rules

### 1. **Buttons**
- All user-facing buttons must use the design system `<Button>` component (or its variants).
- Never use direct `<button>` for UI. Only for ultra-low-level, non-UI logic (rare).
- Button component must encapsulate:
  - Font, color, spacing
  - Variants (primary, secondary, ghost, destructive, etc.)
  - Accessibility (ARIA, keyboard, focus)
  - Animation (Framer Motion or similar)
  - Theme awareness (light/dark, brand colors)
- Example usage:
  ```tsx
  <Button variant="primary" size="lg" onClick={...}>
    Join Now
  </Button>
  ```

### 2. **Other UI Elements**
- All cards, inputs, modals, etc. must use a design system component.
- No one-off or quick-fix styles in app code.

### 3. **No Inline Styles**
- Never use `style={{ fontFamily: ... }}` or `style={{ color: ... }}` for UI.
- Use Tailwind classes, CSS variables, or design tokens.

### 4. **Accessibility**
- All components must be accessible out of the box (ARIA, keyboard, focus, etc.).
- Use semantic HTML under the hood.
- Expose ARIA props for custom labeling.

### 5. **Variants & Theming**
- Support for variants via props (primary, secondary, ghost, etc.).
- Theme-aware: adapts to light/dark and brand color changes.
- Use design tokens or CSS variables for all colors, spacing, and typography.

### 6. **TypeScript-First**
- All components are fully typed, with clear prop interfaces and variant enums.

### 7. **Documentation & Testing**
- Every component is documented with usage, variants, and accessibility notes.
- Use Storybook or similar for visual regression and onboarding.

---

## 🏗️ Button Component Template (2025 Standard)
```tsx
import { cva, VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { motion } from "framer-motion";
import { forwardRef } from "react";

export const buttonStyles = cva(
  "inline-flex items-center justify-center rounded-md font-heading uppercase tracking-wide font-bold transition focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        primary: "bg-[var(--accent-primary)] text-[var(--text-primary)] hover:bg-[var(--accent-secondary)]",
        secondary: "border border-[var(--accent-secondary)] text-[var(--accent-secondary)] hover:bg-[rgba(242,203,5,0.1)]",
        ghost: "bg-transparent text-[var(--accent-secondary)] hover:bg-[rgba(242,203,5,0.05)]",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles> & { asChild?: boolean };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : motion.button;
    return (
      <Comp
        className={buttonStyles({ variant, size, className })}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
```

---

## 🚫 Forbidden Practices
- No direct `<button>` for UI
- No inline style for fonts, colors, or layout
- No one-off utility classes in app code for UI elements
- No style drift: all UI must use design system components

---

## 📝 Migration Checklist
- [ ] Replace all direct `<button>` with `<Button>`
- [ ] Refactor all inline styles to Tailwind/CSS variables
- [ ] Remove/replace any outdated guides
- [ ] Document all components in Storybook
- [ ] Test accessibility for all components

---

## 📚 Further Reading
- [Shadcn UI Docs](https://ui.shadcn.com/)
- [Radix UI Primitives](https://www.radix-ui.com/primitives/docs/overview/getting-started)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Aria](https://react-spectrum.adobe.com/react-aria/) 