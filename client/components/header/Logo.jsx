"use client";
import { Link } from "@/i18n/navigation";
import { useHash } from "@/utilities/hashContext";
import Image from "next/image";
import React from "react";

const Logo = ({ className }) => {
  const { hash, setHash } = useHash()
  return (
      <Link href="/" className="block md:flex items-center justify-center w-full flex-grow md:flex-grow-0">
        <Image
          src="/images/logo2.png"
          alt="zishop-logo"
          width={80}
          height={80}
          objectFit="contain"
          className={`cursor-pointer scale-120  md:ltr:-mr-3 ${className}`}
        />
      </Link>
  );
};

export default Logo;
