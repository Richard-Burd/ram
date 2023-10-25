import DesktopNavbar from "./DesktopNavbar";
import DesktopNavbarTwo from "./DesktopNavbarTwo";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopNavbar />
        <DesktopNavbarTwo />
      </div>
      <div className="lg:hidden">
        <MobileNavbar />
      </div>
    </>
  );
}
