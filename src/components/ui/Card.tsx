export default function Card({
    children,
    className = '',
    variant = 'default',
    padding = 'md',
    ...props
}: {
    children: React.ReactNode;
    className?: string;
    variant?: 'default' | 'glass' | 'solid';
    padding?: 'none' | 'sm' | 'md' | 'lg';
    [key: string]: any;
}) {
    const paddings = {
        none: '',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8'
    };

    const baseClass = variant === 'glass' 
        ? 'glass-mica' 
        : variant === 'solid'
            ? 'bg-[var(--bg-secondary)]'
            : 'glass-mica-hover';

    return (
        <div
            className={`
                ${baseClass}
                ${paddings[padding]}
                rounded-lg
                border border-[var(--glass-border)]
                shadow-lg
                transition-all duration-300
                ${className}
            `}
            {...props}
        >
            {children}
        </div>
    );
}