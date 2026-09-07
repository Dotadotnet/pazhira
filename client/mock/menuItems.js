import { BsLaptop, BsBook } from "react-icons/bs";
import { IoShirtOutline, IoShirtSharp } from "react-icons/io5";
import { MdOutlineToys } from "react-icons/md";
import { RiHeartPulseLine, RiFireLine } from "react-icons/ri";
import { AiOutlineHome, AiOutlinePercentage } from "react-icons/ai";
import { BiFootball } from "react-icons/bi";

import { ImMobile } from "react-icons/im";
import { FiMonitor, FiHeadphones } from "react-icons/fi";

import { GiLargeDress } from "react-icons/gi";
import { FaBaby, FaRedhat } from "react-icons/fa";
import { FiSearch, FiTool, FiDollarSign } from "react-icons/fi";

const menuItems = [
  {
    category: "digital",
    icon: BsLaptop,
    productsGroup: [
      {
        title: "laptop",
        icon: BsLaptop,
        subtitles: [
          "asus",
          "apple",
          "dell",
          "lenovo",
          "samsung",
          "hp",
          "huawei",
          "acer",
          "msi",
        ],
      },
      {
        title: "mobile",
        icon: ImMobile,
        subtitles: [
          "samsung",
          "apple",
          "nokia",
          "xiaomi",
          "motorola",
          "lg",
          "sony",
        ],
      },
      {
        title: "computer",
        icon: FiMonitor,
        subtitles: ["monitor", "mouse", "keyboard", "hard"],
      },
      {
        title: "other",
        icon: FiHeadphones,
        subtitles: ["tablet", "powerBank", "speaker", "headphones"],
      },
    ],
  },
  {
    category: "fashion",
    icon: IoShirtOutline,
    productsGroup: [
      {
        title: "women",
        icon: GiLargeDress,
        subtitles: [
          "dress",
          "skirt",
          "jeans",
          "pants",
          "tShirt",
          "shoes",
          "scarf",
        ],
      },
      {
        title: "men",
        icon: IoShirtSharp,
        subtitles: ["shirt", "pants", "tie", "tShirt", "shoes", "jeans"],
      },
      {
        title: "child",
        icon: FaBaby,
        subtitles: ["overalls", "mittens", "babyApron", "shoes", "tShirt"],
      },
      {
        title: "other",
        icon: FaRedhat,
        subtitles: ["watch", "wallet", "hat", "belt"],
      },
    ],
  },
  { category: "toys", icon: MdOutlineToys },
  { category: "cosmetic", icon: RiHeartPulseLine },
  { category: "home", icon: AiOutlineHome },
  { category: "sport", icon: BiFootball },
  { category: "stationery", icon: BsBook },
];

export default menuItems;

export const extraMenu = [
  { title: "offer", icon: AiOutlinePercentage, href: "/offers" },
  { title: "bestSells", icon: RiFireLine, href: "/" },
  { title: "trackOrder", icon: FiSearch, href: "/track-order" },
  { title: "repair", icon: FiTool, href: "/repair" },
  { title: "priceCheck", icon: FiDollarSign, href: "/price-check" },
];