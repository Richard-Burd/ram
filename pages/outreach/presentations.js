import SecondaryNavbar from "@/components/SecondaryNavbar";
import TertiaryNavbar from "@/components/TertiaryNavbar";
import SecondaryMastHead from "@/components/SecondaryMasthead";
import DocumentTwo from "@/components/DocumentTwo";
import { primaryHierarchyProps } from "@/pages/outreach";

export const secondaryHierarchyProps = {
  bgColor: "bg-outreachBg",
  titles: [
    "Basic Education Session Packet",
    "Invitations for Education Sessions",
    "Education Session Packet On Incineration",
    "Invitation to Wayne Arndt Presentation",
  ],
  path: "/outreach/presentations",
};

const description = (
  <div>
    <p>...comming soon! This page is under construction.</p>
  </div>
);

export default function Presentations() {
  return (
    <div>
      <SecondaryNavbar {...primaryHierarchyProps} />
      <TertiaryNavbar {...secondaryHierarchyProps} />
      <div className="bg-gradient-to-l from-[#088723] to-[#021a07] pb-72">
        <SecondaryMastHead
          title="Presentations"
          description={description}
          titles={secondaryHierarchyProps.titles}
          titleColor="text-[#c2ffbf]"
          buttonsColor="bg-outreachBg"
          path={secondaryHierarchyProps.path}
          marginBetweenButtons="mt-4"
        />

        <div id="documents-list" className="ml-20">
          <DocumentTwo
            title="Education Session Presentation"
            fileName="doc-699"
            description=""
            fileLabel={true}
          />
          <DocumentTwo
            title="Additional Education Session Packet (Involves Incineration)"
            fileName="doc-704"
            description="This includes figs 8, 9, 10, 16, 17, 17.1, 26, 27, 29.1, 29.2, and 33.1-33.4."
            fileLabel={true}
          />
        </div>
      </div>
    </div>
  );
}
