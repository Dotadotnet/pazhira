import React from "react";
import { categorySmContent } from "../../mock/category-sm";
import CategorySmBox from "./CategorySmBox";
import { categoryLgContent } from "../../mock/category-lg";
import CategoryLgBox from "./CategoryLgBox";
import SectionTitle from "../UI/SectionTitle";
import Container from "../shared/container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Category = () => {
  // Settings for mobile slider
 const mobileSliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };


  return (
    <Container className="flex flex-col items-center my-4 md-8">
      <SectionTitle title={"CategoryOfGoods"} />

      {/* 📱 sm and md break point - Mobile Slider */}
      <div className="w-full lg:hidden">
        <Slider {...mobileSliderSettings}>
          {categorySmContent.map((categoryItem) => {
            return (
              <div key={categoryItem.name} className="px-2">
                <CategorySmBox
                  name={categoryItem.name}
                  title={categoryItem.title}
                  description={categoryItem.description}
                  styles={categoryItem.styles}
                  href={categoryItem.href}
                  imgSrc={categoryItem.imgSrc}
                  imgWidth={categoryItem.imgWidth}
                  imgHeight={categoryItem.imgHeight}
                />
              </div>
            );
          })}
        </Slider>
      </div>

      {/* 💻lg break point */}
      <div className="hidden lg:grid gap-4 grid-cols-9 w-full xl:max-w-[2100px] mx-auto">
        {categoryLgContent.map(
          ({
            name,
            title,
            description,
            styles,
            href,
            imgSrc,
            imgWidth,
            imgHeight,
          }) => {
            return (
              <CategoryLgBox
                key={name}
                name={name}
                title={title}
                description={description}
                styles={styles}
                href={href}
                imgSrc={imgSrc}
                imgWidth={imgWidth}
                imgHeight={imgHeight}
              />
            );
          }
        )}
      </div>
    </Container>
  );
};

export default Category;

