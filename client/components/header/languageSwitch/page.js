"use client";
import { useRef, useState } from "react";
import { useLocale } from "next-intl";
import language from "@/app/language";
import { usePathname } from "next/navigation";
import Image from "next/image";
import OutsideClick from "@/components/outsideClick/OutsideClick";
const LanguageSwitcher = ({ className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useLocale();
  const class_lang = new language(t);
  const lang_now = class_lang.getInfo();
  const langs = class_lang.info;
  const langs_result = [];
  const targetRef = useRef(null);
  const pathname = usePathname().split("/");

  langs.forEach((lang) => {
    let newPath = [...pathname];
    if (t === "fa") {
      newPath.unshift(lang.lang);
      newPath.unshift("");
    } else {
      newPath[1] = lang.lang;
    }
    langs_result.push({
      lang: lang.lang,
      img: lang.img,
      name: lang.name,
      link: newPath.join("/").replace("//", "/"),
      loc: lang.loc,
      dir: lang.dir
    });
  });
  return (
    <div className="relative">
      <button
        onClick={() => {
        setIsOpen(!isOpen);
        }}
        ref={targetRef}
        className= {" flex  flex-row-reverse  rounded-full hover:shadow-sm cursor-pointer shadow-gray-500    transition-all  dark:bg-white/10 bg-black/10 items-center justify-center " +  className }
      >
        <span className=" flex items-center translate-y-0.5 font-bold ">{lang_now.name}</span>
        <img
          width={28}
          height={28}
          alt={lang_now.lang}
          src={lang_now.img}
          priority={false}
          quality={20}
          className="rounded-full ltr:mr-2  rtl:ml-2 "
        />
      </button>
      <OutsideClick
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        targetRef={targetRef}
        className={`absolute  rtl:right-12 left-12
          }   w-40 mt-2 top-16 backdrop-blur-md dark:bg-gray-100/10 bg-black/5    dark:shadow-gray-500   rounded-3xl shadow-md p-2 z-50`}
      >
        {langs_result.map((lang) => (
          <a
            rel="nofollow"
            href={lang.link}
            key={lang.lang}
            className="flex items-center transition-all gap-3 p-2 pr-4  hover:bg-gray-100 dark:hover:bg-gray-700 rounded-3xl w-full text-right"
          >
            <img
              src={lang.img}
              width={20}
              height={20}
              alt={lang.lang}
              priority={false}
              quality={2}
              className="rounded-full"
            />
            <span className="text-sm font-vazir">{lang.name}</span>
          </a>
        ))}
      </OutsideClick>
    </div>
  );
};

export default LanguageSwitcher;
