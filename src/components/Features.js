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
    title: 'Tùy chỉnh linh hoạt',
    description: 'Dễ dàng thay đổi màu sắc, font chữ, và bố cục để phù hợp với thương hiệu cá nhân hoặc doanh nghiệp của bạn.'
  },
  {
    icon: <Download className="h-10 w-10 text-red-400" />,
    title: 'Xuất file chất lượng cao',
    description: 'Xuất bảng Gains dưới dạng ảnh PNG, PDF siêu nét, sẵn sàng để in ấn hoặc chia sẻ trên các nền tảng số.'
  }
];

const featureVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: 'easeOut'
    }
  })
};

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Tính Năng Vượt Trội</h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Công cụ mạnh mẽ giúp bạn tạo ra những bảng Gains ấn tượng và hiệu quả nhất.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={featureVariants}
              className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 text-center flex flex-col items-center"
            >
              <div className="bg-slate-900 p-4 rounded-full mb-6 inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-base">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
