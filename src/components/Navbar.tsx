import React from "react";

export const Navbar = () => {
  return (
    <nav className="relative mx-auto flex w-5/6 pt-2 text-sm font-medium text-stone-700">
      <ul className="relative mx-auto grid w-full grid-cols-4 items-center md:w-full lg:w-full">
        <ul className="hidden md:flex md:items-center md:justify-start md:gap-6">
          <li className="md:flex md:items-center md:justify-center">
            <a href="/">homeslice</a>
          </li>
        </ul>
        <ul className="flex w-[22.55rem] justify-center gap-6 md:col-span-3 md:flex md:w-full md:justify-end">
          <li className="flex items-center justify-center text-xl transition duration-75 hover:text-violet-500">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </ul>
    </nav>
  );
};

export default Navbar;
