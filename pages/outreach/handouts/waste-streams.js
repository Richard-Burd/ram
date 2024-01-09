import SecondaryNavbar from "@/components/SecondaryNavbar";
import TertiaryNavbar from "@/components/TertiaryNavbar";
import FragmentIdentifierNavbar from "@/components/FragmentIdentifierNavbar";
import DocumentTwo from "@/components/DocumentTwo";
import BrochureFig from "@/components/BrochureFig";
import { primaryHierarchyProps } from "@/pages/outreach";
import { secondaryHierarchyProps } from "@/pages/outreach/handouts";

export const tertiaryNavbarProps = {
  bgColor: "bg-outreachBg",
  titles: ["2003", "2012", "2013", "2014", "2015", "2016"],
  path: "/outreach/handouts/waste-streams",
};

export default function WasteStreams() {
  return (
    <div>
      <SecondaryNavbar {...primaryHierarchyProps} />
      <TertiaryNavbar {...secondaryHierarchyProps} />
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
            <li className="mb-4">2003</li>
            <li className="mb-4">2012</li>
            <li className="mb-4">2013</li>
            <li className="mb-4">2014</li>
            <li className="mb-4">2015</li>
            <li className="mb-4">2016</li>
          </ul>
        </div>

        <div
          id="figures-list"
          className="roboto-font-400 m-6 rounded-6xl bg-neutral-950 px-6 pb-16 pt-12 text-2xl text-zinc-950"
        >
          <BrochureFig
            originalWidth="50%"
            borderColor="#496649"
            figureNumber="Fig-1.1"
            fileName="Fig-1.1.jpg"
          />
          <br></br>
          <BrochureFig
            originalWidth="50%"
            borderColor="#496649"
            figureNumber="Fig-1.2"
            fileName="Fig-1.2.jpg"
          />
          <br></br>
          <BrochureFig
            originalWidth="50%"
            borderColor="#496649"
            figureNumber="Fig-1.3"
            fileName="Fig-1.3.jpg"
          />
          <br></br>
          <BrochureFig
            originalWidth="50%"
            borderColor="#496649"
            figureNumber="Fig-1.4"
            fileName="Fig-1.4.jpg"
          />
          <br></br>
          <br></br>
          <BrochureFig
            originalWidth="50%"
            borderColor="#496649"
            figureNumber="Fig-14.1"
            fileName="Fig-14.1.jpg"
          />
          <br></br>
          <BrochureFig
            originalWidth="50%"
            borderColor="#496649"
            figureNumber="Fig-14.2"
            fileName="Fig-14.2.jpg"
          />
          <br></br>
          <BrochureFig
            originalWidth="50%"
            borderColor="#496649"
            figureNumber="Fig-14.3"
            fileName="Fig-14.3.jpg"
          />
          <br></br>
          <BrochureFig
            originalWidth="50%"
            borderColor="#496649"
            figureNumber="Fig-14.4"
            fileName="Fig-14.4.jpg"
          />
          <br></br>
          <BrochureFig
            originalWidth="50%"
            borderColor="#496649"
            figureNumber="Fig-14.5"
            fileName="Fig-14.5.jpg"
          />
          <br></br>
          <BrochureFig
            originalWidth="50%"
            borderColor="#496649"
            figureNumber="Fig-14.6"
            fileName="Fig-14.6.jpg"
          />
        </div>

        <div id="documents-list" className="ml-20">
          <DocumentTwo
            title="Solid Waste Destinations"
            fileName="doc-703"
            description="Trajectories patterened after Metro landfilling, audits, & sales taxes."
            fileLabel={true}
          />
          <DocumentTwo
            title="Net Zero Landfilling"
            fileName="doc-36"
            description="What would happen to a typical waste stream."
            fileLabel={true}
          />
          <DocumentTwo
            title="Household Hazardous Waste Collection Day"
            fileName="doc-299"
            description="June 1st, 1996."
            fileLabel={true}
          />
          <DocumentTwo
            title="Solid Waste Stream Trends - September 6th, 2004"
            fileName="doc-318"
            description=""
            fileLabel={true}
          />
          <DocumentTwo
            title="Solid Waste Stream Trends - July 23rd, 2006"
            fileName="doc-331"
            description=""
            fileLabel={true}
          />
          <DocumentTwo
            title="2012 Davidson County Solid Waste - Where it went"
            fileName="doc-345"
            description=""
            fileLabel={true}
          />
          <DocumentTwo
            title="Staten Island Ferry (All versions)"
            fileName="doc-702"
            description="This is a collection of all six version of this graphic"
            fileLabel={true}
          />
          <DocumentTwo
            title="Creating a Level Playing Field"
            fileName="doc-687"
            description="Wet/dry recovery methods require up-front costs to government, but yeild far greater indirect benefits"
            fileLabel={true}
          />
        </div>
      </div>
    </div>
  );
}
