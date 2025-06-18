import FractalBackground from '@/components/effects/FractalBackground';
import { useTheme } from 'next-themes';

interface SectionHeroProps {
  title: string;
  subtitle?: string;
  accentType?: 'fractal' | 'gradient' | 'solid';
  className?: string;
}

export default function SectionHero({
  title,
  subtitle,
  accentType = 'fractal',
  className = '',
}: SectionHeroProps) {
  const { resolvedTheme } = useTheme();
  const darkMode = resolvedTheme === 'dark';

  return (
    <section
      className={`relative w-full min-h-[200px] flex flex-col justify-center items-center px-4 py-12 md:py-16 ${className}`}
    >
      {/* Accent background */}
      {accentType === 'fractal' && (
        <FractalBackground
          position="bottom-right"
          blurAmount={60}
          zIndex={0}
          darkMode={darkMode}
        />
      )}
      {accentType === 'gradient' && (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              darkMode
                ? 'linear-gradient(90deg, #232323 0%, #2d2d2d 100%)'
                : 'linear-gradient(90deg, #fffbe6 0%, #f2cb05 100%)',
          }}
        />
      )}
      {/* Solid fallback */}
      {accentType === 'solid' && (
        <div
          className="absolute inset-0 z-0"
          style={{ background: darkMode ? '#181818' : '#FAF5EB' }}
        />
      )}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 uppercase tracking-wide">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-[var(--text-secondary)] font-normal mt-4">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
} 