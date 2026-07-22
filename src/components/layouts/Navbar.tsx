"use client";

import { NAV_LINKS } from "@/lib/constants";
import Link from "next/link";

const Navbar = () => {
  const baseLinkClass =
    "px-2 py-1 transition-all border-2 border-transparent hover:text-black hover:border-black hover:shadow-[2px_2px_0px_0px_#000]";
  return (
    <nav className="hidden md:flex justify-between items-center mb-20 p-4 bg-white fixed top-4 left-0 right-0 max-w-6xl mx-auto z-50 border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_#000] transition-all duration-200 hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-1 hover:translate-y-1">
      <h1 className="text-xl md:text-2xl font-black bg-yellow-300 border-2 border-black px-3 py-1 -rotate-2 rounded-lg cursor-pointer shadow-[4px_4px_0px_0px_#000] transition-all duration-100 active:translate-x-1 active:translate-y-1 active:shadow-none active:scale-95">
        HAMSY
      </h1>

      <div className="flex gap-6 font-bold text-sm md:text-lg">
        {NAV_LINKS.map(({ href, label, hoverClass }) => (
          <Link
            key={href}
            href={href}
            className={`${baseLinkClass} ${hoverClass}`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
