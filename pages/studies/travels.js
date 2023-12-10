import React, { useState } from "react";

import AnchorLink from "@/components/AnchorLink";
import SecondaryNavbar from "@/components/SecondaryNavbar";
import AnchorLinkNavbar from "@/components/AnchorLinkNavbar";
import { navbarProps } from "@/pages/studies";

export const hyperlinkNavbarProps = {
  bgColor: "bg-studiesBg",
  titles: ["Reports", "Papers", "Periodicals"],
  path: "/studies/literature",
};

export default function Literature() {
  // manages the initial size of the figures
  const [width, setWidth] = useState("50%"); // Initial width

  // manages the initial size of the figures
  const toggleSize = () => {
    setWidth(width === "50%" ? "100%" : "50%");
  };
  return (
    <div>
      <div className="bg-gradient-to-l from-[#948e22] to-[#1a1906] text-zinc-300 pb-16">
        <SecondaryNavbar {...navbarProps} />
        <AnchorLinkNavbar {...hyperlinkNavbarProps} />

        <div
          id="title-and-text-box"
          className="bg-neutral-950 m-11 p-8 rounded-6xl"
        >
          <div className="my-4 py-4 text-center text-6xl pt-serif-700 text-[#fcffbf] italic">
            Travels
          </div>

          <div id="value" className="mx-4 pt-4 mb-24">
            <div className="border-b-2 border-zinc-300 mt-2 pb-1 text-3xl font-bold mb-2">
              Value
            </div>
            <div className="text-2xl">
              <div className="mb-8">
                Seeing how solid waste facilities operate in person causes
                observations to be made, and questions to arise, that never
                could have been anticipated beforehand based upon what could
                have been read. Generally, those working are too busy to write
                about it. Some are not inclined to write.
              </div>
            </div>
          </div>

          <div id="scheduling-tours" className="mx-4 pt-4 mb-24">
            <div className="border-b-2 border-zinc-300 mt-2 pb-1 text-3xl font-bold mb-2">
              Scheduling Tours
            </div>
            <div className="text-2xl">
              <div className="mb-8">
                Ideas about what facilities to tour have come from many sources.
                Industry periodicals, ads in those, regulators, consultants,
                presenters or tablers at conferences, department staff, and even
                facility staff have all informed RAM along the way. It never
                hurts to ask people's opinions of what facilities they think are
                worth touring. They could mention some off-the-beaten-path gem
                that you never would have learned about otherwise. Trip
                itineraries typically allowed time to insert facility tours
                between scheduled appointments. The record was five tours in one
                day -- the last being self-guided after hours.
              </div>
            </div>
          </div>

          <div id="remote-logistics" className="mx-4 pt-4 mb-24">
            <div className="border-b-2 border-zinc-300 mt-2 pb-1 text-3xl font-bold mb-2">
              Remote Logistics
            </div>
            <div className="text-2xl">
              <div className="mb-8">
                Since the Southern U.S. has had relatively few notable
                facilities compared with other regions, <i>RAM</i> members have
                had to plan several long trips to see these. Use of cars has
                been helpful, as many facilities have had samples of products or
                compost available, which require someplace to collect and
                transport these. As <i>RAM&apos;s</i> John van der Harst has
                never owned a car, and acquired time for <i>RAM</i> by living
                frugally, it was his good fortune to have Sandy Loyd be so
                generous with his car and willingness to travel economically.
                John would plan the itinerary. John and Sandy generally camped
                out along the way. In inclement weather, lodging of choice would
                often be old motels found along U.S. highways. Others providing
                car transportation to tours included Pixie Lewis and Karen
                Cisler. Near facilities, waste vehicles could generally be
                followed to our destination.
              </div>
            </div>
          </div>

          <div id="some-long-trips" className="mx-4 pt-4 mb-24">
            <div className="border-b-2 border-zinc-300 mt-2 pb-1 text-3xl font-bold mb-2">
              Some Long Trips
            </div>
            <div className="text-2xl">
              <div className="mb-8">
                Facilities toured in the following states, provinces, counties,
                or cities:
              </div>
              <table>
                <tbody>
                  <tr className="table-row">
                    <td className="align-top pr-3 min-w-[90px]">1989</td>
                    <td className="description align-top">
                      New York, Connecticut, Rhode Island, Massachusetts, and
                      New Jersey (5 facilities total + conference, in 10 days)
                    </td>
                  </tr>

                  <br></br>

                  <tr className="table-row">
                    <td className="align-top pr-3 min-w-[90px]">1989</td>
                    <td className="description align-top">
                      California (Bay Area) and Washington (34 facilities total,
                      in 15 days)
                    </td>
                  </tr>

                  <br></br>

                  <tr className="table-row">
                    <td className="align-top pr-3 min-w-[90px]">1990</td>
                    <td className="description align-top">
                      Cook County (Crestwood), Illinois
                    </td>
                  </tr>

                  <br></br>

                  <tr className="table-row">
                    <td className="align-top pr-3 min-w-[90px]">1990</td>
                    <td className="description align-top">
                      Gibson County (Humboldt), Tennessee
                    </td>
                  </tr>

                  <br></br>

                  <tr className="table-row">
                    <td className="align-top pr-3 min-w-[90px]">1990</td>
                    <td className="description align-top">
                      Robertson County (Springfield), Tennessee
                    </td>
                  </tr>

                  <br></br>

                  <tr className="table-row">
                    <td className="align-top pr-3 min-w-[90px]">1990</td>
                    <td className="description align-top">
                      Lewis County (Lewisburg), Tennessee
                    </td>
                  </tr>

                  <br></br>

                  <tr className="table-row">
                    <td className="align-top pr-3 min-w-[90px]">1990</td>
                    <td className="description align-top">
                      Williamson County (Franklin), Tennessee
                    </td>
                  </tr>

                  <br></br>

                  <tr className="table-row">
                    <td className="align-top pr-3 min-w-[90px]">1991</td>
                    <td className="description align-top">
                      Florida and Georgia (25 facilities total, in 8 days)
                    </td>
                  </tr>

                  <br></br>

                  <tr className="table-row">
                    <td className="align-top pr-3 min-w-[90px]">1991</td>
                    <td className="description align-top">
                      Florida and Georgia (25 facilities total, in 8 days)
                    </td>
                  </tr>
                  <br></br>

                  <tr className="table-row">
                    <td className="align-top pr-3 min-w-[90px]">1991</td>
                    <td className="description align-top">
                      South Dakota, Iowa, Minnesota, Wisconsin, Illinois,
                      Ontario, Canada, New York, and Ohio (25 facilities total,
                      in 14 days)
                    </td>
                  </tr>
                  <br></br>

                  <tr className="table-row">
                    <td className="align-top pr-3 min-w-[90px]">1992</td>
                    <td className="description align-top">
                      Fairfax County (Lorton), Virginia
                    </td>
                  </tr>
                  <br></br>

                  <tr className="table-row">
                    <td className="align-top pr-3 min-w-[90px]">1992</td>
                    <td className="description align-top">
                      Sumner County (Gallatin), Tennessee
                    </td>
                  </tr>
                  <br></br>

                  <tr className="table-row">
                    <td className="align-top pr-3 min-w-[90px]">1992</td>
                    <td className="description align-top">
                      Windsor, Maine (temporary facility, Common Ground Country
                      Fair)
                    </td>
                  </tr>
                  <br></br>

                  <tr className="table-row">
                    <td className="align-top pr-3 min-w-[90px]">1992</td>
                    <td className="description align-top">
                      Ontario, Canada, Michigan, Ohio, Wisconsin, Minnesota,
                      Nebraska, and Iowa (16 facilities total + conference + 3
                      lectures + 4 interviews, in 17 days)
                    </td>
                  </tr>
                  <br></br>

                  <tr className="table-row">
                    <td className="align-top pr-3 min-w-[90px]">1992 & 1993</td>
                    <td className="description align-top">
                      Sevier County (Sevierville), Tennessee
                    </td>
                  </tr>
                  <br></br>

                  <tr className="table-row">
                    <td className="align-top pr-3 min-w-[90px]">1994</td>
                    <td className="description align-top">
                      Williamson County (Nolensville and Franklin), Tennessee
                    </td>
                  </tr>
                  <br></br>

                  <tr className="table-row">
                    <td className="align-top pr-3 min-w-[90px]">1994</td>
                    <td className="description align-top">
                      Jackson County (Gainesboro), Tennessee
                    </td>
                  </tr>
                  <br></br>

                  <tr className="table-row">
                    <td className="align-top pr-3 min-w-[90px]">1996</td>
                    <td className="description align-top">
                      Michigan and Ontario, Canada (14 facilities total, in 9
                      days)
                    </td>
                  </tr>

                  <br></br>

                  <tr className="table-row">
                    <td className="align-top pr-3 min-w-[90px]">1997</td>
                    <td className="description align-top">
                      Morgan County, Tennessee
                    </td>
                  </tr>
                  <br></br>

                  <tr className="table-row">
                    <td className="align-top pr-3 min-w-[90px]">2000</td>
                    <td className="description align-top">
                      San Jose and Sunnyvale, California
                    </td>
                  </tr>

                  <br></br>

                  <tr className="table-row">
                    <td className="align-top pr-3 min-w-[90px]">2000</td>
                    <td className="description align-top">
                      Wayne County (Livonia), Michigan
                    </td>
                  </tr>

                  <br></br>

                  <tr className="table-row">
                    <td className="align-top pr-3 min-w-[90px]">2004</td>
                    <td className="description align-top">
                      Warren County (McMinnville), Tennessee
                    </td>
                  </tr>

                  <br></br>

                  <tr className="table-row">
                    <td className="align-top pr-3 min-w-[90px]">2011</td>
                    <td className="description align-top">
                      Sevier County (Sevierville), Tennessee
                    </td>
                  </tr>

                  <br></br>

                  <tr className="table-row">
                    <td className="align-top pr-3 min-w-[90px]">2012</td>
                    <td className="description align-top">
                      (Western) Cheatham County, Tennessee
                    </td>
                  </tr>

                  <br></br>

                  <tr className="table-row">
                    <td className="align-top pr-3 min-w-[90px]">2013</td>
                    <td className="description align-top">
                      Rutherford County (LaVergne), Tennessee
                    </td>
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
