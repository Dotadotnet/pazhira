import React from "react";
import Image from "next/image";

const BrandBox = ({ brandName, imageSrc }) => {
  return (
    <div className="relative flex items-center p-3 lg:p-2 shadow-md lg-xl">
      <Image src={imageSrc} width={300} height={175} alt={brandName} />
      <div className="absolute dark-0 dark:bg-slate-800/40"></div>
    </div>
  );
};

export default BrandBox;

