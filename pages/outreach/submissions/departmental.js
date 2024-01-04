import SecondaryNavbar from "@/components/SecondaryNavbar";
import TertiaryNavbar from "@/components/TertiaryNavbar";
import FragmentIdentifierNavbar from "@/components/FragmentIdentifierNavbar";
import { primaryHierarchyProps } from "@/pages/outreach";
import { secondaryHierarchyProps } from "@/pages/outreach/submissions";

export const thisNavbarProps = {
  bgColor: "bg-outreachBg",
  titles: [
    "Massachusetts",
    "Metro Nashville",
    "Los Angeles, CA",
    // "Boards",
    // "Committee",
    // "Legislative",
  ],
  path: "/outreach/submissions/departmental",
};

export default function Departmental() {
  return (
    <div>
      <SecondaryNavbar {...primaryHierarchyProps} />
      <TertiaryNavbar {...secondaryHierarchyProps} />
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

        <div id="massachusetts" className="mx-8 mb-24 pt-4 text-zinc-200">
          <div className="mb-2 mt-2 border-b-2 border-zinc-300 pb-1 text-4xl font-bold">
            Massachusetts
          </div>
          <div className="text-2xl">
            <p className="mb-8">
              <i>
                Better Options Abound, a paper on The Compatibility of Recycling
                and Incineration.
              </i>{" "}
              Submitted to the Commonwealth of Massachusetts, Dept. of
              Environmental Protection, Div. of Solid Waste Management, Boston,
              Massachusetts. 4 pages, August 1991.
            </p>
          </div>
        </div>

        <div id="metro-nashville" className="mx-8 mb-24 pt-4 text-zinc-200">
          <div className="mb-2 mt-2 border-b-2 border-zinc-300 pb-1 text-4xl font-bold">
            Metro Nashville/Davidson County
          </div>
          <div className="text-2xl">
            <p className="mb-8">
              Proposal to reclassify residential yard wastes as
              no-longer-collectable matter. Submitted to the Metropolitan
              Government of Nashville and Davidson County, Dept. of Public Works
              (Metro Public Works). 1 page, May 1989.
            </p>
            <p className="mb-8">
              Home composting bins for the Mayor and Department's Environmental
              Engineer, built out of shipping pallets. Delivered. Two bins
              total, August 1989.
            </p>
            <p className="mb-8">
              Feasibility of a pilot wet/dry recycling/composting program.
              Submitted to Metro Public Works. 4 pages, November 1992.
            </p>
            <p className="mb-8">
              Data needed to evaluate conversion of Metro's WTE incinerator to a
              gas-fired cogeneration plant. Submitted to Metro Public Works. 2
              pages, May 1993.
            </p>
            <p className="mb-8">
              Consulting services providable by R. Cave & Associates Engineering
              LTD., Oakville, Ontario. Submitted to Metro Public Works. 3 pages,
              October 1995.
            </p>
            <p className="mb-8">
              Adding cardboard and dropping glass from residential curbside
              recycling, March 1, 1998, by Metro Public Works. Memo submitted to
              interested parties. 4 pages, July 1998.
            </p>
            <p className="mb-8">
              <i>
                Sudden Switch -- Glass-out and cardboard-in for Metro's curbside
                recycling.
              </i>{" "}
              4 pages, undated (but obviously after August 1998, which was the
              last data set displayed).
            </p>
          </div>
        </div>

        <div id="los-angeles,-ca" className="mx-8 mb-24 pt-4 text-zinc-200">
          <div className="mb-2 mt-2 border-b-2 border-zinc-300 pb-1 text-4xl font-bold">
            Los Angeles, California
          </div>
          <div className="text-2xl">
            <p className="mb-8">
              Proposed administrative process for conversion to wet/dry material
              recovery methods. Submitted to the City of Los Angeles,
              California, Bureau of Sanitation, Solid Resources Planning &
              Recycling Div. 1 page, June 1996.
            </p>
          </div>
        </div>

        {/* <div
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
        </div> */}
      </div>
    </div>
  );
}
