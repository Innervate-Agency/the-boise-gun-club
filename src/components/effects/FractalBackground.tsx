import Image from 'next/image';
import { useMemo, useRef, useEffect, useState } from 'react';

const FRACTAL_COUNT = 40;
const FRACTAL_PATH = '/images/Fractal/';

export type FractalPosition =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';

interface FractalBackgroundProps {
  position?: FractalPosition;
  overlayColor?: string;
  blurAmount?: number;
  zIndex?: number;
  className?: string;
  darkMode?: boolean;
  parallax?: boolean;
}

const positionStyles: Record<FractalPosition, string> = {
  'top-left': 'top-0 left-0',
  'top-right': 'top-0 right-0',
  'bottom-left': 'bottom-0 left-0',
  'bottom-right': 'bottom-0 right-0',
};

export default function FractalBackground({
  position,
  overlayColor = 'var(--bg-primary, #FAF5EB)',
  blurAmount = 80,
  zIndex = 0,
  className = '',
  darkMode = false,
  parallax = false,
}: FractalBackgroundProps) {
  // Pick a random fractal image and position on first render
  const imageIndex = useMemo(() => Math.floor(Math.random() * FRACTAL_COUNT) + 1, []);
  const imageSrc = `${FRACTAL_PATH}${imageIndex}.webp`;
  const chosenPosition = useMemo(() => position || (['top-left', 'top-right', 'bottom-left', 'bottom-right'] as const)[Math.floor(Math.random() * 4)], [position]);

  // Parallax state
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!parallax) return;
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1
      setOffset({ x: x * 24, y: y * 24 }); // max 24px movement
    };
    const ref = containerRef.current;
    ref?.addEventListener('mousemove', handleMouseMove);
    ref?.addEventListener('mouseleave', () => setOffset({ x: 0, y: 0 }));
    return () => {
      ref?.removeEventListener('mousemove', handleMouseMove);
      ref?.removeEventListener('mouseleave', () => setOffset({ x: 0, y: 0 }));
    };
  }, [parallax]);

  // Main background color
  const mainBg = darkMode ? '#181818' : overlayColor;

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full pointer-events-auto ${className}`}
      style={{ zIndex, background: mainBg }}
      aria-hidden="true"
    >
      <div
        className={`absolute w-[45%] h-[45%] ${positionStyles[chosenPosition]} pointer-events-none`}
        style={{
          filter: `blur(${blurAmount}px)`,
          opacity: 0.82,
          zIndex: 2,
          transform: `translate(${offset.x}px, ${offset.y}px)`,
          mixBlendMode: darkMode ? 'screen' : 'multiply',
        }}
      >
        <Image
          src={imageSrc}
          alt="Fractal accent"
          fill
          style={{ objectFit: 'cover' }}
          quality={60}
          priority={false}
          draggable={false}
        />
      </div>
    </div>
  );
} 