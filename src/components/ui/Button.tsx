import { cva, type VariantProps } from "class-variance-authority";
import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center rounded-md font-heading uppercase tracking-wide font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: [
          "bg-[var(--accent)] text-[var(--text-primary)]",
          "hover:shadow-lg hover:shadow-[var(--accent)]/20",
          "before:absolute before:inset-0 before:rounded-md before:bg-gradient-to-r before:from-[var(--accent)] before:to-[var(--accent-hover)] before:opacity-0 before:transition-opacity",
          "hover:before:opacity-100",
          "after:absolute after:inset-0 after:rounded-md after:bg-gradient-to-r after:from-[var(--accent-hover)] after:to-[var(--accent)] after:opacity-0 after:transition-opacity",
          "hover:after:opacity-100",
        ],
        secondary: [
          "bg-transparent border-2 border-[var(--accent)] text-[var(--accent)]",
          "hover:shadow-lg hover:shadow-[var(--accent)]/10",
          "before:absolute before:inset-0 before:rounded-md before:bg-gradient-to-r before:from-[var(--accent)]/10 before:to-[var(--accent-hover)]/10 before:opacity-0 before:transition-opacity",
          "hover:before:opacity-100",
          "after:absolute after:inset-0 after:rounded-md after:bg-gradient-to-r after:from-[var(--accent-hover)]/10 after:to-[var(--accent)]/10 after:opacity-0 after:transition-opacity",
          "hover:after:opacity-100",
        ],
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-10 px-6 text-base",
        lg: "h-11 px-8 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

type ButtonBaseProps = {
  className?: string;
  asChild?: boolean;
  children: React.ReactNode;
};

export type ButtonProps = ButtonBaseProps & ButtonVariantProps & Omit<HTMLMotionProps<"button">, "variants">;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;
export { Button, buttonVariants };