'use client';
import { motion } from 'framer-motion';


export default function GlassCard({
    children,
    className = '',
    ...props
}: {
    children: React.ReactNode;
    className?: string;
    [key: string]: any;
}) {
    return (
        <motion.div
            className={`
        bg-kent-slate-gray/80 backdrop-blur-md
        border border-chester-white/10 rounded-lg p-6
        shadow-lg ${className}
      `}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            {...props}
        >
            {children}
        </motion.div>
    );
}