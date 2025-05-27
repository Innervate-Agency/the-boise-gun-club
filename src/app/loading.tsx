'use client';

import { motion } from 'framer-motion';

export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#121212]">
            {/* Background effects */}
            <div className="absolute inset-0">
                {/* Smoke texture */}
                <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `url('/images/Smoke/Background_03.webp')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                />
                
                {/* Vignette */}
                <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/60" />
            </div>
            
            {/* Loading content */}
            <div className="relative z-10 text-center">
                {/* Animated clay target */}
                <motion.div
                    className="relative w-32 h-32 mx-auto mb-8"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                    {/* Outer ring */}
                    <div className="absolute inset-0 rounded-full border-4 border-[var(--accent-gold)]/20" />
                    
                    {/* Inner rings */}
                    <motion.div
                        className="absolute inset-2 rounded-full border-2 border-[var(--accent-primary)]/40"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute inset-4 rounded-full border-2 border-[var(--accent-secondary)]/60"
                        animate={{ scale: [1, 0.9, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    />
                    
                    {/* Center dot */}
                    <motion.div
                        className="absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-gold)]"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    />
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full bg-[var(--accent-primary)]/10 blur-xl animate-pulse-glow" />
                </motion.div>
                
                {/* Loading text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="glass-premium rounded-2xl px-8 py-4"
                >
                    <h2 className="font-['Refrigerator_Deluxe'] text-2xl text-white uppercase tracking-wider mb-2">
                        Loading
                    </h2>
                    <div className="flex items-center justify-center gap-1">
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                className="w-2 h-2 rounded-full bg-[var(--accent-gold)]"
                                animate={{ opacity: [0.3, 1, 0.3] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: i * 0.2
                                }}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
} 