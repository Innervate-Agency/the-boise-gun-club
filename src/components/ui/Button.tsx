import { motion } from 'framer-motion';
import { ButtonProps } from '@/types/content';

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    disabled = false,
    className = '',
    type = 'button',
    onClick,
    ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const sizeStyles = {
        sm: "py-1 px-2 text-sm",
        md: "py-2 px-4",
        lg: "py-3 px-6 text-lg"
    };

    const variantStyles = {
        primary: "bg-[var(--accent-primary)] text-[var(--text-primary)] hover:bg-[var(--accent-secondary)]",
        secondary: "bg-transparent border border-[var(--accent-secondary)] text-[var(--accent-secondary)] hover:bg-[rgba(242,203,5,0.1)]",
        tertiary: "bg-transparent text-[var(--accent-secondary)] hover:bg-[rgba(242,203,5,0.05)]"
    };

    const baseStyles = "rounded font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed";

    return (
        <motion.button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
            whileHover={disabled ? {} : { scale: 1.05 }}
            whileTap={disabled ? {} : { scale: 0.95 }}
        >
            {children}
        </motion.button>
    );
}