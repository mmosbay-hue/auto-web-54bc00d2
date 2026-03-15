import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-r from-red-600 to-orange-500 p-8 sm:p-12 rounded-2xl text-center shadow-2xl shadow-red-500/20"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Sẵn Sàng Nâng Tầm Hồ Sơ Năng Lực Của Bạn?
          </h2>
          <p className="mt-4 text-lg text-red-100 max-w-2xl mx-auto">
            Trải nghiệm sức mạnh của AI và tạo ra bảng Gains ấn tượng đầu tiên của bạn ngay hôm nay. Không cần thẻ tín dụng.
          </p>
          <div className="mt-8">
            <a href="#" className="bg-white text-red-600 font-bold py-3 px-8 rounded-xl shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 inline-flex items-center group">
              Bắt Đầu Ngay - Hoàn Toàn Miễn Phí
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
