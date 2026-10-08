import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface AestheticStatCardProps {
  value: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  badge: string;
  index: number;
}

export const AestheticStatCard: React.FC<AestheticStatCardProps> = ({
  value,
  title,
  desc,
  icon: IconComponent,
  badge,
  index
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [displayValue, setDisplayValue] = useState('0');

  // Mouse tracking for 3D tilt & spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for tilt
  const springConfig = { damping: 20, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), springConfig);

  // Spotlight position relative to card (in px)
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setSpotlightPos({ x, y });

    // Normalized -0.5 to 0.5 for 3D tilt
    const normX = x / rect.width - 0.5;
    const normY = y / rect.height - 0.5;
    mouseX.set(normX);
    mouseY.set(normY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  // Animated Countup Effect
  useEffect(() => {
    // Parse the numeric part
    const match = value.match(/(\d+)/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const targetNum = parseInt(match[0], 10);
    const prefix = value.startsWith('₹') ? '₹' : '';
    const suffix = value.includes('L+') ? 'L+' : value.includes('+') ? '+' : '';

    let start = 0;
    const duration = 1200; // ms
    const startTime = performance.now();

    const updateCounter = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * targetNum);

      setDisplayValue(`${prefix}${current}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(value);
      }
    };

    // Stagger start based on index
    const timer = setTimeout(() => {
      requestAnimationFrame(updateCounter);
    }, 200 + index * 120);

    return () => clearTimeout(timer);
  }, [value, index]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1]
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-[28px] p-[1.5px] overflow-hidden group select-none transition-shadow duration-500 hover:shadow-[0_20px_50px_-10px_rgba(15,50,220,0.18)]"
    >
      {/* Dynamic Animated Gradient Border that glows on hover & follows mouse */}
      <div
        className="absolute inset-0 rounded-[28px] transition-opacity duration-500 pointer-events-none"
        style={{
          background: isHovered
            ? `radial-gradient(350px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(15, 50, 220, 0.7), rgba(87, 205, 255, 0.35) 40%, rgba(255,255,255,0.4) 70%, transparent 100%)`
            : 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.4) 50%, rgba(15,50,220,0.1) 100%)'
        }}
      />

      {/* Inner Card Body */}
      <div className="relative z-10 w-full h-full bg-white/80 backdrop-blur-2xl rounded-[26.5px] p-7 sm:p-8 flex flex-col justify-between overflow-hidden">
        {/* Cursor Spotlight Soft Radial Fill */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          style={{
            background: `radial-gradient(280px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(15, 50, 220, 0.08), transparent 80%)`
          }}
        />

        {/* Ambient Subtle Background Particle Blob */}
        <motion.div
          animate={{
            x: isHovered ? (spotlightPos.x - 150) * 0.15 : 0,
            y: isHovered ? (spotlightPos.y - 150) * 0.15 : 0,
            scale: isHovered ? 1.2 : 1
          }}
          transition={{ type: 'spring', damping: 15, stiffness: 100 }}
          className="absolute -right-6 -bottom-6 w-32 h-32 bg-gradient-to-br from-[#0F32DC]/10 via-[#57cdff]/10 to-transparent rounded-full blur-2xl pointer-events-none"
        />

        {/* Top Header: Badge + Floating Icon */}
        <div className="relative z-10 flex items-center justify-between mb-6">
          {/* Badge */}
          <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-[#0F32DC]/5 text-[#0F32DC] border border-[#0F32DC]/15 group-hover:bg-[#0F32DC] group-hover:text-white group-hover:border-[#0F32DC] transition-all duration-300 shadow-xs">
            {badge}
          </span>

          {/* Floating Icon with Micro-Animation & Glow Ring */}
          <motion.div
            animate={{
              y: isHovered ? -3 : [0, -3, 0],
              rotate: isHovered ? [0, -6, 6, 0] : 0
            }}
            transition={{
              y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
              rotate: { duration: 0.5, ease: 'easeInOut' }
            }}
            className="w-10 h-10 rounded-2xl bg-white border border-black/5 flex items-center justify-center text-[#0F32DC] shadow-sm group-hover:shadow-[0_8px_20px_rgba(15,50,220,0.25)] group-hover:bg-[#0F32DC] group-hover:text-white group-hover:border-[#0F32DC] transition-all duration-300"
          >
            <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
          </motion.div>
        </div>

        {/* Central Stat Value & Text */}
        <div className="relative z-10 my-auto">
          <div className="overflow-hidden mb-2">
            <motion.span
              className="text-4xl sm:text-5xl font-black text-[#0F32DC] tracking-tight block font-mono group-hover:scale-[1.03] transition-transform duration-300"
              style={{
                background: 'linear-gradient(135deg, #0F32DC 0%, #284ae8 50%, #001275 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              {displayValue}
            </motion.span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-[#050419] mb-2 leading-snug tracking-tight group-hover:text-[#0F32DC] transition-colors duration-300">
            {title}
          </h3>

          <p className="text-xs sm:text-sm text-[#050419]/70 leading-relaxed font-normal">
            {desc}
          </p>
        </div>

        {/* Aesthetic Animated Progress / Accent Line */}
        <div className="relative z-10 mt-6 pt-4 border-t border-black/[0.05] flex items-center justify-between">
          <div className="h-1.5 rounded-full bg-black/5 overflow-hidden w-full relative">
            <motion.div
              initial={{ width: '25%' }}
              animate={{
                width: isHovered ? '100%' : '30%'
              }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="h-full rounded-full bg-gradient-to-r from-[#0F32DC] via-[#3b82f6] to-[#57cdff] shadow-[0_0_10px_rgba(15,50,220,0.5)]"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
