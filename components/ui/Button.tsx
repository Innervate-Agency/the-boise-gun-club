export default function Button({
    children,
    variant = 'primary',
    className = '',
    ...props
}: {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    className?: string;
    [key: string]: any;
}) {
    const baseStyles = "py-2 px-4 rounded font-medium transition-colors";

    const variantStyles = {
        primary: "bg-lahoma-orange text-kent-slate-gray hover:bg-leonard-yellow",
        secondary: "bg-transparent border border-leonard-yellow text-leonard-yellow hover:bg-leonard-yellow/10"
    };

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}