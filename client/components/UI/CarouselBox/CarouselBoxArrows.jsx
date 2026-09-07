import React from "react";

export const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} z-10 w-14 h-full !flex items-center justify-center ltr-auto ltr:-right-2 rtl:right-auto rtl:-left-2 before-[20px] lg:before-[40px] before:content-[''] hover:bg-palette-card/20 drop-shadow-xl`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};
export const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} z-10 w-14 h-full !flex items-center justify-center ltr:-left-5 ltr-auto rtl:-right-5 rtl:left-auto before-[20px] lg:before-[40px] before:content-[''] hover:bg-palette-card/20 drop-shadow-lg`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

