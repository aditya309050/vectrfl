import React, { useEffect, useRef } from 'react';

interface ThreadAnimationProps {
  className?: string;
}

export const ThreadAnimation: React.FC<ThreadAnimationProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5, currentX: 0.5, currentY: 0.5 });
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;

    const handleResize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(container);
    handleResize();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = (e.clientX - rect.left) / rect.width;
      mouseRef.current.y = (e.clientY - rect.top) / rect.height;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = 0.5;
      mouseRef.current.y = 0.5;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    let time = 0;
    const numThreads = 12;

    const render = () => {
      time += 0.016;

      // Smooth mouse lerp
      mouseRef.current.currentX += (mouseRef.current.x - mouseRef.current.currentX) * 0.05;
      mouseRef.current.currentY += (mouseRef.current.y - mouseRef.current.currentY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Draw multi-strand smooth harmonic flowing threads
      ctx.save();
      ctx.globalCompositeOperation = 'screen';

      const mouseOffset = (mouseRef.current.currentX - 0.5) * 40;
      const mouseOffsetY = (mouseRef.current.currentY - 0.5) * 30;

      for (let i = 0; i < numThreads; i++) {
        const tOffset = (i / numThreads) * Math.PI * 0.8;
        const progress = i / numThreads;

        ctx.beginPath();

        // Color and alpha based on strand index
        const alpha = 0.18 + Math.sin(time * 0.8 + progress * Math.PI) * 0.12 + (1 - progress) * 0.25;
        const blueVal = Math.floor(220 + 35 * Math.sin(time + i));
        const cyanVal = Math.floor(180 + 70 * Math.cos(time * 0.5 + i));
        ctx.strokeStyle = `rgba(30, ${cyanVal}, ${blueVal}, ${Math.max(0.1, alpha)})`;
        ctx.lineWidth = 1.2 + Math.sin(time * 1.5 + i) * 0.4;

        // Parametric curve points
        const pointsCount = 45;
        for (let j = 0; j <= pointsCount; j++) {
          const u = j / pointsCount;

          // Harmonic swirling trajectory in lower-right corner of the card
          const baseX = width * (0.35 + 0.65 * u);
          const baseY = height * (0.15 + 0.85 * u);

          const wave1 = Math.sin(u * 5.0 + time * 1.2 + tOffset) * (35 + 15 * Math.sin(time * 0.4));
          const wave2 = Math.cos(u * 7.5 - time * 0.9 + tOffset * 1.5) * (20 + 10 * Math.cos(time * 0.6));
          const wave3 = Math.sin(u * 10.0 + time * 1.7) * 8;

          // Swirl rotation effect
          const angle = u * Math.PI * 2.2 + time * 0.4 + tOffset;
          const radius = (1 - Math.abs(u - 0.5) * 1.6) * 55;

          const px = baseX + Math.cos(angle) * radius * 0.6 + wave1 + mouseOffset * u;
          const py = baseY + Math.sin(angle) * radius + wave2 + wave3 + mouseOffsetY * u;

          if (j === 0) {
            ctx.moveTo(px, py);
          } else {
            ctx.lineTo(px, py);
          }
        }

        ctx.stroke();
      }

      ctx.restore();

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      resizeObserver.disconnect();
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
