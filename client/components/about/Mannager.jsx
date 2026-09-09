"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import language from "@/app/language";
import { useTranslations } from "use-intl";

function Mannager() {
      const t = useLocale();
      const class_lang = new language(t);
      const lang_now = class_lang.getInfo();
      const Move = lang_now.dir == "rtl" ? "-100px" : "100px";
      const AboutPageT = useTranslations("AboutPage")

    return (
        <div className="flex justify-center  items-center" >
            <div className="  rtl:md:pl-96 ltr:md:pr-96">
                <div className="flex flex-col relative items-center justify-center ">
                    <div className=" relative  " >
                        <div className=" bg-primary absolute bottom-5 sm:bottom-6 sm:scale-100 scale-95 ltr:sm:right-6 ltr:right-5 rtl:left-5   rtl:sm:left-6 rounded-4xl size-full " ></div>
                        <Image width={400} height={400} className="sm:h-96 h-88  w-72 sm:w-80 object-cover relative rounded-4xl" src={"/images/about/jabraeili.jpg"} />

                        <div className="absolute size-full right-0 p-5 top-0 flex flex-col justify-end" >
                            <div className="flex w-full gap-2 md:flex-col justify-between items-baseline ">
                                <div className=" flex  md:w-full  justify-start">
                                    <div className="bg-gray-300/50 text-white p-2 rounded-3xl border-white border  backdrop-blur-lg     shadow-gray-600  dark:shadow-gray-100">
                                        {AboutPageT("JobPosition")}
                                    </div>
                                </div>
                                <div className=" flex md:w-full justify-start">
                                    <div className="bg-gray-300/50 p-2 text-white rounded-3xl border-white border  backdrop-blur-lg     shadow-gray-600  dark:shadow-gray-100">
                                        {AboutPageT("NameManager")}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-6 md:p-0 px-5 pt-10 static md:absolute ltr:md:left-60  rtl:md:right-60">
                        <motion.div
                            initial={{ opacity: 0, x: Move }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className=" w-full md:w-[450px] flex items-center md:py-0 py-4  h-auto md:h-40 px-4 bg-primary rounded-4xl" >
                            <div className="text-sm text-white ltr:text-left rtl:text-right">
                                {AboutPageT("TextManager1")}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: Move }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="w-full md:w-[450px] flex items-center md:py-0 py-4  h-auto md:h-40 px-4 bg-primary rounded-4xl" >
                            <div className="text-sm text-white ltr:text-left rtl:text-right">
                                {AboutPageT("TextManager2")}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mannager;