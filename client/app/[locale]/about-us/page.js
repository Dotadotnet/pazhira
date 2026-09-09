"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Mannager from "@/components/about/Mannager";
import PermissionsSlider from "@/components/about/PermissionsSlider";
const permissions = [
    "/images/permissions/p1.jpg",
    "/images/permissions/p2.jpg",
    "/images/permissions/p3.jpg",
    "/images/permissions/p4.jpg",
    "/images/permissions/p5.jpg",
    "/images/permissions/p6.jpg",
    "/images/permissions/p7.jpg",
];

function AboutUs() {
    return (
        <>
            <div className="text-center w-full overflow-hidden pt-6  sm:mt-11">
                <Mannager />
            </div>
             <br />
            <div className="flex justify-center items-center mt-8 sm:mt-16">
                <PermissionsSlider images={permissions} />
            </div>
            <br />

            <br />
        </>
    );
}

export default AboutUs;