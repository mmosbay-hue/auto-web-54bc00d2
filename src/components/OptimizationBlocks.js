import React from 'react';
import { LayoutTemplate, Wand2, Maximize, ShieldCheck, FilePenLine, Palette, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const optimizationFeatures = [
  {
    icon: <LayoutTemplate className="w-8 h-8 text-red-400" />,
    title: 'AI Tự Động Sắp Xếp Bố Cục',
    description: 'Phân tích nội dung và tự động chọn layout tối ưu nhất, đảm bảo tính thẩm mỹ và chuyên nghiệp cho bảng Gains của bạn.'
  },
  {
    icon: <Wand2 className="w-8 h-8 text-red-400" />,
    title: 'AI Tối Ưu Hoá Câu Chữ',
    description: 'Tinh chỉnh văn phong, ngữ pháp và dùng từ chuyên nghiệp hơn để tăng sức thuyết phục cho từng luận điểm được trình bày.'
  },
  {
    icon: <Maximize className="w-8 h-8 text-red-400" />,
    title: 'AI Nâng Cấp Chất Lượng Ảnh',
    description: 'Tự động tăng độ phân giải và độ sắc nét cho ảnh chân dung, đảm bảo hình ảnh CEO luôn hoàn hảo ở mọi kích thước.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-red-400" />,
    title: 'AI Quét và Sửa Lỗi Tự Động',
    description: 'Hệ thống tự động rà soát lỗi chính tả, lỗi định dạng và các vấn đề về layout trước khi bạn xuất file, đảm bảo sản phẩm cuối cùng hoàn hảo.'
  },
  {
    icon: <FilePenLine className="w-8 h-8 text-red-400" />,
    title: 'AI Viết Lại Nội Dung Chuyên Sâu',
    description: 'Không chỉ sửa lỗi, AI còn có thể viết lại toàn bộ các đoạn văn để phù hợp hơn với từng đối tượng người xem mục tiêu.'
  },
  {
    icon: <Palette className="w-8 h-8 text-red-400" />,
    title: 'AI Đồng Bộ Nhận Diện Thương Hiệu',
    description: 'Tự động nhận diện logo và màu sắc chủ đạo của thương hiệu để áp dụng vào thiết kế, tạo ra một bảng Gains nhất quán.'
  }
];

const OptimizationBlock = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col items-start h-full overflow-hidden hover:border-red-500/50 transition-all duration-300"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10 flex flex-col h-full">
        <div className="bg-slate-800 p-3 rounded-lg mb-4 self-start">
          {icon}
        </div>
        <h3 className="font-bold text-lg text-slate-100 mb-2">{title}</h3>
        <p className="text-sm text-slate-400 flex-grow">{description}</p>
        <div className="mt-4 text-red-400 flex items-center font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Tối ưu ngay <ArrowRight className="w-4 h-4 ml-2" />
        </div>
      </div>
    </motion.div>
  );
};

export default function OptimizationBlocks() {
  return (
    <section className="min-h-screen w-full bg-slate-950 flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-4">
          Tối Ưu Hoá Toàn Diện với <span className="gradient-text">Trí Tuệ Tạo Sinh</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-400 max-w-2xl mx-auto mb-12 md:mb-16 text-lg"
        >
          Kích hoạt các mô-đun AI chuyên biệt để tự động hoàn thiện mọi khía cạnh của bảng Gains, từ nội dung, hình ảnh đến bố cục.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {optimizationFeatures.map((feature, index) => (
            <OptimizationBlock key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
