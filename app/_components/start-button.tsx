import React from "react";
import { HandleClick } from "./start-test";

interface StartButtonProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function StartButton({ handleClick }: StartButtonProps) {
  return (
    <div className="">
      <div className="">Make sure you have a stable internet connection.</div>

      <div className="mb-6"></div>

      <button
        onClick={handleClick}
        className="bg-primary-400 px-10 sm:px-5 py-2 text-white rounded-[0.75rem] hover:bg-primary-500"
      >
        Start Test
      </button>
    </div>
  );
}
