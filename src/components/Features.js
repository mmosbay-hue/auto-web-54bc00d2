import React from 'react';
import { Bot, Sparkles, LayoutTemplate, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Bot className="h-10 w-10 text-red-400" />,
    title: 'Nội dung do AI tạo',
    description: 'AI tự động viết nội dung chuyên nghiệp, thuyết phục dựa trên dữ liệu thô bạn cung cấp, giúp tiết kiệm thời gian và công sức.'
  },
  {
    icon: <LayoutTemplate className="h-10 w-10 text-red-400" />,
    title: 'Thiết kế chuẩn mực',
    description: 'Chọn từ thư viện mẫu thiết kế đẳng cấp. AI tự động căn chỉnh layout, đảm bảo bảng Gains luôn đẹp mắt và chuyên nghiệp.'
  },
  {
    icon: <Sparkles className="h-10 w-10 text-red-400" />,
    title: 'Tối ưu hóa thông minh',
    description: 'AI gợi ý cải thiện câu chữ, nhấn mạnh các từ khóa quan trọng và đánh giá mức độ chuyên nghiệp của bảng Gains.'
  },
  {
    icon: <Download className="h-10 w-10 text-red-400" />,
    title: 'Xuất file chất lượng cao',
    description: 'Dễ dàng xuất bảng Gains ra các định dạng phổ biến như PNG, PDF với độ phân giải cao, sẵn sàng để in ấn hoặc chia sẻ.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-red-400 tracking-wider uppercase">Tính năng</h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            Mọi thứ bạn cần để tạo nên sự khác biệt
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
            Gains AI tích hợp những công nghệ tiên tiến nhất để giúp bạn tạo ra hồ sơ năng lực ấn tượng một cách dễ dàng.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 shadow-lg hover:border-red-500/50 transition-colors duration-300"
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-slate-700 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-base text-slate-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
