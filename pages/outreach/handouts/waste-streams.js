import SecondaryNavbar from "@/components/SecondaryNavbar";
import TertiaryNavbar from "@/components/TertiaryNavbar";
import FragmentIdentifierNavbar from "@/components/FragmentIdentifierNavbar";
import { navbarProps } from "@/pages/outreach";
import { hierarchyProps } from "@/pages/outreach/handouts";

export const tertiaryNavbarProps = {
  // bgColor: "bg-[#ff8938]",
  bgColor: "bg-outreachBg",
  titles: ["2012", "2013", "2014", "2015", "2016"],
  path: "/outreach/handouts/waste-streams",
};

export default function WasteStreams() {
  return (
    <div>
      <SecondaryNavbar {...navbarProps} />
      <TertiaryNavbar {...hierarchyProps} />
      <FragmentIdentifierNavbar {...tertiaryNavbarProps} />
      <div className="bg-gradient-to-l from-[#088723] to-[#021a07] pb-72">
        <div className="pt-serif-700 p-8 text-center text-7xl italic text-[#c2ffbf]">
          Waste Streams
        </div>
        <div
          id="comming-soon-placeholder"
          className="m-4 p-4 text-2xl text-zinc-200"
        >
          ...comming soon! This page is under construction.
        </div>
        <div
          id="items-list"
          className="m-4 p-4 text-2xl text-zinc-200 opacity-70"
        >
          <ul className="m-4 list-outside list-square p-4">
            <li className="mb-4">2012</li>
            <li className="mb-4">2013</li>
            <li className="mb-4">2014</li>
            <li className="mb-4">2015</li>
            <li className="mb-4">2016</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
