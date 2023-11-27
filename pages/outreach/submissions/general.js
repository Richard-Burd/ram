import SecondaryNavbar from "@/components/SecondaryNavbar";
import TertiaryNavbar from "@/components/TertiaryNavbar";
import { navbarProps } from "@/pages/outreach";
import { bioNavbarProps } from "@/pages/outreach/submissions";

export const thisNavbarProps = {
  // bgColor: "bg-[#ff8938]",
  bgColor: "bg-outreachBg",
  titles: ["Nashville Thermal Transfer Corp.", "Governor's Office"],
  path: "/outreach/submissions",
};

export default function General() {
  return (
    <div>
      <SecondaryNavbar {...navbarProps} />
      <TertiaryNavbar {...bioNavbarProps} />
      <TertiaryNavbar {...thisNavbarProps} />
      <div className="bg-gradient-to-l from-[#088723] to-[#021a07] pb-72">
        <div className="p-8 text-center text-7xl pt-serif-700 text-[#c2ffbf] italic">
          General
        </div>
      </div>
    </div>
  );
}
