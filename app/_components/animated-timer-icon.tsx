import React from "react";

function AnimatedTimerIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-8 h-8"
    >
      {/* Clock Face */}
      <path
        fillRule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Z"
        clipRule="evenodd"
        fill="#20C459"
      />
      {/* Static Clock Hand */}
      <path
        d="M12 12V7"
        stroke="#DFDFDF"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Rotating Clock Hand */}
      <path
        d="M12 12h4.5"
        stroke="#DFDFDF"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="origin-center animate-spin-slow"
      />
    </svg>
  );
}

export default AnimatedTimerIcon;
