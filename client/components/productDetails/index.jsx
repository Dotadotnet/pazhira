import React from "react";
import Breadcrumb from "../UI/Breadcrumb";
import ImageSection from "./ImageSection";
import DetailsSection from "./DetailsSection";
import Benefits from "../Benefits";
import SimilarProducts from "./SimilarProducts";

const ProductDetails = ({ product, products }) => {
  const similarProductsList = products
    .filter(
      (similarProduct) => similarProduct.slug.current !== product.slug.current
    )
    .slice(0, 10);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      <Breadcrumb />
      <div className="w-full xl:max-w-[2100px] mx-auto">
        <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap items-center md:items-start mt-8 relative">
          <ImageSection imgArray={product.image} product={product} />
          <DetailsSection product={product} />
        </div>
        <div className="border-2 my-8">
          <Benefits />
        </div>
        <SimilarProducts products={similarProductsList} />
      </div>
    </div>
  );
};

export default ProductDetails;
