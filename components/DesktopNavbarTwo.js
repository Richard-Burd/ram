import Link from "next/link";
import NavbarButtonTwo from "./NavbarButtonTwo";

export default function DesktopNavbarTwo() {
  return (
    <nav className="bg-neutral-950 text-white px-1 py-2 border-y-slate-500 border-b-2">
      <div className="flex">
        <Link
          style={{ flexBasis: "0%" }}
          className="min-w-32 flex-grow flex-shrink-0 mx-1"
          href="/"
        >
          <NavbarButtonTwo title="Home" bgColor="bg-homeBg" />
        </Link>
        <Link
          style={{ flexBasis: "0%" }}
          className="min-w-32 flex-grow flex-shrink-0 mx-1"
          href="/about"
        >
          <NavbarButtonTwo
            title="About"
            bgColor="bg-aboutBg"
            className="ml-4"
          />
        </Link>
        <Link
          style={{ flexBasis: "0%" }}
          className="min-w-32 flex-grow flex-shrink-0 mx-1"
          href="/studies"
        >
          <NavbarButtonTwo
            title="Studies"
            bgColor="bg-studiesBg"
            className="ml-4"
          />
        </Link>
        <Link
          style={{ flexBasis: "0%" }}
          className="min-w-32 flex-grow flex-shrink-0 mx-1"
          href="/outreach"
        >
          <NavbarButtonTwo
            title="Outreach"
            bgColor="bg-outreachBg"
            className="ml-4"
          />
        </Link>
        <Link
          style={{ flexBasis: "0%" }}
          className="min-w-32 flex-grow flex-shrink-0 mx-1"
          href="/successes"
        >
          <NavbarButtonTwo
            title="Successes"
            bgColor="bg-successesBg"
            className="ml-4"
          />
        </Link>
        <Link
          style={{ flexBasis: "0%" }}
          className="min-w-32 flex-grow flex-shrink-0 mx-1"
          href="/organizing"
        >
          <NavbarButtonTwo
            title="Organizing"
            bgColor="bg-organizingBg"
            className="ml-4"
          />
        </Link>
      </div>
    </nav>
  );
}
