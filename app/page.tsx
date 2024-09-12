"use client";
import React from "react";
import Image from "next/image";
import { Jomhuria } from "next/font/google";

import google from "@/public/google.png";
import illustration from "@/public/machine-learning.png";
import Link from "next/link";

const jomhuria = Jomhuria({
  subsets: ["latin"],
  weight: "400",
});

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col h-[70dvh] justify-center w-full">
      <div
        id="login"
        className="flex items-center justify-center tabletPortrait:flex-col-reverse tabletPortrait:gap-8 w-full"
      >
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-normal mb-2 midPhone:text-xs tabletMedium:text-sm self-start text-center">
            Ace your aptitude examinations with
          </h2>
          <div
            className={`${jomhuria.className} aptsense font-bold text-[14rem] tabletLandscape:text-[12rem] tabletMedium:text-[10rem] tabletPortrait:text-[9rem] midPhone:text-[7rem] midPhone:-my-12 tabletMedium:-my-16 -my-24 text-primary-400`}
          >
            {" "}
            AptSense
            <span
              className="animate-rotate-period inline-block"
              style={{ transformOrigin: "center" }}
            >
              .
            </span>
          </div>
          <Link href="/">
            <button
              className="w-auto -mt-3 bg-primary-400 inline-flex text-primary-50 text-lg tabletMedium:text-sm py-2 border border-black px-8 gap-2 midPhone:px-3 midPhone:py-[0.4rem] rounded-[0.75rem] items-center"
              aria-label="Get Started"
            >
              <span className="font-semibold">Get started with</span>
              <Image
                src={google}
                alt="Get Started button"
                width={25}
                height={25}
                className="inline-block midPhone:w-[1.3rem]"
              />
            </button>
          </Link>
        </div>

        <div className="mt-10">
          <Image
            src={illustration}
            alt="AptSense Robot"
            width={500}
            height={500}
            quality={100}
            className="tabletLandscape:w-[25rem] tabletMedium:w-[20rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
