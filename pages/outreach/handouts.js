import SecondaryNavbar from "@/components/SecondaryNavbar";
import TertiaryNavbar from "@/components/TertiaryNavbar";
import SecondaryMastHead from "@/components/SecondaryMasthead";
import DocumentTwo from "@/components/DocumentTwo";
import { primaryHierarchyProps } from "@/pages/outreach";

export const secondaryHierarchyProps = {
  bgColor: "bg-outreachBg",
  titles: ["General", "Waste Streams", "Methodology", "Markets", "Plans"],
  path: "/outreach/handouts",
};

const description = (
  <div>
    <p>...comming soon! This page is under construction.</p>
  </div>
);

export default function Handouts() {
  return (
    <div>
      <SecondaryNavbar {...primaryHierarchyProps} />
      <TertiaryNavbar {...secondaryHierarchyProps} />
      <div className="bg-gradient-to-l from-[#088723] to-[#021a07] pb-72">
        <SecondaryMastHead
          title="Handouts"
          description={description}
          titles={secondaryHierarchyProps.titles}
          titleColor="text-[#c2ffbf]"
          buttonsColor="bg-outreachBg"
          path={secondaryHierarchyProps.path}
          marginBetweenButtons="mt-4"
        />
        <div id="handouts list" className="ml-20">
          <DocumentTwo
            title="Airborne & Solid Waste Emissions"
            fileName="doc-696"
            description="Part of our presentation on incineration (prior to inceneration closure) Part of our presentation on incineration (prior to inceneration closure) Part of our presentation on incineration (prior to inceneration closure)"
            fileLabel={true}
          />
          <DocumentTwo
            title="Education Session Presentation"
            fileName="doc-699"
            description="Part of our current education session presentation.  It is a set in the middle of our packet, but toward the front end."
            fileLabel={true}
          />
          <DocumentTwo
            title="Heavy Molded / Extruded Products"
            fileName="doc-37"
            description="Made from unrecyclable plastics, rubbers and composites reclaimed from solid waste or from landfill excavation."
            fileLabel={true}
          />
          <DocumentTwo
            title=""
            fileName="doc-308"
            description=""
            fileLabel={true}
          />
          <DocumentTwo
            title=""
            fileName="doc-319"
            description=""
            fileLabel={true}
          />
          <DocumentTwo
            title=""
            fileName="doc-693"
            description=""
            fileLabel={true}
          />
          <DocumentTwo
            title=""
            fileName="doc-694"
            description=""
            fileLabel={true}
          />
          <DocumentTwo
            title=""
            fileName="doc-697"
            description=""
            fileLabel={true}
          />
          <DocumentTwo
            title=""
            fileName="doc-698"
            description=""
            fileLabel={true}
          />
          <DocumentTwo
            title=""
            fileName="doc-202"
            description=""
            fileLabel={true}
          />
        </div>
      </div>
    </div>
  );
}
