/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Quote, Eye, Target, Sparkles, Award, Shield, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { IMAGES } from '../constants/images';
import OptimizedImage from './OptimizedImage';
import InteractiveMap from './InteractiveMap';

export default function AboutTab() {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div id="about-tab-view" className="space-y-16 pb-12">
      
      {/* ================= HEADER BANNER ================= */}
      <section id="about-banner" className="relative bg-orange-600 py-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-black/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-60 h-60 bg-amber-500/20 rounded-full blur-2xl pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left space-y-3">
          <span className="text-white/85 text-3xs font-mono font-black tracking-widest uppercase">
            PROFIL PERUSAHAAN
          </span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-black font-sans text-white uppercase tracking-tight m-0">
            Tukang Bangunan Tangerang
          </h1>
          <p className="text-zinc-100/90 text-xs md:text-sm font-sans italic max-w-2xl">
            Dari ruko hingga rumah mewah, kami menggabungkan material prima dan silsilah rekayasa struktur kokoh demi menjamin stabilitas tempat bernaung.
          </p>
        </div>
      </section>

      {/* ================= FOUNDER COVER (ARTISTIC PHOTO & INSPIRATIONAL QUOTE) ================= */}
      <section id="about-founder-focus" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-center">
          
          {/* Founder Artistic Layout Image - 5 columns */}
          <div className="lg:col-span-5 relative">
            {/* Visual background framing badge */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-orange-500 pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-orange-500 pointer-events-none" />
            
            <OptimizedImage
              src={IMAGES.founder}
              alt="Ir. Hendra Wijaya - CEO %26 Founder TBT Tangerang"
              aspectRatio="aspect-[4/5]"
              className="rounded-2xl shadow-2xl border-2 border-zinc-900 filter saturate-[0.95] contrast-[1.05]"
            />
            
            <div className="absolute bottom-5 left-5 right-5 bg-zinc-950/90 border border-zinc-800 p-4 rounded-xl backdrop-blur-sm shadow-xl">
              <span className="block text-orange-500 text-4xs font-mono font-black uppercase tracking-widest">
                FOUNDER & CEO
              </span>
              <h3 className="text-xs font-black text-white uppercase m-0 mt-0.5">
                Ir. Hendra Wijaya, M.T.
              </h3>
              <p className="text-zinc-500 text-5xs m-0 font-mono mt-0.5">
                Ikatan Ahli Sipil Indonesia (IASTI) #44172-TNG
              </p>
            </div>
          </div>

          {/* Inspirational quotes & Bio Copy - 7 columns */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-orange-500 text-3xs font-mono font-bold tracking-widest uppercase block">
              PIKIRAN UTAMA PENDIRI
            </span>
            
            <h2 className="text-lg md:text-2xl font-black text-white m-0 uppercase tracking-tight leading-tight">
              KOKOHNYA BANGUNAN BERMULA DARI INTEGRITAS STRUKTUR
            </h2>

            {/* Inspirational Quote Box */}
            <div className="bg-zinc-950 border border-zinc-900 p-6 rounded-2xl relative shadow-lg">
              <Quote className="w-12 h-12 text-orange-500/10 absolute -left-2 -top-4 pointer-events-none stroke-[1.5]" />
              <p className="text-zinc-300 text-xs italic leading-relaxed m-0 font-medium">
                “Bagi kami di TBT Tangerang, membangun bukan sekadar menyusun tumpukan bata dan menyiram adukan cor beton cepat kering. Ini adalah seni rekayasa menciptakan perlindungan, kenyamanan, dan mahakarya tempat kehidupan keluarga Anda dapat tumbuh sehat tanpa rasa cemas bocor.”
              </p>
              <span className="block mt-4 text-3xs font-mono font-bold text-orange-500 text-right uppercase">
                — Ir. Hendra Wijaya
              </span>
            </div>

            <div className="text-zinc-400 text-xs leading-relaxed space-y-4">
              <p>
                Didirikan oleh Ir. Hendra Wijaya setelah mendedikasikan 15 tahun bekerja di berbagai korporasi konstruksi sipil BUMN terkemuka tanah air, **Tukang Bangunan Tangerang (TBT)** didirikan untuk menjembatani sulitnya menjangkau tukang berintegritas tinggi dengan harga transparansi yang wajar di area Tangerang.
              </p>
              <p>
                Kami percaya transparansi bahan adalah segalanya. Kami menerapkan proses pengawasan berlapis pada setiap kedatangan semen murni, besi bertulang ulir SNI, hingga pemasangan plester anti retak, sehingga kami percaya diri memberikan Surat Garansi tertulis bemeterai bagi seluruh klien kami.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= VISI MISI SECTION (STAGGERED ANIMATION) ================= */}
      <section id="about-visi-misi" className="bg-zinc-950 py-16 border-y border-zinc-904">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-12">
            <span className="text-orange-500 text-3xs font-mono font-bold tracking-widest uppercase block">
              HALUAN KERJA KAMI
            </span>
            <h2 className="text-lg md:text-2xl font-black text-white m-0 uppercase tracking-tight">
              VISI, MISI & NILAI PRINSIP TBT
            </h2>
          </div>

          {/* Staggered entry items list using container-variants */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Visi */}
            <motion.div
              variants={itemVariants}
              className="bg-zinc-900/60 border border-zinc-850 p-6 rounded-2xl space-y-4 shadow hover:border-orange-500/30 transition-all duration-300"
            >
              <div className="p-3 bg-orange-600/10 border border-orange-500/20 text-orange-500 rounded-xl w-fit">
                <Eye className="w-5 h-5 shrink-0" />
              </div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider m-0">
                Visi Kami
              </h3>
              <p className="text-4xs text-zinc-400 leading-relaxed m-0">
                Menjadi standardisasi penyedia jasa tukang sipil dan konstruksi tepercaya nomor satu di Tangerang Raya, yang merepresentasikan mutu bangunan anti roboh, kejujuran anggaran RAB, dan kenyamanan pemeliharaan pasca serah terima kunci.
              </p>
            </motion.div>

            {/* Misi */}
            <motion.div
              variants={itemVariants}
              className="bg-zinc-900/60 border border-zinc-850 p-6 rounded-2xl space-y-4 shadow hover:border-orange-500/30 transition-all duration-300"
            >
              <div className="p-3 bg-orange-600/10 border border-orange-500/20 text-orange-500 rounded-xl w-fit">
                <Target className="w-5 h-5 shrink-0" />
              </div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider m-0">
                Misi Utama
              </h3>
              <p className="text-4xs text-zinc-400 leading-relaxed m-0">
                Menyediakan tukang-tukang handal berdedikasi tinggi yang dipandu pengawas ahli sipil profesional, memberantas penipuan volume Rencana Anggaran Biaya, serta mengandalkan inovasi material hemat energi sirkulasi mikro di sela hunian padat.
              </p>
            </motion.div>

            {/* Nilai Inti */}
            <motion.div
              variants={itemVariants}
              className="bg-zinc-900/60 border border-zinc-850 p-6 rounded-2xl space-y-4 shadow hover:border-orange-500/30 transition-all duration-300"
            >
              <div className="p-3 bg-orange-600/10 border border-orange-500/20 text-orange-500 rounded-xl w-fit">
                <Sparkles className="w-5 h-5 shrink-0" />
              </div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider m-0">
                Nilai Intrinsik
              </h3>
              <p className="text-4xs text-zinc-400 leading-relaxed m-0">
                Presisi millimeter pada pemasangan plester, kokoh ganda pada pembengkokan sengkang besi, kejujuran mutlak pada sisa takaran logistik, dan respon santun 24 jam melayani segala keluhan renovasi ruko dan rumah pribadi milik klien kami.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= THE STRENGTHS AND CREDENTIALS ================= */}
      <section id="about-strengths" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-2 p-4">
            <Award className="w-8 h-8 text-orange-500 mx-auto stroke-[1.8]" />
            <span className="block text-lg font-black text-white font-mono">15+ TAHUN</span>
            <p className="text-4xs text-zinc-500 uppercase tracking-widest font-bold">Reputasi Sipil Sipit</p>
          </div>
          <div className="text-center space-y-2 p-4 border-y md:border-y-0 md:border-x border-zinc-900">
            <Shield className="w-8 h-8 text-orange-500 mx-auto stroke-[1.8]" />
            <span className="block text-lg font-black text-white font-mono">GERATIS 100%</span>
            <p className="text-4xs text-zinc-500 uppercase tracking-widest font-bold">Survei Pengukuran & RAB</p>
          </div>
          <div className="text-center space-y-2 p-4">
            <Users className="w-8 h-8 text-orange-500 mx-auto stroke-[1.8]" />
            <span className="block text-lg font-black text-white font-mono">150+ RUMAH</span>
            <p className="text-4xs text-zinc-500 uppercase tracking-widest font-bold">Terbangun & Direnovasi</p>
          </div>
        </div>
      </section>

      {/* ================= MAP INTERAKTIF (DI SETIAP BAWAH HALAMAN) ================= */}
      <section id="about-bottom-map-widget" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="space-y-1">
          <span className="text-orange-500 text-3xs font-mono font-bold tracking-widest uppercase block">
            NAVIGASI ALAMAT KANTOR
          </span>
          <h3 className="text-xs font-bold text-zinc-300 uppercase tracking-wider m-0">
            KANTOR FISIK TUKANG BANGUNAN TANGERANG
          </h3>
        </div>
        <InteractiveMap id="about-bottom-map" showOverlayCard={false} />
      </section>

    </div>
  );
}
