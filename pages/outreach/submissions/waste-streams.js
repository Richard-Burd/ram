import SecondaryNavbar from "@/components/SecondaryNavbar";
import TertiaryNavbar from "@/components/TertiaryNavbar";
import { navbarProps } from "@/pages/outreach";

export const bioNavbarProps = {
  // bgColor: "bg-[#ff8938]",
  bgColor: "bg-outreachBg",
  titles: ["2012", "2013", "2014", "2015", "2016"],
  path: "/outreach/submissions",
};

export default function WasteStreams() {
  return (
    <div>
      <SecondaryNavbar {...navbarProps} />
      <TertiaryNavbar {...bioNavbarProps} />
      <div className="bg-gradient-to-l from-[#088723] to-[#021a07] pb-72">
        <div className="p-8 text-center text-7xl pt-serif-700 text-[#c2ffbf] italic">
          Waste Streams
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
