import SecondaryNavbar from "@/components/SecondaryNavbar";
import TertiaryNavbar from "@/components/TertiaryNavbar";
import { navbarProps } from "@/pages/outreach";
import { anchorlinkNavbarProps } from "@/pages/outreach/handouts";

export default function Markets() {
  return (
    <div>
      <SecondaryNavbar {...navbarProps} />
      <TertiaryNavbar {...anchorlinkNavbarProps} />
      <div className="bg-gradient-to-l from-[#088723] to-[#021a07] pb-72">
        <div className="p-8 text-center text-7xl pt-serif-700 text-[#c2ffbf] italic">
          Markets
        </div>
        <div
          id="comming-soon-placeholder"
          className="m-4 p-4 text-2xl text-zinc-200"
        >
          ...comming soon! This page is under construction.
        </div>
      </div>
    </div>
  );
}
