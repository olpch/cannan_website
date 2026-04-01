"use client";

import { useState } from "react";
import Link from "next/link";
import { MENU_ITEMS } from "../data";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#0B3C5D] sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <img
            src="/imgs/cannan_logo.png"
            alt="logo"
            className="h-14 w-auto"
          />
          <nav className="hidden md:flex gap-10 text-sm font-medium">
            {MENU_ITEMS.map((item) => (
              <Link
                key={item.title}
                href={item.path}
                className="hover:text-gray-300 transition"
              >
                {item.title}
              </Link>
            ))}
          </nav>
          <button
            className="md:hidden"
            onClick={() => { console.log('Open', open); setOpen(!open); } }
            onBlur={() => { console.log('Open', open); setOpen(!open); } }
          >
            <div className="space-y-1">
              <span className="block w-6 h-[2px] bg-white"></span>
              <span className="block w-6 h-[2px] bg-white"></span>
              <span className="block w-6 h-[2px] bg-white"></span>
            </div>
          </button>
        </div>
        {open && (
          <nav className="md:hidden pb-6 flex flex-col gap-4 text-sm font-medium">
            {MENU_ITEMS.map((item) => (
              <Link
                key={item.title}
                href={item.path}
                onClick={() => setOpen(false)}
                className="hover:text-gray-300 transition"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        )}

      </div>
    </header>
  );
}