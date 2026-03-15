import React, { forwardRef } from 'react';
import { Target, Award, Heart, Link as LinkIcon, Wrench, Phone, Mail, Calendar, User } from 'lucide-react';

const Section = ({ icon, title, children, titleColor, bodyColor }) => (
  <div className="mb-4 last:mb-0">
    <h3 
      className="flex items-center text-xs font-bold uppercase tracking-wider mb-2"
      style={{ color: titleColor || '#FFFFFF' }}
    >
      {icon}
      <span className="ml-2">{title}</span>
    </h3>
    <div className="text-[8px] leading-relaxed space-y-1" style={{ color: bodyColor || '#334155' }}>
      {children}
    </div>
  </div>
);

const BulletList = ({ items }) => (
  <ul className="space-y-1">
    {items.map((item, index) => (
      <li key={index} className="flex items-start">
        <span className="mr-2 mt-0.5">•</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const VerticalLayout = ({ data, blockColors, textColors }) => (
  <div className="w-full h-full flex flex-col font-sans">
    {/* Header */}
    <div style={{ backgroundColor: blockColors.header }} className="p-4 flex items-center gap-4 rounded-t-md">
      <div className="flex-grow">
        <h2 className="text-2xl font-bold" style={{ color: textColors.header }}>{data.ceo.name || 'Tên CEO'}</h2>
        <p className="text-sm font-medium" style={{ color: textColors.header, opacity: 0.8 }}>{data.ceo.title || 'Chức danh'}</p>
      </div>
      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 border-white/20">
        {data.ceo.photo ? 
          <img src={data.ceo.photo} alt="CEO" className="w-full h-full object-cover" /> : 
          <div className="w-full h-full bg-slate-700 flex items-center justify-center"><User size={32} className="text-slate-500"/></div>
        }
      </div>
    </div>

    {/* Body */}
    <div className="flex-grow grid grid-cols-2 gap-px">
      {/* Left Column */}
      <div className="flex flex-col">
        <div style={{ backgroundColor: blockColors.objective }} className="p-3 flex-grow">
          <Section icon={<Target size={10} />} title="Mục tiêu" titleColor={textColors.header} bodyColor={textColors.body}>
            <p>{data.sections.objective}</p>
          </Section>
        </div>
        <div style={{ backgroundColor: blockColors.core }} className="p-3 flex-grow">
          <Section icon={<Award size={10} />} title="Thành tựu" titleColor={textColors.header} bodyColor={textColors.body}>
            <BulletList items={data.sections.achievements} />
          </Section>
        </div>
      </div>
      {/* Right Column */}
      <div style={{ backgroundColor: blockColors.vision }} className="p-3 flex flex-col gap-4">
        <Section icon={<Heart size={10} />} title="Mối quan tâm & Định hướng" titleColor={textColors.header} bodyColor={textColors.body}>
          <BulletList items={data.sections.interests} />
        </Section>
        <Section icon={<LinkIcon size={10} />} title="Mối quan hệ & Hệ sinh thái" titleColor={textColors.header} bodyColor={textColors.body}>
          <BulletList items={data.sections.ecosystem} />
        </Section>
        <Section icon={<Wrench size={10} />} title="Kỹ năng cốt lõi" titleColor={textColors.header} bodyColor={textColors.body}>
          <BulletList items={data.sections.skills} />
        </Section>
      </div>
    </div>

    {/* Footer */}
    <div style={{ backgroundColor: blockColors.contact }} className="p-3 rounded-b-md">
      <div className="text-[8px] space-y-1" style={{ color: textColors.header }}>
        <div className="flex items-center"><Phone size={8} className="mr-2"/><span>{data.contact.phone}</span></div>
        <div className="flex items-center"><Mail size={8} className="mr-2"/><span>{data.contact.email}</span></div>
        <div className="flex items-center"><Calendar size={8} className="mr-2"/><span>{data.contact.dob}</span></div>
      </div>
    </div>
  </div>
);

const HorizontalLayout = ({ data, blockColors, textColors }) => (
  // Placeholder for a potential horizontal layout
  <div className="w-full h-full flex items-center justify-center bg-slate-700 text-white">
    <p>Horizontal Layout (Coming Soon)</p>
  </div>
);

const GainsPreview = forwardRef(({ data, options, blockColors, textColors }, ref) => {
  return (
    <div ref={ref} className="w-full h-full bg-white shadow-lg scale-[0.2] sm:scale-[0.3] md:scale-[0.4] lg:scale-[0.5] xl:scale-[0.6] origin-top-left transform">
      <div className="w-[800px] h-[1128px]">
        {options.orientation === 'vertical' ? 
          <VerticalLayout data={data} blockColors={blockColors} textColors={textColors} /> : 
          <HorizontalLayout data={data} blockColors={blockColors} textColors={textColors} />
        }
      </div>
    </div>
  );
});

export default GainsPreview;
