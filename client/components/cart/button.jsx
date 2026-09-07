"use client"
import { useContext, useEffect, useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { BiMoon } from "react-icons/bi";
import { CartContext } from "./context";
import { FaCartShopping } from "react-icons/fa6";


export default function CartButtonNavbar({ className, onclick }) {
  const { addToCart, cart } = useContext(CartContext);
  return (
    <button
      onClick={onclick}
      className={" rounded-full relative cursor-pointer hover:shadow-sm  shadow-gray-500 dark:bg-white/10 bg-black/10 " + " " + className}
    >
      <div className="absolute -top-1 z-10 -right-1 size-5 text-sm font-sans  flex justify-center text-white items-center bg-palette-primary rounded-full " >
        <span className="self-center  badge-number">
          {cart.length}
        </span>
      </div>
      <FaCartShopping  />
    </button>
  );
}
