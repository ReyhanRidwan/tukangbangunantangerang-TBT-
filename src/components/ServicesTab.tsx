/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hammer, ShieldCheck, ArrowRight, Paintbrush, Compass, ShieldAlert, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants/data';
import OptimizedImage from './OptimizedImage';
import InteractiveMap from './InteractiveMap';

export default function ServicesTab() {
  
  // Render corresponding lucide icon dynamically based on name string
  const renderIcon = (name: string) => {
    switch (name) {
      case 'Hammer':
        return <Hammer className="w-6 h-6 text-orange-500" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-orange-500" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-orange-500" />;
      case 'Paintbrush':
        return <Paintbrush className="w-6 h-6 text-orange-500" />;
      default:
        return <Hammer className="w-6 h-6 text-orange-500" />;
    }
  };

  return (
    <div id="services-tab-view" className="space-y-16 pb-12">
      
      {/* ================= HEADER BANNER ================= */}
      <section id="services-banner" className="relative bg-orange-600 py-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-black/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-60 h-60 bg-amber-500/20 rounded-full blur-2xl pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left space-y-3">
          <span className="text-white/85 text-3xs font-mono font-black tracking-widest uppercase">
            DETAIL JASA & STRUKTUR
          </span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-black font-sans text-white uppercase tracking-tight m-0">
            Layanan Konstruksi TBT
          </h1>
          <p className="text-zinc-100/90 text-xs md:text-sm font-sans italic max-w-2xl">
            Dari sketsa konsep hingga serah terima kunci bangunan selesai, kami menyediakan pengerjaan holistik dengan jaminan transparansi standar mutu tinggi.
          </p>
        </div>
      </section>

      {/* ================= 2-COLUMN GRID SERVICES LIST ================= */}
      <section id="services-main-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Responsive Grid layout - 2 columns on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {SERVICES.map((srv, idx) => (
            <motion.div
              key={srv.id}
              id={`service-card-${srv.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-zinc-950 border border-zinc-900 rounded-2xl overflow-hidden shadow-xl p-6 md:p-8 flex flex-col justify-between space-y-6 hover:shadow-[0_20px_50px_rgba(234,88,12,0.15)] hover:border-orange-600/50 transition-all duration-300 group"
            >
              <div className="space-y-6">
                
                {/* 1. Header segment inside card */}
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl group-hover:bg-orange-600/10 group-hover:border-orange-500/30 transition-colors shrink-0">
                    {renderIcon(srv.iconName)}
                  </div>
                  <div>
                    <span className="text-5xs font-mono font-bold text-orange-500 tracking-widest uppercase">
                      KAPABILITAS 0{idx + (1 as number)}
                    </span>
                    <h3 className="text-sm md:text-base font-black text-white uppercase tracking-tight m-0 group-hover:text-orange-500 transition-colors">
                      {srv.title}
                    </h3>
                  </div>
                </div>

                {/* 2. Supported Image Pendukung with CLS Prevention aspect-video */}
                <OptimizedImage
                  src={srv.image}
                  alt={srv.title}
                  aspectRatio="aspect-video"
                  className="rounded-xl border border-zinc-900 group-hover:scale-[1.01] transition-transform duration-300"
                />

                {/* 3. Description text */}
                <p className="text-4xs md:text-3xs text-zinc-400 leading-relaxed m-0 font-sans">
                  {srv.description}
                </p>

                {/* 4. Bullet Points features Checklist */}
                <div className="space-y-2.5 pt-4 border-t border-zinc-900">
                  <h4 className="text-5xs font-mono font-black tracking-widest text-zinc-500 uppercase m-0">
                    Spesifikasi & Standard Operating Procedure:
                  </h4>
                  <ul className="grid grid-cols-1 gap-2 m-0 p-0">
                    {srv.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-4xs md:text-3xs text-zinc-350 leading-relaxed">
                        <ShieldCheck className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* 5. Direct WhatsApp query launcher for specific service */}
              <div className="pt-6 border-t border-zinc-900">
                <a
                  id={`srv-wa-link-${srv.id}`}
                  href={`https://wa.me/6289638779870?text=Halo%20TBT%20Tangerang,%20saya%20tertarik%20dengan%20layanan%20"${encodeURIComponent(srv.title)}".%20Mohon%20info%20selengkapnya.`}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-zinc-900 border border-zinc-800 hover:border-orange-500 hover:bg-orange-600 hover:text-white text-zinc-300 font-bold text-xs uppercase tracking-widest rounded-xl transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 shrink-0 fill-current" />
                  <span>Konsultasi Jasa {srv.title.split(' ')[0]}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </section>

      {/* ================= QUICK PROCESS EXPLANATION ================= */}
      <section id="services-process" className="bg-zinc-950 py-16 border-y border-zinc-905">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-12">
            <span className="text-orange-500 text-3xs font-mono font-bold tracking-widest uppercase block">
              ALUR KERJA RESMI
            </span>
            <h2 className="text-lg md:text-2xl font-black text-white m-0 uppercase tracking-tight">
              4 Langkah Mudah Mulai Proyek
            </h2>
            <p className="text-xs text-zinc-500 max-w-xl mx-auto leading-relaxed">
              Kami menyederhanakan birokrasi pembangunan demi efisiensi waktu pengerjaan proyek tanpa mengurangi transparansi mutu kargo material.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {[
              { step: '01', title: 'Hubungi WhatsApp & Konsultasi', desc: 'Diskusikan rencana awal denah tata letak, lokasi, luas bangunan m², serta perkiraan RAB kasar awal.' },
              { step: '02', title: 'Survei Lapangan & Pengukuran', desc: 'Tim teknik sipil kami meninjau lokasi fisik di Tangerang raya untuk mengukur batas kontur tanah rujukan.' },
              { step: '03', title: 'Teken SPK & Pengerjaan Gambar', desc: 'Kami menyiapkan visual rendering 3D, gambar kerja teknis mendalam, buku RAB resmi, dan tanda tangan SPK bermeterai.' },
              { step: '04', title: 'Pelaksanaan & Serah Terima', desc: 'Konstruksi fisik berjalan tertata dipantau terus-menerus hingga pengerjaan serah-terima kunci bersertifikat garansi.' },
            ].map((p, pIdx) => (
              <div key={pIdx} className="bg-zinc-900/40 border border-zinc-850 p-6 rounded-2xl relative space-y-3">
                <div className="text-2xl font-black font-mono text-orange-500/25 absolute right-4 top-4">
                  {p.step}
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wide pr-8 m-0 leading-snug">
                  {p.title}
                </h4>
                <p className="text-4xs text-zinc-400 leading-relaxed m-0">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MAP INTERAKTIF (DI SETIAP BAWAH HALAMAN) ================= */}
      <section id="services-bottom-map-widget" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="space-y-1">
          <span className="text-orange-500 text-3xs font-mono font-bold tracking-widest uppercase block">
            NAVIGASI ALAMAT KANTOR
          </span>
          <h3 className="text-xs font-bold text-zinc-300 uppercase tracking-wider m-0">
            KANTOR FISIK TUKANG BANGUNAN TANGERANG
          </h3>
        </div>
        <InteractiveMap id="services-bottom-map" showOverlayCard={false} />
      </section>

    </div>
  );
}
