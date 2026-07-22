"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const baseLinkClass =
    "px-2 py-1 transition-all border-2 border-transparent hover:text-black hover:border-black hover:shadow-[2px_2px_0px_0px_#000]";

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="md:hidden p-2 rounded-md border-2 cursor-pointer"
        aria-label={isOpen ? "Tutup menu" : "Buka menu"}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-0 left-0 right-0 bottom-0 z-40 bg-background border-t-2 border-foreground overflow-y-auto overscroll-contain">
          <div className="flex justify-between p-2 items-center gap-3">
            <button
              className="md:hidden p-2 rounded-md border-2 cursor-pointer"
              aria-label={isOpen ? "Tutup menu" : "Buka menu"}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          <div className="flex flex-col items-center gap-6 mt-10 font-bold text-lg md:text-xl">
            {NAV_LINKS.map(({ href, label, hoverClass }) => (
              <Link
                key={href}
                href={href}
                className={`${baseLinkClass} ${hoverClass} w-full text-center`}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarMobile;
