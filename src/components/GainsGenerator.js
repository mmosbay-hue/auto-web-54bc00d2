import React, { useState, useRef } from 'react';
import { User, Briefcase, Target, Award, Heart, Link as LinkIcon, Wrench, Phone, Mail, Calendar, UploadCloud, Wand2, Loader, Palette, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import GainsPreview from './GainsPreview';
import DynamicListInput from './DynamicListInput';
import GenerationOptions from './GenerationOptions';
import ColorOptions from './ColorOptions';

const InputField = ({ icon, label, name, value, onChange, placeholder, type = "text" }) => (
  <div>
    <label className="flex items-center text-sm font-medium text-slate-300 mb-2">
      {icon}
      <span className="ml-2">{label}</span>
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-3 py-2 text-slate-200 placeholder-slate-500 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-200"
    />
  </div>
);

export default function GainsGenerator() {
  const [gainsData, setGainsData] = useState({
    ceo: { photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop', name: 'Trần Anh Tuấn', title: 'CEO & Founder @ TechCorp' },
    sections: {
      objective: 'Dẫn dắt TechCorp trở thành tập đoàn công nghệ hàng đầu Đông Nam Á, tiên phong trong lĩnh vực chuyển đổi số và phát triển giải pháp AI bền vững.',
      achievements: ['Tăng trưởng doanh thu 300% trong 2 năm', 'Gọi vốn thành công 10 triệu USD vòng Series A', 'Mở rộng thị trường sang 3 quốc gia mới'],
      interests: ['Phát triển hệ sinh thái AI cho doanh nghiệp SME', 'Xây dựng văn hóa doanh nghiệp số', 'Đầu tư vào các startup công nghệ tiềm năng'],
      ecosystem: ['Đối tác chiến lược với tập đoàn FPT, Viettel', 'Thành viên hiệp hội Doanh nghiệp Phần mềm Việt Nam (VINASA)', 'Cố vấn chương trình Shark Tank Việt Nam'],
      skills: ['Lãnh đạo & Xây dựng đội nhóm', 'Chiến lược kinh doanh & Tăng trưởng', 'Huy động vốn & Quan hệ nhà đầu tư', 'Trí tuệ nhân tạo & Khoa học dữ liệu'],
    },
    contact: { phone: '0987 654 321', email: 'ceo.anh.tuan@techcorp.vn', dob: '19/05/1985' },
  });

  const [generationOptions, setGenerationOptions] = useState({
    orientation: 'vertical',
    optimizeContent: true,
    autoIcons: true,
    suggestLayout: false,
  });

  const [blockColors, setBlockColors] = useState({
    header: '#1e293b', // slate-800
    objective: '#ffffff', // white
    core: '#f1f5f9', // slate-100
    vision: '#f8fafc', // slate-50
    contact: '#1e293b', // slate-800
  });

  const [textColors, setTextColors] = useState({
    header: '#FFFFFF', // white
    body: '#334155', // slate-700
  });

  const previewRef = useRef(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split('.');
    if (keys.length === 2) {
      setGainsData(prev => ({ ...prev, [keys[0]]: { ...prev[keys[0]], [keys[1]]: value } }));
    } else if (keys.length === 3) {
      setGainsData(prev => ({ ...prev, [keys[0]]: { ...prev[keys[0]], [keys[1]]: { ...prev[keys[0]][keys[1]], [keys[2]]: value } } }));
    }
  };

  const handleListChange = (e) => {
    const { name, value } = e.target;
    setGainsData(prev => ({ ...prev, sections: { ...prev.sections, [name]: value } }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setGainsData(prev => ({ ...prev, ceo: { ...prev.ceo, photo: reader.result } }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = () => {
    // This is a placeholder for a proper image export function (e.g., using html2canvas)
    alert('Chức năng xuất ảnh đang được phát triển!');
  };

  return (
    <div className="min-h-screen max-w-8xl mx-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="lg:col-span-1 space-y-6 bg-slate-950/50 p-6 rounded-2xl border border-slate-800 h-fit sticky top-24"
      >
        <h2 className="text-2xl font-bold gradient-text">Tạo Bảng Gains Của Bạn</h2>
        
        {/* CEO Info */}
        <div className="space-y-4 p-4 bg-slate-800/30 rounded-lg">
          <h3 className="font-semibold text-slate-200 border-b border-slate-700 pb-2">Thông tin CEO</h3>
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 rounded-full bg-slate-700 flex-shrink-0 overflow-hidden border-2 border-slate-600">
              <img src={gainsData.ceo.photo} alt="CEO" className="w-full h-full object-cover" />
            </div>
            <div className="w-full">
              <label htmlFor="photo-upload" className="flex items-center justify-center w-full text-xs bg-slate-700/80 hover:bg-slate-700 text-slate-300 py-2 px-3 rounded-md cursor-pointer transition">
                <UploadCloud size={14} className="mr-2"/> Tải ảnh lên
              </label>
              <input id="photo-upload" type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
            </div>
          </div>
          <InputField icon={<User size={16} className="text-slate-400"/>} label="Tên CEO" name="ceo.name" value={gainsData.ceo.name} onChange={handleInputChange} placeholder="VD: Nguyễn Văn A" />
          <InputField icon={<Briefcase size={16} className="text-slate-400"/>} label="Chức danh" name="ceo.title" value={gainsData.ceo.title} onChange={handleInputChange} placeholder="VD: CEO & Founder @ Tên công ty" />
        </div>

        {/* Sections Info */}
        <div className="space-y-4 p-4 bg-slate-800/30 rounded-lg">
          <h3 className="font-semibold text-slate-200 border-b border-slate-700 pb-2">Nội dung Gains</h3>
          <div>
            <label className="flex items-center text-sm font-medium text-slate-300 mb-2"><Target size={16} className="text-slate-400"/><span className="ml-2">Mục tiêu</span></label>
            <textarea name="sections.objective" value={gainsData.sections.objective} onChange={handleInputChange} placeholder="Mô tả mục tiêu chính..." rows="3" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-3 py-2 text-slate-200 placeholder-slate-500 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-200"></textarea>
          </div>
          <DynamicListInput label="Thành tựu" icon={<Award size={16} className="text-slate-400"/>} name="achievements" value={gainsData.sections.achievements} onChange={handleListChange} placeholder="Thêm một thành tựu..." />
          <DynamicListInput label="Mối quan tâm & Định hướng" icon={<Heart size={16} className="text-slate-400"/>} name="interests" value={gainsData.sections.interests} onChange={handleListChange} placeholder="Thêm một mối quan tâm..." />
          <DynamicListInput label="Mối quan hệ & Hệ sinh thái" icon={<LinkIcon size={16} className="text-slate-400"/>} name="ecosystem" value={gainsData.sections.ecosystem} onChange={handleListChange} placeholder="Thêm một mối quan hệ..." />
          <DynamicListInput label="Kỹ năng cốt lõi" icon={<Wrench size={16} className="text-slate-400"/>} name="skills" value={gainsData.sections.skills} onChange={handleListChange} placeholder="Thêm một kỹ năng..." />
        </div>

        {/* Contact Info */}
        <div className="space-y-4 p-4 bg-slate-800/30 rounded-lg">
          <h3 className="font-semibold text-slate-200 border-b border-slate-700 pb-2">Thông tin liên hệ</h3>
          <InputField icon={<Phone size={16} className="text-slate-400"/>} label="Số điện thoại" name="contact.phone" value={gainsData.contact.phone} onChange={handleInputChange} placeholder="0123 456 789" />
          <InputField icon={<Mail size={16} className="text-slate-400"/>} label="Email" name="contact.email" value={gainsData.contact.email} onChange={handleInputChange} placeholder="email@example.com" type="email" />
          <InputField icon={<Calendar size={16} className="text-slate-400"/>} label="Ngày sinh" name="contact.dob" value={gainsData.contact.dob} onChange={handleInputChange} placeholder="DD/MM/YYYY" />
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        className="lg:col-span-2 space-y-6"
      >
        <div className="sticky top-24 space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <GenerationOptions options={generationOptions} onOptionsChange={setGenerationOptions} />
            <ColorOptions 
              blockColors={blockColors} 
              onBlockColorsChange={setBlockColors}
              textColors={textColors}
              onTextColorsChange={setTextColors}
            />
          </div>
          <div className="p-4 sm:p-6 bg-slate-800/30 rounded-2xl border border-slate-800">
            <h3 className="text-lg font-semibold text-slate-100 mb-4">Xem trước</h3>
            <div className="aspect-[1/1.414] bg-slate-950 rounded-lg p-4 overflow-auto">
              <GainsPreview 
                ref={previewRef} 
                data={gainsData} 
                options={generationOptions} 
                blockColors={blockColors}
                textColors={textColors}
              />
            </div>
          </div>
          <div className="flex justify-end items-center gap-4">
            <button 
              onClick={() => alert('AI đang tối ưu nội dung...')} 
              className="flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-slate-200 font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              <Wand2 size={18} />
              Tối ưu bằng AI
            </button>
            <button 
              onClick={handleDownload} 
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg shadow-red-500/20 hover:shadow-xl hover:shadow-red-500/30 transition-all duration-300 transform hover:scale-105"
            >
              {isGenerating ? <Loader size={20} className="animate-spin" /> : <Download size={20} />}
              <span className="ml-2">Xuất bản Gains</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
