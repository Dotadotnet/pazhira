import React from "react";
import { useSelector } from "react-redux";
import { useLanguage } from "../../hooks/useLanguage";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import Link from "next/link";
import Card from "../UI/card/Card";
import SectionTitle from "../UI/SectionTitle";
import Container from "../shared/container";

const Newest = () => {
  const { t } = useLanguage();
  const { width } = useWindowDimensions();
  let numProductToShow = width >= 1536 ? 12 : 8;

  const newestProducts = useSelector(
    (state) => state.newestProductsList.productsList
  );

  return (
    <Container className="mx-auto my-4 md-8 flex flex-col xl:max-w-[2130px]">
      <SectionTitle title={"newest"} />

      <div className="grid gap-4 md:gap-2 grid-cols-6 md:grid-cols-12 ">
        {newestProducts
          ? newestProducts
              .slice(0, numProductToShow)
              .map((product) => {
                return <Card key={product.name} product={product} />;
              })
          : null}
      </div>

      <div className="text-center">
        <Link href="/newestProducts">
          <a className="inline-block py-3 px-8 md:px-12 mt-4 text-sm md-base bg-palette-primary text-palette-side rounded-xl shadow-lg">
            {t.seeAllNewProducts}
          </a>
        </Link>
      </div>
    </Container>
  );
};

export default Newest;

