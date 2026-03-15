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
    <header className="bg-slate-900 fixed top-0 left-0 right-0 z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Target className="h-8 w-8 text-red-500" />
            <span className="ml-3 text-2xl font-bold text-white">Gains AI</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
             <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center group">
                Bắt đầu miễn phí
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-slate-300 hover:bg-slate-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  {link.name}
                </a>
              ))}
              <div className="pt-4 pb-2 px-3">
                <button className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold py-2.5 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center group">
                    Bắt đầu miễn phí
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
