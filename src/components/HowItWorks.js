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
    title: '3. Chia sẻ & Gây ấn tượng',
    description: 'Xuất bản Gains chất lượng cao và chia sẻ với đối tác, nhà đầu tư, hoặc trên các mạng xã hội để nâng tầm thương hiệu cá nhân.'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-800/[0.2] [mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h2 className="text-base font-semibold text-red-400 tracking-wider uppercase">Quy trình</h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            Tạo Bảng Gains Chỉ Trong 3 Bước Đơn Giản
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
            Quy trình được tối ưu hóa để bạn có được kết quả nhanh nhất mà không cần kỹ năng thiết kế.
          </p>
        </div>
        <div className="mt-16">
          <div className="relative">
            <div className="absolute left-1/2 top-4 -bottom-4 w-0.5 bg-slate-700 hidden md:block" aria-hidden="true"></div>
            <div className="grid md:grid-cols-3 gap-y-12 md:gap-x-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full mx-auto mb-6 shadow-lg shadow-red-500/20">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-slate-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
