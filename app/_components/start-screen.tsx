import Link from "next/link";
import React from "react";
import { useTest } from "../contexts/testContext";

export default function StartScreen() {
  const { startTest } = useTest();

  return (
    <div className="   justify-center h-[75dvh] space-x-12  flex flex-col items-center select-none mb-8">
      <div className="bg-primary-200 rounded-[0.75rem] text-center p-20 text-base space-y-4">
        <div className="text-2xl font-semibold">Welcome to AptSense</div>
        <div>20 Aptitude questions to test your aptitude prowess</div>
        <button
          className="bg-primary-400 px-5 py-2 text-white rounded-[0.75rem] hover:bg-primary-500"
          onClick={() => startTest()}
        >
          <Link href="/test/start">Let&apos;s Start</Link>
        </button>
      </div>
    </div>
  );
}
