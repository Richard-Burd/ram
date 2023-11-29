import SecondaryNavbar from "@/components/SecondaryNavbar";
import HyperLinkNavbar from "@/components/HyperLinkNavbar";
import { navbarProps } from "@/pages/outreach";

export const hyperlinkNavbarProps = {
  bgColor: "bg-outreachBg",
  titles: ["General", "Waste Streams", "Methodology", "Markets", "Plans"],
  path: "/outreach/handouts",
};

export default function Submissions() {
  return (
    <div>
      <SecondaryNavbar {...navbarProps} />
      <HyperLinkNavbar {...hyperlinkNavbarProps} />
      <div className="bg-gradient-to-l from-[#088723] to-[#021a07] pb-72">
        <div className="p-8 text-center text-7xl pt-serif-700 text-[#c2ffbf] italic">
          Handouts
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
