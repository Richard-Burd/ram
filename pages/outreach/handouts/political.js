import SecondaryNavbar from "@/components/SecondaryNavbar";
import TertiaryNavbar from "@/components/TertiaryNavbar";
import BrochureFig from "@/components/BrochureFig";
import DocumentTwo from "@/components/DocumentTwo";
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

        <div id="handouts-list" className="ml-20">
          <DocumentTwo
            title="Summary of Ten Hidden Taxes Caused by the Thermal Plant"
            fileName="doc-692"
            description="A $39 million retrofit proposal to keep incinerator burning past 1999"
            fileLabel={true}
          />
          <DocumentTwo
            title="Get rid of thermal plant, recycling advocates urge"
            fileName="doc-695"
            description="Article by Jim East on November 15th, 1999 in the The Tennessean"
            fileLabel={true}
          />
        </div>

        <div
          id="figures-list"
          className="roboto-font-400 m-6 rounded-6xl bg-neutral-950 px-6 pb-16 pt-12 text-2xl text-zinc-950"
        >
          <BrochureFig
            originalWidth="50%"
            borderColor="#496649"
            figureNumber="Fig-19.1"
            fileName="Fig-19.1.jpg"
          />
          <br></br>
          <BrochureFig
            originalWidth="50%"
            borderColor="#496649"
            figureNumber="Fig-19.2"
            fileName="Fig-19.2.jpg"
          />
          <br></br>
        </div>
      </div>
    </div>
  );
}
