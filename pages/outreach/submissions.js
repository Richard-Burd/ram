import SecondaryNavbar from "@/components/SecondaryNavbar";
import TertiaryNavbar from "@/components/TertiaryNavbar";
import SecondaryMastHead from "@/components/SecondaryMasthead";
import { primaryHierarchyProps } from "@/pages/outreach";

export const secondaryHierarchyProps = {
  bgColor: "bg-outreachBg",
  titles: [
    "General",
    "Regulatory",
    "Departmental",
    "Board",
    "Committee",
    "Legislative",
  ],
  path: "/outreach/submissions",
};

const description = (
  <div>
    <p>...comming soon! This page is under construction.</p>
  </div>
);

export default function Submissions() {
  return (
    <div>
      <SecondaryNavbar {...primaryHierarchyProps} />
      <TertiaryNavbar {...secondaryHierarchyProps} />
      <div className="bg-gradient-to-l from-[#088723] to-[#021a07] pb-72">
        <SecondaryMastHead
          title="Submissions"
          description={description}
          titles={secondaryHierarchyProps.titles}
          titleColor="text-[#c2ffbf]"
          buttonsColor="bg-outreachBg"
          path={secondaryHierarchyProps.path}
          marginBetweenButtons="mt-4"
        />
      </div>
    </div>
  );
}
