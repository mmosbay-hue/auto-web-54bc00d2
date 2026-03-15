import React, { useState } from 'react';
import { User, Briefcase, Building, UploadCloud, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CEOInfoForm() {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="w-full max-w-2xl mx-auto bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-2xl shadow-red-500/10"
    >
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold gradient-text">Tạo Bảng Gains Của Bạn</h1>
        <p className="text-slate-400 mt-2">Bắt đầu bằng cách nhập thông tin cơ bản của CEO.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="ceo-photo" className="block text-sm font-medium text-slate-300 mb-2">
            Ảnh Chân dung CEO
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-600 border-dashed rounded-xl">
            <div className="space-y-1 text-center">
              {imagePreview ? (
                <img src={imagePreview} alt="CEO Preview" className="mx-auto h-24 w-24 rounded-full object-cover" />
              ) : (
                <UploadCloud className="mx-auto h-12 w-12 text-slate-500" />
              )}
              <div className="flex text-sm text-slate-400">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-slate-800 rounded-md font-medium text-red-400 hover:text-red-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-slate-900 focus-within:ring-red-500"
                >
                  <span>Tải ảnh lên</span>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleImageChange} accept="image/*" />
                </label>
                <p className="pl-1">hoặc kéo và thả</p>
              </div>
              <p className="text-xs text-slate-500">PNG, JPG, GIF tối đa 10MB</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <label htmlFor="ceo-name" className="block text-sm font-medium text-slate-300 mb-2">
            Tên CEO
          </label>
          <User className="absolute left-3 top-1/2 -translate-y-1/2 mt-3 w-5 h-5 text-slate-400 pointer-events-none" />
          <input
            type="text"
            id="ceo-name"
            placeholder="Ví dụ: Nguyễn Văn A"
            className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-3 pl-10 pr-4 text-slate-200 placeholder-slate-500 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
          />
        </div>

        <div className="relative">
          <label htmlFor="ceo-title" className="block text-sm font-medium text-slate-300 mb-2">
            Chức danh
          </label>
          <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 mt-3 w-5 h-5 text-slate-400 pointer-events-none" />
          <input
            type="text"
            id="ceo-title"
            placeholder="Ví dụ: Founder & CEO"
            className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-3 pl-10 pr-4 text-slate-200 placeholder-slate-500 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
          />
        </div>

        <div className="relative">
          <label htmlFor="business-field" className="block text-sm font-medium text-slate-300 mb-2">
            Lĩnh vực kinh doanh
          </label>
          <Building className="absolute left-3 top-1/2 -translate-y-1/2 mt-3 w-5 h-5 text-slate-400 pointer-events-none" />
          <input
            type="text"
            id="business-field"
            placeholder="Ví dụ: Công nghệ thông tin, Bất động sản"
            className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-3 pl-10 pr-4 text-slate-200 placeholder-slate-500 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity duration-300 shadow-lg shadow-red-500/20"
        >
          <span>Tiếp tục</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </form>
    </motion.div>
  );
}
