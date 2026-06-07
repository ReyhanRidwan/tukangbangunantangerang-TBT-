/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Menu, X, Hammer, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ActiveTab } from '../types';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems: { label: string; tab: ActiveTab }[] = [
    { label: 'Home', tab: 'home' },
    { label: 'Projects', tab: 'projects' },
    { label: 'Services', tab: 'services' },
    { label: 'About Us', tab: 'about' },
    { label: 'FAQ', tab: 'faq' },
    { label: 'Contact', tab: 'contact' },
  ];

  const handleTabChange = (tab: ActiveTab) => {
    setActiveTab(tab);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-zinc-950/90 border-b border-zinc-900/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Logo Brand */}
          <button
            id="nav-logo"
            onClick={() => handleTabChange('home')}
            className="flex items-center space-x-2.5 text-left group cursor-pointer focus:outline-none"
          >
            <div className="p-2 bg-orange-600 text-white rounded-lg group-hover:bg-orange-500 transition-colors">
              <Hammer className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <span className="block text-sm md:text-base font-black font-sans tracking-tight text-white uppercase leading-none">
                TUKANG BANGUNAN
              </span>
              <span className="block text-2xs md:text-xs font-mono font-bold tracking-widest text-orange-500 uppercase leading-none mt-1">
                TANGERANG • TBT
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => {
              const active = activeTab === item.tab;
              return (
                <button
                  key={item.tab}
                  id={`nav-link-${item.tab}`}
                  onClick={() => handleTabChange(item.tab)}
                  className={`relative px-4 py-2 rounded-lg text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                    active ? 'text-orange-500' : 'text-zinc-400 hover:text-white hover:bg-zinc-900/40'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {active && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-orange-600/10 border border-orange-500/20 rounded-lg -z-0"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Urgent WA Direct CTA Button */}
          <div className="hidden sm:block">
            <a
              id="nav-wa-cta"
              href="https://wa.me/6289638779870"
              target="_blank"
              referrerPolicy="no-referrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-orange-600 border border-orange-500/20 text-white rounded-full text-2xs font-extrabold uppercase tracking-widest hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-600/10 active:scale-95 transition-all cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current shrink-0" />
              <span>Konsultasi WA</span>
            </a>
          </div>

          {/* Hamburger Mobile Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-zinc-400 hover:text-white focus:outline-none focus:ring-0 cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-zinc-950 border-b border-zinc-900 overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {menuItems.map((item) => {
                const active = activeTab === item.tab;
                return (
                  <button
                    key={item.tab}
                    id={`mobile-nav-link-${item.tab}`}
                    onClick={() => handleTabChange(item.tab)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
                      active
                        ? 'bg-orange-600/10 border border-orange-500/30 text-orange-500'
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              
              <div className="pt-4 border-t border-zinc-900/80 px-2 flex flex-col space-y-3">
                <a
                  id="mobile-wa-cta"
                  href="https://wa.me/6289638779870"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-orange-600 text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-orange-500 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-current shrink-0" />
                  <span>Kirim Pesan WhatsApp</span>
                </a>
                <p className="text-center text-4xs text-zinc-650 tracking-wider">
                  HOTLINE TBT: +62 896-3877-9870 (24 JAM)
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
