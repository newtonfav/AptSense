import React from "react";
import CheckMark from "../_components/check-mark";

function Pricing() {
  return (
    <div>
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-5 ">
          <div className="divide-y bg-white divide-gray-200 rounded-2xl border shadow-xl border-gray-200 ">
            <div className="p-6 sm:px-8 shadow-lg">
              <h2 className="text-5xl text-center font-black text-gray-900">
                Free
                <span className="sr-only">Plan</span>
              </h2>

              <p className="mt-2 text-center sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  {" "}
                  0${" "}
                </strong>
                <span className="text-sm font-medium text-gray-700">
                  /month
                </span>
              </p>

              <a
                className="mt-4 block rounded border border-green-600 bg-green-400 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                href="#"
              >
                Get Started
              </a>
            </div>

            <div className="p-6 sm:px-8">
              <p className="text-lg font-medium text-gray-900 sm:text-xl">
                What&apos;s included:
              </p>

              <ul className="mt-2 space-y-2 sm:mt-4">
                <li className="flex items-center gap-1">
                  <CheckMark />

                  <span className="text-gray-700"> 20 Aptitude Questions </span>
                </li>

                <li className="flex items-center gap-1">
                  <CheckMark />

                  <span className="text-gray-700"> 1 AptSense Account </span>
                </li>

                <li className="flex items-center gap-1">
                  <CheckMark />

                  <span className="text-gray-700"> Email support </span>
                </li>

                <li className="flex items-center gap-1">
                  <CheckMark />

                  <span className="text-gray-700"> 10 Logic Explanation </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pro Card */}
          <div className="divide-y bg-gradient-to-t from-green-400 to-blue-400 divide-gray-200 rounded-2xl border border-indigo-600 shadow-xl transform scale-105">
            <div className="p-8 sm:px-12">
              <h2 className="text-6xl text-center font-black text-gray-900">
                Pro
                <span className="sr-only">Plan</span>
              </h2>

              <p className="mt-4 text-center sm:mt-6">
                <strong className="text-4xl font-bold text-gray-900 sm:text-5xl">
                  {" "}
                  3${" "}
                </strong>
                <span className="text-sm font-medium text-gray-700">
                  /month
                </span>
              </p>

              <a
                className="mt-6 block rounded border border-green-600 bg-green-400 px-16 py-4 text-center text-md font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-8"
                href="#"
              >
                Get Started
              </a>
            </div>

            <div className="p-8 sm:px-12">
              <p className="text-lg font-medium text-gray-900 sm:text-xl">
                What&apos;s included:
              </p>

              <ul className="mt-4 space-y-2 sm:mt-6">
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 text-indigo-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span className="text-gray-700"> 50 Aptitude Questions </span>
                </li>

                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 text-indigo-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span className="text-gray-700"> 3 AptSense acoount </span>
                </li>

                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 text-indigo-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span className="text-gray-700"> Email support </span>
                </li>

                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 text-indigo-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span className="text-gray-700"> 100 Logic Explanation </span>
                </li>

                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 text-indigo-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span className="text-gray-700"> 24/7 Premium Support </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="divide-y bg-white divide-gray-200 rounded-2xl border border-gray-200 shadow-xl">
            <div className="p-6 sm:px-8">
              <h2 className="text-5xl text-center font-black text-gray-900">
                Enterprise
                <span className="sr-only">Plan</span>
              </h2>

              <p className="mt-2 text-center sm:mt-4">
                <strong className="text-3xl  font-bold text-gray-900 sm:text-4xl">
                  {" "}
                  105${" "}
                </strong>
                <span className="text-sm font-medium text-gray-700">
                  /month
                </span>
              </p>

              <a
                className="mt-4 block rounded border border-green-600 bg-green-400 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                href="#"
              >
                Get Started
              </a>
            </div>

            <div className="p-6 sm:px-8">
              <p className="text-lg font-medium text-gray-900 sm:text-xl">
                What&apos;s included:
              </p>

              <ul className="mt-2 space-y-2 sm:mt-4">
                <li className="flex items-center gap-1">
                  <CheckMark />

                  <span className="text-gray-700">
                    {" "}
                    Unlimited Aptitude Questions{" "}
                  </span>
                </li>

                <li className="flex items-center gap-1">
                  <CheckMark />

                  <span className="text-gray-700">
                    {" "}
                    Unlimited APtSense Account{" "}
                  </span>
                </li>

                <li className="flex items-center gap-1">
                  <CheckMark />

                  <span className="text-gray-700">
                    {" "}
                    Unlimited APtSense Account{" "}
                  </span>
                </li>

                <li className="flex items-center gap-1">
                  <CheckMark />

                  <span className="text-gray-700"> Email Support </span>
                </li>

                <li className="flex items-center gap-1">
                  <CheckMark />

                  <span className="text-gray-700">
                    {" "}
                    Unlimited Logic Explanation{" "}
                  </span>
                </li>
                <li className="flex items-center gap-1">
                  <CheckMark />

                  <span className="text-gray-700"> Advance Security </span>
                </li>

                <li className="flex items-center gap-1">
                  <CheckMark />

                  <span className="text-gray-700"> Invoice and billing </span>
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
