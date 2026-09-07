import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../hooks/useLanguage";


const CategorySmBox = ({
  name,
  title,
  description,
  styles,
  href,
  imgSrc,
  imgWidth,
  imgHeight,
  gridClass,
}) => {
  const { t, locale } = useLanguage();
  
  return (
    <Link href={`${href}`}>
      <a className={gridClass}>
        <div
          className={`flex flex-col items-center text-center ${
            locale === "en"
              ? "w-[11rem] sm:w-[14rem]"
              : "min-w-full rounded-md w-[11rem] sm:w-[14rem]"
          } my-2 mx-auto`}
          style={styles.CSSProperties}
        >
          <div className="flex items-center justify-center w-[70px] h-[70px] rounded-full">
            <Image
              src={imgSrc}
              alt={title}
              width={55}
              height={55}
              className="drop-shadow-lg"
            />
          </div>
          <h3 className="text-sm md-base font-bold mt-2">
            {t[`${title}`]}
          </h3>
        </div>
      </a>
    </Link>
  );
};

export default CategorySmBox;

