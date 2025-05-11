'use client';

import React from 'react';
import { motion, useTime, useTransform, MotionValue } from 'framer-motion';

interface WavyGridBackgroundProps {
    lineColor?: string;
    numLinesX?: number;
    numLinesY?: number;
    waveAmplitude?: number;
    waveFrequency?: number;
    waveSpeed?: number;
    className?: string;
    gridRotationX?: number;
    perspectiveValue?: number;
    gridTranslateZ?: number;
    gridScale?: number;
    gridWidth?: number;
    gridHeight?: number;
}

interface WavyHorizontalLineProps {
    baseY: number;
    gridWidth: number;
    strokeColor: string;
    waveAmplitude: number;
    waveFrequency: number;
    waveSpeed: number;
    time: MotionValue<number>;
    numSegments: number;
    strokeWidth?: number;
}

const WavyHorizontalLine: React.FC<WavyHorizontalLineProps> = ({
    baseY,
    gridWidth,
    strokeColor,
    waveAmplitude,
    waveFrequency,
    waveSpeed,
    time,
    numSegments,
    strokeWidth = 1,
}) => {
    const d = useTransform(time, currentTime => {
        const timeFactor = currentTime / 1000;
        let pathData = `M 0 ${baseY + waveAmplitude * Math.sin(0 * waveFrequency + timeFactor * waveSpeed)}`;
        for (let seg = 1; seg <= numSegments; seg++) {
            const x = (gridWidth / numSegments) * seg;
            const yOffset = waveAmplitude * Math.sin(x * waveFrequency + timeFactor * waveSpeed);
            pathData += ` L ${x} ${baseY + yOffset}`;
        }
        return pathData;
    });

    return (
        <motion.path
            d={d}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            fill="none"
        />
    );
};

const WavyGridBackground: React.FC<WavyGridBackgroundProps> = ({
    lineColor = '#FFFFFF',
    numLinesX = 50,
    numLinesY = 30,
    waveAmplitude = 3,
    waveFrequency = 0.03,
    waveSpeed = 0.05,
    className = '',
    gridRotationX = 60,
    perspectiveValue = 1000,
    gridTranslateZ = -200,
    gridScale = 1.5,
    gridWidth = 1200,
    gridHeight = 800,
}) => {
    const time = useTime();
    const numSegments = 50;
    const lineStrokeWidth = 0.5;

    const xSpacing = gridWidth / (numLinesX + 1);
    const ySpacing = gridHeight / (numLinesY + 1);

    return (
        <div
            className={`absolute inset-0 overflow-hidden ${className}`}
            style={{
                perspective: `${perspectiveValue}px`,
                perspectiveOrigin: '50% 50%',
            }}
        >
            <motion.div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                    width: '100%',
                    height: '100%',
                    transformStyle: 'preserve-3d',
                }}
            >
                <motion.svg
                    width={gridWidth}
                    height={gridHeight}
                    viewBox={`0 0 ${gridWidth} ${gridHeight}`}
                    style={{
                        transform: `translateZ(${gridTranslateZ}px) rotateX(${gridRotationX}deg) scale(${gridScale})`,
                        overflow: 'visible',
                        transformOrigin: 'center center',
                    }}
                >
                    {/* Vertical Lines */}
                    {Array.from({ length: numLinesX }).map((_, i) => (
                        <motion.line
                            key={`v-line-${i}`}
                            x1={(i + 1) * xSpacing}
                            y1={0}
                            x2={(i + 1) * xSpacing}
                            y2={gridHeight}
                            stroke={lineColor}
                            strokeWidth={lineStrokeWidth}
                        />
                    ))}

                    {/* Horizontal Wavy Lines */}
                    {Array.from({ length: numLinesY }).map((_, i) => {
                        const baseY = (i + 1) * ySpacing;
                        return (
                            <WavyHorizontalLine
                                key={`h-line-${i}`}
                                baseY={baseY}
                                gridWidth={gridWidth}
                                strokeColor={lineColor}
                                waveAmplitude={waveAmplitude}
                                waveFrequency={waveFrequency}
                                waveSpeed={waveSpeed}
                                time={time}
                                numSegments={numSegments}
                                strokeWidth={lineStrokeWidth}
                            />
                        );
                    })}
                </motion.svg>
            </motion.div>
        </div>
    );
};

export default WavyGridBackground;
