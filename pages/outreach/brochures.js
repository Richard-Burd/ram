import SecondaryNavbar from "@/components/SecondaryNavbar";
import BiographyNavbar from "@/components/BiographyNavbar";
import { navbarProps } from "@/pages/outreach";

import Brochure from "@/components/Brochure";

export const bioNavbarProps = {
  // bgColor: "bg-[#ff8938]",
  bgColor: "bg-outreachBg",
  titles: ["Printable Brochures", "Brochure Exhibits"],
  path: "/outreach/brochures",
};

export default function Brochures() {
  return (
    <div>
      <SecondaryNavbar {...navbarProps} />
      <BiographyNavbar {...bioNavbarProps} />
      <div className="bg-gradient-to-l from-[#088723] to-[#021a07] pb-72">
        <div className="p-8 text-center text-7xl pt-serif-700 text-[#c2ffbf] italic">
          Brochures
        </div>
        <div id="printable-brochures">
          <div className="text-4xl pt-serif-700 italic tracking-wider opacity-95 text-zinc-100 border-b-2 border-zinc-100 mt-2 mx-6">
            Printable Brochures
          </div>
          <div className="flex ml-1">
            <Brochure
              title="RAM's Tri-Fold Brochure"
              fileName="fig-3"
              description="This handout is intended to be printed front & back so as to be folded into three segments"
              fileLabel={false}
            />
            <Brochure
              title="RAM's Bi-Fold Brochure"
              fileName="fig-4"
              description="This handout is intended to be printed front & back so as to be folded into two segments"
              fileLabel={false}
            />
          </div>
          <div id="brochure-exhibits">
            <div className="text-4xl pt-serif-700 italic tracking-wider opacity-95 text-zinc-100 border-b-2 border-zinc-100 mt-2 mx-6 pt-32">
              Brochure Exhibits
            </div>
            <div className="text-2xl text-zinc-950 m-6 p-6 bg-[#9e9e9e] bg-opacity-70 rounded-xl">
              <div id="text-bloc-1" className="mb-24">
                <p className="mb-4">
                  Everyone contributes to the generation of waste that, as a
                  society, we must find responsible means to handle. For much of
                  recent history, waste has been seen as having an endpoint as
                  it is primarily taken away and buried in landfills. Recent
                  recycling efforts locally and nationwide have managed to
                  divert only - a surprisingly small percentage of materials
                  from this dead end destination. Recognizing that the waste
                  Stream is full of valuable materials that have an economic
                  value, a closed loop system facilitating recovery, reuse, and
                  re-manufacture of most of our waste is possible. For this to
                  become a reality, there must be alignment of public desire,
                  government will, and economic feasibility.
                </p>
                <p className="italic mb-4">
                  “If you’ve got a customer that wants something, it’s going to
                  help. If you have the government, the regulators, that want
                  something, it’s going to help. And if the company can make
                  money meeting those customer needs or complying with the
                  government, ...it’s going to happen.”
                </p>
                <p className="mb-4">
                  --David P. Steiner, CEO, Waste Management, Inc.
                </p>
              </div>
              <div id="text-bloc-2" className="mb-24">
                <p className="mb-4">
                  <i>RAM</i> showed that loose, treated incinerator ash, used as
                  construction fill, would make harmful contents more available
                  to soil life than AAR’s submitted health risk assessment
                  modeling had assumed.
                </p>
                <p className="mb-4">
                  <i>RAM</i> has promoted wet/dry methods, and has worked hard
                  to explain these in various ways.
                </p>
                <p className="mb-4">
                  Davidson County began simple wood waste diversion in late
                  1992, and voluntarily closed its incinerator in 2002 (both
                  originally proposed by <i>RAM&apos;s</i> John van der Harst),
                  and has been happy with the results ...
                </p>
                <p className="mb-4">
                  ... but to-date, Davidson County has not yet tried wet/dry
                  methods, and its chosen recycling methods have failed to
                  achieve promised/desired results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
