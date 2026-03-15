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
            Trải nghiệm sức mạnh của AI và tạo ra bảng Gains đầu tiên của bạn ngay hôm nay. Hoàn toàn miễn phí để bắt đầu.
          </p>
          <div className="mt-8">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-red-600 bg-white rounded-full shadow-lg transition-transform duration-200"
            >
              Tạo Bảng Gains Đầu Tiên
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
