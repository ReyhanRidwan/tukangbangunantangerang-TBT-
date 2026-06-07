/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Info, Calendar, User, Maximize2, MapPin, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { PROJECTS } from '../constants/data';
import BeforeAfterSlider from './BeforeAfterSlider';
import ProjectCarousel from './ProjectCarousel';
import InteractiveMap from './InteractiveMap';

export default function ProjectsTab() {
  return (
    <div id="projects-tab-view" className="space-y-16 pb-12">
      
      {/* ================= HEADER WITH DECORATIVE BLUR EFFECT ================= */}
      <section id="projects-hdr-banner" className="relative bg-orange-600 py-16 overflow-hidden">
        {/* Blur decorative circles */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-black/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-60 h-60 bg-amber-500/20 rounded-full blur-2xl pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left space-y-3">
          <span className="text-white/85 text-3xs font-mono font-black tracking-widest uppercase">
            PORTOFOLIO KONSTRUKSI
          </span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-black font-sans text-white uppercase tracking-tight m-0">
            Daftar Proyek TBT Tangerang
          </h1>
          <p className="text-zinc-100/90 text-xs md:text-sm font-sans italic max-w-2xl">
            Bukti nyata pengerjaan konstruksi handal, presisi, kokoh, dan bergaransi penuh di berbagai kawasan strategis Kota Tangerang.
          </p>
        </div>
      </section>

      {/* ================= PROJECTS PORTFOLIO ITERATION LIST ================= */}
      <section id="projects-list" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {PROJECTS.map((proj, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <motion.div
              key={proj.id}
              id={`portfolio-item-${proj.id}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
            >
              
              {/* 1. INFO PROYEK (KIRI / DESKTOP) - occupy 5 columns */}
              <div className="lg:col-span-5 space-y-5">
                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 bg-orange-600/10 border border-orange-500/20 text-orange-500 text-4xs font-mono font-bold uppercase rounded-md">
                    {proj.category}
                  </span>
                  <h2 className="text-md md:text-lg font-black text-white m-0 uppercase tracking-tight leading-snug">
                    {idx + 1}. {proj.title}
                  </h2>
                </div>

                {/* Meta details table/cards */}
                <div className="grid grid-cols-2 gap-3 bg-zinc-950 p-4 rounded-xl border border-zinc-900">
                  <div className="space-y-1">
                    <span className="text-5xs text-zinc-550 flex items-center gap-1 uppercase font-bold tracking-wider">
                      <User className="w-3 h-3 text-orange-500" /> Klien
                    </span>
                    <p className="text-3xs text-zinc-300 font-semibold">{proj.client}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-5xs text-zinc-550 flex items-center gap-1 uppercase font-bold tracking-wider">
                      <Calendar className="w-3 h-3 text-orange-500" /> Tahun
                    </span>
                    <p className="text-3xs text-zinc-300 font-semibold">{proj.year}</p>
                  </div>
                  <div className="space-y-1 pt-2 border-t border-zinc-900">
                    <span className="text-5xs text-zinc-550 flex items-center gap-1 uppercase font-bold tracking-wider">
                      <Maximize2 className="w-3 h-3 text-orange-500" /> Dimensi
                    </span>
                    <p className="text-3xs text-zinc-300 font-semibold">{proj.size}</p>
                  </div>
                  <div className="space-y-1 pt-2 border-t border-zinc-900">
                    <span className="text-5xs text-zinc-550 flex items-center gap-1 uppercase font-bold tracking-wider">
                      <MapPin className="w-3 h-3 text-orange-500" /> Lokasi
                    </span>
                    <p className="text-3xs text-zinc-300 font-semibold line-clamp-1">{proj.location}</p>
                  </div>
                </div>

                {/* Challenge and Solution - Italic as requested */}
                <div className="space-y-3.5 bg-zinc-950/40 p-5 rounded-xl border border-zinc-900/60">
                  <div className="space-y-1">
                    <h5 className="text-4xs font-mono font-black text-orange-500 tracking-wider uppercase flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                      Tantangan Lapangan:
                    </h5>
                    <p className="text-4xs text-zinc-400 italic leading-relaxed">
                      “{proj.challenge}”
                    </p>
                  </div>
                  <div className="space-y-1 pt-2.5 border-t border-zinc-900">
                    <h5 className="text-4xs font-mono font-black text-green-500 tracking-wider uppercase flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      Solusi Rekayasa TBT:
                    </h5>
                    <p className="text-4xs text-zinc-350 italic leading-relaxed font-medium">
                      “{proj.solution}”
                    </p>
                  </div>
                </div>

                <div className="pt-2 text-2xs text-zinc-500 leading-normal flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>Struktur telah lolos sertifikasi uji beban & kebocoran air.</span>
                </div>
              </div>

              {/* 2. VISUAL PROYEK (KANAN / DESKTOP) - occupy 7 columns */}
              <div id={`visual-block-${proj.id}`} className="lg:col-span-7 space-y-6">
                
                {/* Before After Slider Visual */}
                <div className="space-y-2">
                  <span className="text-5xs font-mono text-zinc-500 uppercase tracking-widest block">
                    • KLIK & GESER UNTUK KOMPARASI (SEBELUM / SESUDAH)
                  </span>
                  <BeforeAfterSlider
                    before={proj.before}
                    after={proj.after}
                    aspectRatio="aspect-video"
                  />
                </div>

                {/* Auto Slide Carousel Visual */}
                <div className="space-y-2">
                  <span className="text-5xs font-mono text-zinc-500 uppercase tracking-widest block">
                    • AUTO-SLIDE GALERI PROSES (PINDAH OTOMATIS 3 DETIK)
                  </span>
                  <ProjectCarousel
                    id={`gallery-${proj.id}`}
                    images={proj.gallery}
                    projectTitle={proj.title}
                  />
                </div>

              </div>

            </motion.div>
          );
        })}
      </section>

      {/* ================= BOTTOM PERSISTENT CTA ================= */}
      <section id="projects-cta" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-950 border border-zinc-900 p-8 rounded-2xl text-center space-y-6 shadow-2xl">
          <div className="inline-flex p-3 bg-orange-600/15 text-orange-500 rounded-full">
            <MessageSquare className="w-6 h-6 stroke-[2.2]" />
          </div>
          <div className="space-y-2">
            <h3 className="text-base md:text-lg font-black uppercase text-white m-0">
              Tertarik Mendesain Atau Merenovasi Dengan Konsep Serupa?
            </h3>
            <p className="text-zinc-400 text-xs max-w-xl mx-auto leading-relaxed">
              Dapatkan konsultasi gratis langsung bersama perancang arsitek dan kepala tukang TBT Tangerang. Survei lapangan Tangerang raya tanpa dipungut biaya sepeserpun!
            </p>
          </div>
          <div>
            <a
              id="projects-wa-bottom-btn"
              href="https://wa.me/6289638779870?text=Halo%20TBT%20Tangerang,%20saya%20melihat%20portfolio%20proyek%20Anda%20dan%20tertarik%20konsultasi."
              target="_blank"
              referrerPolicy="no-referrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-orange-600 hover:bg-orange-500 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all hover:scale-103 cursor-pointer shadow-lg shadow-orange-600/10"
            >
              <span>Diskusikan Proyek Anda Sekarang</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
      </section>

      {/* ================= MAP INTERAKTIF (DI SETIAP BAWAH HALAMAN) ================= */}
      <section id="projects-bottom-map-widget" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="space-y-1">
          <span className="text-orange-500 text-3xs font-mono font-bold tracking-widest uppercase block">
            NAVIGASI ALAMAT KANTOR
          </span>
          <h3 className="text-xs font-bold text-zinc-300 uppercase tracking-wider m-0">
            KANTOR FISIK TUKANG BANGUNAN TANGERANG
          </h3>
        </div>
        <InteractiveMap id="projects-bottom-map" showOverlayCard={false} />
      </section>

    </div>
  );
}
