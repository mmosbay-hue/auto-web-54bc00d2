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
    <div className="space-y-4">
        <div>
            <h3 className="font-semibold text-white mb-2">MỤC TIÊU</h3>
            <p className="text-sm text-slate-300">Tối ưu hóa chiến lược kinh doanh và mở rộng thị phần quốc tế.</p>
        </div>
        <div>
            <h3 className="font-semibold text-white mb-2">THÀNH TỰU</h3>
            <ul className="space-y-1.5 text-sm text-slate-300">
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-red-400 mr-2 mt-0.5 flex-shrink-0"/>Tăng trưởng doanh thu 200% trong 2 năm.</li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-red-400 mr-2 mt-0.5 flex-shrink-0"/>Dẫn dắt đội ngũ 50+ nhân sự tài năng.</li>
            </ul>
        </div>
    </div>
    <div className="mt-4 text-xs text-slate-500 text-center">Bảng Gains được tạo bởi AI</div>
  </motion.div>
);

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-28">
      <div className="absolute inset-0 bg-grid-slate-800/[0.2] [mask-image:linear-gradient(to_bottom,white_5%,transparent_100%)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Tạo Bảng <span className="gradient-text">GAINS</span> Chuyên Nghiệp Cho CEO Bằng AI
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-xl mx-auto lg:mx-0">
              Biến dữ liệu thô thành một bản trình bày năng lực ấn tượng, thuyết phục đối tác và nhà đầu tư chỉ trong vài phút.
            </p>
            <div className="mt-10 flex justify-center lg:justify-start">
              <a href="#" className="bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-red-500/20 hover:scale-105 transition-all duration-300 flex items-center group">
                Tạo Gains Đầu Tiên
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
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
