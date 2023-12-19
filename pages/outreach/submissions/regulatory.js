import SecondaryNavbar from "@/components/SecondaryNavbar";
import TertiaryNavbar from "@/components/TertiaryNavbar";
import FragmentIdentifierNavbar from "@/components/FragmentIdentifierNavbar";
import { navbarProps } from "@/pages/outreach";
import { hyperlinkNavbarProps } from "@/pages/outreach/submissions";

export const thisNavbarProps = {
  bgColor: "bg-outreachBg",
  titles: ["U.S. EPA", "Tennessee", "Maine", "Metro Nashville/Davidson County"],
  path: "/outreach/submissions/regulatory",
};

export default function Regulatory() {
  return (
    <div>
      <SecondaryNavbar {...navbarProps} />
      <TertiaryNavbar {...hyperlinkNavbarProps} />
      <FragmentIdentifierNavbar {...thisNavbarProps} />
      <div className="bg-gradient-to-l from-[#088723] to-[#021a07] pb-72">
        <div className="p-8 text-center text-7xl pt-serif-700 text-[#c2ffbf] italic">
          Regulatory
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
          <div id="u.s.-epa" className="my-4 px-4 py-4 mb-20">
            <div className="text-4xl standard-font-1 border-b-2 border-zinc-200 mt-2 mb-2">
              U.S. EPA
            </div>
            <div className="w-full">
              <table className="m-4">
                <tbody>
                  <tr id="row-1">
                    <td className="column-1 align-top pb-4 w-full whitespace-normal">
                      Incinerator Air Pollution Control
                    </td>
                    <td className="column-2 align-top pb-4 w-full whitespace-normal">
                      3 pages
                    </td>
                  </tr>
                  <tr id="row-2">
                    <td className="column-1 pr-3 align-top pb-4">
                      Mercury-containing Lamp Handling
                    </td>
                    <td className="column-2 pr-3 align-top pb-4 whitespace-nowrap">
                      2 pages
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div id="tennessee" className="my-4 px-4 py-4 mb-20">
            <div className="text-4xl standard-font-1 border-b-2 border-zinc-200 mt-2 mb-2">
              Tennessee
            </div>
            <div className="w-full">
              <table className="m-4">
                <tbody>
                  <tr id="row-1">
                    <td className="column-1 align-top pb-4 w-full whitespace-normal">
                      1991 Legislation
                    </td>
                    <td className="column-2 align-top pb-4 w-full whitespace-normal">
                      3 pages
                    </td>
                  </tr>
                  <tr id="row-2">
                    <td className="column-1 pr-3 align-top pb-4">
                      Ash Landfilling
                    </td>
                    <td className="column-2 pr-3 align-top pb-4 whitespace-nowrap">
                      1 page
                    </td>
                  </tr>
                  <tr id="row-3">
                    <td className="column-1 pr-3 align-top pb-4">
                      Landfilling
                    </td>
                    <td className="column-2 pr-3 align-top pb-4 whitespace-nowrap">
                      3 pages
                    </td>
                  </tr>
                  <tr id="row-4">
                    <td className="column-1 pr-3 align-top pb-4">Composting</td>
                    <td className="column-2 pr-3 align-top pb-4 whitespace-nowrap">
                      26 pages + others&apos; comments
                    </td>
                  </tr>
                  <tr id="row-5">
                    <td className="column-1 pr-3 align-top pb-4">
                      Ash Treatment
                    </td>
                    <td className="column-2 pr-3 align-top pb-4 whitespace-nowrap">
                      8 pages + hundreds of pages after 7/96
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div id="maine" className="my-4 px-4 py-4 mb-20">
            <div className="text-4xl standard-font-1 border-b-2 border-zinc-200 mt-2 mb-2">
              Maine &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              8 pages
            </div>
          </div>

          <div
            id="metro-nashville/davidson-county"
            className="my-4 px-4 py-4 mb-20"
          >
            <div className="text-4xl standard-font-1 border-b-2 border-zinc-200 mt-2 mb-2">
              Metro Nashville/Davidson County
            </div>
            <div className="w-full">
              <table className="m-4">
                <tbody>
                  <tr id="row-1">
                    <td className="column-1 align-top pb-4 w-full whitespace-normal">
                      Medical Waste Incinerators
                    </td>
                    <td className="column-2 align-top pb-4 w-full whitespace-normal">
                      1 page
                    </td>
                  </tr>
                  <tr id="row-2">
                    <td className="column-1 pr-3 align-top pb-4">
                      210 tpd Incinerator
                    </td>
                    <td className="column-2 pr-3 align-top pb-4 whitespace-nowrap">
                      7 pages
                    </td>
                  </tr>
                  <tr id="row-3">
                    <td className="column-1 pr-3 align-top pb-4">
                      400 tpd Incinerator Expansion
                    </td>
                    <td className="column-2 pr-3 align-top pb-4 whitespace-nowrap">
                      12 pages
                    </td>
                  </tr>
                  <tr id="row-4">
                    <td className="column-1 pr-3 align-top pb-4">
                      Incinerator Emissions
                    </td>
                    <td className="column-2 pr-3 align-top pb-4 whitespace-nowrap">
                      11 pages
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
