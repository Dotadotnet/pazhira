import React from "react";
import Link from "next/link";
import { useLanguage } from "../../../hooks/useLanguage";
import { NextArrow, PrevArrow } from "./CarouselBoxArrows";
import Slider from "react-slick";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

const CarouselBox = ({
  title,
  className,
  children,
  href,
  full,
}) => {
  const { t } = useLanguage();

  const settings = {
    className: `relative px-4 py-4 h-full rounded-md ${full ? "bg-palette-fill" : "bg-[#FF5904] rounded-r-md backdrop-blur-md overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-[url('/assets/images/bg/snow-2.png')] after:bg-cover after:bg-center after:bg-no-repeat   after:-z-10"}`,
    infinite: true,
    speed: 600,
    centerPadding: "60px",
    slidesToShow: 5,
    slidesToScroll: 5,
    // initialSlide: 0,
    swipeToSlide: true,
    // rtl: true,
    nextArrow: React.createElement(NextArrow, {}),
    prevArrow: React.createElement(PrevArrow, {}),
    responsive: [
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (

    <div
      className={`w-[100%] mx-auto my-8 flex rounded-md bg-cover bg-no-repeat bg-center rounded-r-md    ${full ? "flex-col" : "bg-[#FF5904] flex"
        }`}
    >

      <div
        className={` flex-col items-center  flex-grow hidden md:flex text-sm sm:text-base bg-cover bg-no-repeat bg-center rounded-r-md`}
      >
        {!full ? (
          <Link href={`/offers/`}>
            <a className="lg:w-auto w-full lg:h-full flex items-between lg:items-center justify-center  flex-col gap-3 px-5 lg:px-0 pt-5 pb-3 lg:!py-0  !mx-5">
              <div className="flex  justify-center items-center flex-col gap-2 lg:gap-3">
                <p className="text-white text-center text-[18px]">به مناسبت آغاز زمستان</p>
                <div className="order-2 lg:order-1" style={{ width: '88px', height: '88px', lineHeight: 0 }}>

                  <img
                    className="w-full inline-block"
                    src="/images/svg/Amazings.svg"
                    width="88"
                    height="88"
                    alt="شگفت انگیز"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div className="flex gap-[2px] items-center right-0 h-6 order-3 lg:order-2">
                  <div className="flex flex-col items-center justify-center bg-white w-[26px] h-[26px] rounded-sm">
                    <div className="flex justify-center items-center text-subtitle-strong text-neutral-800 text-center w-[20px] h-[20px]">۰۷</div>
                  </div>
                  <div className="text-subtitle-strong text-white w-1">:</div>
                  <div className="flex flex-col items-center justify-center bg-white w-[26px] h-[26px] rounded-sm">
                    <div className="flex justify-center items-center text-subtitle-strong text-neutral-800 text-center w-[20px] h-[20px]">۳۰</div>
                  </div>
                  <div className="text-subtitle-strong text-white w-1">:</div>
                  <div className="flex flex-col items-center justify-center bg-white w-[26px] h-[26px] rounded-sm">
                    <div className="flex justify-center items-center text-subtitle-strong text-neutral-800 text-center w-[20px] h-[20px]">۱۱</div>
                  </div>
                  <div className="text-subtitle-strong text-white w-1">:</div>
                  <div className="flex flex-col items-center justify-center bg-white w-[26px] h-[26px] rounded-sm">
                    <div className="flex justify-center items-center text-subtitle-strong text-neutral-800 text-center w-[20px] h-[20px]">۳۰</div>
                  </div>
                </div>
                <div className="order-1 lg:order-3" style={{ width: '80px', height: '80px', lineHeight: 0 }}>
                  <img
                    className="w-full inline-block"
                    src="/images/svg/Amazing.svg"
                    width="80"
                    height="80"
                    alt="شگفت انگیز"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
              <div
                className="flex justify-center items-center text-button-2 text-white group cursor-pointer"
                data-cro-id="hp-amazing-see-all"
              >
                {t.seeAll}

                <div className="flex transition-transform duration-300 group-hover:-translate-x-1 group-focus:-translate-x-1">
                  <HiOutlineChevronLeft />
                </div>
              </div>

            </a>
          </Link>
        ) : (
          <>
            <h2
              className={`text-lg sm:text-xl font-bold ${full
                ? "text-palette-base self-start"
                : "text-palette-primary text-center"
                }`}
            >
              {t[`${title}`]}
            </h2>
            {full ? (
              <Link
                href="/offers"
                className="text-palette-primary/80 dark:text-rose-300 text-sm font-bold py-2 px-6 -mb-4 shadow-lg flex items-center gap-2 rounded-lg backdrop-filter backdrop-blur-[10px] bg-palette-card/80"
              >
                {t.seeAll}

              </Link>


            ) : null}
          </>
        )}
      </div>
      <div
        className={`relative ${full ? "w-full mt-4" : "w-[100%] sm:w-[75%] md:w-[85%]"
          }`}
      >
        <Slider {...settings}>{children}</Slider>

        <div>
          <div className="absolute top-[45%] right-4 md:right-1 shadow-lg rounded-full bg-palette-card p-1 drop-shadow-lg text-[0.8rem] md:text-[1.8rem]">
            <HiOutlineChevronRight style={{ color: "gray" }} />
          </div>
          <div className="absolute top-[45%] left-4 md:-left-1 shadow-lg rounded-full bg-palette-card p-1 drop-shadow-lg text-[0.8rem] md:text-[1.8rem]">
            <HiOutlineChevronLeft style={{ color: "gray" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselBox;

