import SecondaryNavbar from "@/components/SecondaryNavbar";
import TertiaryNavbar from "@/components/TertiaryNavbar";
import FragmentIdentifierNavbar from "@/components/FragmentIdentifierNavbar";
import { navbarProps } from "@/pages/outreach";
import { anchorlinkNavbarProps } from "@/pages/outreach/submissions";

export const thisNavbarProps = {
  bgColor: "bg-outreachBg",
  titles: ["U.S. EPA", "Tennessee", "Maine", "Metro Nashville/Davidson County"],
  path: "/outreach/submissions/regulatory",
};

export default function Regulatory() {
  return (
    <div>
      <SecondaryNavbar {...navbarProps} />
      <TertiaryNavbar {...anchorlinkNavbarProps} />
      <FragmentIdentifierNavbar {...thisNavbarProps} />
      <div className="bg-gradient-to-l from-[#088723] to-[#021a07] pb-72">
        <div className="pt-serif-700 p-8 text-center text-7xl italic text-[#c2ffbf]">
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
          className="m-4 p-4 text-2xl text-zinc-200 opacity-70"
        >
          <div id="u.s.-epa" className="my-4 mb-20 px-4 py-4">
            <div className="standard-font-1 mb-2 mt-2 border-b-2 border-zinc-200 text-4xl">
              U.S. EPA
            </div>
            <div className="w-full">
              <table className="m-4">
                <tbody>
                  <tr id="row-1">
                    <td className="column-1 w-full whitespace-normal pb-4 align-top">
                      Incinerator Air Pollution Control
                    </td>
                    <td className="column-2 w-full whitespace-normal pb-4 align-top">
                      3 pages
                    </td>
                  </tr>
                  <tr id="row-2">
                    <td className="column-1 pb-4 pr-3 align-top">
                      Mercury-containing Lamp Handling
                    </td>
                    <td className="column-2 whitespace-nowrap pb-4 pr-3 align-top">
                      2 pages
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div id="tennessee" className="my-4 mb-20 px-4 py-4">
            <div className="standard-font-1 mb-2 mt-2 border-b-2 border-zinc-200 text-4xl">
              Tennessee
            </div>
            <div className="w-full">
              <table className="m-4">
                <tbody>
                  <tr id="row-1">
                    <td className="column-1 w-full whitespace-normal pb-4 align-top">
                      1991 Legislation
                    </td>
                    <td className="column-2 w-full whitespace-normal pb-4 align-top">
                      3 pages
                    </td>
                  </tr>
                  <tr id="row-2">
                    <td className="column-1 pb-4 pr-3 align-top">
                      Ash Landfilling
                    </td>
                    <td className="column-2 whitespace-nowrap pb-4 pr-3 align-top">
                      1 page
                    </td>
                  </tr>
                  <tr id="row-3">
                    <td className="column-1 pb-4 pr-3 align-top">
                      Landfilling
                    </td>
                    <td className="column-2 whitespace-nowrap pb-4 pr-3 align-top">
                      3 pages
                    </td>
                  </tr>
                  <tr id="row-4">
                    <td className="column-1 pb-4 pr-3 align-top">Composting</td>
                    <td className="column-2 whitespace-nowrap pb-4 pr-3 align-top">
                      26 pages + others&apos; comments
                    </td>
                  </tr>
                  <tr id="row-5">
                    <td className="column-1 pb-4 pr-3 align-top">
                      Ash Treatment
                    </td>
                    <td className="column-2 whitespace-nowrap pb-4 pr-3 align-top">
                      8 pages + hundreds of pages after 7/96
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div id="maine" className="my-4 mb-20 px-4 py-4">
            <div className="standard-font-1 mb-2 mt-2 border-b-2 border-zinc-200 text-4xl">
              Maine &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              8 pages
            </div>
          </div>

          <div
            id="metro-nashville/davidson-county"
            className="my-4 mb-20 px-4 py-4"
          >
            <div className="standard-font-1 mb-2 mt-2 border-b-2 border-zinc-200 text-4xl">
              Metro Nashville/Davidson County
            </div>
            <div className="w-full">
              <table className="m-4">
                <tbody>
                  <tr id="row-1">
                    <td className="column-1 w-full whitespace-normal pb-4 align-top">
                      Medical Waste Incinerators
                    </td>
                    <td className="column-2 w-full whitespace-normal pb-4 align-top">
                      1 page
                    </td>
                  </tr>
                  <tr id="row-2">
                    <td className="column-1 pb-4 pr-3 align-top">
                      210 tpd Incinerator
                    </td>
                    <td className="column-2 whitespace-nowrap pb-4 pr-3 align-top">
                      7 pages
                    </td>
                  </tr>
                  <tr id="row-3">
                    <td className="column-1 pb-4 pr-3 align-top">
                      400 tpd Incinerator Expansion
                    </td>
                    <td className="column-2 whitespace-nowrap pb-4 pr-3 align-top">
                      12 pages
                    </td>
                  </tr>
                  <tr id="row-4">
                    <td className="column-1 pb-4 pr-3 align-top">
                      Incinerator Emissions
                    </td>
                    <td className="column-2 whitespace-nowrap pb-4 pr-3 align-top">
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
