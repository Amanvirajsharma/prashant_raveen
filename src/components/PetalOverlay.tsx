import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, EyeOff } from 'lucide-react';

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  type: 'rose' | 'marigold' | 'goldDust';
  opacity: number;
}

export const PetalOverlay: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isEnabled, setIsEnabled] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return true;
  });
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isEnabled) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Limit count for smooth 60fps on all devices
    const petalCount = window.innerWidth < 768 ? 20 : 38;
    const petals: Petal[] = [];

    const petalTypes: ('rose' | 'marigold' | 'goldDust')[] = [
      'rose', 'rose', 'marigold', 'marigold', 'goldDust'
    ];

    for (let i = 0; i < petalCount; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 10 + 6,
        speedY: Math.random() * 1.2 + 0.6,
        speedX: Math.sin(Math.random() * Math.PI) * 0.8,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 1.5,
        type: petalTypes[Math.floor(Math.random() * petalTypes.length)],
        opacity: Math.random() * 0.6 + 0.35,
      });
    }

    let angle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      angle += 0.01;

      petals.forEach((p) => {
        p.y += p.speedY;
        p.x += Math.sin(angle + p.size) * 0.75 + p.speedX * 0.3;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;

        if (p.type === 'rose') {
          // Velvet Red Rose Petal
          const grad = ctx.createLinearGradient(-p.size, -p.size, p.size, p.size);
          grad.addColorStop(0, '#9E1B32');
          grad.addColorStop(0.5, '#6D1527');
          grad.addColorStop(1, '#4A0D1A');

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.moveTo(0, -p.size);
          ctx.bezierCurveTo(p.size * 0.8, -p.size * 0.8, p.size * 0.9, p.size * 0.6, 0, p.size);
          ctx.bezierCurveTo(-p.size * 0.9, p.size * 0.6, -p.size * 0.8, -p.size * 0.8, 0, -p.size);
          ctx.fill();
        } else if (p.type === 'marigold') {
          // Warm Orange-Saffron Marigold Petal
          const grad = ctx.createLinearGradient(0, -p.size, 0, p.size);
          grad.addColorStop(0, '#FFA500');
          grad.addColorStop(0.5, '#D9A441');
          grad.addColorStop(1, '#B87B1A');

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size * 0.5, p.size, Math.PI / 12, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Delicate Golden Shimmer Particle
          ctx.fillStyle = '#EACD89';
          ctx.shadowColor = '#D4AF37';
          ctx.shadowBlur = 6;
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.25, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isEnabled]);

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className={`fixed inset-0 pointer-events-none z-30 transition-opacity duration-700 ${
          isEnabled ? 'opacity-100' : 'opacity-0'
        }`}
      />
      {/* Discreet toggle button */}
      <button
        onClick={() => setIsEnabled(!isEnabled)}
        title={isEnabled ? 'Pause floating petals' : 'Enable floating petals'}
        aria-label={isEnabled ? 'Disable ambient petals' : 'Enable ambient petals'}
        className="fixed bottom-6 left-6 z-40 bg-[#FFF9F0]/90 backdrop-blur-md border border-[#C5A15B]/40 text-[#6D1527] p-2.5 rounded-full shadow-royal hover:bg-[#FFF9F0] hover:scale-105 transition-all text-xs flex items-center gap-1.5 group"
      >
        {isEnabled ? (
          <>
            <Sparkles className="w-4 h-4 text-[#D9A441] animate-spin-slow" />
            <span className="hidden md:inline font-serif text-[11px] text-[#6D1527] tracking-wider pr-1">
              Petals On
            </span>
          </>
        ) : (
          <>
            <EyeOff className="w-4 h-4 text-[#8C6D2D]" />
            <span className="hidden md:inline font-serif text-[11px] text-[#8C6D2D] tracking-wider pr-1">
              Petals Off
            </span>
          </>
        )}
      </button>
    </>
  );
};
