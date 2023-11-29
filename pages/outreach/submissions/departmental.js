import SecondaryNavbar from "@/components/SecondaryNavbar";
import HyperLinkNavbar from "@/components/HyperLinkNavbar";
import AnchorLinkNavbar from "@/components/AnchorLinkNavbar";
import { navbarProps } from "@/pages/outreach";
import { hyperlinkNavbarProps } from "@/pages/outreach/submissions";

export const thisNavbarProps = {
  bgColor: "bg-outreachBg",
  titles: [
    "Massachusetts",
    "Metro Nashville/Davidson County",
    "Los Angeles, California",
    "Boards",
    "Committee",
    "Legislative",
  ],
  path: "/outreach/submissions/departmental",
};

export default function Departmental() {
  return (
    <div>
      <SecondaryNavbar {...navbarProps} />
      <HyperLinkNavbar {...hyperlinkNavbarProps} />
      <AnchorLinkNavbar {...thisNavbarProps} />
      <div className="bg-gradient-to-l from-[#088723] to-[#021a07] pb-72">
        <div className="p-8 text-center text-7xl pt-serif-700 text-[#c2ffbf] italic">
          Departmental
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
          <div id="massachusetts" className="my-4 px-4 py-4 mb-20">
            <div className="text-4xl standard-font-1 border-b-2 border-zinc-200 mt-2 mb-2">
              Massachusetts{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              4 pages
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
                      Yard Waste Collection
                    </td>
                    <td className="column-2 align-top pb-4 w-full whitespace-normal">
                      1 page
                    </td>
                  </tr>
                  <tr id="row-2">
                    <td className="column-1 pr-3 align-top pb-4">
                      Home Composting Bins
                    </td>
                    <td className="column-2 pr-3 align-top pb-4 whitespace-nowrap">
                      2 pages
                    </td>
                  </tr>
                  <tr id="row-3">
                    <td className="column-1 pr-3 align-top pb-4">
                      Wet/Dry Pilot
                    </td>
                    <td className="column-2 pr-3 align-top pb-4 whitespace-nowrap">
                      4 pages
                    </td>
                  </tr>
                  <tr id="row-4">
                    <td className="column-1 pr-3 align-top pb-4">
                      District Energy Fuels
                    </td>
                    <td className="column-2 pr-3 align-top pb-4 whitespace-nowrap">
                      2 pages
                    </td>
                  </tr>
                  <tr id="row-4">
                    <td className="column-1 pr-3 align-top pb-4">Consulting</td>
                    <td className="column-2 pr-3 align-top pb-4 whitespace-nowrap">
                      3 pages
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div id="los-angeles,-california" className="my-4 px-4 py-4 mb-20">
            <div className="text-4xl standard-font-1 border-b-2 border-zinc-200 mt-2 mb-2">
              Los Angeles, California
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1 page
            </div>
          </div>

          <div id="boards" className="my-4 px-4 py-4 mb-20">
            <div className="text-4xl standard-font-1 border-b-2 border-zinc-200 mt-2 mb-2">
              Boards
            </div>
            <div className="w-full">
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

          <div id="committee" className="my-4 px-4 py-4 mb-20">
            <div className="text-4xl standard-font-1 border-b-2 border-zinc-200 mt-2 mb-2">
              Committee
            </div>
            <div className="w-full">
              <table className="m-4">
                <tbody>
                  <tr id="row-1">
                    <td className="column-1 align-top pb-4 w-full whitespace-normal">
                      Curbside Recycling Bidding and Alternatives
                    </td>
                    <td className="column-2 align-top pb-4 w-full whitespace-normal">
                      5 pages
                    </td>
                  </tr>
                  <tr id="row-2">
                    <td className="column-1 pr-3 align-top pb-4">
                      Report to Mayor
                    </td>
                    <td className="column-2 pr-3 align-top pb-4 whitespace-nowrap">
                      5 pages
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div id="legislative" className="my-4 px-4 py-4 mb-20">
            <div className="text-4xl standard-font-1 border-b-2 border-zinc-200 mt-2 mb-2">
              Legislative
            </div>
            <div className="w-full">
              <table className="m-4">
                <tbody>
                  <tr id="row-1">
                    <td className="column-1 align-top pb-4 w-full whitespace-normal">
                      Cedar Rapids, Iowa
                    </td>
                    <td className="column-2 align-top pb-4 w-full whitespace-normal">
                      2 pages
                    </td>
                  </tr>
                  <tr id="row-2">
                    <td className="column-1 pr-3 align-top pb-4">
                      Metro Nashville/Davidson County, Clerk
                    </td>
                    <td className="column-2 pr-3 align-top pb-4 whitespace-nowrap">
                      9 pages + responses
                    </td>
                  </tr>
                  <tr id="row-3">
                    <td className="column-1 pr-3 align-top pb-4">
                      Metro Council, Nashville/Davidson County
                    </td>
                    <table>
                      <tbody></tbody>
                    </table>
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
