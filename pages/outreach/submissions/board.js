import SecondaryNavbar from "@/components/SecondaryNavbar";
import TertiaryNavbar from "@/components/TertiaryNavbar";
import FragmentIdentifierNavbar from "@/components/FragmentIdentifierNavbar";
import { navbarProps } from "@/pages/outreach";
import { hyperlinkNavbarProps } from "@/pages/outreach/submissions";

export const thisNavbarProps = {
  bgColor: "bg-outreachBg",
  titles: [
    "Tennessee Solid Waste Disposal Control",
    "Davison County Solid Waste Region",
  ],
  path: "/outreach/submissions/board",
};

export default function Board() {
  return (
    <div>
      <SecondaryNavbar {...navbarProps} />
      <TertiaryNavbar {...hyperlinkNavbarProps} />
      <FragmentIdentifierNavbar {...thisNavbarProps} />
      <div className="bg-gradient-to-l from-[#088723] to-[#021a07] pb-72">
        <div className="p-8 text-center text-7xl pt-serif-700 text-[#c2ffbf] italic">
          Board
        </div>
        <div
          id="comming-soon-placeholder"
          className="m-4 p-4 text-2xl text-zinc-200"
        >
          ...comming soon! This page is under construction.
        </div>
        <div
          id="items-list"
          className="m-4 p-4 text-2xl opacity-70 text-zinc-200"
        >
          <table className="m-4">
            <tbody>
              <tr id="row-1">
                <td className="column-1 align-top pb-4 w-full whitespace-normal">
                  Tennessee Solid Waste Disposal Control
                </td>
                <td className="column-2 align-top pb-4 w-full whitespace-normal">
                  2 + 1 pages
                </td>
              </tr>
              <tr id="row-2">
                <td className="column-1 pr-3 align-top pb-4">
                  Davison County Solid Waste Region
                </td>
                <td className="column-2 pr-3 align-top pb-4 whitespace-nowrap">
                  10 pages &nbsp;&nbsp;&nbsp;&nbsp;
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
