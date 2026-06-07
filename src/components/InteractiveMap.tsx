/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { MapPin, Navigation, Copy, Check, Map } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface InteractiveMapProps {
  id?: string;
  showOverlayCard?: boolean;
}

export default function InteractiveMap({
  id,
  showOverlayCard = true,
}: InteractiveMapProps) {
  const [copied, setCopied] = useState(false);
  const address = 'Jl. Zeta 8 No.317, RT.002/RW.005, Karawaci Baru, Kec. Karawaci, Kota Tangerang, Banten 15116, Indonesia';

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=m&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <div
      id={id || 'global-interactive-map'}
      className="relative w-full overflow-hidden rounded-2xl border border-zinc-800 shadow-2xl bg-zinc-950 aspect-[21/9] min-h-[350px] md:min-h-[420px]"
    >
      {/* 1. Underlying Official Google Maps Interactive iFrame */}
      <iframe
        title="Peta Alamat Kantor TBT Tangerang"
        src={mapEmbedUrl}
        className="absolute inset-0 w-full h-full grayscale-[10%] invert-[0%] filter contrast-[1.05] brightness-[0.95]"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* 2. Custom HUD Overlay Details Card */}
      {showOverlayCard && (
        <div className="absolute top-4 left-4 right-4 md:right-auto md:max-w-md z-10 bg-zinc-950/90 border border-zinc-800 p-5 rounded-xl backdrop-blur-md shadow-2xl">
          <div className="flex items-start space-x-3">
            <div className="p-2.5 bg-orange-600/20 text-orange-500 rounded-lg shrink-0 mt-0.5">
              <MapPin className="w-5 h-5 fill-current" />
            </div>
            <div className="flex-1 space-y-2">
              <div>
                <span className="text-3xs font-mono font-bold tracking-widest text-orange-500 uppercase">
                  HEADQUARTERS
                </span>
                <h4 className="text-sm font-bold text-white font-sans uppercase m-0 mt-0.5">
                  Tukang Bangunan Tangerang
                </h4>
              </div>
              <p className="text-zinc-450 text-3xs md:text-2xs leading-relaxed">
                {address}
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-zinc-900/60">
                {/* Copy address button */}
                <button
                  id="map-copy-btn"
                  onClick={handleCopy}
                  className="px-2.5 py-1.5 bg-zinc-900 border border-zinc-800 hover:text-orange-500 hover:border-zinc-700 active:scale-95 text-4xs font-mono font-bold uppercase rounded text-zinc-400 cursor-pointer flex items-center gap-1.5 transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-green-500" />
                      <span>Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Salin Alamat</span>
                    </>
                  )}
                </button>

                {/* Open directions button */}
                <a
                  id="map-directions-link"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 bg-orange-600 border border-orange-500/20 hover:bg-orange-500 active:scale-95 text-4xs font-mono font-bold uppercase rounded text-white cursor-pointer flex items-center gap-1.5 transition-all"
                >
                  <Navigation className="w-3 h-3 text-white fill-current animate-pulse" />
                  <span>Petunjuk Arah</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Interactive Badge Indicating Mode */}
      <div className="absolute right-4 bottom-4 z-10 bg-zinc-950/80 border border-zinc-800 text-zinc-400 px-3 py-1.5 rounded-full text-4xs font-mono flex items-center gap-1.5 pointer-events-none backdrop-blur-sm">
        <Map className="w-3.5 h-3.5 text-orange-500" />
        <span>G-MAPS INTERAKTIF AKTIF</span>
      </div>
    </div>
  );
}
