### Design Tokens
- **Primary Color**: Red-Orange Gradient (`from-red-500 to-orange-500`)
- **Font**: System UI, Sans-serif
- **Border Radius**: `rounded-xl` / `rounded-2xl`
- **Shadow Style**: `shadow-lg`, `shadow-red-500/20` (for glow)
- **Background**: Dark slate (`bg-slate-900`)

### Components Created
- `src/App.js`: Layout chính của ứng dụng, render trang tạo Gains.
- `src/components/Header.js`: Thanh điều hướng cố định.
- `src/components/Footer.js`: Chân trang ứng dụng.
- `src/components/GainsGenerator.js`: Giao diện chính để tạo bảng Gains, bao gồm form nhập liệu và khu vực xem trước.
- `src/components/GainsPreview.js`: Component hiển thị bảng Gains trực quan dựa trên dữ liệu được cung cấp.
- `src/components/CEOInfoForm.js`: (Không còn sử dụng) Form nhập thông tin CEO.

### Shared Data Shapes
- `gainsData`: `{ ceo: { photo, name, title }, sections: { objective, achievements: [], interests: [], ecosystem: [], skills: [] }, contact: { phone, email, dob } }`
