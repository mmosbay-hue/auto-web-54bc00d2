### Design Tokens
- **Primary Color**: Red-Orange Gradient (`from-red-500 to-orange-500`), now with customizable block colors.
- **Font**: System UI, Sans-serif
- **Border Radius**: `rounded-xl` / `rounded-2xl`
- **Shadow Style**: `shadow-lg`, `shadow-red-500/20` (for glow)
- **Background**: Dark slate (`bg-slate-900`, `bg-slate-950`)

### Components Created
- `src/App.js`: Component gốc, lắp ráp layout chính của ứng dụng.
- `src/components/Header.js`: Thanh điều hướng cố định.
- `src/components/Footer.js`: Chân trang ứng dụng.
- `src/components/GainsGenerator.js`: Giao diện chính để tạo bảng Gains. Quản lý trạng thái của form, các tùy chọn và màu sắc, đồng thời hiển thị bản xem trước.
- `src/components/GainsPreview.js`: Component hiển thị bảng Gains trực quan.
- `src/components/DynamicListInput.js`: Component cho phép người dùng nhập và quản lý một danh sách các mục.
- `src/components/GenerationOptions.js`: Component cung cấp các tùy chọn về bố cục và các tính năng AI.
- `src/components/ColorOptions.js`: Component cho phép người dùng chọn màu cho các khối nội dung và văn bản trong bảng Gains.
- `src/components/OptimizationBlocks.js`: Component hiển thị các khối tối ưu hoá.

### Shared Data Shapes
- `gainsData`: `{ ceo: { photo, name, title }, sections: { objective, achievements: [string], interests: [string], ecosystem: [string], skills: [string] }, contact: { phone, email, dob } }`
- `generationOptions`: `{ orientation: 'vertical' | 'horizontal', optimizeContent: boolean, autoIcons: boolean, suggestLayout: boolean }`
- `blockColors`: `{ header: string, objective: string, core: string, vision: string, contact: string }`
- `textColors`: `{ header: string, body: string }`
