import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const MockGainsChart = () => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
    animate={{ opacity: 1, scale: 1, rotate: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
    className="w-full max-w-md lg:max-w-lg p-6 bg-slate-800/50 rounded-2xl border border-slate-700 shadow-2xl shadow-red-500/10 backdrop-blur-sm">
    <div className="flex justify-between items-start mb-4">
      <h2 className="text-2xl font-bold gradient-text">GAINS AI</h2>
      <div className="w-20 h-20 bg-slate-700 rounded-lg flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" alt="CEO Portrait" className="w-full h-full object-cover"/>
      </div>
    </div>
    <div>
      <h3 className="font-bold text-white mb-2">MỤC TIÊU</h3>
      <p className="text-sm text-slate-300 mb-4">Dẫn dắt chuyển đổi số trong ngành Marketing & Truyền thông.</p>
      <h3 className="font-bold text-white mb-2">THÀNH TỰU</h3>
      <ul className="space-y-1 text-sm text-slate-300">
        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-red-400 mr-2 mt-0.5 flex-shrink-0"/><span>Tăng trưởng doanh thu 200% trong 2 năm.</span></li>
        <li className="flex items-start"><CheckCircle className="w-4 h-4 text-red-400 mr-2 mt-0.5 flex-shrink-0"/><span>Mở rộng thị trường sang 3 quốc gia mới.</span></li>
      </ul>
    </div>
  </motion.div>
);

export default function Hero() {
  return (
    <section className="relative bg-slate-950 pt-32 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-800/20 [mask-image:linear-gradient(to_bottom,white_5%,transparent_100%)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Tạo Bảng <span className="gradient-text">GAINS</span> Chuyên Nghiệp Tức Thì với AI
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0">
              Biến dữ liệu thô thành một bản trình bày năng lực ấn tượng, thuyết phục dành cho CEO, đối tác và nhà đầu tư chỉ trong vài cú nhấp chuột.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white bg-gradient-to-r from-red-600 to-orange-500 rounded-full shadow-lg shadow-red-500/30 transition-transform duration-200"
              >
                Bắt Đầu Miễn Phí
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.a>
            </div>
          </motion.div>
          <div className="flex justify-center">
            <MockGainsChart />
          </div>
        </div>
      </div>
    </section>
  );
}
