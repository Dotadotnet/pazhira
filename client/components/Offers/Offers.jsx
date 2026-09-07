import React from "react";
import CarouselBox from "../UI/CarouselBox/CarouselBox";
import { useSelector } from "react-redux";
import CarouselBoxCard from "../UI/CarouselBox/CarouselBoxCard";
import Container from "../shared/container";

const Offers = () => {
  const OfferProducts = useSelector(
    (state) => state.specialOfferProductsList.specialOfferProducts
  );
     console.log(OfferProducts);


  return (
    <Container className="md-10 w-full xl:max-w-[2100px]">
      <CarouselBox title="offers" className="!px-0" href="/">
        {OfferProducts.slice(0, 10).map((product) => {
          return <CarouselBoxCard key={product.name} product={product} />;
        })}
      </CarouselBox>
    </Container>
  );
};

export default Offers;

