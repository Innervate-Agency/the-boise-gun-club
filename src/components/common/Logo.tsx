'use client';

import { FC } from 'react';

interface LogoProps {
    className?: string;
}

const Logo: FC<LogoProps> = ({ className = "" }) => {
    return (
        <svg
            viewBox="0 0 120 120"
            className={className}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Outer Circle */}
            <circle cx="60" cy="60" r="58" stroke="currentColor" strokeWidth="2" />

            {/* Inner Design - Clay Target Silhouette */}
            <circle cx="60" cy="60" r="30" fill="var(--accent-primary, #F28705)" /> {/* Main clay body - using accent */}
            <circle cx="60" cy="60" r="25" fill="var(--bg-primary, #2F3135)" /> {/* Inner cutout - using bg to show contrast */}
            <circle cx="60" cy="60" r="10" fill="var(--accent-primary, #F28705)" /> {/* Center dot - using accent */}

            {/* Target Points */}
            <circle cx="60" cy="60" r="20" stroke="currentColor" strokeWidth="2" />
            <circle cx="60" cy="60" r="10" stroke="currentColor" strokeWidth="2" />
            <circle cx="60" cy="60" r="3" fill="currentColor" />

            {/* Decorative Elements */}
            <path
                d="M20 60a40 40 0 0 1 80 0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
            />
            <path
                d="M100 60a40 40 0 0 1-80 0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
            />
        </svg>
    );
};

export default Logo; 