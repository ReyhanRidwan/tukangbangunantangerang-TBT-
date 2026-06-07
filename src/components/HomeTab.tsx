/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ArrowRight, Star, Quote, ChevronDown, BookOpen, Calendar, HelpCircle, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ActiveTab } from '../types';
import { IMAGES } from '../constants/images';
import { SERVICES, PROJECTS, TESTIMONIALS, FAQS, ARTICLES } from '../constants/data';
import OptimizedImage from './OptimizedImage';
import BeforeAfterSlider from './BeforeAfterSlider';
import CostCalculator from './CostCalculator';
import InteractiveMap from './InteractiveMap';

interface HomeTabProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function HomeTab({ setActiveTab }: HomeTabProps) {
  // 1. Hero Cross-Fade Slides Autoplay
  const [heroIndex, setHeroIndex] = useState(0);
  const heroSlides = [IMAGES.heroSlide1, IMAGES.heroSlide2];

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // 2. FAQ accordions
  const [activeFaqId, setActiveFaqId] = useState<string | null>('f2'); // Open first by default

  return (
    <div id="home-tab-view" className="space-y-20 pb-12">
      
      {/* ================= HERO SECTION ================= */}
      <section id="hero-banner" className="relative h-[65vh] md:h-[750px] w-full bg-zinc-950 overflow-hidden flex items-center justify-center">
        {/* Background cross-fader */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={heroIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={heroSlides[heroIndex]}
                alt={`Slide ${heroIndex + 1}`}
                className="w-full h-full object-cover scale-102 filter brightness-[0.7] saturate-[1.05]"
              />
            </motion.div>
          </AnimatePresence>
          {/* Precise contrast overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/40" />
        </div>

        {/* Content Centered Container */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-6">
          
          {/* Badge Atas Kotak Pill Transparan */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center"
          >
            <div className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-md shadow-inner text-white tracking-widest text-3xs font-black uppercase text-center">
              ⭐ KOKOH, PRESISI, DAN DIBANGUN UNTUK GENERASI.
            </div>
          </motion.div>

          {/* Judul Utama (Ukuran sedang sesuai spek: text-xl -> lg:text-4xl) */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-xl md:text-3xl lg:text-4xl font-black font-sans text-white uppercase tracking-tight max-w-3xl mx-auto leading-tight"
          >
            “Wujudkan Rumah Impian Anda dari Nol Hingga Sempurna.”
          </motion.h1>

          {/* Sub-deskripsi (Kecil & Lembut miring) */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-zinc-400 text-xs md:text-sm font-sans italic max-w-2xl mx-auto leading-relaxed"
          >
            “Kami percaya struktur yang kuat berawal dari perencanaan yang matang. Dari bangun baru hingga renovasi total, kami hadir memastikan setiap sudut hunian Anda kokoh, fungsional, dan bernilai tinggi.”
          </motion.p>

          {/* Tombol CTA (Capsule Oval, Tanpa bg tebal, border putih berubah ke amber/gold halus) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="pt-4 flex justify-center"
          >
            <button
              id="hero-cta-btn"
              onClick={() => setActiveTab('contact')}
              className="px-6 py-3 border border-white text-white rounded-full text-2xs md:text-xs font-black uppercase tracking-wider bg-transparent transition-colors duration-400 hover:border-amber-500 hover:text-amber-400 hover:shadow-lg hover:shadow-amber-500/5 cursor-pointer flex items-center gap-2 group"
            >
              <span>Mulai Konsultasi Proyek</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

        </div>
      </section>

      {/* ================= SERVICE HIGHLIGHTS ================= */}
      <section id="services-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <span className="text-orange-500 text-3xs font-mono font-bold tracking-widest uppercase">
            LAYANAN UTAMA
          </span>
          <h2 className="text-lg md:text-2xl font-black uppercase tracking-tight text-white m-0">
            KATEGORI PEKERJAAN KONSTRUKSI
          </h2>
          <div className="w-12 h-1 bg-orange-600 mx-auto rounded" />
        </div>

        {/* 4-column responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((srv, idx) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-zinc-950 border border-zinc-900 rounded-xl overflow-hidden hover:border-orange-500/40 p-5 flex flex-col justify-between space-y-4 group transition-all hover:shadow-xl"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-orange-600/10 border border-orange-500/20 text-orange-500 flex items-center justify-center shrink-0">
                  <span className="text-lg font-bold font-mono">0{idx + (1 as number)}</span>
                </div>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider m-0 group-hover:text-orange-500 transition-colors">
                  {srv.title}
                </h3>
                <p className="text-4xs text-zinc-550 leading-relaxed m-0 text-zinc-400">
                  {srv.description}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-900 flex justify-between items-center">
                <button
                  id={`srv-learn-more-${srv.id}`}
                  onClick={() => setActiveTab('services')}
                  className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 group-hover:text-amber-500 flex items-center gap-1 cursor-pointer transition-all"
                >
                  <span>Selengkapnya</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= BEFORE AFTER PREVIEW ================= */}
      <section id="project-shortcut" className="bg-zinc-950 border-y border-zinc-900/60 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Copy Left - 5 columns */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-orange-500 text-3xs font-mono font-bold tracking-widest uppercase block">
              KOMPARASI FISIK REALIS
            </span>
            <h2 className="text-lg md:text-2xl font-black text-white m-0 uppercase tracking-tight leading-tight">
              KUALITAS FINISHING TANPA KERAGUAN
            </h2>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Lihat perbedaan dramatis hasil kerja tim Tukang Bangunan Tangerang. Melalui manajemen proyek rapi, kami mengubah bangunan lama yang usang dan bocor menjadi rumah idaman yang bernilai jual tinggi.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <ShieldCheck className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Teknologi waterproofing polyurethane bergaransi</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <ShieldCheck className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Pemasangan keramik tanpa cacat rongga udara</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                id="view-all-projects-btn"
                onClick={() => setActiveTab('projects')}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all cursor-pointer shadow-lg shadow-orange-600/10"
              >
                <span>Lihat Semua Proyek Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Interactive Before After Slider Right - 7 columns */}
          <div className="lg:col-span-7">
            <BeforeAfterSlider
              id="home-visual-slider"
              before={IMAGES.homeBefore}
              after={IMAGES.homeAfter}
              aspectRatio="aspect-[16/10]"
            />
            <p className="text-center text-4xs text-zinc-500 italic mt-3">
              *Geser panel di atas untuk kontras perbandingan pengerjaan cat dinding eksterior dan dak cor.
            </p>
          </div>

        </div>
      </section>

      {/* ================= THE COST CALCULATOR ================= */}
      <section id="rab-calculator" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-8">
          <span className="text-orange-500 text-3xs font-mono font-bold tracking-widest uppercase">
            SIMULASI ANGGARAN
          </span>
          <h2 className="text-lg md:text-2xl font-black uppercase tracking-tight text-white m-0">
            ESTIMASI ANGGARAN BANGUN RUMAH
          </h2>
          <p className="text-xs text-zinc-400 max-w-xl mx-auto">
            Gunakan kalkulator RAB kasar kami untuk memperkirakan biaya konstruksi bangunan Anda di area Tangerang secara instan.
          </p>
        </div>

        <CostCalculator />
      </section>

      {/* ================= TESTIMONI VERTICAL (MOBILE STACKED, 3 ITEMS) ================= */}
      <section id="testimonials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <span className="text-orange-500 text-3xs font-mono font-bold tracking-widest uppercase">
            PENGALAMAN KLIEN TBT
          </span>
          <h2 className="text-lg md:text-2xl font-black uppercase tracking-tight text-white m-0">
            APA KATA MEREKA?
          </h2>
          <div className="w-12 h-1 bg-orange-600 mx-auto rounded" />
        </div>

        {/* 3 Vertically Stacked Testimonials on mobile, responsive rows on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((t, idx) => (
            <div
              key={t.id}
              id={`testi-${t.id}`}
              className="bg-zinc-950 border border-zinc-900/80 p-6 rounded-2xl flex flex-col justify-between space-y-6 shadow-md"
            >
              <div className="space-y-4">
                {/* Visual Stars */}
                <div className="flex text-orange-500">
                  {[...Array(t.rating)].map((_, sIdx) => (
                    <Star key={sIdx} className="w-4 h-4 fill-current shrink-0" />
                  ))}
                </div>
                <p className="text-zinc-300 text-xs italic leading-relaxed m-0 relative">
                  <Quote className="w-8 h-8 text-orange-500/10 absolute -left-2 -top-3 pointer-events-none" />
                  “{t.content}”
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-zinc-900">
                <div className="w-8 h-8 rounded-full bg-zinc-800 text-orange-500 flex items-center justify-center font-bold text-xs font-mono">
                  {t.name.split(' ')[0][0]}
                  {t.name.split(' ')[1]?.[0] || ''}
                </div>
                <div>
                  <h4 className="text-2xs font-extrabold text-white uppercase m-0 leading-none">
                    {t.name}
                  </h4>
                  <span className="text-4xs text-zinc-550 block mt-1.5 font-sans font-medium">
                    {t.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= HOME ARTICLES (UP TO 3) ================= */}
      <section id="home-blog-feed" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between border-b border-zinc-900 pb-5 mb-10">
          <div className="space-y-2">
            <span className="text-orange-500 text-3xs font-mono font-bold tracking-widest uppercase">
              ARTIKEL & WAWASAN
            </span>
            <h2 className="text-lg md:text-2xl font-black uppercase tracking-tight text-white m-0">
              PANDUAN PEMBANGUNAN
            </h2>
          </div>
          <button
            id="read-more-articles-shortcut"
            onClick={() => setActiveTab('faq')} // In FAQ/Articles directory
            className="text-xs uppercase tracking-widest font-black text-orange-500 hover:text-white flex items-center gap-1.5 cursor-pointer transition-all"
          >
            <span>Selengkapnya</span>
            <BookOpen className="w-4 h-4 shrink-0" />
          </button>
        </div>

        {/* Display top 3 articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES.slice(0, 3).map((art, idx) => (
            <article
              key={art.id}
              className="bg-zinc-950 border border-zinc-900/80 rounded-2xl overflow-hidden group hover:border-zinc-800 hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <OptimizedImage
                  src={art.image}
                  alt={art.title}
                  aspectRatio="aspect-video"
                />
                
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-3 text-4xs font-mono text-zinc-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {art.date}
                    </span>
                    <span>•</span>
                    <span>{art.readTime}</span>
                  </div>
                  
                  <span className="inline-block px-2 py-0.5 bg-orange-600/10 text-orange-500 text-5xs font-mono font-bold uppercase rounded border border-orange-500/10">
                    {art.category}
                  </span>
                  
                  <h3 className="text-xs font-bold uppercase tracking-wide text-zinc-100 group-hover:text-orange-500 transition-colors leading-snug m-0">
                    {art.title}
                  </h3>
                  
                  <p className="text-4xs text-zinc-400 leading-relaxed line-clamp-3 m-0">
                    {art.summary}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  id={`home-art-btn-${art.id}`}
                  onClick={() => setActiveTab('faq')}
                  className="text-3xs uppercase tracking-widest font-extrabold text-zinc-400 group-hover:text-orange-500 flex items-center gap-1.5 cursor-pointer transition-all"
                >
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= HOME INTERACTIVE FAQ ================= */}
      <section id="home-faq" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <span className="text-orange-500 text-3xs font-mono font-bold tracking-widest uppercase">
            INFORMASI UMUM
          </span>
          <h2 className="text-lg md:text-2xl font-black uppercase tracking-tight text-white m-0">
            PERTANYAAN PENTING (FAQ)
          </h2>
          <div className="w-12 h-1 bg-orange-600 mx-auto rounded" />
        </div>

        {/* Minimalist interactive accordion */}
        <div className="space-y-3">
          {FAQS.slice(0, 3).map((faq) => {
            const isOpen = activeFaqId === faq.id;
            return (
              <div
                key={faq.id}
                id={`home-faq-accord-${faq.id}`}
                className="bg-zinc-950 border border-zinc-900 rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  id={`home-faq-toggle-${faq.id}`}
                  onClick={() => setActiveFaqId(isOpen ? null : faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left text-xs font-bold text-zinc-150 uppercase tracking-wide cursor-pointer text-white focus:outline-none focus:ring-0 hover:bg-zinc-900/40"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-orange-500' : ''}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-5 pt-1 text-4xs md:text-3xs text-zinc-400 leading-relaxed border-t border-zinc-900 bg-zinc-950">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= HOME BIG CTA BANNER ================= */}
      <section id="big-consultation-banner" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-zinc-950 to-zinc-900 border border-zinc-850 p-8 md:p-12 rounded-3xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-4 max-w-2xl text-center md:text-left">
            <span className="px-3 py-1 bg-orange-600/10 border border-orange-500/20 text-orange-500 text-4xs font-mono font-bold tracking-widest uppercase rounded">
              KONSULTASI GRATIS
            </span>
            <h3 className="text-md md:text-xl font-black uppercase text-white m-0">
              Punya Rencana Bangun Baru atau Renovasi Rumah?
            </h3>
            <p className="text-zinc-400 text-2xs md:text-xs leading-relaxed m-0">
              Diskusikan kelayakan desain, hitungan rancangan anggaran kasar (RAB), dan rancang jadwal survei lokasi Tangerang gratis bersama tim profesional kami sekarang.
            </p>
          </div>

          <a
            id="home-wa-chat-banner"
            href="https://wa.me/6289638779870"
            target="_blank"
            referrerPolicy="no-referrer"
            className="px-6 py-4 bg-orange-600 hover:bg-orange-500 text-white font-extrabold text-xs uppercase tracking-widest rounded-xl shadow-lg transition-all scale-100 hover:scale-103 cursor-pointer shrink-0 inline-flex items-center gap-2"
          >
            <span>Hubungi Via WhatsApp</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </a>
        </div>
      </section>

      {/* ================= MAP INTERAKTIF (DI SETIAP BAWAH HALAMAN) ================= */}
      <section id="bottom-map-widget" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="space-y-1">
          <span className="text-orange-500 text-3xs font-mono font-bold tracking-widest uppercase block">
            LOKASI KANTOR KAMI
          </span>
          <h3 className="text-xs font-bold text-zinc-300 uppercase tracking-wider m-0">
            KUNJUNGI ATAU SURVEI LOKASI
          </h3>
        </div>
        <InteractiveMap id="home-bottom-map" showOverlayCard={true} />
      </section>

    </div>
  );
}
