import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronsLeftRight, Sparkles } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  beforeFallback?: string;
  afterFallback?: string;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
  beforeFallback,
  afterFallback,
  className = '',
}) => {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const [isDragging, setIsDragging] = useState(false);
  const [beforeFailed, setBeforeFailed] = useState(false);
  const [afterFailed, setAfterFailed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const displayBefore = beforeFailed && beforeFallback ? beforeFallback : beforeImage;
  const displayAfter = afterFailed && afterFallback ? afterFallback : afterImage;

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden select-none cursor-ew-resize rounded-t-lg bg-[#141414] ${className}`}
      onMouseDown={(e) => {
        setIsDragging(true);
        handleMove(e.clientX);
      }}
      onTouchStart={(e) => {
        setIsDragging(true);
        if (e.touches.length > 0) {
          handleMove(e.touches[0].clientX);
        }
      }}
    >
      {/* 1. After Image (Full Background) */}
      <img
        src={displayAfter}
        onError={() => setAfterFailed(true)}
        alt={afterAlt}
        className="w-full h-full object-cover object-center pointer-events-none select-none"
        loading="lazy"
        referrerPolicy="no-referrer"
      />

      {/* 2. Before Image (Clipped overlay on top) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none select-none"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={displayBefore}
          onError={() => setBeforeFailed(true)}
          alt={beforeAlt}
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none max-w-none"
          style={{
            // Keeps inner image sized to outer parent container width
            width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
            height: '100%',
          }}
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        {/* Subtle separator shadow inside clip */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* 3. Slider Divider Line */}
      <div
        className="absolute top-0 bottom-0 w-[2.5px] bg-[#FFFFFF] shadow-[0_0_12px_rgba(227,6,19,0.8)] pointer-events-none z-20"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Central Drag Handle Button */}
        <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#E30613] text-white flex items-center justify-center shadow-2xl border-2 border-white ring-2 ring-black/40 transition-transform active:scale-95">
          <ChevronsLeftRight className="w-4 h-4" />
        </div>
      </div>

      {/* 4. Before / After Badges */}
      <div className="absolute top-3 left-3 z-10 pointer-events-none">
        <span className="text-[10px] font-heading tracking-widest uppercase px-2.5 py-1 rounded bg-black/85 text-white/90 border border-white/10 backdrop-blur-md">
          BEFORE
        </span>
      </div>

      <div className="absolute top-3 right-3 z-10 pointer-events-none">
        <span className="text-[10px] font-heading tracking-widest uppercase px-2.5 py-1 rounded bg-[#E30613] text-white font-bold border border-white/20 shadow-lg backdrop-blur-md">
          AFTER
        </span>
      </div>

      {/* Bottom Hint on Hover */}
      <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-10 pointer-events-none bg-black/75 backdrop-blur-sm px-3 py-0.5 rounded-full border border-white/10 opacity-75 sm:opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 text-[9px] uppercase font-semibold tracking-wider text-gray-200">
        <span>Slide to Compare</span>
      </div>
    </div>
  );
};
