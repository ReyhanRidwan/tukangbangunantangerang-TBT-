/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { Calculator, MessageSquare, ShieldCheck, ArrowRight, Layers, Box } from 'lucide-react';
import { motion } from 'motion/react';

type MaterialQuality = 'standar' | 'medium' | 'premium';

const MATERIAL_INFO = {
  standar: {
    name: 'Sederhana / Standar',
    pricePerM2: 3800000,
    desc: 'Bahan sni ekonomis, keramik 40x40/60x60, cat interior standar, saniter standar.',
    specs: ['Baja ringan & genteng metal', 'Keramik Milan 60x60', 'Kusen alumunium ekonomis', 'Cat interior propan/setara'],
  },
  medium: {
    name: 'Menengah / Medium',
    pricePerM2: 5000000,
    desc: 'Struktur kokoh medium, granit tile 60x60, cat Jotun/Dulux, saniter TOTO, plumbing prima.',
    specs: ['Genteng keramik M-Class', 'Granit Tile premium 60x60', 'Kusen Alumunium Alexindo', 'Cat Jotun/Dulux luar dalam', 'Aksesori Kelistrikan Broco'],
  },
  premium: {
    name: 'Mewah / Premium',
    pricePerM2: 7000000,
    desc: 'Struktur tahan gempa ekstra, granit impor, saniter Kohler/TOTO Premium, smart home locks, finishing cat weather-shield terbaik.',
    specs: ['Plat beton kokor / genteng Kanmuri', 'Granit Impor besar 80x80 / Marmer', 'Kusen Alumunium YKK AP', 'Saniter Kohler / TOTO premium', 'Sistem Pintar (Smart Door Lock)', 'Kabel kelistrikan supreme premium'],
  },
};

export default function CostCalculator() {
  const [luas, setLuas] = useState<number>(100);
  const [lantai, setLantai] = useState<number>(2);
  const [quality, setQuality] = useState<MaterialQuality>('medium');

  // Multiplier for double/triple storeys (structural reinforcement fees)
  const floorMultiplier = {
    1: 1.0,
    2: 1.05, // Additional columns/beams reinforcement
    3: 1.15, // Heavy foundation footplates (cakar ayam)
  }[lantai] || 1.0;

  const costPerSquareMeter = useMemo(() => {
    return MATERIAL_INFO[quality].pricePerM2 * (floorMultiplier as number);
  }, [quality, floorMultiplier]);

  const totalCost = useMemo(() => {
    return luas * costPerSquareMeter;
  }, [luas, costPerSquareMeter]);

  // Breakdown ratio estimation
  const breakdown = useMemo(() => {
    return {
      struktur: Math.round(totalCost * 0.40), // 40%
      arsitektur: Math.round(totalCost * 0.35), // 35%
      mep: Math.round(totalCost * 0.15), // 15%
      finishing: Math.round(totalCost * 0.10), // 10%
    };
  }, [totalCost]);

  // Format currency helper
  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(num);
  };

  // Generate WhatsApp inquiry text
  const getWhatsAppLink = () => {
    const textMessage = `Halo Tukang Bangunan Tangerang (TBT), saya tertarik dengan jasa konstruksi Anda. Berikut estimasi RAB kalkulator saya:

- Luas Bangunan: ${luas} m²
- Jumlah Lantai: ${lantai} Lantai
- Kualitas Material: Paket ${MATERIAL_INFO[quality].name}
- Estimasi Biaya/m²: ${formatRupiah(costPerSquareMeter)}
- Estimasi Total RAB: ${formatRupiah(totalCost)}

Mohon info konsultasi lebih lanjut. Terima kasih!`;
    
    return `https://wa.me/6289638779870?text=${encodeURIComponent(textMessage)}`;
  };

  return (
    <div id="calculator-card" className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
      <div className="bg-orange-600 p-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Calculator className="w-6 h-6 text-white stroke-[2.2]" />
          <div>
            <h3 className="text-lg md:text-xl font-bold font-sans uppercase tracking-tight text-white m-0">
              Kalkulator RAB Kasar
            </h3>
            <p className="text-zinc-100/80 text-2xs md:text-xs italic m-0 mt-0.5">
              Estimasi praktis untuk perencanaan rumah Anda di Tangerang
            </p>
          </div>
        </div>
        <span className="hidden sm:inline bg-black/25 text-white text-3xs font-mono font-semibold px-2 py-1 rounded">
          v1.4 - TBT LOKAL
        </span>
      </div>

      <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Input Section - 7 Columns */}
        <div className="lg:col-span-7 space-y-6">
          {/* Slider & Input Luas */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label htmlFor="area-range" className="text-sm font-semibold tracking-wide text-zinc-300">
                LUAS BANGUNAN (m²)
              </label>
              <div className="flex items-center space-x-2 bg-zinc-900 px-3 py-1 rounded border border-zinc-800">
                <input
                  id="area-number"
                  type="number"
                  min="20"
                  max="1000"
                  value={luas}
                  onChange={(e) => setLuas(Math.max(20, Math.min(1000, Number(e.target.value))))}
                  className="w-16 bg-transparent text-right font-bold text-orange-500 text-sm focus:outline-none"
                />
                <span className="text-zinc-500 text-xs font-mono">m²</span>
              </div>
            </div>
            <input
              id="area-range"
              type="range"
              min="20"
              max="500"
              value={luas}
              onChange={(e) => setLuas(Number(e.target.value))}
              className="w-full accent-orange-600 h-2 bg-zinc-800 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-4xs font-mono text-zinc-500">
              <span>20 m²</span>
              <span>150 m²</span>
              <span>300 m²</span>
              <span>500 m² (Hingga 1000 m²)</span>
            </div>
          </div>

          {/* Jumlah Lantai Toggle */}
          <div className="space-y-2">
            <label className="text-xs font-bold tracking-wider text-zinc-400 block uppercase">
              JUMLAH LANTAI
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map((floors) => (
                <button
                  key={floors}
                  id={`floor-btn-${floors}`}
                  type="button"
                  onClick={() => setLantai(floors)}
                  className={`py-3 px-4 rounded-xl border font-bold text-center transition-all cursor-pointer flex flex-col items-center justify-center space-y-1 ${
                    lantai === floors
                      ? 'bg-orange-600/10 border-orange-500 text-orange-500 shadow-md shadow-orange-500/5'
                      : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                  }`}
                >
                  <Layers className={`w-4 h-4 ${lantai === floors ? 'text-orange-500' : 'text-zinc-500'}`} />
                  <span className="text-xs">{floors} Lantai</span>
                </button>
              ))}
            </div>
            <p className="text-4xs text-zinc-500 leading-relaxed italic">
              *Konstruksi 2 & 3 lantai memerlukan penguatan cor beton bertulang (cakar ayam) lebih besar.
            </p>
          </div>

          {/* Material Quality Selection */}
          <div className="space-y-3">
            <label className="text-xs font-bold tracking-wider text-zinc-400 block uppercase">
              KUALITAS MATERIAL & FINISHING
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {Object.keys(MATERIAL_INFO).map((qKey) => {
                const info = MATERIAL_INFO[qKey as MaterialQuality];
                const active = quality === qKey;
                return (
                  <button
                    key={qKey}
                    id={`quality-btn-${qKey}`}
                    type="button"
                    onClick={() => setQuality(qKey as MaterialQuality)}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      active
                        ? 'bg-orange-600/10 border-orange-500 text-white shadow'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:bg-zinc-900/85 hover:border-zinc-700'
                    }`}
                  >
                    <div>
                      <span className={`inline-block px-1.5 py-0.5 rounded text-4xs font-mono uppercase font-bold mb-2 ${
                        active ? 'bg-orange-600 text-white' : 'bg-zinc-800 text-zinc-500'
                      }`}>
                        📦 Paket {qKey}
                      </span>
                      <h4 className={`text-xs font-bold ${active ? 'text-orange-500' : 'text-zinc-300'}`}>
                        {info.name}
                      </h4>
                      <p className="text-4xs text-zinc-400 mt-1 line-clamp-2 md:leading-relaxed">
                        {info.desc}
                      </p>
                    </div>
                    <div className="mt-4 pt-2 border-t border-zinc-800/80">
                      <span className="text-2xs font-mono font-semibold text-zinc-500">Mulai dari</span>
                      <p className={`text-xs font-bold ${active ? 'text-white' : 'text-zinc-400'}`}>
                        {formatRupiah(info.pricePerM2)}/m²
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Output Sheet - 5 Columns */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-zinc-900/60 p-5 md:p-6 rounded-xl border border-zinc-900">
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-zinc-500 uppercase">
              Rincian Estimasi Biaya
            </h4>

            {/* Total Display */}
            <div className="py-4 border-b border-zinc-850">
              <p className="text-2xs text-zinc-400">Total Perkiraan Biaya (RAB)</p>
              <h2 className="text-2xl md:text-3xl font-black font-sans tracking-tight text-white mt-1">
                {formatRupiah(totalCost)}
              </h2>
              <div className="flex items-center gap-1.5 text-3xs text-orange-500 mt-2 font-mono">
                <Box className="w-3.5 h-3.5" />
                <span>Rata-rata: {formatRupiah(costPerSquareMeter)} / m²</span>
              </div>
            </div>

            {/* Category Breakdown list */}
            <div className="space-y-3 pt-2">
              <div className="flex justify-between items-center text-xs">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-600" />
                  <span className="text-zinc-400">Pekerjaan Struktur (40%)</span>
                </div>
                <span className="font-mono text-zinc-300 font-medium">{formatRupiah(breakdown.struktur)}</span>
              </div>
              
              <div className="flex justify-between items-center text-xs">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-400" />
                  <span className="text-zinc-400">Pekerjaan Arsitektur (35%)</span>
                </div>
                <span className="font-mono text-zinc-300 font-medium">{formatRupiah(breakdown.arsitektur)}</span>
              </div>

              <div className="flex justify-between items-center text-xs">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <span className="text-zinc-400">Sistem Elektrikal & Plambing (15%)</span>
                </div>
                <span className="font-mono text-zinc-300 font-medium">{formatRupiah(breakdown.mep)}</span>
              </div>

              <div className="flex justify-between items-center text-xs">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-650" />
                  <span className="text-zinc-400">Pekerjaan Finishing (10%)</span>
                </div>
                <span className="font-mono text-zinc-300 font-medium">{formatRupiah(breakdown.finishing)}</span>
              </div>
            </div>

            {/* Material Specifications Checklist */}
            <div className="pt-4 border-t border-zinc-850">
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                Spesifikasi Utama Paket:
              </p>
              <ul className="space-y-1.5">
                {MATERIAL_INFO[quality].specs.map((spec, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-2 text-3xs text-zinc-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-2">
            <a
              id="calculator-wa-link"
              href={getWhatsAppLink()}
              target="_blank"
              referrerPolicy="no-referrer"
              className="w-full flex items-center justify-center gap-2 px-5 py-4 bg-orange-600 text-white rounded-xl font-bold text-sm hover:bg-orange-500 active:scale-98 transition-all cursor-pointer shadow-lg shadow-orange-600/10"
            >
              <MessageSquare className="w-4 h-4 text-white shrink-0 fill-current" />
              <span>Nego Estimasi Via WhatsApp</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
            <p className="text-center text-4xs text-zinc-500 italic mt-3 leading-normal">
              *Biaya kasar ini dihitung otomatis dan dapat berfluktuasi berdasarkan detail kontur lahan & desain final arsitektur Anda di lapangan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
