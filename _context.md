### Design Tokens
- **Primary Color**: Red-Orange Gradient (`from-red-500 to-orange-500`)
- **Font**: System UI, Sans-serif
- **Border Radius**: `rounded-xl` / `rounded-2xl`
- **Shadow Style**: `shadow-lg`, `shadow-red-500/20` (for glow)
- **Background**: Dark slate (`bg-slate-900`, `bg-slate-950`)

### Components Created
- `src/App.js`: Component gốc, lắp ráp layout chính của trang landing page.
- `src/components/Header.js`: Thanh điều hướng cố định.
- `src/components/Hero.js`: Hero section giới thiệu sản phẩm và CTA chính.
- `src/components/Features.js`: Section liệt kê các tính năng nổi bật.
- `src/components/HowItWorks.js`: Section giải thích quy trình 3 bước.
- `src/components/Testimonials.js`: Section hiển thị đánh giá từ khách hàng.
- `src/components/CTASection.js`: Section kêu gọi hành động cuối trang.
- `src/components/Footer.js`: Chân trang ứng dụng.

### Shared Data Shapes
- `gainsData`: `{ ceo: { photo, name, title }, sections: { objective, achievements: [string], interests: [string], ecosystem: [string], skills: [string] }, contact: { phone, email, dob } }`
