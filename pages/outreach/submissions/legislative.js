import SecondaryNavbar from "@/components/SecondaryNavbar";
import TertiaryNavbar from "@/components/TertiaryNavbar";
import FragmentIdentifierNavbar from "@/components/FragmentIdentifierNavbar";
import { navbarProps } from "@/pages/outreach";
import { anchorlinkNavbarProps } from "@/pages/outreach/submissions";

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
      <TertiaryNavbar {...anchorlinkNavbarProps} />
      <FragmentIdentifierNavbar {...thisNavbarProps} />
      <div className="bg-gradient-to-l from-[#088723] to-[#021a07] pb-72">
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
        </div>
      </div>
    </div>
  );
}
