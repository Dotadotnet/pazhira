"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";

export default function PermissionsSlider({ images = [] }) {
  return (
    <div className="relative w-full px-10 sm:px-12 md:px-14">
      <Swiper
        modules={[Navigation]}
        loop={true}
        spaceBetween={16}
        slidesPerView={1}
        navigation={{
          nextEl: ".permissions-next",
          prevEl: ".permissions-prev",
        }}
        breakpoints={{
          420: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 18,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        className="w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-3xl">
              <Image
                src={image}
                alt={`مجوز ${index + 1}`}
                fill
                sizes="
                  (max-width: 639px) calc(100vw - 80px),
                  (max-width: 767px) calc((100vw - 112px) / 2),
                  (max-width: 1023px) calc((100vw - 148px) / 3),
                  calc((100vw - 200px) / 5)
                "
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Previous */}
      <motion.button
        type="button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="
          permissions-prev
          absolute
          left-6
          top-1/2
          z-10
          flex
          -translate-y-1/2
          cursor-pointer
          items-center
          justify-center
          rounded-full
          bg-primary
          text-white
          sm:p-3
          p-2
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"

          className="size-7 sm:size-9"
        >
          <path
            fill="currentColor"
            d="M16 6a1 1 0 0 0-1.6-.8l-8 6a1 1 0 0 0 0 1.6l8 6A1 1 0 0 0 16 18z"
          />
        </svg>
      </motion.button>

      {/* Next */}
      <motion.button
        type="button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="
          permissions-next
          absolute
          right-6
          top-1/2
          z-10
          flex
          -translate-y-1/2
          cursor-pointer
          items-center
          justify-center
          rounded-full
          bg-primary
          text-white
          sm:p-3
          p-2
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="size-7 sm:size-9"
        >
          <path
            fill="currentColor"
            d="M8 6a1 1 0 0 1 1.6-.8l8 6a1 1 0 0 1 0 1.6l-8 6A1 1 0 0 1 8 18z"
          />
        </svg>
      </motion.button>
    </div>
  );
}