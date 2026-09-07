import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { megaMenuActions } from "../../../store/megaMenu-slice";
import { useLanguage } from "../../../hooks/useLanguage";
import menuItems from "../../../mock/menuItems";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";

const MenuItems = (props) => {
  const { t, locale } = useLanguage();
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();
  const ArrowDirection = locale === "en" ? HiChevronRight : HiChevronLeft;

  function onMenuItemClickHandler(
    productsGroup,
    category,
    index) {
    props.onClick && props.onClick(productsGroup, category, index);
    width >= 768 && dispatch(megaMenuActions.closeMegaMenu());
  }

  const activeMenuItemIndex = useSelector(
    (state) =>
      state.activeMenuItem.activeMenuItemIndex
  );
  return (
    <ul className="rounded-lg">
      {menuItems.map((item, index) => {
        return (
          <li
            className="py-3 md-3 transition-color duration-300 hover-palette-primary font-bold"
            key={item.category}
          >
            {width <= 768 ? (
              <div
                className={`flex items-center mt-3 px-5  cursor-pointer text-sm ${
                  index === activeMenuItemIndex ? "md-palette-primary" : ""
                }`}
                onClick={() =>
                  onMenuItemClickHandler(
                    item.productsGroup,
                    item.category,
                    index
                  )
                }
                onMouseOver={() =>
                  props.onMouseOver?.(item.productsGroup, index, item.category)
                }
              >
                <item.icon className="w-6 h-6 " />
                <div
                  className={`mx-4 grow ${
                    !item.productsGroup ? "text-gray-400 font-normal" : ""
                  }`}
                >
                  {t[item.category]}
                </div>
                {item.productsGroup ? (
                  <ArrowDirection style={{ fontSize: "1rem" }} />
                ) : null}
              </div>
            ) : (
              <Link href={`/${item.category}`}>
                <a
                  className={`flex items-center mt-3 px-5  cursor-pointer text-sm ${
                    index === activeMenuItemIndex
                      ? "md-palette-primary"
                      : ""
                  }`}
                  onClick={() =>
                    onMenuItemClickHandler(
                      item.productsGroup,
                      item.category,
                      index
                    )
                  }
                  onMouseOver={() =>
                    props.onMouseOver?.(
                      item.productsGroup,
                      index,
                      item.category
                    )
                  }
                >
                  <item.icon className="w-6 h-6 " />
                  <div
                    className={`mx-4 grow ${
                      !item.productsGroup ? "text-gray-400 font-normal" : ""
                    }`}
                  >
                    {t[item.category]}
                  </div>
                  {item.productsGroup ? (
                    <ArrowDirection style={{ fontSize: "1rem" }} />
                  ) : null}
                </a>
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default MenuItems;

