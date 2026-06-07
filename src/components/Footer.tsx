/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hammer, Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { ActiveTab } from '../types';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const address = 'Jl. Zeta 8 No.317, RT.002/RW.005, Karawaci Baru, Kec. Karawaci, Kota Tangerang, Banten 15116, Indonesia';

  return (
    <footer className="bg-black border-t border-zinc-900 text-zinc-400">
      {/* Upper Footer Segment */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          
          {/* TBT Bio segment */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="p-2 bg-orange-600 text-white rounded-lg">
                <Hammer className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="text-md font-black font-sans tracking-tight text-white uppercase">
                TUKANG BANGUNAN TANGERANG
              </span>
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed md:leading-normal">
              Kami berdiri untuk mewakili struktur yang kokoh, pengerjaan yang presisi, dan perencanaan terbaik. Dari renovasi ruko sederhana hingga pembangunan rumah megah dari nol, TBT Tangerang adalah partner konstruksi terpercaya Anda.
            </p>
            <div className="text-3xs font-mono tracking-wider font-extrabold text-orange-500 uppercase">
              • KOKOH • PRESISI • TERPERCAYA
            </div>
          </div>

          {/* Quick Links segment */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-white uppercase">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', tab: 'home' as ActiveTab },
                { label: 'Semua Proyek', tab: 'projects' as ActiveTab },
                { label: 'Layanan Utama', tab: 'services' as ActiveTab },
                { label: 'Tentang Kami', tab: 'about' as ActiveTab },
                { label: 'Pertanyaan (FAQ)', tab: 'faq' as ActiveTab },
                { label: 'Hubungi Kontak', tab: 'contact' as ActiveTab },
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    id={`footer-link-${link.tab}`}
                    onClick={() => handleLinkClick(link.tab)}
                    className="text-xs hover:text-orange-500 hover:translate-x-1.5 transition-all text-left block cursor-pointer"
                  >
                    🚀 {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Jaminan Layanan */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-white uppercase">
              Unggulan Jasa Konstruksi
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-500">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">✓</span>
                <span>Garansi Kebocoran & Retak Struktur</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">✓</span>
                <span>Tukang Berpengalaman & Bersertifikat</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">✓</span>
                <span>RAB Transparan & No Hidden Cost</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">✓</span>
                <span>Konsultasi & Layanan Survei Gratis</span>
              </li>
            </ul>
          </div>

          {/* Direct Address & Contacts Segment */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-white uppercase">
              Kontak Kantor TBT
            </h4>
            <ul className="space-y-3.5 text-xs">
              
              {/* WhatsApp phone link */}
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-zinc-300">WhatsApp Hotline:</span>
                  <a
                    id="footer-wa"
                    href="https://wa.me/6289638779870"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="hover:text-orange-500 transition-colors inline-flex items-center gap-1 font-mono font-bold mt-0.5"
                  >
                    <span>+62 896-3877-9870</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </li>

              {/* Email link */}
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-zinc-300">Email Utama:</span>
                  <a
                    id="footer-email"
                    href="mailto:contact@tbtangerang.com"
                    className="hover:text-orange-500 transition-colors font-mono mt-0.5 inline-block"
                  >
                    contact@tbtangerang.com
                  </a>
                </div>
              </li>

              {/* Physical Location map coordinates */}
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-zinc-300">Alamat Fisik Office:</span>
                  <span className="block text-zinc-500 text-3xs mt-1 leading-relaxed leading-normal">
                    {address}
                  </span>
                </div>
              </li>

            </ul>
          </div>

        </div>
      </div>

      {/* Under / Lower Footer segment */}
      <div className="bg-zinc-950 py-6 border-t border-zinc-900/40 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-3xs text-zinc-600 font-mono">
            &copy; {currentYear} TUKANG BANGUNAN TANGERANG CORP. ALL RIGHTS RESERVED.
          </p>
          <p className="text-3xs text-zinc-600 font-mono">
            LOKET LAYANAN RESMI WILAYAH TANGERANG & BANTEN
          </p>
        </div>
      </div>

    </footer>
  );
}
