import Link from "next/link";
import { MENU_ITEMS } from "../data";

export default function Header() {
  return (
    <header className="bg-[#0B3C5D] text-white">
      <div className="max-w-1440 mx-auto flex items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <img src="/imgs/cannan_logo.png" alt="logo" className="h-30 w-auto" />
        </div>
        <nav className="hidden md:flex gap-8 text-sm text-3x1 py-4">
          {
            MENU_ITEMS.map( menuItem => (
              <Link key={menuItem.title} href={menuItem.path} className="hover:text-gray-300">
                {menuItem.title}
              </Link>
            ))
          }
        </nav>
      </div>
    </header>
  );
}
