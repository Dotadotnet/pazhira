import React from "react";
import { useLanguage } from "../../../hooks/useLanguage";

const DateTimeDisplay = ({ value, type, isDanger }) => {
  const { t, locale } = useLanguage();
  const dateTime =
    locale === "en"
      ? new Intl.NumberFormat("en-EN").format(value)
      : new Intl.NumberFormat("fa-IR").format(value);
  return (
    <div
      className={`flex flex-col  items-center mx-[2px] sm-3 py-2 text-[11px] sm-sm md-base w-14 sm:w-20 backdrop-filter backdrop-blur-[8px] bg-palette-fill/50 shadow-lg rounded-lg ${
        isDanger ? "text-rose-600" : ""
      }`}
    >
      <p className=" text-md md:text-lg">{dateTime}</p>
      <span className=" text-md md:text-lg">{t[`${type}`]}</span>
    </div>
  );
};

export default DateTimeDisplay;

