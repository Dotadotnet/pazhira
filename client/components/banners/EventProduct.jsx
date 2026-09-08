"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { motion, AnimatePresence } from "motion/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { useRef, useState } from "react";


export default function EventSlider({ banners = [] }) {
    const [swiper, setSwiper] = useState(null);

    if (!banners.length) return null;


    return (
        <div className="w-full  relative h-full    overflow-hidden">
            <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                effect="fade"
                fadeEffect={{
                    crossFade: true,
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: true,
                }}
                onSwiper={setSwiper}
                loop={banners.length > 1}
                speed={700}
                className="!size-full relative"
            >
                {banners.map((banner, index) => (
                    <SwiperSlide className="!size-full " key={index}>
                        <div className=" h-full flex justify-center items-center w-full overflow-hidden">
                            <img
                                src={banner}
                                alt={`Banner ${index + 1}`}
                                className=" absolute select-none object-cover top-0 right-0 h-full w-full "
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="flex h-full w-24 absolute top-0 right-0" >
                <div className="w-2 h-full flex justify-center items-center  top-0 right-0  " >
                    <motion.span
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => { swiper.slidePrev(); }}
                        className="flex z-10 items-center bg-gray-300/50 border-white border  backdrop-blur-lg     shadow-gray-600  dark:shadow-gray-100 sm:p-2 p-1.5 absolute right-4  cursor-pointer  text-4xl sm:text-5xl justify-center rounded-full text-white" >
                        <svg className="rotate-180" xmlns="http://www.w3.org/2000/svg " width="1em" height="1em" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path fill="currentColor" d="M16 6a1 1 0 0 0-1.6-.8l-8 6a1 1 0 0 0 0 1.6l8 6A1 1 0 0 0 16 18z" />
                        </svg>
                    </motion.span>
                </div>
            </div>
            <div className="flex h-full w-24 absolute top-0 left-0" >
                <div className="w-2 h-full flex justify-center items-center  top-0 right-0  " >
                    <motion.span
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => { swiper.slidePrev(); }}
                        className="flex z-10 items-center bg-gray-300/50 border-white border  backdrop-blur-lg     shadow-gray-600  dark:shadow-gray-100 sm:p-2 p-1.5 absolute right-4  cursor-pointer  text-4xl sm:text-5xl justify-center rounded-full text-white" >
                        <svg  xmlns="http://www.w3.org/2000/svg " width="1em" height="1em" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path fill="currentColor" d="M16 6a1 1 0 0 0-1.6-.8l-8 6a1 1 0 0 0 0 1.6l8 6A1 1 0 0 0 16 18z" />
                        </svg>
                    </motion.span>
                </div>
            </div>
        </div>
    );
}