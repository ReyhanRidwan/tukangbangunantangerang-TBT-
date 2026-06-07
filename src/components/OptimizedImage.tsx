/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';

interface OptimizedImageProps {
  id?: string;
  src: string;
  alt: string;
  className?: string; // Additional Tailwind styling
  aspectRatio?: string; // CSS aspect ratio class like 'aspect-video', 'aspect-square', etc.
  objectFit?: 'object-cover' | 'object-contain' | 'object-fill';
}

export default function OptimizedImage({
  id,
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-video',
  objectFit = 'object-cover',
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const [isError, setIsError] = useState(false);

  const handleError = () => {
    if (!isError) {
      setIsError(true);
      // Fallback image using a high-quality building block placeholder
      setCurrentSrc('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&auto=format&fit=crop');
    }
  };

  return (
    <div
      id={id ? `optimized-container-${id}` : undefined}
      className={`relative overflow-hidden bg-zinc-900/60 rounded-lg ${aspectRatio} ${className}`}
    >
      {/* Skeleton / Placeholder loader */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-800 animate-pulse">
          <div className="w-8 h-8 border-2 border-orange-600 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Main Image with smooth Framer Motion fade-in transition */}
      <motion.img
        id={id}
        src={currentSrc}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={handleError}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`w-full h-full ${objectFit} transition-all duration-300 ${
          isLoaded ? 'scale-100' : 'scale-105 blur-sm'
        }`}
      />
    </div>
  );
}
