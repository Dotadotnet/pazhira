import React from "react";
import Image from "next/image";
import Link from "next/link";
import StarRatingComponent from "react-star-rating-component";
import { urlFor } from "../../../lib/client";
import CardActions from "./CardActions";
import ProductPrice from "../ProductPrice";

const Card = ({ product }) => {
  return (
    <div className="col-span-6 md:m-5 flex items-center justify-center sm-span-3 md:col-span-4 lg:col-span-3 2xl:col-span-2 shadow-xl my-1 md:my-4   bg-palette-card rounded-xl  relative">
      <Link
        href={`/${product.category[0]}/${product.category[1]}/${product.category[2]}/${product.slug.current}`}
      >
        <a className="flex p-0 !h-full  md:flex-col relative !w-full">
          <div className="!w-1/3  !h-full p-5 md:!w-full relative  bg-slate-400/30   rounded-bl-xl rounded-tl-xl md:rounded-tr-xl md:rounded-bl-none rtl:order-2 rtl:md:order-none flex flex-col justify-center items-center">
            <div className="flex items-center size-full hover:scale-110 justify-center transition-all">

              <Image
                width={100}
                height={100}
                src={urlFor(product?.image[0]).url()}
                alt={product.name}
                className=" mb-10 md:mb-0    overflow-hidden object-contain  m-10  transition-all"
              />


            </div>
            {product?.discount ? (
              <span className="w-8 sm:w-auto block absolute -top-2 -right-2">
                <Image
                  src="/images/discount-icon/discount.webp"
                  width={40}
                  height={40}
                  alt="discount-icon"
                />
              </span>
            ) : null}
          </div>
          <div className="flex flex-col justify-between  flex-grow !w-2/3 md:!w-full  px-1 md:px-3 py-2 md:py-4">
            <div className="flex justify-center md:justify-start flex-col  flex-grow overflow-hidden">
              <div className="self-center">
                <StarRatingComponent
                  name={`product_rate_${product.slug.current}`}
                  starCount={5}
                  value={product.starRating}
                />
              </div>
              <h3 className="text-sm sm-[12px] md-sm text-center text-palette-mute  ">
                {product.name}
              </h3>
            </div>
            <ProductPrice price={product.price} discount={product.discount} />
          </div>
        </a>
      </Link>

      <CardActions product={product} />
    </div>
  );
};

export default Card;

