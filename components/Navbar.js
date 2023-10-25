import { useRouter, router } from "next/router";
import DesktopNavbar from "./DesktopNavbar";
import DesktopNavbarTwo from "./DesktopNavbarTwo";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  const router = useRouter();
  const routesForDesktopNavbarTwo = ["/about"];
  const isAltIndexPage = routesForDesktopNavbarTwo.includes(router.pathname);

  return (
    <>
      <div className="hidden lg:block">
        {isAltIndexPage ? <DesktopNavbarTwo /> : <DesktopNavbar />}
      </div>
      <div className="lg:hidden">
        <MobileNavbar />
      </div>
    </>
  );
}
