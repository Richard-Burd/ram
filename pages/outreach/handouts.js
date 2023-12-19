import SecondaryNavbar from "@/components/SecondaryNavbar";
import TertiaryNavbar from "@/components/TertiaryNavbar";
import SecondaryMastHead from "@/components/SecondaryMasthead";
import { navbarProps } from "@/pages/outreach";

export const anchorlinkNavbarProps = {
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
      <SecondaryNavbar {...navbarProps} />
      <TertiaryNavbar {...anchorlinkNavbarProps} />
      <div className="bg-gradient-to-l from-[#088723] to-[#021a07] pb-72">
        <SecondaryMastHead
          title="Handouts"
          description={description}
          titles={anchorlinkNavbarProps.titles}
          titleColor="text-[#c2ffbf]"
          buttonsColor="bg-outreachBg"
          path={anchorlinkNavbarProps.path}
          marginBetweenButtons="mt-4"
        />
      </div>
    </div>
  );
}
