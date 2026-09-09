'use client'
import React, { cloneElement } from "react";
import ThemeToggle from "../Theme/swich";
import Image from "next/image";
import Logo from "./Logo";
import BottonUser from "./user";
import SidebarCart from "../cart/sidebarCart";
import SearchBar from "./SearchBar";
import InputSearch from "../search/input";
import Chat from "../Chat";
import Toolbar from "./Toolbar";
import ChatCustomEvent from "../Chat/chatCustomEvent";
import LanguageSwitcher from "./languageSwitch/page";
import PhoneNumberNavbarLinked from "./items/phoneNumberNavbarLinked";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "motion/react";
import ScrollInfinity from "../Utils/ScrollInfinity";
import ButtonMenuMobile from "./items/buttonMenuMobile";
import { itemsNav } from "./items";
import CategoryMenu from "./items/categoryMenu";



const index = () => {
  const navbar = useTranslations('Navbar');

  return (
    <>
      <div className="fixed flex z-50 flex-col  justify-center m-5 sm:m-9 items-center left-0 right-0 top-0">
        <div className=" w-full relative   dark:bg-gray-50/10 bg-black/5     shadow-gray-600  dark:shadow-gray-100 p-3 rounded-4xl ">
          <div className="size-full rounded-4xl backdrop-blur-md  -z-[10] absolute top-0 right-0"></div>
          <div className="w-full justify-between flex items-center" >
            <div className=" flex w-96">
              <span className="inline sm:hidden" >
              <ButtonMenuMobile className="sm:mr-2" />
              </span>
              <LanguageSwitcher className={"py-1.5 w-28 px-3 mx-2"} />
              <div className="sm:inline hidden">
                <PhoneNumberNavbarLinked className="mr-2" />
              </div>
            </div>
            <div className="shrink-0 flex items-center">
              <Logo className={"size-10 scale-[1.4] translate-y-[0.5px] sm:scale-[2] sm:-translate-y-1.5 ltr:mr-2 rtl:ml-2 sm:mx-4"} />
            </div>
            <div className="hidden sm:flex items-center w-96  justify-end">
              <SidebarCart className="sm:ml-2" />
              <BottonUser className={"ml-2"} />
              <ThemeToggle className={"p-2 ml-2 text-2xl"} />
            </div>
          </div>
        </div>

        <div className="w-full gap-3 sm:flex  mt-2.5 hidden justify-center items-center " >

          <div className="w-full lg:hidden " >
            <ScrollInfinity classNameScrollBar="pb-2" >
              {itemsNav.map(item => {
                return (
                  <Link href={item.link} >
                    <motion.span
                      whileHover={{ translateY: "5px", scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center shrink-0  backdrop-blur-md   dark:bg-gray-100/10 bg-black/5 py-1.5 px-4 rounded-full    shadow-gray-600  dark:shadow-gray-100 text-gray-900 dark:text-white justify-center" >
                      {cloneElement(item.icon, { className: "text-xl " })}
                      <span className="ltr:ml-2  flex items-center  rtl:mr-2 text-nowrap font-bold">{navbar(item.name)}</span>
                    </motion.span>
                  </Link>
                )
              })}
            </ScrollInfinity>
          </div>
          <div className="gap-3  hidden lg:flex justify-center items-center">
            {itemsNav.map(item => {
              return (
                <Link href={item.link} >
                  <motion.span
                    whileHover={{ translateY: "5px", scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center shrink-0  backdrop-blur-md   dark:bg-gray-100/10 bg-black/5 py-1.5 px-4 rounded-full    shadow-gray-600  dark:shadow-gray-100 text-gray-900 dark:text-white justify-center" >
                    {cloneElement(item.icon, { className: "text-xl " })}
                    <span className="ltr:ml-2  flex items-center  rtl:mr-2 text-nowrap font-bold">{navbar(item.name)}</span>
                  </motion.span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
      <Toolbar />
      <Chat />
      <div className="z-20 hidden sm:inline-block fixed bottom-5 ltr:left-8 rtl:right-8">
        <div className="relative size-16 rounded-full bg-primary">
          <div
            className="
      absolute inset-0
       rounded-full 
      border-3 border-primary
      animate-[ripple_1s_ease-out_infinite]
    "
          />
          <div className="relative size-full z-10">
            <ChatCustomEvent className="size-10  text-white" />
          </div>
        </div>
      </div>
      <CategoryMenu />
    </>
  );
};

export default index;
