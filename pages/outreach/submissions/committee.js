import SecondaryNavbar from "@/components/SecondaryNavbar";
import TertiaryNavbar from "@/components/TertiaryNavbar";
import FragmentIdentifierNavbar from "@/components/FragmentIdentifierNavbar";
import { primaryHierarchyProps } from "@/pages/outreach";
import { secondaryHierarchyProps } from "@/pages/outreach/submissions";

export const thisNavbarProps = {
  bgColor: "bg-outreachBg",
  titles: [
    "Report to the Mayor",
    "Curbside Recycling Bidding and Alternatives",
  ],
  path: "/outreach/submissions/committee",
};

export default function Committee() {
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
            Committee
          </div>
          <div
            id="comming-soon-placeholder"
            className="m-4 p-4 text-2xl text-zinc-200"
          >
            ...comming soon! This page is under construction.
          </div>

          <div
            id="report-to-the-mayor"
            className="mx-8 mb-24 pt-4 text-zinc-200"
          >
            <div className="mb-2 mt-2 border-b-2 border-zinc-300 pb-1 text-4xl font-bold">
              Report to the Mayor
            </div>
            <div className="text-2xl">
              <p className="mb-8">
                Preliminary report to the Mayor. Submitted to the Mayor of the
                Metropolitan Government of Nashville and Davidson County,
                Tennessee (Metro). 5 pages, June 1989.
              </p>
            </div>
          </div>

          <div
            id="curbside-recycling-bidding-and-alternatives"
            className="mx-8 mb-24 pt-4 text-zinc-200"
          >
            <div className="mb-2 mt-2 border-b-2 border-zinc-300 pb-1 text-4xl font-bold">
              Curbside Recycling Bidding and Alternatives
            </div>
            <div className="text-2xl">
              <p className="mb-8">
                Draft and Final{" "}
                <i>
                  Invitation to Bid and Request for Qualifications and
                  Evaluation of Bids
                </i>{" "}
                for residential curbside recycling services. Referenced 33
                errors. Included alternatives and a 20-year cost/impact
                comparison of curbside recycling, incinerator expansion, and 4
                bids for mixed-waste processing. Submitted to the Metro
                (Mayor's) Recycling Committee. 5 pages total, October 1989 and
                August 1990.
              </p>
            </div>
          </div>

          {/* <div
          id="items-list"
          className="m-4 p-4 text-2xl text-zinc-200 opacity-70"
        >
          <div className="w-full">
            <table className="m-4">
              <tbody>
                <tr id="row-1">
                  <td className="column-1 w-full whitespace-normal pb-4 align-top">
                    Report to Mayor
                  </td>
                  <td className="column-2 w-full whitespace-normal pb-4 align-top">
                    5 pages
                  </td>
                </tr>
                <tr id="row-2">
                  <td className="column-1 pb-4 pr-3 align-top">
                    Curbside Recycling Bidding and Alternatives
                  </td>
                  <td className="column-2 whitespace-nowrap pb-4 pr-3 align-top">
                    5 pages
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
}
