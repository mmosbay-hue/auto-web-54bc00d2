import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'Gains AI đã thay đổi hoàn toàn cách tôi chuẩn bị hồ sơ năng lực. Nhanh chóng, chuyên nghiệp và cực kỳ hiệu quả. Đối tác của tôi đã rất ấn tượng.',
    name: 'Trần Anh Tuấn',
    title: 'CEO, TechCorp',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop'
  },
  {
    quote: 'Trước đây tôi mất hàng giờ để thiết kế một bảng Gains. Giờ đây, với AI, tôi chỉ cần vài phút để có một sản phẩm hoàn hảo. Một công cụ không thể thiếu cho các nhà lãnh đạo.',
    name: 'Lê Thị Minh Anh',
    title: 'Founder, Creative Minds',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop'
  },
  {
    quote: 'Giao diện trực quan và các gợi ý từ AI thực sự hữu ích. Bảng Gains tạo ra không chỉ đẹp mà còn rất sắc bén về mặt nội dung. Highly recommended!',
    name: 'Phạm Văn Hùng',
    title: 'Startup Advisor',
    image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=100&auto=format&fit=crop'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Các CEO Nói Gì Về <span className="gradient-text">Gains AI</span></h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Lắng nghe chia sẻ từ những nhà lãnh đạo đã tin tưởng và thành công cùng chúng tôi.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 flex flex-col"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
              </div>
              <blockquote className="text-slate-300 italic flex-grow">“{testimonial.quote}”</blockquote>
              <footer className="mt-6 flex items-center">
                <img className="h-12 w-12 rounded-full object-cover" src={testimonial.image} alt={testimonial.name} />
                <div className="ml-4">
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">{testimonial.title}</p>
                </div>
              </footer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
