import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DynamicListInput({ label, icon, name, value = [], onChange, placeholder }) {
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      onChange({ target: { name, value: [...value, inputValue.trim()] } });
      setInputValue('');
    }
  };

  const handleRemoveItem = (indexToRemove) => {
    onChange({ target: { name, value: value.filter((_, index) => index !== indexToRemove) } });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddItem();
    }
  };

  return (
    <div>
      <label className="flex items-center text-sm font-medium text-slate-300 mb-2">
        {icon}
        <span className="ml-2">{label}</span>
      </label>
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-slate-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition duration-200"
        />
        <button
          type="button"
          onClick={handleAddItem}
          className="bg-red-600 hover:bg-red-700 text-white font-bold p-2 rounded-lg transition-colors duration-200 flex-shrink-0"
        >
          <Plus size={20} />
        </button>
      </div>
      <AnimatePresence>
        <ul className="mt-3 space-y-2">
          {value.map((item, index) => (
            <motion.li
              key={index}
              layout
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-between bg-slate-800/50 p-2 rounded-md text-sm"
            >
              <span className="text-slate-300 flex-1 break-words mr-2">{item}</span>
              <button
                type="button"
                onClick={() => handleRemoveItem(index)}
                className="text-slate-500 hover:text-red-400 transition-colors flex-shrink-0"
              >
                <X size={16} />
              </button>
            </motion.li>
          ))}
        </ul>
      </AnimatePresence>
    </div>
  );
}
