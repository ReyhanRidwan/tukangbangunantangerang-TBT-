/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { HelpCircle, ChevronDown, Calendar, BookOpen, Clock, Tag, X, ArrowLeft, MessageSquare, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS, ARTICLES } from '../constants/data';
import { FAQItem, Article } from '../types';
import OptimizedImage from './OptimizedImage';
import InteractiveMap from './InteractiveMap';

export default function FaqTab() {
  
  // 1. FAQ Filtering & Expansion state
  const [activeCategory, setActiveCategory] = useState<'semua' | 'layanan' | 'biaya' | 'waktu'>('semua');
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>('f1');

  const filteredFaqs = FAQS.filter(
    (faq) => activeCategory === 'semua' || faq.category === activeCategory
  );

  // 2. Article Reader Modal state
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <div id="faq-tab-view" className="space-y-16 pb-12">
      
      {/* ================= HEADER BANNER ================= */}
      <section id="faq-banner" className="relative bg-orange-600 py-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-black/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-60 h-60 bg-amber-500/20 rounded-full blur-2xl pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left space-y-3">
          <span className="text-white/85 text-3xs font-mono font-black tracking-widest uppercase">
            PUSAT INFORMASI & ARTIKEL
          </span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-black font-sans text-white uppercase tracking-tight m-0">
            FAQ & Wawasan Edukasi
          </h1>
          <p className="text-zinc-100/90 text-xs md:text-sm font-sans italic max-w-2xl">
            Jawaban transparan atas sistem kontrak pengerjaan bangunan ruko dan rumah tinggal, serta kajian artikel teknik sipil terpercaya.
          </p>
        </div>
      </section>

      {/* ================= FAQ ACCORDION SECTION ================= */}
      <section id="faq-accordion-section" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-3 mb-10">
          <span className="text-orange-500 text-3xs font-mono font-bold tracking-widest uppercase block">
            PERTANYAAN UMUM
          </span>
          <h2 className="text-lg md:text-2xl font-black uppercase text-white m-0 tracking-tight">
            SISTEM KERJA BERSAMA TBT
          </h2>
          <div className="w-12 h-1 bg-orange-600 mx-auto rounded" />
        </div>

        {/* Minimalist Filter Category Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {[
            { label: 'Semuanyan', val: 'semua' as const },
            { label: 'Jasa & Layanan', val: 'layanan' as const },
            { label: 'Anggaran & Biaya (RAB)', val: 'biaya' as const },
            { label: 'Waktu & Garansi', val: 'waktu' as const },
          ].map((cat) => (
            <button
              key={cat.val}
              id={`faq-cat-btn-${cat.val}`}
              onClick={() => {
                setActiveCategory(cat.val);
                setExpandedFaqId(null);
              }}
              className={`px-4 py-2 text-3xs md:text-2xs font-black uppercase tracking-wider rounded-full border transition-all cursor-pointer ${
                activeCategory === cat.val
                  ? 'bg-orange-600 border-orange-500 text-white shadow-md shadow-orange-500/10'
                  : 'bg-zinc-950 border-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.map((faq) => {
              const isOpen = expandedFaqId === faq.id;
              return (
                <motion.div
                  key={faq.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className={`bg-zinc-950 border rounded-xl overflow-hidden transition-colors ${
                    isOpen ? 'border-orange-600/50' : 'border-zinc-900'
                  }`}
                >
                  <button
                    id={`faq-accord-toggle-${faq.id}`}
                    onClick={() => setExpandedFaqId(isOpen ? null : faq.id)}
                    className="w-full flex items-center justify-between p-5 text-left text-xs font-bold text-zinc-150 uppercase tracking-wide cursor-pointer text-white focus:outline-none hover:bg-zinc-900/40"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-4 h-4 text-orange-500 shrink-0" />
                      <span>{faq.question}</span>
                    </span>
                    <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-orange-500' : ''}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-5 pb-5 pt-1 text-4xs md:text-3xs text-zinc-400 leading-relaxed border-t border-zinc-900 bg-zinc-950/80">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </section>

      {/* ================= ARTICLES SECTION (EXACTLY 5 ARTICLES) ================= */}
      <section id="articles-guideline-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-zinc-900 pt-16">
        
        <div className="text-center space-y-3 mb-12">
          <span className="text-orange-500 text-3xs font-mono font-bold tracking-widest uppercase block">
            WAWASAN EDUKASI SIPIL
          </span>
          <h2 className="text-lg md:text-2xl font-black uppercase text-white m-0 tracking-tight">
            KUMPULAN TIP & PANDUAN BANGUNAN
          </h2>
          <p className="text-xs text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Edukasi praktis bagi masyarakat Tangerang seputar material bangunan, efisiensi anggaran, dan kiat penataan tata ruang modern.
          </p>
        </div>

        {/* 5-Article Grid structure layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {ARTICLES.map((art, idx) => {
            // Give article 1 a larger bento layout to emphasize premium content
            const isLarge = idx === 0;
            return (
              <motion.article
                key={art.id}
                id={`article-card-${art.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-zinc-950 border border-zinc-900 rounded-2xl overflow-hidden group hover:border-orange-500/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
                  isLarge ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  <OptimizedImage
                    src={art.image}
                    alt={art.title}
                    aspectRatio={isLarge ? 'aspect-video lg:aspect-[21/10]' : 'aspect-video'}
                  />
                  
                  <div className="p-6 space-y-4">
                    {/* Metas */}
                    <div className="flex items-center gap-4 text-5xs font-mono text-zinc-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-zinc-600" />
                        {art.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-zinc-600" />
                        {art.readTime}
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-orange-600/10 text-orange-500 text-5xs font-mono font-bold uppercase rounded border border-orange-500/15">
                      <Tag className="w-3 h-3" />
                      <span>{art.category}</span>
                    </span>

                    <h3 className={`font-black uppercase tracking-wide text-zinc-100 group-hover:text-orange-500 transition-colors leading-snug m-0 ${
                      isLarge ? 'text-xs md:text-sm' : 'text-xs'
                    }`}>
                      {art.title}
                    </h3>

                    <p className="text-4xs text-zinc-400 leading-relaxed m-0 line-clamp-3">
                      {art.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    id={`open-art-btn-${art.id}`}
                    onClick={() => setSelectedArticle(art)}
                    className="px-4 py-2.5 bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-orange-600 hover:border-orange-500 rounded-lg text-4xs font-mono uppercase font-bold cursor-pointer transition-all flex items-center gap-1.5"
                  >
                    <span>Baca Artikel Lengkap</span>
                    <BookOpen className="w-3.5 h-3.5 shrink-0" />
                  </button>
                </div>

              </motion.article>
            );
          })}
        </div>

      </section>

      {/* ================= ARTICLES SIDEWAY READER POPUP WINDOW (MODAL WINDOW) ================= */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            id="reader-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              id="reader-modal-content"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-zinc-950 border border-zinc-850 rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl max-h-[85vh] flex flex-col"
            >
              
              {/* Modal header with close button */}
              <div className="p-5 border-b border-zinc-900 flex items-center justify-between bg-zinc-950 sticky top-0 z-10">
                <div className="flex items-center gap-2">
                  <button
                    id="reader-back-btn"
                    onClick={() => setSelectedArticle(null)}
                    className="p-1 px-2.5 bg-zinc-900 border border-zinc-800 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer text-5xs font-mono font-bold uppercase flex items-center gap-1"
                  >
                    <ArrowLeft className="w-3 h-3" />
                    <span>Kembali</span>
                  </button>
                  <span className="text-5xs font-mono text-zinc-500 uppercase">
                    PEMBACA WAWASAN TBT
                  </span>
                </div>
                <button
                  id="reader-close-btn"
                  onClick={() => setSelectedArticle(null)}
                  className="p-2 bg-zinc-900 text-zinc-400 hover:text-white rounded-full transition-colors cursor-pointer border border-zinc-850"
                  aria-label="Tutup jendela"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Scrollable Main Article Area */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-6">
                
                {/* Visual */}
                <OptimizedImage
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  aspectRatio="aspect-video"
                  className="rounded-2xl"
                />

                <div className="space-y-4">
                  {/* Category & Time details */}
                  <div className="flex flex-wrap items-center gap-3 text-4xs font-mono text-zinc-500">
                    <span className="px-2 py-0.5 bg-orange-600/10 text-orange-500 rounded border border-orange-500/10 uppercase font-bold text-5xs">
                      {selectedArticle.category}
                    </span>
                    <span>•</span>
                    <span>Oleh: Ir. Hendra Wijaya</span>
                    <span>•</span>
                    <span>{selectedArticle.date}</span>
                    <span>•</span>
                    <span>{selectedArticle.readTime}</span>
                  </div>

                  <h2 className="text-xs md:text-sm font-black uppercase tracking-wide text-white leading-snug m-0">
                    {selectedArticle.title}
                  </h2>

                  <p className="text-zinc-400 text-4xs md:text-3xs italic border-l-2 border-orange-500 pl-4 leading-relaxed font-medium">
                    “{selectedArticle.summary}”
                  </p>

                  {/* Main Paragraphs body */}
                  <div className="text-zinc-350 text-4xs md:text-3xs leading-relaxed space-y-4 font-sans border-t border-zinc-900 pt-5">
                    {selectedArticle.content.split('\n\n').map((para, pIdx) => (
                      <p key={pIdx}>
                        {para}
                      </p>
                    ))}
                    <p>
                      Mempelajari sistem konstruksi yang aman adalah fondasi terbaik agar impian hunian Anda berdiri abadi. Jika Anda berniat memperhitungkan ulang Rencana Anggaran Biaya struktur rumah tinggal atau berkonsultasi mengenai takaran cor lantai dak cor agar tidak retak, jangan ragu mendiskusikannya langsung bersama tim engineering TBT Tangerang.
                    </p>
                  </div>
                </div>

              </div>

              {/* Modal footer consult CTA */}
              <div className="p-5 border-t border-zinc-900 bg-zinc-900/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-4xs text-zinc-500 italic text-center sm:text-left">
                  Ingin berdiskusi mengenai topik artikel ini lurus dengan penulis?
                </span>
                <a
                  id="modal-wa-article-discuss"
                  href={`https://wa.me/6289638779870?text=Halo%20Tim%20TBT,%20saya%20sedang%20membaca%20artikel%20"${encodeURIComponent(selectedArticle.title)}"%20dan%20tertarik%20konsultasi%20lanjut.`}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="px-4 py-2.5 bg-orange-600 hover:bg-orange-500 text-white font-bold text-5xs uppercase tracking-widest rounded-lg flex items-center gap-1.5 cursor-pointer shadow transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-current" />
                  <span>Konsul WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= MAP INTERAKTIF (DI SETIAP BAWAH HALAMAN) ================= */}
      <section id="faq-bottom-map-widget" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="space-y-1">
          <span className="text-orange-500 text-3xs font-mono font-bold tracking-widest uppercase block">
            NAVIGASI ALAMAT KANTOR
          </span>
          <h3 className="text-xs font-bold text-zinc-300 uppercase tracking-wider m-0">
            KANTOR FISIK TUKANG BANGUNAN TANGERANG
          </h3>
        </div>
        <InteractiveMap id="faq-bottom-map" showOverlayCard={false} />
      </section>

    </div>
  );
}
