"use client"
import { useEffect, useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { BiMoon } from "react-icons/bi";
import { useTheme } from "./context";
import { Crisp } from "crisp-sdk-web";


export default function ThemeToggle({ className = "" }) {
  const { theme, setTheme } = useTheme();


  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");

    localStorage.setItem("theme", newTheme);
  };


  if (typeof window !== "undefined" && window.$crisp) {
    window.$crisp.push([
      "config",
      "color:mode",
      [theme]
    ]);
  }


  return (
    <button
      onClick={toggleTheme}
      className={" rounded-full group cursor-pointer hover:shadow-sm  shadow-gray-500 dark:bg-white/10 bg-black/10 " + " " + className}
    >
      {theme === "dark" ? <BiMoon style={{ transitionDuration: "1s" }} className="group-hover:rotate-360 transition-all" /> : <MdOutlineLightMode style={{ transitionDuration: "1s" }} className="group-hover:rotate-360 transition-all" />}
    </button>
  );
}
