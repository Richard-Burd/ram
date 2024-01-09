import SecondaryNavbar from "@/components/SecondaryNavbar";
import TertiaryNavbar from "@/components/TertiaryNavbar";
import FragmentIdentifierNavbar from "@/components/FragmentIdentifierNavbar";
import { primaryHierarchyProps } from "@/pages/outreach";
import { secondaryHierarchyProps } from "@/pages/outreach/submissions";

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
      <div className="bg-gradient-to-l from-[#088723] to-[#021a07] pb-72">
        <SecondaryNavbar {...primaryHierarchyProps} />
        <TertiaryNavbar {...secondaryHierarchyProps} />
        <FragmentIdentifierNavbar {...thisNavbarProps} />
        <div
          id="title-and-text-box"
          className="m-11 rounded-6xl bg-neutral-950 p-8"
        >
          <div className="pt-serif-700 p-8 text-center text-7xl italic text-[#c2ffbf]">
            Legislative
          </div>
          <div
            id="comming-soon-placeholder"
            className="m-4 p-4 text-2xl text-zinc-200"
          >
            ...comming soon! This page is under construction.
          </div>

          <div
            id="cedar-rapids,-iowa"
            className="mx-8 mb-24 pt-4 text-zinc-200"
          >
            <div className="mb-2 mt-2 border-b-2 border-zinc-300 pb-1 text-4xl font-bold">
              Cedar Rapids, Iowa
            </div>
            <div className="text-2xl">
              <p className="mb-8">
                Phosphate treatment of incinerator ash and field performance of
                resulting aggregate product. Submitted to the Mayor and City
                Council. 2 pages, July 1994.
              </p>
            </div>
          </div>

          <div
            id="metro-nashville/davidson-county,-clerk"
            className="mx-8 mb-24 pt-4 text-zinc-200"
          >
            <div className="mb-2 mt-2 border-b-2 border-zinc-300 pb-1 text-4xl font-bold">
              Metro Nashville/Davidson County, Clerk
            </div>
            <div className="text-2xl">
              <p className="mb-8">
                Complaints against 7 lobbyists pertaining to registration law
                compliance. Submitted to the Clerk's Office, Metropolitan
                Government of Nashville and Davidson County, Tennessee. 9 pages,
                plus responses, February 1995.
              </p>
            </div>
          </div>

          <div
            id="metro-council,-nashville/davidson-county"
            className="mx-8 mb-24 pt-4 text-zinc-200"
          >
            <div className="mb-2 mt-2 border-b-2 border-zinc-300 pb-1 text-4xl font-bold">
              Metro Council, Nashville/Davidson County
            </div>
            <div className="text-2xl">
              <p className="mb-8">
                A Municipal Solid Waste Management Strategy for Davidson County.
                Submitted to the Metropolitan Council of Nashville and Davidson
                County, Tennessee (Metro Council). 6 pages, July 1989.
              </p>
              <p className="mb-8">
                <i>Comprehensive Disposal Program Outline.</i> Included
                diversion and unit costs for elements. Submitted to the Metro
                Council. 3 pages, September 1989.
              </p>
              <p className="mb-8">
                Draft of legislation to fund the assemblage of a comprehensive
                county solid waste plan. Submitted to the Metro Council. 4
                pages, July 1990
              </p>
              <p className="mb-8">
                Draft of legislation to further restrict and record use of
                phosphate-treated incinerator ash product. Submitted to the
                Metro Council. 2 pages, October 1993.
              </p>
              <p className="mb-8">
                Summary of 4 public hearing addresses on the Davidson County
                Region's proposed 10-year solid waste plan. Submitted to the
                Metro Council. 3 pages, January 1994.
              </p>
              <p className="mb-8">
                Data needed to evaluate conversion of Metro's WTE incinerator to
                a natural gas-fired cogeneration plant. Submitted to the Metro
                Council. 2 pages, May 1994.
              </p>
              <p className="mb-8">
                Drafts and explanations of legislation to fund the assemblage of
                a proposal for a full pilot wet/dry reuse/recycling/composting
                plan for residential, commercial, and institutional sectors.
                Submitted to the Metro Council. 6 pages total, November 1995,
                February 1996, and April 1996.
              </p>
              <p className="mb-8">
                Information needed to draft legislation to obtain co-collection
                comparative data. Submitted to the Metro Council. 1 page, June
                1996.
              </p>
              <p className="mb-8">
                Top 10 concerns on solid waste issue. Response to request.
                Submitted to Durward Hall, Chair, Ad Hoc Committee on Solid
                Waste, Metro Council. 4 pages, October 1997.
              </p>
              <p className="mb-8">
                Alternatives to proposed Metro Council legislation involving
                tipping fees and curbside recycling. Submitted to coalition
                members. 1 page, April 1998.
              </p>
            </div>
          </div>
        </div>

        {/* <div
          id="items-list"
          className="m-4 p-4 text-2xl text-zinc-200 opacity-70"
        >
          <div className="w-full">
            <table className="m-4">
              <tbody>
                <tr id="cedar-rapids,-iowa">
                  <td className="column-1 w-full whitespace-normal pb-4 align-top">
                    Cedar Rapids, Iowa
                  </td>
                  <td className="column-2 w-full whitespace-normal pb-4 align-top">
                    2 pages
                  </td>
                </tr>
                <tr id="metro-nashville/davidson-county,-clerk">
                  <td className="column-1 pb-12 pr-3 align-top">
                    Metro Nashville/Davidson County, Clerk
                  </td>
                  <td className="column-2 whitespace-nowrap pb-4 pr-3 align-top">
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
                  <td className="column-1 w-full whitespace-normal pb-4 align-top">
                    Strategy
                  </td>
                  <td className="column-2 w-full whitespace-normal pb-4 align-top">
                    6 pages
                  </td>
                </tr>
                <tr id="row-2">
                  <td className="column-1 pb-4 pr-3 align-top">Outline</td>
                  <td className="column-2 whitespace-nowrap pb-4 pr-3 align-top">
                    3 pages
                  </td>
                </tr>
                <tr id="row-3">
                  <td className="column-1 pb-4 pr-3 align-top">Plan</td>
                  <td className="column-2 whitespace-nowrap pb-4 pr-3 align-top">
                    4 pages
                  </td>
                </tr>
                <tr id="row-4">
                  <td className="column-1 pb-4 pr-3 align-top">Ash</td>
                  <td className="column-2 whitespace-nowrap pb-4 pr-3 align-top">
                    2 pages
                  </td>
                </tr>
                <tr id="row-5">
                  <td className="column-1 pb-4 pr-3 align-top">10-yr. Plan</td>
                  <td className="column-2 whitespace-nowrap pb-4 pr-3 align-top">
                    3 pages
                  </td>
                </tr>
                <tr id="row-6">
                  <td className="column-1 pb-4 pr-3 align-top">Incinerator</td>
                  <td className="column-2 whitespace-nowrap pb-4 pr-3 align-top">
                    2 pages
                  </td>
                </tr>
                <tr id="row-7">
                  <td className="column-1 pb-4 pr-3 align-top">
                    Wet/Dry Pilot
                  </td>
                  <td className="column-2 whitespace-nowrap pb-4 pr-3 align-top">
                    6 pages
                  </td>
                </tr>
                <tr id="row-7">
                  <td className="column-1 pb-4 pr-3 align-top">
                    Co-Collection
                  </td>
                  <td className="column-2 whitespace-nowrap pb-4 pr-3 align-top">
                    1 page
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> */}
      </div>
    </div>
  );
}
