import SecondaryNavbar from "@/components/SecondaryNavbar";
import BrochureFig from "@/components/BrochureFig";
import { navbarProps } from "@/pages/outreach";

import Brochure from "@/components/Brochure";

export const hyperlinkNavbarProps = {
  bgColor: "bg-outreachBg",
  titles: ["Printable Brochures", "Brochure Exhibits"],
  path: "/outreach/brochures",
};

export default function Presentations() {
  return (
    <div>
      <SecondaryNavbar {...navbarProps} />
      <div className="bg-gradient-to-l from-[#088723] to-[#021a07] pb-72">
        <div className="p-8 text-center text-7xl pt-serif-700 text-[#c2ffbf] italic">
          Presentations
        </div>
        <div id="brochure-exhibits">
          <div className="text-2xl roboto-font-400 text-zinc-950 m-6 pt-12 pb-16 px-6 bg-[#b8d1c8] bg-opacity-70 rounded-6xl">
            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-1"
              fileName="solid-waste-destination.jpg"
            />
            <br></br>
            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-2"
              fileName="iceberg.jpg"
            />
            <br></br>
            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-3"
              fileName="net-zero-landfilling.jpg"
            />
            <br></br>
            <BrochureFig figureNumber="Fig-4" fileName="composting.jpg" />
            <br></br>
            <BrochureFig figureNumber="Fig-5" fileName="trommel.jpg" />
            <br></br>
            <BrochureFig figureNumber="Fig-6" fileName="ants.jpg" />
            <br></br>
            <BrochureFig figureNumber="Fig-7" fileName="gravel.jpg" />
            <br></br>
            <BrochureFig figureNumber="Fig-8" fileName="entire-thermal.jpg" />
            <br></br>
            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-9"
              fileName="metro-to-thermal.jpg"
            />
            <br></br>
            <BrochureFig figureNumber="Fig-10" fileName="human-intake.jpg" />
            <br></br>
            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-11"
              fileName="wet-dry-pow.jpg"
            />
            <br></br>
            <BrochureFig figureNumber="Fig-12" fileName="recovery.jpg" />
            <br></br>
            <BrochureFig figureNumber="Fig-13" fileName="trash.jpg" />
            <br></br>
            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-14"
              fileName="solid-waste-2015.jpg"
            />
            <br></br>
            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-15"
              fileName="buckets.jpg"
            />
            <br></br>
            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-16"
              fileName="complaints.jpg"
            />
            <br></br>
            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-17"
              fileName="aar.jpg"
            />
            <br></br>
            <BrochureFig figureNumber="Fig-18" fileName="composting.jpg" />
            <br></br>
            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-19"
              fileName="davidson-map.jpg"
            />
            <br></br>
            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-20"
              fileName="heavy-molded.1.jpg"
            />
            <br></br>
            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-21"
              fileName="heavy-molded.2.jpg"
            />
            <br></br>
            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-22"
              fileName="jobs.jpg"
            />
            <br></br>
            <BrochureFig figureNumber="Fig-23" fileName="re-manufacture.jpg" />
            <br></br>
            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-24"
              fileName="solid-waste-choices.jpg"
            />
            <br></br>
            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-25"
              fileName="tax-disparity.jpg"
            />
            <br></br>
            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-26"
              fileName="tree.jpg"
            />
            <br></br>
            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-27"
              fileName="trees.jpg"
            />
            <br></br>
            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-28"
              fileName="wet-dry-short.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
