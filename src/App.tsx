/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ActiveTab } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomeTab from './components/HomeTab';
import ProjectsTab from './components/ProjectsTab';
import ServicesTab from './components/ServicesTab';
import AboutTab from './components/AboutTab';
import FaqTab from './components/FaqTab';
import ContactTab from './components/ContactTab';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');

  const renderActiveTabContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeTab setActiveTab={setActiveTab} />;
      case 'projects':
        return <ProjectsTab />;
      case 'services':
        return <ServicesTab />;
      case 'about':
        return <AboutTab />;
      case 'faq':
        return <FaqTab />;
      case 'contact':
        return <ContactTab />;
      default:
        return <HomeTab setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div id="tbt-app-root" className="min-h-screen flex flex-col bg-zinc-950 font-sans text-zinc-100 antialiased selection:bg-orange-600 selection:text-white">
      {/* 1. Global Navigation Bar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* 2. Page Navigation Scroll Reset Utility */}
      <ScrollToTop activeTab={activeTab} />

      {/* 3. Smooth animated view transitions of core body */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="w-full"
          >
            {renderActiveTabContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 4. Global Themed Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
