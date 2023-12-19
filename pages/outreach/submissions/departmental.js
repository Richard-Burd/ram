import SecondaryNavbar from "@/components/SecondaryNavbar";
import TertiaryNavbar from "@/components/TertiaryNavbar";
import FragmentIdentifierNavbar from "@/components/FragmentIdentifierNavbar";
import { navbarProps } from "@/pages/outreach";
import { hierarchyProps } from "@/pages/outreach/submissions";

export const thisNavbarProps = {
  bgColor: "bg-outreachBg",
  titles: [
    "Massachusetts",
    "Metro Nashville",
    "Los Angeles, CA",
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
      <TertiaryNavbar {...hierarchyProps} />
      <FragmentIdentifierNavbar {...thisNavbarProps} />
      <div className="bg-gradient-to-l from-[#088723] to-[#021a07] pb-72">
        <div className="pt-serif-700 p-8 text-center text-7xl italic text-[#c2ffbf]">
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
          className="m-4 p-4 text-2xl text-zinc-200 opacity-70"
        >
          <div id="massachusetts" className="my-4 mb-20 px-4 py-4">
            <div className="standard-font-1 mb-2 mt-2 border-b-2 border-zinc-200 text-4xl">
              Massachusetts{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              4 pages
            </div>
          </div>

          <div id="metro-nashville" className="my-4 mb-20 px-4 py-4">
            <div className="standard-font-1 mb-2 mt-2 border-b-2 border-zinc-200 text-4xl">
              Metro Nashville/Davidson County
            </div>
            <div className="w-full">
              <table className="m-4">
                <tbody>
                  <tr id="row-1">
                    <td className="column-1 w-full whitespace-normal pb-4 align-top">
                      Yard Waste Collection
                    </td>
                    <td className="column-2 w-full whitespace-normal pb-4 align-top">
                      1 page
                    </td>
                  </tr>
                  <tr id="row-2">
                    <td className="column-1 pb-4 pr-3 align-top">
                      Home Composting Bins
                    </td>
                    <td className="column-2 whitespace-nowrap pb-4 pr-3 align-top">
                      2 pages
                    </td>
                  </tr>
                  <tr id="row-3">
                    <td className="column-1 pb-4 pr-3 align-top">
                      Wet/Dry Pilot
                    </td>
                    <td className="column-2 whitespace-nowrap pb-4 pr-3 align-top">
                      4 pages
                    </td>
                  </tr>
                  <tr id="row-4">
                    <td className="column-1 pb-4 pr-3 align-top">
                      District Energy Fuels
                    </td>
                    <td className="column-2 whitespace-nowrap pb-4 pr-3 align-top">
                      2 pages
                    </td>
                  </tr>
                  <tr id="row-4">
                    <td className="column-1 pb-4 pr-3 align-top">Consulting</td>
                    <td className="column-2 whitespace-nowrap pb-4 pr-3 align-top">
                      3 pages
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div id="los-angeles,-ca" className="my-4 mb-20 px-4 py-4">
            <div className="standard-font-1 mb-2 mt-2 border-b-2 border-zinc-200 text-4xl">
              Los Angeles, California
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1 page
            </div>
          </div>

          <div id="boards" className="my-4 mb-20 px-4 py-4">
            <div className="standard-font-1 mb-2 mt-2 border-b-2 border-zinc-200 text-4xl">
              Boards
            </div>
            <div className="w-full">
              <table className="m-4">
                <tbody>
                  <tr id="row-1">
                    <td className="column-1 w-full whitespace-normal pb-4 align-top">
                      Tennessee Solid Waste Disposal Control
                    </td>
                    <td className="column-2 w-full whitespace-normal pb-4 align-top">
                      2 + 1 pages
                    </td>
                  </tr>
                  <tr id="row-2">
                    <td className="column-1 pb-4 pr-3 align-top">
                      Davison Co. Solid Waste Region
                    </td>
                    <td className="column-2 whitespace-nowrap pb-4 pr-3 align-top">
                      10 pages &nbsp;&nbsp;&nbsp;&nbsp;
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div id="committee" className="my-4 mb-20 px-4 py-4">
            <div className="standard-font-1 mb-2 mt-2 border-b-2 border-zinc-200 text-4xl">
              Committee
            </div>
            <div className="w-full">
              <table className="m-4">
                <tbody>
                  <tr id="row-1">
                    <td className="column-1 w-full whitespace-normal pb-4 align-top">
                      Curbside Recycling Bidding and Alternatives
                    </td>
                    <td className="column-2 w-full whitespace-normal pb-4 align-top">
                      5 pages
                    </td>
                  </tr>
                  <tr id="row-2">
                    <td className="column-1 pb-4 pr-3 align-top">
                      Report to Mayor
                    </td>
                    <td className="column-2 whitespace-nowrap pb-4 pr-3 align-top">
                      5 pages
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div id="legislative" className="my-4 mb-20 px-4 py-4">
            <div className="standard-font-1 mb-2 mt-2 border-b-2 border-zinc-200 text-4xl">
              Legislative
            </div>
            <div className="w-full">
              <table className="m-4">
                <tbody>
                  <tr id="row-1">
                    <td className="column-1 w-full whitespace-normal pb-4 align-top">
                      Cedar Rapids, Iowa
                    </td>
                    <td className="column-2 w-full whitespace-normal pb-4 align-top">
                      2 pages
                    </td>
                  </tr>
                  <tr id="row-2">
                    <td className="column-1 pb-4 pr-3 align-top">
                      Metro Nashville/Davidson Co., Clerk
                    </td>
                    <td className="column-2 whitespace-nowrap pb-4 pr-3 align-top">
                      9 pages + responses
                    </td>
                  </tr>
                  <tr id="row-3">
                    <td className="column-1 pb-4 pr-3 align-top">
                      Metro Council, Nashville/Davidson Co.
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
