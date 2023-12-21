import SecondaryNavbar from "@/components/SecondaryNavbar";
import TertiaryNavbar from "@/components/TertiaryNavbar";
import BrochureFig from "@/components/BrochureFig";
import { primaryHierarchyProps } from "@/pages/outreach";
import { secondaryHierarchyProps } from "@/pages/outreach/handouts";

export default function Political() {
  return (
    <div>
      <SecondaryNavbar {...primaryHierarchyProps} />
      <TertiaryNavbar {...secondaryHierarchyProps} />
      <div className="bg-gradient-to-l from-[#088723] to-[#021a07] pb-72">
        <div className="pt-serif-700 p-8 text-center text-7xl italic text-[#c2ffbf]">
          Political
        </div>
        <div
          id="comming-soon-placeholder"
          className="m-4 p-4 text-2xl text-zinc-200"
        >
          ...comming soon! This page is under construction.
        </div>
        <div
          id="figures-list"
          className="roboto-font-400 m-6 rounded-6xl bg-[#b8d1c8] bg-opacity-70 px-6 pb-16 pt-12 text-2xl text-zinc-950"
        >
          <BrochureFig
            originalWidth="50%"
            figureNumber="Fig-19.1"
            fileName="Fig-19.1.jpg"
          />
          <br></br>
          <BrochureFig
            originalWidth="50%"
            figureNumber="Fig-19.2"
            fileName="Fig-19.2.jpg"
          />
          <br></br>
        </div>
      </div>
    </div>
  );
}
