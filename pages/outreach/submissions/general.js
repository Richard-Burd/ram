import SecondaryNavbar from "@/components/SecondaryNavbar";
import TertiaryNavbar from "@/components/TertiaryNavbar";
import FragmentIdentifierNavbar from "@/components/FragmentIdentifierNavbar";
import { primaryHierarchyProps } from "@/pages/outreach";
import { secondaryHierarchyProps } from "@/pages/outreach/submissions";

export const thisNavbarProps = {
  bgColor: "bg-outreachBg",
  titles: [
    "Nashville Thermal Transfer Corp.",
    "Governor's Office, State of Tennessee",
    "Support",
    "Research",
  ],
  path: "/outreach/submissions/general",
};

export default function General() {
  return (
    <div>
      <SecondaryNavbar {...primaryHierarchyProps} />
      <TertiaryNavbar {...secondaryHierarchyProps} />
      <FragmentIdentifierNavbar {...thisNavbarProps} />
      <div className="bg-gradient-to-l from-[#088723] to-[#021a07] pb-72">
        <div className="pt-serif-700 p-8 text-center text-7xl italic text-[#c2ffbf]">
          General
        </div>

        <div
          id="comming-soon-placeholder"
          className="m-4 p-4 text-2xl text-zinc-200"
        >
          ...comming soon! This page is under construction.
        </div>

        <div
          id="nashville-thermal-transfer-corp."
          className="mx-8 mb-24 pt-4 text-zinc-200"
        >
          <div className="mb-2 mt-2 border-b-2 border-zinc-300 pb-1 text-4xl font-bold">
            Nashville Thermal Transfer Corp.
          </div>
          <div className="text-2xl">
            <p className="mb-8">
              A countywide cost/benefit analysis of converting a WTE incinerator
              managed by the Nashville Thermal Transfer Corp. to a natural
              gas-fired cogeneration system, and using all refuse otherwise
              burned to produce solid products or compost. Included maximum
              subsidies necessary to assure local development of all industries
              in question, and that the products of these industries would be
              cost-competitive. Widely distributed. 2 pages (8 1/2" x 14"),
              November 1993.
            </p>
          </div>
        </div>

        <div
          id="governor's-office,-state-of-tennessee"
          className="mx-8 mb-24 pt-4 text-zinc-200"
        >
          <div className="mb-2 mt-2 border-b-2 border-zinc-300 pb-1 text-4xl font-bold">
            Governor's Office, State of Tennessee
          </div>
          <div className="text-2xl">
            <p className="mb-8">
              A funding and procedural blueprint for eliminating nearly all
              solid waste disposal on a statewide basis, in response to a
              request by an incoming-to-be gubernatorial staff person. Submitted
              to Mark Rogers. 7 pages, October 1994.
            </p>
          </div>
        </div>

        <div id="support" className="mx-8 mb-24 pt-4 text-zinc-200">
          <div className="mb-2 mt-2 border-b-2 border-zinc-300 pb-1 text-4xl font-bold">
            Support
          </div>
          <div className="text-2xl">
            <p className="mb-8">
              11 persons deserving support. Response to request. Submitted to
              Harold L. Stokes, Redford, Michigan. 1 page, January 1998.
            </p>
          </div>
        </div>

        <div id="research" className="mx-8 mb-24 pt-4 text-zinc-200">
          <div className="mb-2 mt-2 border-b-2 border-zinc-300 pb-1 text-4xl font-bold">
            Research
          </div>
          <div className="text-2xl">
            <p className="mb-8">
              Additional research needed. Response to Air, Soil, and Water
              Pollution: Environmental Health Implications, town meeting
              presentation at Vanderbilt University's Peabody College. Submitted
              to Kenneth Olden, Director, National Institute of Environmental
              Health Sciences, c/o Rocio Harrelson, Center in Molecular
              Toxicology, Vanderbilt University School of Medicine. 2 pages,
              November 1998.
            </p>
            <p className="mb-8">
              Survey. Information & Communication Technologies Effect on
              Grassroots Groups. Supplied contact information for numerous
              groups. These later proved comparatively highly responsive.
              Submitted to Dawn R. Vignola, The George Washington University,
              Political Science Dept. 9 pages, 1999.
            </p>
          </div>
        </div>

        <div
          id="items-list"
          className="m-4 p-4 text-2xl text-zinc-200 opacity-70"
        >
          <ul className="m-4 list-outside list-square p-4">
            <li className="mb-4">
              A 2-page (8 1/2 x 14) 5-scenario economic comparison of options
              related to incineration, 10/93. To see what it looks like, see a
              reduced size version on p. 18 of RAM's second newsletter.
            </li>
            <li className="mb-4">
              A 7-page letter to Mark Rogers (Governor's Office), dated
              10/10/94.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
