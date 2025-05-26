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
        primary: "bg-lahoma-orange text-kent-slate-gray hover:bg-leonard-yellow",
        secondary: "bg-transparent border border-leonard-yellow text-leonard-yellow hover:bg-leonard-yellow/10",
        tertiary: "bg-transparent text-leonard-yellow hover:bg-leonard-yellow/5"
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