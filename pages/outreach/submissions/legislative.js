import SecondaryNavbar from "@/components/SecondaryNavbar";
import HyperLinkNavbar from "@/components/HyperLinkNavbar";
import AnchorLinkNavbar from "@/components/AnchorLinkNavbar";
import { navbarProps } from "@/pages/outreach";
import { hyperlinkNavbarProps } from "@/pages/outreach/submissions";

export const thisNavbarProps = {
  bgColor: "bg-outreachBg",
  titles: [
    "Cedar Rapids, Iowa",
    "Metro Nashville/Davidson County, Clerk",
    "Metro Council, Nashville/Davidson County",
  ],
  path: "/outreach/submissions/legislative",
};

export default function Legislative() {
  return (
    <div>
      <SecondaryNavbar {...navbarProps} />
      <HyperLinkNavbar {...hyperlinkNavbarProps} />
      <AnchorLinkNavbar {...thisNavbarProps} />
      <div className="bg-gradient-to-l from-[#088723] to-[#021a07] pb-72">
        <div className="p-8 text-center text-7xl pt-serif-700 text-[#c2ffbf] italic">
          Legislative
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
          <div className="w-full">
            <table className="m-4">
              <tbody>
                <tr id="cedar-rapids,-iowa">
                  <td className="column-1 align-top pb-4 w-full whitespace-normal">
                    Cedar Rapids, Iowa
                  </td>
                  <td className="column-2 align-top pb-4 w-full whitespace-normal">
                    2 pages
                  </td>
                </tr>
                <tr id="metro-nashville/davidson-county,-clerk">
                  <td className="column-1 pr-3 align-top pb-12">
                    Metro Nashville/Davidson County, Clerk
                  </td>
                  <td className="column-2 pr-3 align-top pb-4 whitespace-nowrap">
                    9 pages + responses
                  </td>
                </tr>
                <tr id="metro-council,-nashville/davidson-county">
                  <td className="column-1 pr-3 align-top">
                    <div className="pt-8">
                      Metro Council, Nashville/Davidson County
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="m-4 ml-16">
              <tbody>
                <tr id="row-1">
                  <td className="column-1 align-top pb-4 w-full whitespace-normal">
                    Strategy
                  </td>
                  <td className="column-2 align-top pb-4 w-full whitespace-normal">
                    6 pages
                  </td>
                </tr>
                <tr id="row-2">
                  <td className="column-1 pr-3 align-top pb-4">Outline</td>
                  <td className="column-2 pr-3 align-top pb-4 whitespace-nowrap">
                    3 pages
                  </td>
                </tr>
                <tr id="row-3">
                  <td className="column-1 pr-3 align-top pb-4">Plan</td>
                  <td className="column-2 pr-3 align-top pb-4 whitespace-nowrap">
                    4 pages
                  </td>
                </tr>
                <tr id="row-4">
                  <td className="column-1 pr-3 align-top pb-4">Ash</td>
                  <td className="column-2 pr-3 align-top pb-4 whitespace-nowrap">
                    2 pages
                  </td>
                </tr>
                <tr id="row-5">
                  <td className="column-1 pr-3 align-top pb-4">10-yr. Plan</td>
                  <td className="column-2 pr-3 align-top pb-4 whitespace-nowrap">
                    3 pages
                  </td>
                </tr>
                <tr id="row-6">
                  <td className="column-1 pr-3 align-top pb-4">Incinerator</td>
                  <td className="column-2 pr-3 align-top pb-4 whitespace-nowrap">
                    2 pages
                  </td>
                </tr>
                <tr id="row-7">
                  <td className="column-1 pr-3 align-top pb-4">
                    Wet/Dry Pilot
                  </td>
                  <td className="column-2 pr-3 align-top pb-4 whitespace-nowrap">
                    6 pages
                  </td>
                </tr>
                <tr id="row-7">
                  <td className="column-1 pr-3 align-top pb-4">
                    Co-Collection
                  </td>
                  <td className="column-2 pr-3 align-top pb-4 whitespace-nowrap">
                    1 page
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
