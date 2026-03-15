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
    quote: 'Công cụ này thực sự là một \"game-changer\". Nó không chỉ giúp tôi trình bày các thành tựu một cách rõ ràng mà còn giúp tôi định hình chiến lược sắp tới.',
    name: 'Phạm Văn Hùng',
    title: 'Managing Director, VinaCapital',
    image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=100&auto=format&fit=crop'
  }
];

const StarRating = ({ rating = 5 }) => (
  <div className="flex items-center">
    {[...Array(rating)].map((_, i) => (
      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-red-400 tracking-wider uppercase">Đánh giá</h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            Các nhà lãnh đạo nói gì về Gains AI
          </p>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 flex flex-col"
            >
              <div className="flex-grow">
                <StarRating />
                <p className="mt-6 text-slate-300">\"{testimonial.quote}\"</p>
              </div>
              <div className="mt-8 flex items-center">
                <img className="h-12 w-12 rounded-full object-cover" src={testimonial.image} alt={testimonial.name} />
                <div className="ml-4">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-slate-400">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
