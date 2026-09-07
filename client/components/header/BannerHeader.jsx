import React from 'react';

const BannerHeader = () => {
  return (
    <div className="w-full h-[60px] bg-[#2c2c2c] relative overflow-hidden flex justify-center items-center font-vazir z-[1001]">
      {/* Diagonal lines pattern */}
      <div 
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15) 2px, transparent 2px, transparent 4px)'
        }}
      />
      <div className="bg-[#4a4a4a] px-[30px] py-[6px] rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.4)] relative z-10 flex items-center gap-[10px]">
        <span className="text-white  text-[10px] md:text-base">به مناسبت بلک فرایدی - تخفیف های استثنایی</span>
        <span className="bg-[#FFD700] text-[#2c2c2c] px-[9px] py-[3px] rounded-[20px] text-xs font-bold">تا ۵۰٪ تخفیف</span>
      </div>
    </div>
  );
};

export default BannerHeader;