import SecondaryNavbar from "@/components/SecondaryNavbar";
import TertiaryNavbar from "@/components/TertiaryNavbar";
import { navbarProps } from "@/pages/outreach";

export const bioNavbarProps = {
  // bgColor: "bg-[#ff8938]",
  bgColor: "bg-outreachBg",
  titles: ["General", "Waste Streams", "Methodology", "Markets", "Plans"],
  path: "/outreach/submissions",
};

export default function Submissions() {
  return (
    <div>
      <SecondaryNavbar {...navbarProps} />
      <TertiaryNavbar {...bioNavbarProps} />
      <div className="bg-gradient-to-l from-[#088723] to-[#021a07] pb-72">
        <div className="p-8 text-center text-7xl pt-serif-700 text-[#c2ffbf] italic">
          Handouts
        </div>
      </div>
    </div>
  );
}
