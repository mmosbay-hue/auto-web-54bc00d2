import React from 'react';
import { FileText, Wand2, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: <FileText className="h-8 w-8 text-white" />,
    title: '1. Nhập thông tin',
    description: 'Cung cấp các thông tin cơ bản, mục tiêu, thành tựu và kỹ năng của bạn. Hoặc đơn giản là tải lên CV/hồ sơ LinkedIn.'
  },
  {
    icon: <Wand2 className="h-8 w-8 text-white" />,
    title: '2. AI tự động thiết kế',
    description: 'Hệ thống AI thông minh sẽ phân tích, biên tập nội dung và tự động tạo ra một bảng Gains chuyên nghiệp chỉ trong vài giây.'
  },
  {
    icon: <Share2 className="h-8 w-8 text-white" />,
    title: '3. Xuất & Chia sẻ',
    description: 'Tải xuống bảng Gains với độ phân giải cao hoặc chia sẻ trực tiếp với đối tác, nhà đầu tư qua một đường link duy nhất.'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Chỉ với 3 Bước Đơn Giản</h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Quy trình tạo bảng Gains chưa bao giờ dễ dàng và nhanh chóng đến thế.
          </p>
        </div>
        <div className="mt-16 relative">
          <div className="absolute left-1/2 top-8 bottom-8 w-0.5 bg-slate-700 hidden md:block" aria-hidden="true"></div>
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="flex items-center justify-center w-20 h-20 mx-auto bg-gradient-to-br from-red-500 to-orange-500 rounded-full mb-6 shadow-lg shadow-red-500/20">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
