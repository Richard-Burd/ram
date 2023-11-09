import Link from "next/link";
import NavbarButton from "./NavbarButton";

export default function DesktopNavbar() {
  return (
    <nav
      className={` bg-neutral-950 text-white px-1 py-2 border-y-slate-500 border-b-2`}
    >
      <div className="container flex justify-between">
        <div className="flex flex-auto justify-items-stretch items-center">
          <Link className="min-w-32 flex-grow mx-1" href="/">
            <NavbarButton title="Home" bgColor="bg-homeBg" />
          </Link>
          <Link className="min-w-32 flex-grow mx-1" href="/about">
            <NavbarButton title="About" bgColor="bg-aboutBg" className="ml-4" />
          </Link>
          <Link className="min-w-32 flex-grow mx-1" href="/studies">
            <NavbarButton
              title="Studies"
              bgColor="bg-studiesBg"
              className="ml-4"
            />
          </Link>
          <Link className="min-w-32 flex-grow mx-1" href="/outreach">
            <NavbarButton
              title="Outreach"
              bgColor="bg-outreachBg"
              className="ml-4"
            />
          </Link>
          <Link className="min-w-32 flex-grow mx-1" href="/successes">
            <NavbarButton
              title="Successes"
              bgColor="bg-successesBg"
              className="ml-4"
            />
          </Link>
          <Link className="min-w-32 flex-grow mx-1" href="/organizing">
            <NavbarButton
              title="Organizing"
              bgColor="bg-organizingBg"
              className="ml-4"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
