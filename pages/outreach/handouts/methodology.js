import SecondaryNavbar from "@/components/SecondaryNavbar";
import TertiaryNavbar from "@/components/TertiaryNavbar";
import BrochureFig from "@/components/BrochureFig";
import DocumentTwo from "@/components/DocumentTwo";
import { primaryHierarchyProps } from "@/pages/outreach";
import { secondaryHierarchyProps } from "@/pages/outreach/handouts";

export default function Methodology() {
  return (
    <div>
      <SecondaryNavbar {...primaryHierarchyProps} />
      <TertiaryNavbar {...secondaryHierarchyProps} />
      <div className="bg-gradient-to-l from-[#088723] to-[#021a07] pb-72">
        <div className="pt-serif-700 p-8 text-center text-7xl italic text-[#c2ffbf]">
          Methodology
        </div>

        <div
          id="comming-soon-placeholder"
          className="m-4 p-4 text-2xl text-zinc-200"
        >
          ...comming soon! This page is under construction.
        </div>

        <div id="handouts-list" className="ml-20">
          <DocumentTwo
            title="Household Hazardous Waste Collection Day"
            fileName="doc-688"
            description="This occured in Nashville TN on June 1st, 1996."
            fileLabel={true}
          />
          <DocumentTwo
            title="Pow Wow Participants"
            fileName="doc-690"
            description="Food vs. Everything Else"
            fileLabel={true}
          />
        </div>

        <div className="roboto-font-400 m-6 rounded-6xl bg-neutral-950 px-6 pb-16 pt-12 text-2xl text-zinc-950">
          <BrochureFig
            originalWidth="50%"
            borderColor="#496649"
            figureNumber="Fig-3"
            fileName="net-zero-landfilling.jpg"
          />
          <br></br>
          <BrochureFig
            figureNumber="Fig-4"
            borderColor="#496649"
            fileName="composting.jpg"
          />
          <br></br>
          <BrochureFig
            originalWidth="50%"
            borderColor="#496649"
            figureNumber="Fig-11"
            fileName="wet-dry-pow.jpg"
          />
          <br></br>
          <BrochureFig
            figureNumber="Fig-12"
            borderColor="#496649"
            fileName="recovery.jpg"
          />
          <br></br>
          <BrochureFig
            originalWidth="50%"
            borderColor="#496649"
            figureNumber="Fig-15"
            fileName="buckets.jpg"
          />
          <br></br>
          <BrochureFig
            originalWidth="50%"
            borderColor="#496649"
            figureNumber="Fig-24"
            fileName="solid-waste-choices.jpg"
          />
          <br></br>
          <BrochureFig
            originalWidth="50%"
            borderColor="#496649"
            figureNumber="Fig-25"
            fileName="tax-disparity.jpg"
          />
          <br></br>
          <BrochureFig
            originalWidth="50%"
            borderColor="#496649"
            figureNumber="Fig-28"
            fileName="wet-dry-short.jpg"
          />
          <br></br>
        </div>
      </div>
    </div>
  );
}
