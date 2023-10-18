import Link from "next/link";
import NavbarButton from "./NavbarButton";

export default function DesktopNavbar() {
  return (
    <nav className="bg-neutral-950 text-white px-2 py-4">
      <div className="container flex justify-between">
        <div className="flex-auto flex justify-end">
          <Link href="/">
            <NavbarButton title="Home" bgColor="bg-homeBg" />
          </Link>
          <Link href="/about">
            <NavbarButton title="About" bgColor="bg-aboutBg" className="ml-4" />
          </Link>
          <Link href="/studies">
            <NavbarButton
              title="Studies"
              bgColor="bg-studiesBg"
              className="ml-4"
            />
          </Link>
          <Link href="/outreach">
            <NavbarButton
              title="Outreach"
              bgColor="bg-outreachBg"
              className="ml-4"
            />
          </Link>
          <Link href="/successes">
            <NavbarButton
              title="Successes"
              bgColor="bg-successesBg"
              className="ml-4"
            />
          </Link>
          <Link href="/organizing">
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
