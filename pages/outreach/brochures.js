import SecondaryNavbar from "@/components/SecondaryNavbar";
import { navbarProps } from "@/pages/outreach";

import Brochure from "@/components/Brochure";

export default function Brochures() {
  return (
    <div>
      <SecondaryNavbar {...navbarProps} />
      <div className="bg-gradient-to-l from-[#088723] to-[#000000] pb-72">
        <div className="p-8 text-center text-7xl pt-serif-700 text-[#c2ffbf] italic">
          Brochures
        </div>
        <div id="brochures-container" className="flex ml-1">
          <Brochure
            title="Tri-Fold Handout"
            fileName="fig-3"
            description="This handout is intended to be printed front & back so as to be folded into three segments"
            fileLabel={false}
          />
          <Brochure
            title="Bi-Fold Handout"
            fileName="fig-4"
            description="This handout is intended to be printed front & back so as to be folded into two segments"
            fileLabel={false}
          />
        </div>
      </div>
    </div>
  );
}
