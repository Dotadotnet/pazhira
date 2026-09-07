"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import { motion, AnimatePresence } from "motion/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { useLocale } from "next-intl";
import language from "@/app/language";
import { useTranslations } from "use-intl";



export default function MySlider() {
    const [swiper, setSwiper] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const swiperRef = useRef(null);
    const autoplayTimer = useRef(null);
    const t = useLocale();
    const class_lang = new language(t);
    const lang_now = class_lang.getInfo();
    const sliderProT = useTranslations('SliderProduct');

    const handleSlideChange = (swiper) => {
        setDirection(
            swiper.swipeDirection === "next" ? 1 : -1
        );
        swiperRef.current = swiper;
        setActiveIndex(swiper.realIndex);
    };

    const slides = [
        {
            title: sliderProT("PintoBeansTitle"),
            summary: sliderProT("PintoBeansSummary"),
            description: sliderProT("PintoBeansDescription"),
            image: "/products/pinto-beans.png",
        },
        {
            title: sliderProT("SweetCornTitle"),
            summary: sliderProT("SweetCornSummary"),
            description: sliderProT("SweetCornDescription"),
            image: "/products/sweet-corn.png",
        },
        {
            title: sliderProT("PeasTitle"),
            summary: sliderProT("PeasSummary"),
            description: sliderProT("PeasDescription"),
            image: "/products/Peas.png",
        },
    ];

    // const slides = [
    //     {
    //         title: "کنسرو لوبیا",
    //         summary: "لوبیای پخته و آماده، برای خورشته ای فوری",
    //         description: " دیگه نیازی به خیسوندن و پخت ساعتی نیست! این کنسرو لوبیا با دونههای درشت و کاملاً پخته، سرشار از پروتئین و فیله. چه بخوای خورشت لوبیا درست کنی، چه برگر گیاهی یا سالاد پروتئینی، فقط کافیه دربشو باز کنی و استفاده کنی.",
    //         image: "/products/pinto-beans.png",
    //     },
    //     {
    //         title: "کنسرو ذرت",
    //         summary: "ذرت شیرین و دانهدانه، ترد و تازه",
    //         description: "این کنسرو ذرت از دانههای درشت و طلایی تهیه شده که طعم شیرین طبیعی رو کامل حفظ کردن. بدون شکر افزوده و نگهدارنده، برای سالاد، سوپ ذرت، املت یا حتی به عنوان یه ساید ساده کنار غذا عالیه.",
    //         image: "/products/sweet-corn.png",
    //     },
    //     {
    //         title: "کنسرو نخود فرنگی",
    //         summary: " نخود سبز ترد و خوشرنگ، طعم بهار رو به آشپزخونه ات میاره",
    //         description: "این نخودفرنگیها در اوج تازگی فرآوری شدن تا هم رنگ سبز زیباشون حفظ بشه، هم بافت دانهدانشون له نشه. سرشار از ویتامین C و آهن، و برای سوپ نخودفرنگی، خوراک مرغ، سس بشامل یا حتی یه سالاد ساده، یه انتخاب سریع و مقویه .",
    //         image: "/products/Peas.png",
    //     },
    // ];

    // useEffect(() => {
    //     startAutoplay();

    //     return () => {
    //         clearTimeout(autoplayTimer.current);
    //     };
    // }, []);


    const textVariants = {
        initial: {
            x: lang_now.dir == 'rtl' ? 150 : -150,
            opacity: 0,
        },

        animate: {
            x: 0,
            opacity: 1,
        },

        exit: {
            x: lang_now.dir == 'rtl' ? 150 : -150,
            opacity: 0,
        },
    };

    const imageVariants = {
        initial: {
            x: lang_now.dir == 'rtl' ? -150 : 150,
            opacity: 0,
            rotate: direction > 0 ? -15 : 15
        },

        animate: {
            x: 0,
            opacity: 1,

        },

        exit: {
            x: lang_now.dir == 'rtl' ? -150 : 150,
            opacity: 0,
            rotate: direction > 0 ? -15 : 15
        },
    };

    return (
        <div className="overflow-hidden p-3    flex justify-center  " >
            <div className="flex  md:mt-10 mt-15 justify-center p-6 items-center w-full" >

                <div className="flex h-full relative" >
                    <div className="w-2 h-full flex justify-center items-center  top-0 right-0  " >
                        <motion.span
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => { swiper.slideNext(); }}
                            className="flex z-10 items-center sm:p-2 p-1.5 absolute right-4  cursor-pointer ltr:translate-x-10 rtl:translate-x-8 ltr:sm:translate-x-12 rtl:sm:translate-x-10 text-4xl sm:text-5xl justify-center bg-primary rounded-full text-white" >
                            <svg className="rtl:rotate-180" xmlns="http://www.w3.org/2000/svg " width="1em" height="1em" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path fill="currentColor" d="M16 6a1 1 0 0 0-1.6-.8l-8 6a1 1 0 0 0 0 1.6l8 6A1 1 0 0 0 16 18z" />
                            </svg>
                        </motion.span>
                    </div>
                </div>

                <div className="relative  
                  bg-cover
    bg-center
     after:absolute
    after:inset-0
    after:bg-black/15
        after:rounded-4xl 
    dark:after:bg-black/15
 bg-[url('/bg/veg2.png')] md:bg-[url('/bg/veg1.png')] rounded-4xl w-full md:h-96 h-[60vh] md:w-3/4 ">
                    <div className="size-full absolute top-0 right-0" >

                    </div>
                    {/* 
                این Swiper فقط Drag و تغییر index را مدیریت می‌کند.
                خودش حرکت نمی‌کند.
            */}

                    <Swiper
                        modules={[EffectFade, Autoplay]}
                        effect="fade"
                        loop
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: true,
                        }}
                        allowTouchMove={true}
                        simulateTouch={true}
                        onSwiper={setSwiper}
                        onSlideChange={handleSlideChange}
                        className="size-full"
                    >
                        {slides.map((_, index) => (
                            <SwiperSlide className="relative size-full" key={index}>
                                <div className="absolute flex justify-center items-center top-0 right-0 z-10  size-full" ></div>
                            </SwiperSlide>
                        ))}
                    </Swiper>


                    {/* محتوای واقعی */}
                    <div className="pointer-events-none absolute inset-0">

                        <div className="flex md:flex-row flex-col-reverse h-full items-center justify-between">

                            {/* TEXT */}
                            <div className="w-full md:w-1/2 sm:h-full h-3/4  ltr:md:pl-16 rtl:md:pr-16 px-8 flex items-center ">
                                <AnimatePresence
                                    mode="wait"
                                    initial={false}
                                >
                                    <motion.div
                                        key={activeIndex}
                                        variants={textVariants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        className="z-10"
                                        transition={{
                                            duration: 0.6,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                    >
                                        <h2 className="text-2xl text-white md:text-5xl font-bold">
                                            {slides[activeIndex].title}
                                        </h2>

                                        <p className="mt-6 text-lg text-white md:text-xl font-bold">
                                            {slides[activeIndex].summary}
                                        </p>

                                        <p className="mt-5 text-white opacity-90 ">
                                            {slides[activeIndex].description}
                                        </p>
                                    </motion.div>
                                </AnimatePresence>
                            </div>


                            {/* IMAGE */}
                            <div className="w-full md:w-1/2 animate-float z-10 sm:h-full h-1/4  flex justify-center items-center ">
                                <AnimatePresence
                                    mode="wait"
                                    initial={false}
                                >
                                    <motion.img
                                        key={activeIndex}
                                        src={slides[activeIndex].image}
                                        alt=""
                                        variants={imageVariants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"

                                        transition={{
                                            duration: 0.6,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        className=" block   size-44 z-10  md:size-84 sm:translate-y-0 -translate-y-8 scale-150 "
                                    />

                                </AnimatePresence>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="flex h-full relative" >
                    <div className="w-2 h-full flex justify-center items-center  top-0 right-0  " >
                        <motion.span
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => { swiper.slidePrev(); }}
                            className="flex z-10 items-center sm:p-2 p-1.5 absolute right-4  cursor-pointer rtl:translate-x-11 ltr:translate-x-8 ltr:sm:translate-x-10 rtl:sm:translate-x-12 text-4xl sm:text-5xl justify-center bg-primary rounded-full text-white" >
                            <svg className="ltr:rotate-180" xmlns="http://www.w3.org/2000/svg " width="1em" height="1em" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path fill="currentColor" d="M16 6a1 1 0 0 0-1.6-.8l-8 6a1 1 0 0 0 0 1.6l8 6A1 1 0 0 0 16 18z" />
                            </svg>
                        </motion.span>
                    </div>
                </div>
            </div>
        </div>

    );
}