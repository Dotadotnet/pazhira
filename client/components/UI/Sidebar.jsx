// Sidebar.jsx
import { useHash } from "@/utilities/hashContext";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";


const Sidebar = ({ isOpen, children, zIndex = "10" , text = "" }) => {
    const { hash, setHash } = useHash()


    return (
        <>
            {/* Overlay */}
            <div
                style={{ zIndex: zIndex }}
                className={`fixed inset-0 bg-opacity-50    bg-gray-100/5 dark:bg-black/10 backdrop-blur-md  transition-opacity 
                    ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`
                }
                onClick={() => { setHash('') }}
            />
            <div
            style={{ zIndex: String(parseInt(zIndex) + 10) }}
                className={`fixed w-[calc(100%-2.5rem)] z-20 sm:w-92
                     top-0 ltr:left-0 rtl:right-0 h-[calc(100%-14rem)] 
                     sm:h-[calc(100%-8rem)] mt-24.5 sm:mt-28.5 rounded-4xl 
                      dark:bg-gray-100/10 bg-black/5  backdrop-blur-md 
                      shadow-xl transform transition-transform duration-300 p-2
                    ${isOpen ? "translate-x-0 rtl:right-5  rtl:sm:right-9 ltr:left-5  ltr:sm:left-9" : "-translate-x-full rtl:translate-x-full"}`}
            >
                    <button
                        className={" rounded-full absolute top-3 rtl:left-3 ltr:right-3  cursor-pointer hover:shadow-sm p-2  shadow-gray-500 dark:bg-white/10 bg-black/10 " }
                        onClick={() => { setHash("") }}>
                        <IoClose className='text-2xl' />
                    </button>
                    
                <div>
                    {children}
                </div>
            </div>
        </>
    );
};

export default Sidebar;