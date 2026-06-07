/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, MouseEvent, TouchEvent, ChangeEvent } from 'react';
import { Columns } from 'lucide-react';
import { motion } from 'motion/react';
import { optimizeCloudinaryUrl } from '../constants/images';

interface BeforeAfterSliderProps {
  id?: string;
  before: string;
  after: string;
  aspectRatio?: string;
}

export default function BeforeAfterSlider({
  id,
  before,
  after,
  aspectRatio = 'aspect-video',
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    setSliderPosition(position);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (e.touches.length === 0) return;
    handleMove(e.touches[0].clientX);
  };

  const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div
      id={id ? `slider-box-${id}` : undefined}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      className={`relative overflow-hidden rounded-xl shadow-2xl border border-zinc-800 touch-none group select-none ${aspectRatio}`}
    >
      {/* 1. After (Sesudah) - The Base Layer */}
      <img
        src={optimizeCloudinaryUrl(after)}
        alt="Hasil Sesudah Konstruksi"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute right-4 bottom-4 z-10 px-3 py-1 text-2xs md:text-xs font-bold uppercase tracking-wider bg-orange-600/90 text-white rounded backdrop-blur-sm shadow border border-orange-500/20">
        Sesudah
      </div>

      {/* 2. Before (Sebelum) - The Clipping Overlay Layer */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
        }}
      >
        <img
          src={optimizeCloudinaryUrl(before)}
          alt="Kondisi Sebelum Konstruksi"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute left-4 bottom-4 z-10 px-3 py-1 text-2xs md:text-xs font-bold uppercase tracking-wider bg-zinc-900/95 text-zinc-300 rounded backdrop-blur-sm border border-zinc-700/50">
          Sebelum
        </div>
      </div>

      {/* 3. The Custom Vertical Split Line with Knobs */}
      <div
        className="absolute top-0 bottom-0 z-20 w-1 bg-white hover:bg-orange-500 transition-colors pointer-events-none"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 bg-zinc-900 text-orange-500 border-2 border-white rounded-full flex items-center justify-center shadow-2xl pointer-events-none group-hover:scale-110 group-hover:text-white group-hover:bg-orange-600 transition-all duration-300">
          <Columns className="w-4 h-4 animate-pulse stroke-[2.5]" />
        </div>
      </div>

      {/* 4. Invisible Range Input Overlaid for super clean cross-browser usability */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleSliderChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
        aria-label="Geser untuk komparasi sebelum dan sesudah"
      />
    </div>
  );
}
