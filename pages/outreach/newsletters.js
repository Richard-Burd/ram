import SecondaryNavbar from "@/components/SecondaryNavbar";
import { navbarProps } from "@/pages/outreach";

import Brochure from "@/components/Brochure";

export const hyperlinkNavbarProps = {
  bgColor: "bg-outreachBg",
  titles: ["Printable Brochures", "Brochure Exhibits"],
  path: "/outreach/brochures",
};

export default function Brochures() {
  return (
    <div>
      <SecondaryNavbar {...navbarProps} />
      <div className="bg-gradient-to-l from-[#088723] to-[#021a07] pb-72">
        <div className="p-8 text-center text-7xl pt-serif-700 text-[#c2ffbf] italic">
          Newsletters
        </div>
        <div id="printable-brochures">
          <div className="flex ml-1">
            <Brochure
              title="Winter-Spring 1993 Newsletter"
              fileName="red-newsletter"
              description="Lundell/Hedges failure, school wet/dry pilot, Canadial consultant visits & rural centralized composting, & more"
              fileLabel={false}
            />
            <Brochure
              title="Summer 1993-Spring 1994 Newsletter"
              fileName="green-newsletter-inserts"
              description="Sevierville plant tour, Bordeaux visit, Gallatin meet, sludge, Tennessee Environmental Council, & more"
              fileLabel={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
