/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

interface ProjectCarouselProps {
  id?: string;
  images: string[];
  projectTitle: string;
}

export default function ProjectCarousel({
  id,
  images,
  projectTitle,
}: ProjectCarouselProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoSlide = useCallback(() => {
    // Clear any existing timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
    // Create new timer that runs every 3 seconds
    timerRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
  }, [images.length]);

  // Handle active slide controls and trigger interval reset
  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    startAutoSlide(); // Re-initialize timer to 0
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    startAutoSlide(); // Re-initialize timer to 0
  };

  const handleSelect = (idx: number) => {
    setActiveIndex(idx);
    startAutoSlide();
  };

  // Setup initial slide timer
  useEffect(() => {
    startAutoSlide();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startAutoSlide]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div id={id} className="flex flex-col space-y-4">
      {/* Active Carousel Image */}
      <div className="relative">
        <OptimizedImage
          id={`carousel-img-${activeIndex}`}
          src={images[activeIndex]}
          alt={`${projectTitle} - Galeri ${activeIndex + 1}`}
          aspectRatio="aspect-[16/10]"
          className="rounded-xl shadow-lg border border-zinc-800"
        />
        
        {/* Gallery index badge */}
        <div className="absolute top-4 right-4 bg-zinc-950/80 text-zinc-100 px-2.5 py-1 text-xs font-mono rounded-full border border-zinc-700/50">
          {activeIndex + 1} / {images.length}
        </div>
      </div>

      {/* Permanently visible Navigation Controls underneath the image (required by spec) */}
      <div className="flex items-center justify-between bg-zinc-900 border border-zinc-800/80 p-3 rounded-lg shadow-md">
        {/* Left Arrow Button */}
        <button
          id={`carousel-prev-btn-${id || 'generic'}`}
          onClick={handlePrev}
          className="p-2 sm:px-3 bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-orange-500 hover:bg-zinc-700 active:scale-95 rounded-md transition-all flex items-center gap-1.5 cursor-pointer text-xs uppercase tracking-wider font-semibold"
        >
          <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
          <span>Sblm</span>
        </button>

        {/* Bullet indicators */}
        <div className="flex space-x-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              id={`carousel-dot-${idx}`}
              onClick={() => handleSelect(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === idx 
                  ? 'bg-orange-500 scale-125 shadow-sm shadow-orange-500/50' 
                  : 'bg-zinc-700 hover:bg-zinc-500'
              }`}
              aria-label={`Lihat gambar ke-${idx + 1}`}
            />
          ))}
        </div>

        {/* Right Arrow Button */}
        <button
          id={`carousel-next-btn-${id || 'generic'}`}
          onClick={handleNext}
          className="p-2 sm:px-3 bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-orange-500 hover:bg-zinc-700 active:scale-95 rounded-md transition-all flex items-center gap-1.5 cursor-pointer text-xs uppercase tracking-wider font-semibold"
        >
          <span>Blas</span>
          <ChevronRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
}
