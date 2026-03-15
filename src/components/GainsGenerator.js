import React, { useState } from 'react';
import { User, Briefcase, Target, Award, Heart, Link, Wrench, Phone, Mail, Calendar, UploadCloud, Wand2 } from 'lucide-react';
import { motion } from 'framer-motion';
import GainsPreview from './GainsPreview';

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
      className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
    />
  </div>
);

const TextareaField = ({ icon, label, name, value, onChange, placeholder, rows = 3 }) => (
  <div>
    <label className="flex items-center text-sm font-medium text-slate-300 mb-2">
      {icon}
      <span className="ml-2">{label}</span>
    </label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition resize-y"
    ></textarea>
     <p className="text-xs text-slate-500 mt-1">Mỗi dòng sẽ là một gạch đầu dòng trong bảng Gains.</p>
  </div>
);

export default function GainsGenerator() {
  const [gainsData, setGainsData] = useState({
    ceo: {
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
      name: 'Nguyễn Thị Bích Hằng',
      title: 'CEO & Founder tại InnovateX',
    },
    sections: {
      objective: 'Dẫn dắt InnovateX trở thành công ty tiên phong trong lĩnh vực AI tại Đông Nam Á, đạt doanh thu 10 triệu USD vào năm 2025.',
      achievements: [
        'Tăng trưởng doanh thu 300% trong 2 năm liên tiếp.',
        'Gọi vốn thành công vòng Series A trị giá 5 triệu USD.',
        'Xây dựng đội ngũ nhân sự từ 10 lên 100 người.',
      ],
      interests: [
        'Phát triển bền vững và ứng dụng công nghệ xanh.',
        'Xây dựng văn hóa doanh nghiệp sáng tạo và trao quyền.',
        'Mentoring các startup công nghệ trẻ.',
      ],
      ecosystem: [
        'Quan hệ đối tác chiến lược với các tập đoàn công nghệ lớn.',
        'Thành viên ban cố vấn của Quỹ đầu tư mạo hiểm ABC.',
        'Diễn giả thường xuyên tại các sự kiện công nghệ quốc tế.',
      ],
      skills: [
        'Lãnh đạo và xây dựng đội nhóm hiệu suất cao.',
        'Chiến lược kinh doanh và phát triển sản phẩm AI.',
        'Gây quỹ và quan hệ nhà đầu tư.',
      ],
    },
    contact: {
      phone: '0912 345 678',
      email: 'hang.nguyen@innovatex.com',
      dob: '15/08/1985',
    },
  });

  const [imagePreview, setImagePreview] = useState(gainsData.ceo.photo);

  const handleCEOChange = (e) => {
    const { name, value } = e.target;
    setGainsData(prev => ({ ...prev, ceo: { ...prev.ceo, [name]: value } }));
  };

  const handleSectionChange = (e) => {
    const { name, value } = e.target;
    setGainsData(prev => ({ ...prev, sections: { ...prev.sections, [name]: value } }));
  };
  
  const handleListSectionChange = (e) => {
    const { name, value } = e.target;
    const list = value.split('\n').filter(item => item.trim() !== '');
    setGainsData(prev => ({ ...prev, sections: { ...prev.sections, [name]: list } }));
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setGainsData(prev => ({ ...prev, contact: { ...prev.contact, [name]: value } }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        setImagePreview(result);
        setGainsData(prev => ({ ...prev, ceo: { ...prev.ceo, photo: result } }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 space-y-6"
          >
            <h2 className="text-2xl font-bold gradient-text">Trình tạo Gains AI</h2>
            <p className="text-slate-400">Nhập thông tin của bạn vào các trường bên dưới, AI sẽ tự động tạo và cập nhật bảng Gains bên phải.</p>
            
            <div className="space-y-4 p-4 bg-slate-900/50 rounded-xl">
              <h3 className="font-semibold text-lg text-white">Thông tin CEO</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <InputField icon={<User size={16} />} label="Tên CEO" name="name" value={gainsData.ceo.name} onChange={handleCEOChange} placeholder="VD: Nguyễn Văn A" />
                  <InputField icon={<Briefcase size={16} />} label="Chức danh" name="title" value={gainsData.ceo.title} onChange={handleCEOChange} placeholder="VD: CEO & Founder" />
                </div>
                <div>
                  <label className="flex items-center text-sm font-medium text-slate-300 mb-2">
                    <UploadCloud size={16} />
                    <span className="ml-2">Ảnh chân dung</span>
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-600 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      {imagePreview ? (
                        <img src={imagePreview} alt="Preview" className="mx-auto h-24 w-24 rounded-full object-cover" />
                      ) : (
                        <svg className="mx-auto h-12 w-12 text-slate-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                      <div className="flex text-sm text-slate-500">
                        <label htmlFor="file-upload" className="relative cursor-pointer bg-slate-700 rounded-md font-medium text-red-400 hover:text-red-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-slate-800 focus-within:ring-red-500 px-2">
                          <span>Tải ảnh lên</span>
                          <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleImageChange} accept="image/*" />
                        </label>
                        <p className="pl-1">hoặc kéo thả</p>
                      </div>
                      <p className="text-xs text-slate-500">PNG, JPG, GIF tối đa 10MB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 p-4 bg-slate-900/50 rounded-xl">
              <h3 className="font-semibold text-lg text-white">Nội dung Gains</h3>
              <TextareaField icon={<Target size={16} />} label="Mục tiêu" name="objective" value={gainsData.sections.objective} onChange={handleSectionChange} placeholder="Mô tả mục tiêu chính..." rows={2} />
              <TextareaField icon={<Award size={16} />} label="Thành tựu" name="achievements" value={gainsData.sections.achievements.join('\n')} onChange={handleListSectionChange} placeholder="Thành tựu 1..." />
              <TextareaField icon={<Heart size={16} />} label="Mối quan tâm & Định hướng" name="interests" value={gainsData.sections.interests.join('\n')} onChange={handleListSectionChange} placeholder="Mối quan tâm 1..." />
              <TextareaField icon={<Link size={16} />} label="Mối quan hệ & Hệ sinh thái" name="ecosystem" value={gainsData.sections.ecosystem.join('\n')} onChange={handleListSectionChange} placeholder="Mối quan hệ 1..." />
              <TextareaField icon={<Wrench size={16} />} label="Kỹ năng cốt lõi" name="skills" value={gainsData.sections.skills.join('\n')} onChange={handleListSectionChange} placeholder="Kỹ năng 1..." />
            </div>

            <div className="space-y-4 p-4 bg-slate-900/50 rounded-xl">
              <h3 className="font-semibold text-lg text-white">Thông tin liên hệ</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField icon={<Phone size={16} />} label="Số điện thoại" name="phone" value={gainsData.contact.phone} onChange={handleContactChange} placeholder="09xxxxxxxx" />
                <InputField icon={<Mail size={16} />} label="Email" name="email" value={gainsData.contact.email} onChange={handleContactChange} placeholder="email@example.com" type="email" />
                <InputField icon={<Calendar size={16} />} label="Ngày sinh" name="dob" value={gainsData.contact.dob} onChange={handleContactChange} placeholder="DD/MM/YYYY" />
              </div>
            </div>
            
            <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg shadow-red-500/20 hover:scale-105 transform transition-transform duration-300">
              <Wand2 size={20} />
              <span>Tối ưu bằng AI & Xuất bản</span>
            </button>

          </motion.div>

          {/* Right Column: Preview */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="sticky top-24"
          >
            <GainsPreview data={gainsData} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
