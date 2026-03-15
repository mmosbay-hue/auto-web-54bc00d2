import React from 'react';
import { Columns, Rows, Wand2, Sparkles, Layout } from 'lucide-react';
import { motion } from 'framer-motion';

const ToggleSwitch = ({ label, icon, enabled, onChange }) => (
  <label className="flex items-center justify-between cursor-pointer bg-slate-800/50 p-3 rounded-lg hover:bg-slate-800 transition-colors">
    <div className="flex items-center">
      {icon}
      <span className="ml-3 text-sm font-medium text-slate-300">{label}</span>
    </div>
    <div className="relative">
      <input type="checkbox" className="sr-only" checked={enabled} onChange={onChange} />
      <div className={`block w-10 h-6 rounded-full transition-colors ${enabled ? 'bg-red-500' : 'bg-slate-700'}`}></div>
      <div className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${enabled ? 'translate-x-4' : ''}`}></div>
    </div>
  </label>
);

export default function GenerationOptions({ options, setOptions }) {
  const handleOptionChange = (key, value) => {
    setOptions(prev => ({ ...prev, [key]: value }));
  };

  const handleToggle = (key) => {
    setOptions(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const orientations = [
    { key: 'vertical', label: 'Dọc', icon: <Rows className="h-5 w-5" /> },
    { key: 'horizontal', label: 'Ngang', icon: <Columns className="h-5 w-5" /> },
  ];

  const smartOptions = [
    { key: 'optimizeContent', label: 'AI Tối ưu hóa nội dung', icon: <Wand2 className="h-5 w-5 text-red-400" /> },
    { key: 'autoIcons', label: 'AI Tự động tạo icon', icon: <Sparkles className="h-5 w-5 text-red-400" /> },
    { key: 'suggestLayout', label: 'AI Đề xuất layout', icon: <Layout className="h-5 w-5 text-red-400" /> },
  ];

  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 space-y-6 mb-8">
      <div>
        <h3 className="text-lg font-semibold text-slate-100 mb-4">Tùy chọn Bố cục</h3>
        <div className="relative flex w-full bg-slate-900 p-1 rounded-lg">
          {orientations.map(o => (
            <button
              key={o.key}
              onClick={() => handleOptionChange('orientation', o.key)}
              className="relative w-1/2 py-2 text-sm font-medium text-slate-300 rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 flex items-center justify-center gap-2"
            >
              {options.orientation === o.key && (
                <motion.div
                  layoutId="orientation-pill"
                  className="absolute inset-0 bg-red-600 rounded-md"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{o.icon}</span>
              <span className="relative z-10">{o.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-100 mb-4">Tùy chọn Thông minh</h3>
        <div className="space-y-3">
          {smartOptions.map(opt => (
            <ToggleSwitch
              key={opt.key}
              label={opt.label}
              icon={opt.icon}
              enabled={options[opt.key]}
              onChange={() => handleToggle(opt.key)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}