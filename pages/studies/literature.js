import React, { useState } from "react";

import AnchorLink from "@/components/AnchorLink";
import HyperLink from "@/components/HyperLink";
import SecondaryNavbar from "@/components/SecondaryNavbar";
import FragmentIdentifierNavbar from "@/components/FragmentIdentifierNavbar";
import { navbarProps } from "@/pages/studies";

export const hierarchyProps = {
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
      <div className="bg-gradient-to-l from-[#948e22] to-[#1a1906] pb-16 text-zinc-300">
        <SecondaryNavbar {...navbarProps} />
        <FragmentIdentifierNavbar {...hierarchyProps} />

        <div
          id="title-and-text-box"
          className="m-11 rounded-6xl bg-neutral-950 p-8"
        >
          <div className="pt-serif-700 my-4 py-4 text-center text-6xl italic text-[#fcffbf]">
            Literature
          </div>
          <div id="reports" className="mx-4 mb-24 pt-4">
            <div className="mb-2 mt-2 border-b-2 border-zinc-300 pb-1 text-4xl font-bold">
              Reports
            </div>
            <div className="text-2xl">
              <div className="mb-8">
                Robin F. Ingenthron, Director of Recycling Programs, Division of
                Solid Waste Management, and Willa S. Kuh, Director,
                Massachusetts Department of Environmental Protection,{" "}
                <i>
                  <HyperLink
                    text="Value Added by Recycling Industries in Massachusetts"
                    link="https://archives.lib.state.ma.us/server/api/core/bitstreams/69e179b4-0ea5-4e88-905a-45049d472677/content"
                  />
                </i>
                , July 27, 1992
              </div>

              <div className="mb-8">
                Tellus Institute with Sound Resource Management Group, Inc.,{" "}
                <i>
                  <HyperLink
                    text="More Jobs, Less Pollution: Growing the Recycling Economy in the U.S."
                    link="https://www.tellus.org/pub/More%20Jobs,%20Less%20Pollution%20-%20Growing%20the%20Recycling%20Economy%20in%20the%20US.pdf"
                  />
                </i>
                , c. 2009. 64 pages. Clients: BlueGreen Alliance, Teamsters,
                Service Employees International Union (SEIU), Natural Resources
                Defense Council (NRDC), Recycling Works, and Global Alliance for
                Incinerator Alternatives (GAIA)
              </div>
            </div>
          </div>

          <div id="papers" className="mx-4 mb-24 pt-4">
            <div className="mb-2 mt-2 border-b-2 border-zinc-300 pb-1 text-4xl font-bold">
              Papers
            </div>
            <div className="text-2xl">
              <div className="mb-8">
                Human Space Program, 2021.{" "}
                <i>
                  <AnchorLink
                    text="Orbital Debris Threatens the Peaceful Use of Space"
                    link="https://medium.com/@humanspaceprogram/orbital-debris-threatens-the-peaceful-use-of-space-bd6fc987df0b"
                  />
                </i>
              </div>
            </div>
          </div>

          <div id="periodicals" className="mx-4 mb-24 pt-4">
            <div className="mb-2 mt-2 border-b-2 border-zinc-300 pb-1 text-4xl font-bold">
              Periodicals
            </div>
            <div className="text-2xl">
              <div className="periodical-section mb-12">
                <div className="section-title">
                  <AnchorLink
                    text="BioCycle CONNECT"
                    link="https://www.biocycle.net/"
                  />
                </div>
                <div className="ml-12">Specialty: Composting</div>
              </div>

              <div className="periodical-section mb-12">
                <div className="section-title">
                  <AnchorLink
                    text="Waste Dive"
                    link="https://www.wastedive.com/"
                  />
                </div>

                <div className="ml-12">Specialty: Solid Waste</div>
              </div>

              <div className="periodical-section mb-12">
                <div className="section-title">
                  <AnchorLink
                    text="Recycling Today"
                    link="https://www.recyclingtoday.com/"
                  />
                </div>
                <div className="ml-12">Specialty: Recycling</div>
              </div>

              <div className="periodical-section mb-12">
                <div className="section-title">
                  <AnchorLink
                    text="Waste360 Recycling and Organics Weekly"
                    link="https://www.waste360.com/organics"
                  />
                </div>
                <div className="ml-12">Specialty: Material Recovery</div>
              </div>

              <div className="periodical-section mb-12">
                <div className="section-title">
                  <AnchorLink
                    text="Construction & Demolition Recycling"
                    link="https://www.cdrecycler.com/"
                  />
                </div>
                <div className="ml-12">Specialty: Demolition</div>
              </div>

              <div className="periodical-section mb-12">
                <div className="section-title">
                  <AnchorLink
                    text="Waste Today"
                    link="http://wastetodaymagazine.com"
                  />
                </div>
                <div className="ml-12">Specialty: Disposal</div>
              </div>

              <div className="periodical-section mb-12">
                <div className="section-title">
                  <AnchorLink
                    text="Waste360 Daily Wire"
                    link="https://www.waste360.com"
                  />
                </div>

                <div className="ml-12">Specialty: Landfilling</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
