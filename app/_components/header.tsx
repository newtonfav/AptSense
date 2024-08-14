import React from "react";
import Logo from "./logo";
import Navigation from "./navigation";

export default function Header() {
  return (
    <header className="">
      <div className="bg-primary-200 px-8 py-4 mt-4 rounded-[0.75rem] text-black flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}
