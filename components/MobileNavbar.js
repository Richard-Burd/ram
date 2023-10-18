import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="bg-neutral-950 text-white px-4 py-4">
        <button onClick={toggleMenu}>
          <Image
            src="/images/hamburger-icon-white.svg"
            alt="Menu"
            width={30}
            height={30}
          />
        </button>
      </div>
      {isMenuOpen && (
        <div
          id="mobile-nav-bar-links"
          className="bg-stone-800 w-full text-white"
        >
          <Link href="/">
            <div
              className="block px-4 py-2 cursor-pointer border-b border-stone-600"
              onClick={toggleMenu}
            >
              Home
            </div>
          </Link>
          <Link href="/about">
            <div
              className="block px-4 py-2 cursor-pointer border-b border-stone-600"
              onClick={toggleMenu}
            >
              About
            </div>
          </Link>
          <Link href="/studies">
            <div
              className="block px-4 py-2 cursor-pointer border-b border-stone-600"
              onClick={toggleMenu}
            >
              Studies
            </div>
          </Link>
          <Link href="/outreach">
            <div
              className="block px-4 py-2 cursor-pointer border-b border-stone-600"
              onClick={toggleMenu}
            >
              Outreach
            </div>
          </Link>
          <Link href="/successes">
            <div
              className="block px-4 py-2 cursor-pointer border-b border-stone-600"
              onClick={toggleMenu}
            >
              Successes
            </div>
          </Link>
          <Link href="/organizing">
            <div
              className="block px-4 py-2 cursor-pointer border-b border-stone-600"
              onClick={toggleMenu}
            >
              Organizing
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}
