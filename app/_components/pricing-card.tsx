import React from "react";
import CheckMark from "./check-mark";

interface PricingProps {
  name: string;
  price: string;
  features: Array<string>;
}

export default function PricingCard({ name, price, features }: PricingProps) {
  return (
    <div
      className={`${
        name === "premium"
          ? "bg-gradient-to-b from-primary-400 to-primary-700 text-white p-8"
          : "bg-white text-black p-8"
      }   rounded-[0.75rem] w-[20rem]`}
    >
      <div className="flex flex-col items-center h-[100%]">
        <h2 className="font-medium capitalize mb-4 text-3xl">{name}</h2>
        <p className="mb-8 inline-flex items-baseline">
          <span className="text-3xl font-medium">${price}</span>
          <span className="text-base">/mo</span>
        </p>

        <div className="mb-10">
          <ul className="flex flex-col space-y-3">
            {features.map((feature, index) => (
              <li
                className="inline-flex items-center text-sm gap-2"
                key={index}
              >
                <CheckMark premium={name === "premium"} />{" "}
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <button
          className={`${
            name === "premium"
              ? "bg-white text-primary-700"
              : "bg-primary-400 text-white "
          }  mt-auto py-2 capitalize px-6 rounded-[0.6rem]`}
        >
          choose plan
        </button>
      </div>
    </div>
  );
}
