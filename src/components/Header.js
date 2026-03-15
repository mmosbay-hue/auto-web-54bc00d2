import React, { useState } from 'react';
import { Target, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Tính năng', href: '#features' },
    { name: 'Cách hoạt động', href: '#how-it-works' },
    { name: 'Đánh giá', href: '#testimonials' },
  ];

  return (
    <header className="bg-slate-900/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center space-x-2">
            <Target className="h-8 w-8 text-red-500" />
            <span className="text-2xl font-bold text-white">Gains<span className="gradient-text">AI</span></span>
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-base font-medium text-slate-300 hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center">
            <a href="#" className="inline-flex items-center px-5 py-2 text-base font-bold text-white bg-gradient-to-r from-red-600 to-orange-500 rounded-full hover:opacity-90 transition-opacity">
              Bắt đầu tạo <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-t border-slate-800"
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-white">
                  {link.name}
                </a>
              ))}
              <a href="#" className="block w-full text-left px-3 py-3 mt-2 text-base font-bold text-white bg-gradient-to-r from-red-600 to-orange-500 rounded-lg">
                Bắt đầu tạo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
