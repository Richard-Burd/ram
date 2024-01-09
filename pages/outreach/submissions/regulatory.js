import SecondaryNavbar from "@/components/SecondaryNavbar";
import TertiaryNavbar from "@/components/TertiaryNavbar";
import FragmentIdentifierNavbar from "@/components/FragmentIdentifierNavbar";
import { primaryHierarchyProps } from "@/pages/outreach";
import { secondaryHierarchyProps } from "@/pages/outreach/submissions";

export const thisNavbarProps = {
  bgColor: "bg-outreachBg",
  titles: ["U.S. EPA", "Tennessee", "Maine", "Metro Nashville/Davidson County"],
  path: "/outreach/submissions/regulatory",
};

export default function Regulatory() {
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
            Regulatory
          </div>
          <div
            id="comming-soon-placeholder"
            className="m-4 p-4 text-2xl text-zinc-200"
          >
            ...comming soon! This page is under construction.
          </div>

          <div id="u.s.-epa" className="mx-8 mb-24 pt-4 text-zinc-200">
            <div className="mb-2 mt-2 border-b-2 border-zinc-300 pb-1 text-4xl font-bold">
              U.S. EPA
            </div>
            <div className="text-2xl">
              <p className="mb-8">
                Proposed emissions guidelines for municipal waste combustors.
                Submitted to the U.S. EPA, Washington, DC. 3 pages, November
                1994.
              </p>
              <p className="mb-8">
                Proposed modification of the Hazardous Waste Management System
                for mercury-containing lamps. Submitted to the U.S. EPA,
                Washington, DC. 2 pages, November 1994.
              </p>
            </div>
          </div>

          <div id="tennessee" className="mx-8 mb-24 pt-4 text-zinc-200">
            <div className="mb-2 mt-2 border-b-2 border-zinc-300 pb-1 text-4xl font-bold">
              Tennessee
            </div>
            <div className="text-2xl">
              <p className="mb-8">
                Draft regulatory amendments to the 1991 Solid Waste Management
                Act statutes. Submitted to the Tennessee Dept. of Environment
                and Conservation (TDEC) Div. of Solid Waste Assistance. 3 pages
                total, December 1992 and January 1993.
              </p>
              <p className="mb-8">
                Omissions in proposed rule changes pertaining to exclusion of
                municipal waste incinerator ash. Submitted to TDEC, Div. of
                Superfund. 1 page, November 1994.
              </p>
              <p className="mb-8">
                Proposed landfilling regulations. Submitted to TDEC, Div. of
                Solid Waste Management (DSWM). 3 pages total, November 1988 and
                March 1995.
              </p>
              <p className="mb-8">
                Proposed composting regulations. Submitted to TDEC, DSWM. 26
                pages total, plus others' comments, January 1994, June 1994,
                September 1994, February 1995, March 1995, April 1995, and
                November 1995.
              </p>
              <p className="mb-8">
                Proposed addition of permitted uses for phosphate treated
                incinerator ash product. Submitted to TDEC, DSWM. 8 pages total,
                December 1994 and June 1996, plus hundreds of pages after July
                1996.
              </p>
            </div>
          </div>

          <div id="maine" className="mx-8 mb-24 pt-4 text-zinc-200">
            <div className="mb-2 mt-2 border-b-2 border-zinc-300 pb-1 text-4xl font-bold">
              Maine
            </div>
            <div className="text-2xl">
              <p className="mb-8">
                Draft Order -- Application of Beneficial Use of Special Waste.
                applied for by American Ash Recycling Corp. of New England.
                Submitted to the State of Maine, Dept. of Environmental
                Protection, Bureau of Remediation and Waste Management. 8 pages,
                July 1996.
              </p>
              <p className="mb-8">
                Proposed modification of the Hazardous Waste Management System
                for mercury-containing lamps. Submitted to the U.S. EPA,
                Washington, DC. 2 pages, November 1994.
              </p>
            </div>
          </div>

          <div
            id="metro-nashville/davidson-county"
            className="mx-8 mb-24 pt-4 text-zinc-200"
          >
            <div className="mb-2 mt-2 border-b-2 border-zinc-300 pb-1 text-4xl font-bold">
              Metro Nashville/Davidson County
            </div>
            <div className="text-2xl">
              <p className="mb-8">
                Proposed construction permits for two regional infectious waste
                incinerators. Submitted to the Metropolitan Government of
                Nashville and Davidson County, Dept. of Health (Metro Health
                Dept.). 1 page, June 1989.
              </p>
              <p className="mb-8">
                Appeal of construction permit for a 210 ton per day municipal
                waste combustor issued to Nashville Resource Recovery, LTD.
                Submitted to the Metro Health Dept. 7 pages total, November 1988
                and September 1989.
              </p>
              <p className="mb-8">
                Proposed 400 ton per day expansion of the Nashville Thermal
                Transfer Corp. municipal waste combustor. Submitted to the Metro
                Health Dept. 12 pages total, February 1989, April 1989, July
                1989, and August 1990.
              </p>
              <p className="mb-8">
                Proposed emissions guidelines for municipal waste combustors.
                Submitted to the Metro Health Dept. 11 pages total, October 1994
                and February 1996.
              </p>
            </div>
          </div>

          {/* <div
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
        </div> */}
        </div>
      </div>
    </div>
  );
}
