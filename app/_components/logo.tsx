import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "@/public/logo.png";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 z-10 phone:w-[2rem]">
      <Image
        src={logo}
        quality={100}
        height="40"
        width="40"
        alt="AptSense logo"
      />
    </Link>
  );
}
