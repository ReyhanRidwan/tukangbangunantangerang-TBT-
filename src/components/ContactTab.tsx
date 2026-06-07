/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, ChangeEvent, FormEvent } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare, ArrowRight, ShieldCheck, Map, Smartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import InteractiveMap from './InteractiveMap';

export default function ContactTab() {
  
  // 1. Interactive Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    scope: 'renovasi',
    size: '',
    location: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 2. Interactive Map Static Placeholder State
  const [loadInteractiveMap, setLoadInteractiveMap] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  // Precompile WhatsApp dispatch text based on submitted form values
  const getWhatsAppDispatchUrl = () => {
    const scopeLabel = formData.scope === 'baru' ? 'Bangun Baru Dari Nol' : formData.scope === 'renovasi' ? 'Renovasi Total/Parsial' : 'Desain Arsitektur';
    const text = `Halo Tukang Bangunan Tangerang (TBT) Resmi. Berikut rincian formulir konsultasi saya:

- Nama Pengirim: ${formData.name}
- WhatsApp No: ${formData.phone}
- Scope Pekerjaan: ${scopeLabel}
- Estimasi Luas: ${formData.size || '-'} m²
- Alamat Proyek: ${formData.location || '-'}
- Keterangan: ${formData.message}

Mohon dapat dihubungi kembali untuk jadwal survei lokasi Tangerang.`;
    
    return `https://wa.me/6289638779870?text=${encodeURIComponent(text)}`;
  };

  const address = 'Jl. Zeta 8 No.317, RT.002/RW.005, Karawaci Baru, Kec. Karawaci, Kota Tangerang, Banten 15116, Indonesia';

  return (
    <div id="contact-tab-viewer" className="space-y-16 pb-12">
      
      {/* ================= HEADER BANNER ================= */}
      <section id="contact-banner" className="relative bg-orange-600 py-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-black/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-60 h-60 bg-amber-500/20 rounded-full blur-2xl pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left space-y-3">
          <span className="text-white/85 text-3xs font-mono font-black tracking-widest uppercase">
            HUBUNGI TIM KAMI
          </span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-black font-sans text-white uppercase tracking-tight m-0">
            Formulir Konsultasi
          </h1>
          <p className="text-zinc-100/90 text-xs md:text-sm font-sans italic max-w-2xl">
            Sampaikan gagasan renovasi atau bangun baru rumah impian Anda. Kami menjamin kerahasiaan data dan estimasi profesional tercepat.
          </p>
        </div>
      </section>

      {/* ================= 2-COLUMN CONTACT LAYOUT ================= */}
      <section id="contact-split-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* COLUMN KIRI - ELEGAN ZINC-900 INFO SHEET (occupy 5 columns) */}
          <div className="lg:col-span-5 bg-zinc-900 p-6 md:p-8 rounded-2xl border border-zinc-800 space-y-8 shadow-2xl">
            
            <div className="space-y-2">
              <span className="text-orange-500 text-3xs font-mono font-bold tracking-widest uppercase block animate-pulse">
                • INFORMASI OPERASIONAL RESMI
              </span>
              <h3 className="text-sm font-bold text-white uppercase tracking-widest m-0 leading-none">
                Hubungi Kantor TBT
              </h3>
              <p className="text-zinc-500 text-4xs leading-relaxed m-0">
                Pintu lobi kantor utama kami melayani kunjungan fisik, konsultasi bahan bangunan, dan pameran contoh material rujukan Tangerang.
              </p>
            </div>

            {/* List */}
            <div className="space-y-6">
              
              {/* WhatsApp Row */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-zinc-950 text-orange-500 rounded-xl border border-zinc-800 shrink-0">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <span className="block text-5xs font-mono font-bold text-zinc-550 uppercase">WhatsApp Hotline</span>
                  <a
                    id="contact-wa-link-left"
                    href="https://wa.me/6289638779870"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="block text-2xs font-mono font-bold text-white hover:text-orange-500 transition-colors leading-none"
                  >
                    +62 896-3877-9870
                  </a>
                  <p className="text-5xs text-zinc-500 m-0">Buka 24 Jam melayani kegawatdaruratan atap bocor / dak retak.</p>
                </div>
              </div>

              {/* Email Row */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-zinc-950 text-orange-500 rounded-xl border border-zinc-800 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <span className="block text-5xs font-mono font-bold text-zinc-550 uppercase">Email Korporat</span>
                  <a
                    id="contact-email-link-left"
                    href="mailto:contact@tbtangerang.com"
                    className="block text-2xs font-mono font-bold text-white hover:text-orange-500 transition-colors leading-none"
                  >
                    contact@tbtangerang.com
                  </a>
                  <p className="text-5xs text-zinc-500 m-0">Waktu balasan kuotasi resmi estimasi RAB maks 1x12 jam.</p>
                </div>
              </div>

              {/* Address Row */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-zinc-950 text-orange-500 rounded-xl border border-zinc-800 shrink-0">
                  <MapPin className="w-5 h-5 fill-current" />
                </div>
                <div className="space-y-1.5">
                  <span className="block text-5xs font-mono font-bold text-zinc-550 uppercase">Alamat Kantor Pusat</span>
                  <p className="text-3xs text-zinc-300 m-0 leading-relaxed font-semibold">
                    {address}
                  </p>
                  <p className="text-5xs text-zinc-500 m-0">RT 002 / RW 005, Kelurahan Karawaci Baru (Dekat rute Jl. Jend Sudirman).</p>
                </div>
              </div>

            </div>

            {/* Jam layana label */}
            <div className="pt-6 border-t border-zinc-805 space-y-2">
              <span className="text-5xs font-mono text-zinc-500 uppercase tracking-widest block">
                • JAM OPERASIONAL SURVEI LAPANGAN:
              </span>
              <div className="flex justify-between items-center text-5xs text-zinc-450 uppercase font-bold tracking-wider">
                <span>Senin — Sabtu (Kunjungan Fisik)</span>
                <span className="text-orange-500">08:00 — 17:00 WIB</span>
              </div>
              <div className="flex justify-between items-center text-5xs text-zinc-455 uppercase font-bold tracking-wider">
                <span>Minggu & Hari Libur Nasional</span>
                <span className="text-orange-400">Hanya melayani Online WA</span>
              </div>
            </div>

            {/* Quality seal badge */}
            <div className="bg-zinc-950 border border-zinc-850 p-4 rounded-xl flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-orange-500 shrink-0" />
              <span className="text-5xs text-zinc-400 font-sans leading-relaxed">
                Tukang Bangunan Tangerang mengantongi keanggotaan resmi Asosiasi Kontraktor Sipil Indonesia (AKSI) Banten.
              </span>
            </div>

          </div>

          {/* COLUMN KANAN - CLEAN INTAKE FORM (occupy 7 columns) */}
          <div className="lg:col-span-7 bg-zinc-950 border border-zinc-900 rounded-2xl p-6 md:p-8 shadow-2xl relative">
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5"
                >
                  <div className="space-y-1">
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider m-0">
                      Formulir Konsultasi Konstruksi
                    </h3>
                    <p className="text-4xs text-zinc-500 m-0">
                      Rencana estimasi Anda diteruskan langsung ke kepala proyek sipil kami.
                    </p>
                  </div>

                  {/* Input Nama & No WA */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-5xs font-bold tracking-wider text-zinc-400 uppercase">
                        Nama Lengkap Anda *
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Misal: Bpk. Christopher"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-xs text-white placeholder-zinc-650 focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-5xs font-bold tracking-wider text-zinc-400 uppercase">
                        Nomor WhatsApp Aktif *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Misal: +62 896-XXXX-XXXX"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-xs text-white placeholder-zinc-650 focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Scope Pekerjan & Est Luas */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="scope" className="text-5xs font-bold tracking-wider text-zinc-400 uppercase">
                        Scope Konstruksi Proyek
                      </label>
                      <select
                        id="scope"
                        name="scope"
                        value={formData.scope}
                        onChange={handleInputChange}
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-xs text-white focus:outline-none focus:border-orange-500"
                      >
                        <option value="renovasi">Renovasi Rumah Total / Parsial</option>
                        <option value="baru">Bangun Baru Rumah Dr Nol</option>
                        <option value="arsitektur">Desain Arsitek & Jasa RAB</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="size" className="text-5xs font-bold tracking-wider text-zinc-400 uppercase">
                        Estimasi Luas Bangunan (m²)
                      </label>
                      <input
                        id="size"
                        type="number"
                        name="size"
                        value={formData.size}
                        onChange={handleInputChange}
                        placeholder="Misal: 120"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-xs text-white placeholder-zinc-650 focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Lokasi Proyek */}
                  <div className="space-y-1.5">
                    <label htmlFor="location" className="text-5xs font-bold tracking-wider text-zinc-400 uppercase">
                      Alamat / Lokasi Rencana Proyek
                    </label>
                    <input
                      id="location"
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="Misal: Cluster Lavender, Modernland, Tangerang Banten"
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-xs text-white placeholder-zinc-650 focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>

                  {/* Deskripsi Kebutuhan */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-5xs font-bold tracking-wider text-zinc-400 uppercase">
                      Catatan / Kebutuhan Detail Proyek *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Terangkan secara garis besar kebutuhan renovasi Anda (misal: perbaikan kamar mandi bawah ruko karena retak dak lantai atas rembes air hujan)..."
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-xs text-white placeholder-zinc-650 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      id="contact-form-submit"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-orange-600 hover:bg-orange-500 text-white font-extrabold text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Mendaftarkan Kuotasi Anda...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Kirim Formulir Konsultasi</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                /* Success Animated State */
                <motion.div
                  key="success-screen"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-10 text-center space-y-6 flex flex-col items-center justify-center h-full min-h-[400px]"
                >
                  <div className="p-4 bg-green-600/10 text-green-500 rounded-full border border-green-500/20">
                    <CheckCircle2 className="w-12 h-12 stroke-[2.2]" />
                  </div>
                  
                  <div className="space-y-2.5 max-w-md">
                    <h3 className="text-xs font-bold text-white uppercase tracking-widest m-0 leading-none">
                      FORMULASI BERHASIL DISIMPAN!
                    </h3>
                    <p className="text-4xs text-zinc-400 leading-relaxed m-0">
                      Rincian konsultasi Anda di area Tangerang telah aman disimpan oleh sistem sipil kami. Agar silsilah pengerjaan atau jadwal survei dapat lurus diproses super kilat, kami menyarankan Anda meneruskannya langsung via WhatsApp lobi kami.
                    </p>
                  </div>

                  {/* Trigger WA Direct Forward */}
                  <div className="pt-4 max-w-sm w-full">
                    <a
                      id="contact-form-wa-forward"
                      href={getWhatsAppDispatchUrl()}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-orange-600 hover:bg-orange-500 text-white font-extrabold text-xs uppercase tracking-widest rounded-xl shadow-lg hover:shadow-orange-600/25 transition-all scale-100 hover:scale-[1.02] cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 fill-current shrink-0" />
                      <span>Kirim Rincian Ke WhatsApp</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    
                    <button
                      id="contact-form-reset"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          scope: 'renovasi',
                          size: '',
                          location: '',
                          message: '',
                        });
                      }}
                      className="text-5xs uppercase tracking-wider text-zinc-550 hover:text-zinc-400 mt-5 block mx-auto underline cursor-pointer"
                    >
                      Isi Kembali Formulir Baru
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>
      </section>

      {/* ================= COMPLEMENTARY STRONGLY EMPHASIZED SPEC: "Bagian bawah menampilkan placeholder Google Maps menggunakan gambar statis dengan overlay ikon pin lokasi yang interaktif." ================= */}
      <section id="contact-interactive-placeholder-map" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        
        <div className="space-y-1">
          <span className="text-orange-500 text-3xs font-mono font-bold tracking-widest uppercase block">
            VISUALISASI LOKASI HEAD OFFICE
          </span>
          <h3 className="text-xs font-bold text-zinc-300 uppercase tracking-wider m-0">
            Peta Lokasi Kantor TBT Tangerang
          </h3>
          <p className="text-[10px] text-zinc-500 max-w-xl">
            Di bawah adalah visual mock peta statis kami. Sorot atau klik pin di tengah peta statis tersebut untuk memuat Google Map Interaktif yang sesungguhnya di tempat.
          </p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            {!loadInteractiveMap ? (
              /* A. THE STATIC PLACEHOLDER MAP VISUAL */
              <motion.div
                key="static-placeholder-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setLoadInteractiveMap(true)}
                className="relative w-full overflow-hidden rounded-2xl border border-zinc-800 aspect-[21/9] min-h-[350px] md:min-h-[420px] cursor-pointer group bg-zinc-950 shadow-2xl"
              >
                {/* Visual grid backdrop (static map illustration) */}
                <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#ea580c_1px,transparent_1px)] [background-size:16px_16px]" />
                
                {/* Hand crafted minimal lines making up block mapping */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="absolute top-1/4 left-0 right-0 h-10 bg-zinc-800" />
                  <div className="absolute top-2/3 left-0 right-0 h-14 bg-zinc-800" />
                  <div className="absolute top-0 bottom-0 left-1/3 w-12 bg-zinc-800" />
                  <div className="absolute top-0 bottom-0 left-2/3 w-16 bg-zinc-800" />
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-4">
                  {/* Glowing, Bouncing Interative Pin Overlay */}
                  <div className="relative">
                    <motion.div
                      animate={{ y: [0, -12, 0] }}
                      transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                      className="p-4 bg-orange-600 border-2 border-white text-white rounded-full shadow-[0_0_30px_rgba(234,88,12,0.6)] z-10 relative"
                    >
                      <MapPin className="w-8 h-8 fill-current" />
                    </motion.div>
                    {/* Ring ripple under the pin */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-1 bg-zinc-900 rounded-full animate-ping opacity-60" />
                  </div>

                  <div className="space-y-1.5 max-w-md bg-zinc-950/80 p-5 rounded-xl border border-zinc-900 backdrop-blur-md">
                    <h4 className="text-3xs font-mono font-black text-orange-500 uppercase tracking-widest m-0 leading-none">
                      TBT OFFICE KANTOR PUSAT
                    </h4>
                    <p className="text-2xs font-sans font-bold text-white uppercase m-0 leading-tight">
                      Jl. Zeta 8 No.317, Karawaci Baru, Kota Tangerang
                    </p>
                    <p className="text-4xs text-zinc-500 leading-normal italic m-0 pt-1.5">
                      *Klik area peta ini untuk memuat peta satelit & Google Maps satelit interaktif langsung.
                    </p>
                  </div>
                  
                  <span className="px-3 py-1.5 bg-orange-600 border border-orange-500/20 text-white rounded-full text-5xs font-mono font-bold uppercase tracking-widest">
                    🚀 KLIK UNTUK MUAT GOOGLE MAPS
                  </span>
                </div>

              </motion.div>
            ) : (
              /* B. THE REAL INTERACTIVE GOOGLE MAP */
              <motion.div
                key="interactive-embed-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <InteractiveMap showOverlayCard={true} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </section>

    </div>
  );
}
