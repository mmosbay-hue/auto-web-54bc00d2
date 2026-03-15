import React from 'react';
import { Palette } from 'lucide-react';

const ColorInput = ({ label, color, onChange }) => (
  <div className="flex items-center justify-between">
    <label className="text-sm text-slate-300">{label}</label>
    <div className="relative w-8 h-8">
      <input
        type="color"
        value={color}
        onChange={onChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />
      <div
        style={{ backgroundColor: color }}
        className="w-full h-full rounded-md border-2 border-slate-600 pointer-events-none"
      ></div>
    </div>
  </div>
);

export default function ColorOptions({ blockColors, textColors, setBlockColors, setTextColors }) {
  const handleBlockColorChange = (key, value) => {
    setBlockColors(prev => ({ ...prev, [key]: value }));
  };

  const handleTextColorChange = (key, value) => {
    setTextColors(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-slate-100 mb-4 flex items-center">
          <Palette size={20} className="mr-2 text-red-400" />
          Tùy chỉnh màu sắc
        </h3>
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-slate-400 mt-2">Màu khối</h4>
          <ColorInput label="Header" color={blockColors.header} onChange={(e) => handleBlockColorChange('header', e.target.value)} />
          <ColorInput label="Mục tiêu" color={blockColors.objective} onChange={(e) => handleBlockColorChange('objective', e.target.value)} />
          <ColorInput label="Cốt lõi" color={blockColors.core} onChange={(e) => handleBlockColorChange('core', e.target.value)} />
          <ColorInput label="Tầm nhìn" color={blockColors.vision} onChange={(e) => handleBlockColorChange('vision', e.target.value)} />
          <ColorInput label="Liên hệ" color={blockColors.contact} onChange={(e) => handleBlockColorChange('contact', e.target.value)} />
          
          <h4 className="text-sm font-medium text-slate-400 mt-4">Màu chữ</h4>
          <ColorInput label="Tiêu đề" color={textColors.header} onChange={(e) => handleTextColorChange('header', e.target.value)} />
          <ColorInput label="Nội dung" color={textColors.body} onChange={(e) => handleTextColorChange('body', e.target.value)} />
        </div>
      </div>
    </div>
  );
}
