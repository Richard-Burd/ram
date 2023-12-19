import SecondaryNavbar from "@/components/SecondaryNavbar";
import TertiaryNavbar from "@/components/TertiaryNavbar";
import FragmentIdentifierNavbar from "@/components/FragmentIdentifierNavbar";
import { primaryHierarchyProps } from "@/pages/outreach";
import { secondaryHierarchyProps } from "@/pages/outreach/submissions";

export const thisNavbarProps = {
  bgColor: "bg-outreachBg",
  titles: ["Nashville Thermal Transfer Corp.", "Governor's Office"],
  path: "/outreach/submissions/general",
};

export default function General() {
  return (
    <div>
      <SecondaryNavbar {...primaryHierarchyProps} />
      <TertiaryNavbar {...secondaryHierarchyProps} />
      <FragmentIdentifierNavbar {...thisNavbarProps} />
      <div className="bg-gradient-to-l from-[#088723] to-[#021a07] pb-72">
        <div className="pt-serif-700 p-8 text-center text-7xl italic text-[#c2ffbf]">
          General
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
            <li className="mb-4">
              A 2-page (8 1/2 x 14) 5-scenario economic comparison of options
              related to incineration, 10/93. To see what it looks like, see a
              reduced size version on p. 18 of RAM's second newsletter.
            </li>
            <li className="mb-4">
              A 7-page letter to Mark Rogers (Governor's Office), dated
              10/10/94.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
