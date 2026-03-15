import React from 'react';
import { Palette } from 'lucide-react';
import { motion } from 'framer-motion';

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
        className="w-full h-full rounded-md border-2 border-slate-600"
        style={{ backgroundColor: color }}
      ></div>
    </div>
  </div>
);

export default function ColorOptions({ blockColors, onBlockColorsChange, textColors, onTextColorsChange }) {
  const handleBlockColorChange = (blockName, color) => {
    onBlockColorsChange({ ...blockColors, [blockName]: color });
  };

  const handleTextColorChange = (typeName, color) => {
    onTextColorsChange({ ...textColors, [typeName]: color });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-slate-800/50 p-4 rounded-lg flex-1"
    >
      <div className="flex items-center mb-4">
        <Palette className="w-5 h-5 text-red-400" />
        <h3 className="ml-2 text-base font-semibold text-slate-100">Tùy chỉnh màu sắc</h3>
      </div>
      
      <div>
        <h4 className="text-sm font-semibold text-slate-300 mb-3">Màu Khối</h4>
        <div className="space-y-3">
          <ColorInput label="Header & Footer" color={blockColors.header} onChange={(e) => handleBlockColorChange('header', e.target.value)} />
          <ColorInput label="Mục tiêu" color={blockColors.objective} onChange={(e) => handleBlockColorChange('objective', e.target.value)} />
          <ColorInput label="Thành tựu" color={blockColors.core} onChange={(e) => handleBlockColorChange('core', e.target.value)} />
          <ColorInput label="Định hướng" color={blockColors.vision} onChange={(e) => handleBlockColorChange('vision', e.target.value)} />
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-700/50">
        <h4 className="text-sm font-semibold text-slate-300 mb-3">Màu Chữ</h4>
        <div className="space-y-3">
          <ColorInput 
            label="Tiêu đề / Tên" 
            color={textColors.header} 
            onChange={(e) => handleTextColorChange('header', e.target.value)} 
          />
          <ColorInput 
            label="Nội dung" 
            color={textColors.body} 
            onChange={(e) => handleTextColorChange('body', e.target.value)} 
          />
        </div>
      </div>

    </motion.div>
  );
}
