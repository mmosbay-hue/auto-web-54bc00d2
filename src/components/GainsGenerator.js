import React, { useState, useRef } from 'react';
import { User, Briefcase, Target, Award, Heart, Link as LinkIcon, Wrench, Phone, Mail, Calendar, UploadCloud, Download, Palette } from 'lucide-react';
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
      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2 px-4 text-slate-200 placeholder-slate-500 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
    />
  </div>
);

const TextAreaField = ({ icon, label, name, value, onChange, placeholder }) => (
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
      rows="3"
      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2 px-4 text-slate-200 placeholder-slate-500 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
    />
  </div>
);

export default function GainsGenerator() {
  const [gainsData, setGainsData] = useState({
    ceo: { photo: null, name: 'Nguyễn Văn An', title: 'Founder & CEO tại TechCorp' },
    sections: {
      objective: 'Dẫn dắt TechCorp trở thành công ty công nghệ hàng đầu trong lĩnh vực AI và chuyển đổi số tại Đông Nam Á.',
      achievements: ['Tăng trưởng doanh thu 300% trong 2 năm', 'Gọi vốn thành công vòng Series A 5 triệu USD', 'Phát triển sản phẩm đạt 1 triệu người dùng'],
      interests: ['Ứng dụng AI trong giáo dục', 'Phát triển bền vững', 'Xây dựng văn hóa doanh nghiệp'],
      ecosystem: ['Quỹ đầu tư ABC', 'Hiệp hội Doanh nghiệp trẻ', 'Cộng đồng khởi nghiệp XYZ'],
      skills: ['Lãnh đạo & Quản trị', 'Chiến lược kinh doanh', 'Phát triển sản phẩm công nghệ'],
    },
    contact: { phone: '0912 345 678', email: 'ceo.an@techcorp.vn', dob: '19/05/1985' },
  });

  const [generationOptions, setGenerationOptions] = useState({
    orientation: 'vertical',
    optimizeContent: true,
    autoIcons: true,
    suggestLayout: false,
  });

  const [blockColors, setBlockColors] = useState({
    header: '#1E293B',
    objective: '#334155',
    core: '#334155',
    vision: '#475569',
    contact: '#0F172A',
  });

  const [textColors, setTextColors] = useState({
    header: '#F1F5F9',
    body: '#94A3B8',
  });

  const previewRef = useRef(null);

  const handleDataChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split('.');
    
    setGainsData(prev => {
      const updated = JSON.parse(JSON.stringify(prev));
      let current = updated;
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
      return updated;
    });
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

  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-12 gap-8">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 xl:col-span-4 space-y-6 max-h-[calc(100vh-8rem)] overflow-y-auto pr-4"
        >
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 space-y-4">
            <h3 className="text-lg font-semibold text-slate-100">Thông tin CEO</h3>
            <InputField icon={<User size={16} />} label="Tên CEO" name="ceo.name" value={gainsData.ceo.name} onChange={handleDataChange} />
            <InputField icon={<Briefcase size={16} />} label="Chức danh" name="ceo.title" value={gainsData.ceo.title} onChange={handleDataChange} />
            <div>
              <label className="flex items-center text-sm font-medium text-slate-300 mb-2">
                <UploadCloud size={16} /><span className="ml-2">Ảnh chân dung</span>
              </label>
              <input type="file" onChange={handleImageChange} accept="image/*" className="text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-500/10 file:text-red-400 hover:file:bg-red-500/20"/>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 space-y-4">
            <h3 className="text-lg font-semibold text-slate-100">Nội dung Gains</h3>
            <TextAreaField icon={<Target size={16} />} label="Mục tiêu" name="sections.objective" value={gainsData.sections.objective} onChange={handleDataChange} />
            <DynamicListInput icon={<Award size={16} />} label="Thành tựu" name="sections.achievements" value={gainsData.sections.achievements} onChange={handleDataChange} />
            <DynamicListInput icon={<Heart size={16} />} label="Mối quan tâm & Định hướng" name="sections.interests" value={gainsData.sections.interests} onChange={handleDataChange} />
            <DynamicListInput icon={<LinkIcon size={16} />} label="Mối quan hệ & Hệ sinh thái" name="sections.ecosystem" value={gainsData.sections.ecosystem} onChange={handleDataChange} />
            <DynamicListInput icon={<Wrench size={16} />} label="Kỹ năng cốt lõi" name="sections.skills" value={gainsData.sections.skills} onChange={handleDataChange} />
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 space-y-4">
            <h3 className="text-lg font-semibold text-slate-100">Thông tin liên hệ</h3>
            <InputField icon={<Phone size={16} />} label="Số điện thoại" name="contact.phone" value={gainsData.contact.phone} onChange={handleDataChange} />
            <InputField icon={<Mail size={16} />} label="Email" name="contact.email" value={gainsData.contact.email} onChange={handleDataChange} />
            <InputField icon={<Calendar size={16} />} label="Ngày sinh" name="contact.dob" value={gainsData.contact.dob} onChange={handleDataChange} />
          </div>

          <GenerationOptions
            options={generationOptions}
            setOptions={setGenerationOptions}
          />

          <ColorOptions
            blockColors={blockColors}
            textColors={textColors}
            setBlockColors={setBlockColors}
            setTextColors={setTextColors}
          />
        </motion.div>

        <div className="lg:col-span-7 xl:col-span-8">
          <div className="sticky top-24">
            <div className="aspect-[800/1128] w-full bg-slate-800 rounded-2xl overflow-hidden flex items-center justify-center relative border border-slate-700 shadow-2xl shadow-red-500/10">
              <GainsPreview
                ref={previewRef}
                data={gainsData}
                options={generationOptions}
                blockColors={blockColors}
                textColors={textColors}
              />
            </div>
            <div className="mt-6 flex justify-end">
              <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity duration-300 shadow-lg shadow-red-500/20">
                <Download size={20} />
                <span>Tải xuống Gains</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
