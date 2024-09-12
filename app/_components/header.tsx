import React from "react";
import Logo from "./logo";
import Navigation from "./navigation";
import { Bars3Icon } from "@heroicons/react/24/solid";

export default function Header() {
  return (
    <header className=" items-center flex flex-col">
      <div className="bg-primary-200 phone:px-3 px-10 py-3 phone:py-2 mt-4 rounded-[0.75rem] w-10/12 text-black flex flex-row justify-between items-center max-w-7xl">
        <Logo />
        <Navigation />
        <Bars3Icon className="xl:hidden block cursor-pointer tabletLandscape:w-10 smallPhone:w-8 w-12" />
      </div>
    </header>
  );
}
