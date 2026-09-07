
'use client'
import React from "react";
import EffectFotter from "./effect";
import { motion } from "motion/react";

import { IoLocationSharp, IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa";
import { TbBodyScan, TbBuildingFactory } from "react-icons/tb";
import { useLocale } from "next-intl";
import language from "@/app/language";
import { RiInformationFill, RiTelegram2Fill } from "react-icons/ri";
import { useTranslations } from "use-intl";
import { Link } from "@/i18n/navigation";
import { BiSolidUserVoice } from "react-icons/bi";
import { BsHandbagFill } from "react-icons/bs";
import Image from "next/image";


const Footer = () => {
  const t = useLocale();
  const class_lang = new language(t);
  const lang_now = class_lang.getInfo();
  const hoverMove = lang_now.dir == "rtl" ? "-20px" : "20px";
  const hoverMoveBack = lang_now.dir == "rtl" ? "-15px" : "15px";
  const navbarT = useTranslations('Navbar');
  const footerT = useTranslations('Footer');

  return (
    <>
      <EffectFotter />
      <div className="bg-primary-300 text-white relative z-30  pb-0 dark:bg-primary-700">
        <div className="flex gap-12 justify-around flex-wrap p-5 sm:p-10" >
          <div className="footer-group w-full md:w-auto ">
            <div className=" ltr:ml-6 flex h-full  items-center py-6 rtl:mr-6">
              <div className=" inline " >
                <p className="flex  items-center">
                  <span className="text-2xl">
                    <TbBuildingFactory />
                  </span>
                  <span className="text-xl font-bold ltr:ml-3 rtl:mr-3">
                    <span> { footerT("CallFactory") } </span> :
                  </span>
                </p>
                <motion.a href="tel:+982152888853"
                  whileHover={{ translateX: hoverMove }}
                  whileTap={{ translateX: hoverMoveBack }}
                  className="ltr:ml-5 hover:font-bold hover:scale-105 block rtl:mr-5 mt-4">
                  02152888853
                </motion.a>


                <p className="flex mt-5  items-center">
                  <span className="text-2xl">
                    <FaPhone />
                  </span>
                  <span className="text-xl font-bold ltr:ml-3 rtl:mr-3">
                    <span> { footerT("ManaggerBussines") } </span> :
                  </span>
                </p>
                <motion.a href="tel:+989128989020"
                  whileHover={{ translateX: hoverMove }}
                  whileTap={{ translateX: hoverMoveBack }}
                  className="ltr:ml-5 hover:font-bold hover:scale-105 block rtl:mr-5 mt-4">
                  09128989020
                </motion.a>

                <p className="flex mt-5  items-center">
                  <span className="text-2xl">
                    <FaPhone />
                  </span>
                  <span className="text-xl font-bold ltr:ml-3 rtl:mr-3">
                    <span>{ footerT("SellMangger") }</span> :
                  </span>
                </p>
                <motion.a href="tel:+989127751643"
                  whileHover={{ translateX: hoverMove }}
                  whileTap={{ translateX: hoverMoveBack }}
                  className="ltr:ml-5 hover:font-bold hover:scale-105 block rtl:mr-5 mt-4">
                  09127751643
                </motion.a>
              </div>





            </div>
          </div>

          <div className="footer-group w-full md:w-auto sm:mt-0 mt-4   ">
            <div className=" ltr:ml-6 flex h-full  items-center py-6 rtl:mr-6">
              <div className=" inline " >
                <p className="flex  ">
                  <span className="text-2xl">
                    <IoLocationSharp />
                  </span>
                  <span className="text-xl font-bold  ltr:ml-3 rtl:mr-3">
                    <span> { footerT("Address") } </span> :
                  </span>
                </p>
                <motion.a href=""
                  whileHover={{ translateX: hoverMove }}
                  whileTap={{ translateX: hoverMoveBack }}
                  className="  max-w-68 hover:font-bold text-center text-wrap hover:scale-105 block rtl:mr-5 mt-4">
                 { footerT("AddressText") }
                </motion.a>

                <motion.span
                  whileHover={{ translateX: hoverMove }}
                  whileTap={{ translateX: hoverMoveBack }}
                  className=" flex cursor-pointer hover:scale-105 mt-4 items-center  ">
                  <Link className="flex  items-center" href={"/about-us"}>
                    <span className="text-2xl">
                      <RiInformationFill />
                    </span>
                    <span className="text-xl font-bold ltr:ml-3 rtl:mr-3">
                      <span>{navbarT("AboutUs")}</span>
                    </span>
                  </Link>
                </motion.span>


                <motion.span
                  whileHover={{ translateX: hoverMove }}
                  whileTap={{ translateX: hoverMoveBack }}
                  className=" flex cursor-pointer hover:scale-105 mt-4 items-center  ">
                  <Link className="flex  items-center" href={"/voice-clients"}>
                    <span className="text-2xl">
                      <BiSolidUserVoice />
                    </span>
                    <span className="text-xl font-bold ltr:ml-3 rtl:mr-3">
                      <span>{navbarT("VoiceClients")}</span>
                    </span>
                  </Link>
                </motion.span>

                <motion.span
                  whileHover={{ translateX: hoverMove }}
                  whileTap={{ translateX: hoverMoveBack }}
                  className=" flex cursor-pointer hover:scale-105 mt-4 items-center  ">
                  <Link className="flex  items-center" href={"/recruitment"}>
                    <span className="text-2xl">
                      <TbBodyScan />
                    </span>
                    <span className="text-xl font-bold ltr:ml-3 rtl:mr-3">
                      <span>{navbarT("Recruitment")}</span>
                    </span>
                  </Link>
                </motion.span>


                <motion.span
                  whileHover={{ translateX: hoverMove }}
                  whileTap={{ translateX: hoverMoveBack }}
                  className=" flex cursor-pointer hover:scale-105 mt-4 items-center  ">
                  <Link className="flex  items-center" href={"/products"}>
                    <span className="text-2xl">
                      <BsHandbagFill />
                    </span>
                    <span className="text-xl font-bold ltr:ml-3 rtl:mr-3">
                      <span>{navbarT("Products")}</span>
                    </span>
                  </Link>
                </motion.span>




              </div>





            </div>
          </div>

          <div className="flex justify-center flex-wrap gap-4  items-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="size-36 flex justify-center items-center bg-white rounded-4xl" href="/">
              <Image src={"/images/enamad.png"} width={100} height={100} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="size-36 flex justify-center items-center bg-white rounded-4xl" href="/">
              <Image src={"/images/rezi.webp"} width={100} height={100} />
            </motion.a>
          </div>

          <div className="flex justify-center flex-col  items-center">
            <p className="flex justify-center">
              <Image src={"/images/logo2.png"} className="size-56" width={100} height={100} />
            </p>
            <p className="text-center text-lg font-bold mt-3" >
              { footerT("FallowUsInMedia") }
            </p>
            <div className="rounded-full flex justify-between gap-4 bg-white p-3 mt-4" >
              <motion.a
                href="/"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }} className="cursor-pointer">
                <FaWhatsapp className="text-green-600 font-bold text-4xl" />
              </motion.a>
              <motion.a
                href="/"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }} className="cursor-pointer">
                <IoLogoLinkedin className="text-blue-600 font-bold text-4xl" />
              </motion.a>
              <motion.a
                href="/"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }} className="cursor-pointer">
                <FaInstagram className="text-[#E4405F] font-bold text-4xl" />
              </motion.a>
              <motion.a
                href="/"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }} className="cursor-pointer">
                <RiTelegram2Fill className="text-blue-600 font-bold text-4xl" />
              </motion.a>


            </div>
          </div>



        </div>
      </div>
    </>
  );
};

export default Footer;

