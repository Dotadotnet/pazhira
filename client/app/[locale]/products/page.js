import SliderProduct from "@/components/banners/ProductSlider";
import CardCategory from "@/components/cards/CardCategory";
import Canned from "@/components/svg/Canned";
import Jam from "@/components/svg/Jam";
import Pickles from "@/components/svg/Pickles";
import { useTranslations } from "next-intl";

function Products() {
  const CategoryT = useTranslations("Category");
  const categories = [
    { name: CategoryT("Pickles"), icon: <Pickles />, link: "#category_pickles" , id : "pickles" },
    { name: CategoryT("Jams"), icon: <Jam />, link: "#category_jams" , id : "jams" },
    { name: CategoryT("Canned"), icon: <Canned />, link: "#category_canned"  , id : "canned" },
  ]

  return (
    <>
      <SliderProduct />
      <div className="flex items-center p-4 gap-x-4 gap-y-12 sm:gap-16 mt-12 justify-center flex-wrap">
        {
          categories.map((category, index) => {
            return (
              <CardCategory name={category.name} svg={category.icon} link={category.link} />
            )
          })}
      </div>
    </>
  );
}

export default Products;