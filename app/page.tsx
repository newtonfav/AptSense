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
    <div className="flex flex-col min-h-screen w-full">
      <section
        id="login"
        className="flex items-center justify-center midPhone:flex-col-reverse w-full"
      >
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-normal mb-2 self-start text-center">
            Ace your aptitude examinations with
          </h2>
          <div
            className={`${jomhuria.className} aptsense font-bold text- text-[14rem] -my-24 text-primary-400 `}
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
          <Link href="/sigin">
            <button
              className="w-auto -mt-3 bg-primary-400 inline-flex text-primary-50 text-lg py-2 border border-black px-8 gap-2 rounded-[0.75rem] items-center"
              aria-label="Get Started"
            >
              <span className="font-semibold">Get started with</span>
              <Image
                src={google}
                alt="Get Started button"
                width={25}
                height={25}
                className="inline-block"
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
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
