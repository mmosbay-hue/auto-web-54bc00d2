import React from 'react';
import { Target, Award, Heart, Link, Wrench, Phone, Mail, Calendar } from 'lucide-react';

const Section = ({ icon, title, children, gradient = false }) => (
  <div className="mb-4">
    <h3 className={`flex items-center text-sm font-bold uppercase tracking-wider mb-2 ${gradient ? 'gradient-text' : 'text-red-400'}`}>
      {icon}
      <span className="ml-2">{title}</span>
    </h3>
    <div className="text-slate-300 text-xs leading-relaxed space-y-1">
      {children}
    </div>
  </div>
);

const BulletPoint = ({ children }) => (
  <div className="flex items-start">
    <span className="text-red-400 mr-2 mt-1">&#8226;</span>
    <p>{children}</p>
  </div>
);

export default function GainsPreview({ data }) {
  const { ceo, sections, contact } = data;

  return (
    <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-2xl shadow-red-500/10 w-full aspect-[1/1.414] text-white font-sans">
      <div className="flex justify-between items-start pb-4 border-b-2 border-red-500">
        <div>
          <h1 className="text-3xl font-extrabold gradient-text">GAINS AI</h1>
          <p className="text-slate-400 text-sm">Hồ sơ năng lực & Định hướng</p>
        </div>
        <div className="w-24 h-24 bg-slate-700 rounded-lg overflow-hidden border-2 border-slate-600">
          {ceo.photo ? (
            <img src={ceo.photo} alt={ceo.name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-500 text-xs">Ảnh CEO</div>
          )}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-x-6">
        {/* Column 1 */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-bold text-white">{ceo.name || 'Tên CEO'}</h2>
            <p className="text-red-400 font-medium">{ceo.title || 'Chức danh'}</p>
          </div>
          
          <Section icon={<Target size={16} />} title="Mục tiêu" gradient>
            <p>{sections.objective || 'Mô tả mục tiêu kinh doanh và định hướng phát triển của CEO...'}</p>
          </Section>

          <Section icon={<Award size={16} />} title="Thành tựu">
            {sections.achievements.length > 0 ? sections.achievements.map((item, index) => (
              <BulletPoint key={index}>{item}</BulletPoint>
            )) : <BulletPoint>Liệt kê các thành tựu nổi bật...</BulletPoint>}
          </Section>

          <Section icon={<Heart size={16} />} title="Mối quan tâm & Định hướng">
            {sections.interests.length > 0 ? sections.interests.map((item, index) => (
              <BulletPoint key={index}>{item}</BulletPoint>
            )) : <BulletPoint>Các lĩnh vực quan tâm và định hướng chiến lược...</BulletPoint>}
          </Section>
        </div>

        {/* Column 2 */}
        <div className="space-y-4">
          <Section icon={<Link size={16} />} title="Mối quan hệ & Hệ sinh thái">
             {sections.ecosystem.length > 0 ? sections.ecosystem.map((item, index) => (
              <BulletPoint key={index}>{item}</BulletPoint>
            )) : <BulletPoint>Mô tả mạng lưới quan hệ và hệ sinh thái hỗ trợ...</BulletPoint>}
          </Section>

          <Section icon={<Wrench size={16} />} title="Kỹ năng cốt lõi">
             {sections.skills.length > 0 ? sections.skills.map((item, index) => (
              <BulletPoint key={index}>{item}</BulletPoint>
            )) : <BulletPoint>Các kỹ năng chuyên môn và lãnh đạo chính...</BulletPoint>}
          </Section>

          <div className="bg-slate-700/50 p-3 rounded-lg mt-4">
             <h3 className="text-sm font-bold text-red-400 uppercase tracking-wider mb-2">Thông tin liên hệ</h3>
             <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center">
                  <Phone size={12} className="mr-2 text-slate-400"/>
                  <span>{contact.phone || 'Chưa có SĐT'}</span>
                </div>
                <div className="flex items-center">
                  <Mail size={12} className="mr-2 text-slate-400"/>
                  <span>{contact.email || 'Chưa có Email'}</span>
                </div>
                 <div className="flex items-center">
                  <Calendar size={12} className="mr-2 text-slate-400"/>
                  <span>{contact.dob || 'Chưa có ngày sinh'}</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
