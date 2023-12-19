import React, { useState } from "react";

import AnchorLink from "@/components/AnchorLink";
import SecondaryNavbar from "@/components/SecondaryNavbar";
import FragmentIdentifierNavbar from "@/components/FragmentIdentifierNavbar";
import BrochureFig from "@/components/BrochureFig";
import { navbarProps } from "@/pages/studies";

export const hierarchyProps = {
  bgColor: "bg-studiesBg",
  titles: [
    "Hands-On",
    "Waste Stream Analysis",
    "Wet/Dry System Pilots",
    "Mixed-Waste Processing",
    "Case Studies",
  ],
  path: "/studies/pilots",
};

export default function Pilots() {
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
            Pilots
          </div>

          <div id="hands-on" className="mx-4 mb-24 pt-4">
            <div className="mb-2 mt-2 border-b-2 border-zinc-300 pb-1 text-4xl font-bold">
              Hands-On vs. Just Talk
            </div>
            <div className="text-2xl">
              <div className="mb-8">
                One valid criticism of environmental groups by industry is that
                they just have no feel for the subject, compared with those who
                deal with it for a living. Having hands-on experience is
                critical to countering that otherwise justified criticism.
              </div>
            </div>
          </div>

          <div id="waste-stream-analysis" className="mx-4 pt-4">
            <div className="mb-2 mt-2 border-b-2 border-zinc-300 pb-1 text-4xl font-bold">
              Waste Stream Analysis
            </div>
            <div className="text-2xl">
              <div className="mb-8">
                Future <i>RAM</i>sters Sandy Loyd, Connie Collopy, and John van
                der Harst collected bags of compacted and uncompacted waste to
                analyze for recoverability potential. The examination took place
                at a meeting of another group dedicated to the subject. Those
                who thought such groups should only talk about it were not happy
                to see this activity at a nearby table. Connie loved it. Quite a
                contrast. It foretold a future split between the talkers and the
                doers.
              </div>
              <div className="mb-8">Two major principles emerged:</div>
            </div>
          </div>

          <div
            id="waste-stream-analysis-list"
            className="mx-4 my-4 rounded-2xl bg-yellow-700 bg-opacity-30 px-2 py-4 text-2xl"
          >
            <ol className="mx-12 list-outside list-decimal">
              <li id="1" className="mb-4">
                Surprises await. E.g. When one bag was opened and dumped, what
                came out first was a car-engine's quantity of oil, followed by
                the styrofoam cooler that had contained it. Wow. Yeah. Pyrolysis
                definitely has a role in market options. And household hazardous
                waste drop-off options. Maybe HHW collection options as well.
              </li>
              <li id="2" className="pb-2 pt-3">
                Not all glass breaks during compaction, but when it does, it
                explodes into lots of little shards that can embed into other
                materials, like paper. If collection and processing were
                grouped, in a franchise award, there would be an internal
                incentive to compact a bit less, to enhance market value of
                recovered materials.
              </li>
            </ol>
          </div>

          <div id="wet/dry-system-pilots" className="mx-4 pt-4">
            <div className="mb-2 mt-20 border-b-2 border-zinc-300 pb-1 text-4xl font-bold">
              Wet/Dry System Pilots
            </div>
            <div className="text-2xl">
              <div className="mb-8">
                Wet/dry systems are the most cost-effective approach for many
                waste streams. As such, the disposal industry is more eager to
                attack these than most other alternatives. That makes it more
                important to gain hands-on experience for these, in order to:
              </div>
            </div>
          </div>

          <div
            id="waste-stream-analysis-list"
            className="mx-4 my-4 rounded-2xl bg-yellow-700 bg-opacity-30 px-2 py-4 text-2xl"
          >
            <ol className="mx-12 list-outside list-decimal">
              <li id="1" className="mb-4">
                Counter unexperienced claims with experienced ones,
              </li>
              <li id="2" className="pb-2 pt-3">
                Gain knowledge that will allow realistic expectations to be held
                and met,
              </li>
              <li id="3" className="pb-2 pt-3">
                Try out various education and signage options, some of which are
                illustrated below, and
              </li>
              <div className="image mb-8 mt-4">
                <BrochureFig fileName="buckets.jpg" />
              </div>
              <li id="4" className="pb-2 pt-3">
                Experiment with various source separation and processing
                options.
              </li>
            </ol>
          </div>

          <div id="mixed-waste-processing" className="mx-4 pt-4">
            <div className="mb-2 mt-20 border-b-2 border-zinc-300 pb-1 text-4xl font-bold">
              Mixed-Waste Processing
            </div>
            <div className="text-2xl">
              <div className="mb-8">
                When processing is set up for wet/dry streams, often mixed
                wastes are available to try recovering materials from, for
                comparative stats.
              </div>
            </div>
          </div>

          <div id="case-studies" className="mx-4 pt-4">
            <div className="mb-2 mt-20 border-b-2 border-zinc-300 pb-1 text-4xl font-bold">
              Case Studies
            </div>
            <div className="text-2xl">
              <div className="mb-8">
                The following reflect recovery levels from various pilots that{" "}
                <i>RAM</i> members have participated in:
              </div>

              <div className="image mb-8 mt-4">
                <BrochureFig fileName="recovery.jpg" borderColor="#665c49" />
              </div>

              <div className="mb-8">
                What is not recovered in these pilots, generally would be
                recovered if markets developed for zero-waste schemes were
                available. See{" "}
                <AnchorLink text="Methodology" link="/studies/methodology" />{" "}
                for these. For more detailed descriptions of these pilots, there
                are articles about them in both <i>RAM</i> newsletters. See{" "}
                <AnchorLink text="Newsletters" link="/outreach/newsletters" />,{" "}
                for these.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
