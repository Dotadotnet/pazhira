import React, { useEffect, useState } from "react";
import { useLanguage } from "../../hooks/useLanguage";
import SubmenuCategory from "./SubmenuCategory";
import Card from "../UI/card/Card";
import Breadcrumb from "../UI/Breadcrumb";
import Sort from "./Sort";
import { useDispatch, useSelector } from "react-redux";
import { SortedProductsListActions } from "../../store/sortedProductList-slice";
import { useRouter } from "next/router";

const ProductList = ({ productList }) => {
  const router = useRouter();
  const { t } = useLanguage();
  let isInNewestProductsPage =
    router.pathname === "/newestProducts" ? true : false;

  const [selectedRadioBtn, setSelectedRadioBtn] = useState("all");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      SortedProductsListActions.sortProductsList({
        productsList: productList,
        sortBasedOn: selectedRadioBtn
      })
    );
  }, [dispatch, productList, selectedRadioBtn]);

  const sortedProductList = useSelector(
    (state) => state.sortedProductsList.productsList
  );

  function onChangeHandler(e) {
    setSelectedRadioBtn(e.currentTarget.id);
  }

  return (
    <div>
      <Breadcrumb />
      <SubmenuCategory />
      <div className="w-full xl-w-[2100px] mx-auto">
        {isInNewestProductsPage && productList.length ? (
          <div className="grid gap-4 md-2 grid-cols-6 md:grid-cols-12">
            {productList
              ? productList.map((product) => {
                  return <Card key={product.slug.current} product={product} />;
                })
              : null}
          </div>
        ) : sortedProductList && sortedProductList.length ? (
          <div>
            <Sort
              selectedBtn={selectedRadioBtn}
              onChangeSelectedBtn={onChangeHandler}
            />
            <div className="grid gap-4 px-5 md-2 grid-cols-6 md:grid-cols-12">
              {sortedProductList.map((product) => {
                return <Card key={product.slug.current} product={product} />;
              })}
            </div>
          </div>
        ) : (
          <p className="text-palette-mute text-center mt-8">{t.noProduct}</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;

