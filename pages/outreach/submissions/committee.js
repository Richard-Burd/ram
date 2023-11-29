import SecondaryNavbar from "@/components/SecondaryNavbar";
import TertiaryNavbar from "@/components/TertiaryNavbar";
import { navbarProps } from "@/pages/outreach";
import { bioNavbarProps } from "@/pages/outreach/submissions";

// export const thisNavbarProps = {
//   // bgColor: "bg-[#ff8938]",
//   bgColor: "bg-outreachBg",
//   titles: ["put s.thing here", "put s.thing here also"],
//   path: "/outreach/submissions",
// };

export default function Committee() {
  return (
    <div>
      <SecondaryNavbar {...navbarProps} />
      <TertiaryNavbar {...bioNavbarProps} />
      {/* <TertiaryNavbar {...thisNavbarProps} /> */}
      <div className="bg-gradient-to-l from-[#088723] to-[#021a07] pb-72">
        <div className="p-8 text-center text-7xl pt-serif-700 text-[#c2ffbf] italic">
          Committee
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
      </div>
    </div>
  );
}
