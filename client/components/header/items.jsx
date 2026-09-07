'use client'
import React, { cloneElement } from "react";
import { FaHome } from "react-icons/fa";
import { BsHandbagFill } from "react-icons/bs";
import { FaBloggerB } from "react-icons/fa";
import { BiSolidUserVoice } from "react-icons/bi";
import { TbBodyScan } from "react-icons/tb";
import { RiInformationFill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import { AiOutlineBranches } from "react-icons/ai";



export const itemsNav = [
    { link: "/", icon: <FaHome />, name: "Home" },
    { link: "/products", icon: <BsHandbagFill />, name: "Products" },
    { link: "/blogs", icon: <FaBloggerB />, name: "Blog" },
    { link: "/voice-clients", icon: <BiSolidUserVoice />, name: "VoiceClients" },
    { link: "/recruitment", icon: <TbBodyScan />, name: "Recruitment" },
    { link: "/about-us", icon: <RiInformationFill />, name: "AboutUs" },
    { link: "/call-us", icon: <IoCall />, name: "CallUs" },
    { link: "/branches", icon: <AiOutlineBranches />, name: "Branches" },
]
