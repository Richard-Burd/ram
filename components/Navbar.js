import { useRouter, router } from "next/router";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  return (
    <div>
      <div className="hidden lg:block">
        <DesktopNavbar />
      </div>
      <div className="lg:hidden">
        <MobileNavbar />
      </div>
    </div>
  );
}
