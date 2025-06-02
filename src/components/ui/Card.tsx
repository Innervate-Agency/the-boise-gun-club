export default function Card({
    children,
    className = '',
    ...props
}: {
    children: React.ReactNode;
    className?: string;
    [key: string]: any;
}) {
    return (
        <div
            className={`bg-[var(--bg-secondary)] border border-[var(--glass-border)] rounded-lg p-6 ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}