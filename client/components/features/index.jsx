'use client';
import Slider from 'react-slick';
import React, { useState, useEffect } from 'react';
import Container from '../shared/container';

const FeatureOne = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSliderLoaded, setIsSliderLoaded] = useState(false);

  // Check if react-slick is loaded
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Set a small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        setIsSliderLoaded(true);
      }, 50);
      
      return () => clearTimeout(timer);
    }
  }, []);

  // Skeleton loader component
  const SkeletonItem = () => (
    <div className="mt-4 p-2">
      <div className="bg-white rounded-full w-28 h-28 mx-auto flex items-center justify-center shadow-lg animate-pulse">
        <div className="bg-gray-200 border-2 border-dashed rounded-full w-20 h-20" />
      </div>
      <div className="mt-4 text-center">
        <div className="h-4 bg-gray-200 rounded-full w-3/4 mx-auto mb-2 animate-pulse"></div>
        <div className="h-3 bg-gray-200 rounded w-1/2 mx-auto animate-pulse"></div>
      </div>
    </div>
  );

  // فلش بعدی با آیکون
  function SampleNextArrow({ onClick }) {
    return (
      <button
        onClick={onClick}
        className="absolute right-0 top-1/2 z-10 flex items-center justify-center rounded-full bg-white text-gray-400 w-10 h-10  hover-gray-700 transition-all duration-300 hover-110 border-4 border-[#F3F4F5] dark:border-[#0F172A]"
        style={{ transform: 'translate(50%, -50%)' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    );
  }

  // فلش قبلی با آیکون
  function SamplePrevArrow({ onClick }) {
    return (
      <button
        onClick={onClick}
        className="absolute left-0 top-1/2 z-10 flex items-center justify-center rounded-full bg-white text-gray-400 w-10 h-10 hover-gray-700 transition-all duration-300 hover-110 border-4 border-[#F3F4F5] dark:border-[#0F172A]"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    );
  }

 
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 6 } }, // Desktop: 6 items
      { breakpoint: 992, settings: { slidesToShow: 4 } },  // Tablet: 4 items
      { breakpoint: 768, settings: { slidesToShow: 3 } },  // Mobile: 3 items
      { breakpoint: 576, settings: { slidesToShow: 2 } },  // Small mobile: 2 items
    ],
  };

  // داده‌ها با تصاویر
  const features = [
    {
      title: 'موبایل',
      products: 125,
      image: '/assets/images/feature/phone.png'
    },
    {
      title: 'لوازم جانبی موبایل',
      products: 110 + 90 + 120 + 70 + 60,
      image: '/assets/images/feature/accesseory.png'
    },
    {
      title: 'قاب موبایل',
      products: 90,
      image: '/assets/images/feature/case-phone.png'
    },
    {
      title: 'ساعت هوشمند',
      products: 55,
      image: '/assets/images/feature/smartwatch.png'
    },
    {
      title: 'ایرپد',
      products: 85,
      image: '/assets/images/feature/airpod.png'
    },
    {
      title: 'تبلت',
      products: 85,
      image: '/assets/images/feature/tablet.png'
    },
    {
      title: 'کنسول بازی',
      products: 45,
      image: '/assets/images/feature/console.png'
    },
    {
      title: 'لپ تاپ',
      products: 95,
      image: '/assets/images/feature/laptop.png'
    },
    {
      title: 'کامپیوتر',
      products: 75,
      image: '/assets/images/feature/computer.png'
    },
    {
      title: 'لوازم جانبی کامپیوتر',
      products: 50 + 45,
      image: '/assets/images/feature/computer-accessory.png'
    },
    {
      title: 'هدست',
      products: 75,
      image: '/assets/images/feature/headset.png'
    },
    {
      title: 'لوازم خانگی',
      products: 65 + 40,
      image: '/assets/images/feature/home-accessory.png'
    },
  ];

  return (
    <Container>
      <div className=" bg-gradient-to-r from-orange-100 to-amber-100 mx-2 rounded-2xl mt-4">
        <div className="container ">
          <div className="relative ">
            {!isSliderLoaded ? (
              // Skeleton loader while slider is loading
              <div className="grid grid-cols-2 sm-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
                {Array.from({ length: 6 }).map((_, index) => (
                  <SkeletonItem key={index} />
                ))}
              </div>
            ) : (
              // Actual slider when loaded
              <Slider {...settings}>
                {features.map((item, index) => (
                  <div key={index} className="">
                    <div className="group cursor-pointer mt-4">
                      <div className="bg-white rounded-full w-28 h-28 mx-auto flex items-center justify-center shadow-lg transition-all duration-300 group-hover-orange-100 group-hover:shadow-xl overflow-hidden border-4 border-orange-200 group-hover:border-orange-300">
                        <div className="transform transition-transform duration-300 group-hover:scale-110 p-2">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-20 h-20 object-contain drop-shadow-md group-hover:drop-shadow-lg"
                            onLoad={() => {
                              // Only set isLoading to false when the last image loads
                              if (index === features.length - 1) {
                                setIsLoading(false);
                              }
                            }}
                          />
                        </div>
                      </div>
                      <div className="mt-4 text-center">
                        <h6 className="text-md md-lg text-gray-800 group-hover-orange-600 transition-colors duration-300">{item.title}</h6>
                        <span className="text-sm text-gray-500">{item.products}+ محصول</span>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FeatureOne;

