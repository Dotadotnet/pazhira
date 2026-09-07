import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactBar = () => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:09369831791';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@pazhira.com';
  };

  return (
    <div className="w-full h-[30px] bg-palette-primary flex items-center justify-between px-4 text-palette-side text-xs font-vazir">
      <div 
        className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
        onClick={handlePhoneClick}
      >
        <FaPhone size={12} />
        <span>تلفن: 09369831791</span>
      </div>
      <div 
        className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
        onClick={handleEmailClick}
      >
        <FaEnvelope size={12} />
        <span>ایمیل: info@pazhira.com</span>
      </div>
    </div>
  );
};

export default ContactBar;