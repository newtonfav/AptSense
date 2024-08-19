import React from "react";
import CheckMark from "../_components/check-mark";

function Pricing() {
  return (
    <div>
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-5 ">
          <div className="divide-y bg-white divide-gray-200 rounded-2xl border shadow-xl border-gray-200 ">
            <div className="py-6 sm:px-8 shadow-lg">
              <h2 className="text-3xl text-center font-medium text-black">
                Free
                <span className="sr-only">Plan</span>
              </h2>

              <p className="mt-2 text-center sm:mt-4 text-base">
                <strong className=" font-bold text-black sm:text-2xl">
                  {" "}
                  0${" "}
                </strong>
                <span className="font-medium text-black">/month</span>
              </p>

              <a
                className="mt-4 block rounded-[0.75rem] bg-green-400 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:bg-primary-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                href="#"
              >
                Get Started
              </a>
            </div>

            <div className="p-6 sm:px-8">
              <ul className="mt-2 space-y-4 text-black text-sm sm:mt-4">
                <li className="flex items-center gap-1">
                  <CheckMark />
                  <span className=""> 20 Aptitude Questions </span>
                </li>

                <li className="flex items-center gap-1">
                  <CheckMark />
                  <span className=""> 1 AptSense Account </span>
                </li>

                <li className="flex items-center gap-1">
                  <CheckMark />
                  <span className=""> Email support </span>
                </li>

                <li className="flex items-center gap-1">
                  <CheckMark />

                  <span className=""> 10 Logic Explanation </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pro Card */}
          <div className="divide-y bg-gradient-to-t from-green-400 to-blue-400 divide-gray-200 rounded-2xl shadow-xl transform scale-105">
            <div className="p-8 sm:px-12">
              <h2 className="text-4xl text-center font-medium text-primary-50">
                Premium
                <span className="sr-only">Plan</span>
              </h2>

              <p className="mt-4 text-center sm:mt-6 text-primary-50">
                <strong className="text-4xl font-bold  sm:text-5xl">
                  {" "}
                  3${" "}
                </strong>
                <span className="text-sm font-medium">/month</span>
              </p>

              <a
                className="mt-6 block rounded-[0.75rem] bg-primary-200 px-16 py-2 text-center text-md font-medium text-primary-400 hover:bg-transparent hover:bg-slate-50 focus:outline-none focus:ring active:text-indigo-500 sm:mt-8"
                href="#"
              >
                Get Started
              </a>
            </div>

            <div className="p-8 sm:px-12">
              <ul className="mt-4 space-y-4 text-sm text-primary-50 sm:mt-6">
                <li className="flex items-center gap-2">
                  <CheckMark pro="pro" />
                  <span className=""> 50 Aptitude Questions </span>
                </li>

                <li className="flex items-center gap-2">
                  <CheckMark pro="pro" />
                  <span className=""> 3 AptSense acoount </span>
                </li>

                <li className="flex items-center gap-2">
                  <CheckMark pro="pro" />
                  <span className=""> Email support </span>
                </li>

                <li className="flex items-center gap-2">
                  <CheckMark pro="pro" />
                  <span className=""> 100 Logic Explanation </span>
                </li>

                <li className="flex items-center gap-2">
                  <CheckMark pro="pro" />
                  <span className=""> 24/7 Premium Support </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="divide-y bg-white divide-gray-200 rounded-2xl border border-gray-200 shadow-xl">
            <div className="py-6 sm:px-8">
              <h2 className="text-3xl text-center font-medium text-black">
                Enterprise
                <span className="sr-only">Plan</span>
              </h2>

              <p className="mt-2 text-center sm:mt-4 text-base">
                <strong className="font-bold text-black sm:text-2xl">
                  {" "}
                  105${" "}
                </strong>
                <span className="font-medium text-black">/month</span>
              </p>

              <a
                className="mt-4 block rounded-[0.75rem] bg-green-400 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:bg-primary-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                href="#"
              >
                Get Started
              </a>
            </div>

            <div className="p-6 sm:px-8">
              <ul className="mt-2 text-black space-y-4 text-sm sm:mt-4">
                <li className="flex gap-2 items-center">
                  <CheckMark />

                  <span className=""> Unlimited Aptitude Questions </span>
                </li>

                <li className="flex gap-2 items-center">
                  <CheckMark />

                  <span className=""> Unlimited AptSense Account </span>
                </li>

                <li className="flex gap-2 items-center">
                  <CheckMark />

                  <span className=""> Unlimited AptSense Account </span>
                </li>

                <li className="flex gap-2 items-center">
                  <CheckMark />

                  <span className=""> Email Support </span>
                </li>

                <li className="flex gap-2 items-center">
                  <CheckMark />

                  <span className=""> Unlimited Logic Explanation </span>
                </li>
                <li className="flex gap-2 items-center">
                  <CheckMark />

                  <span className=""> Advance Security </span>
                </li>

                <li className="flex gap-2 items-center">
                  <CheckMark />

                  <span className=""> Invoice and billing </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
