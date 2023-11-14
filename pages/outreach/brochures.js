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
                  Landfilling or burning waste causes great damage else- where,
                  way beyond what a landfill or incinerator does. RAM has always
                  advocated methods that eliminate landfilling and incineration.
                </p>
                <p className="mb-4">
                  <i>RAM</i>AM has graphically communicated basic principles
                  that are sustainable.
                </p>
                <p className="mb-4">
                  <i>RAM</i> has described high-tech sorting equipment.
                </p>
                <p className="mb-4">
                  <i>RAM</i> has described low-tech methods too...
                </p>
                <p className="mb-4">
                  <i>RAM</i> has tried a variety of graphic techniques to
                  educate, but ultimately nothing will happen unless people
                  reading these quit sitting on the fence and speak out to their
                  elected government officeholders!
                </p>
              </div>

              <div id="text-bloc-3" className="mb-24">
                <p className="mb-4">
                  When <i>RAM</i> began, Davidson and Sumner Counties
                  incinerated much of their solid waste. <i>RAM&apos;s</i>{" "}
                  efforts to end this included education sessions, which
                  explained the Davidson County system clearly.
                </p>
                <p className="mb-4">
                  <i>RAM</i> presented cost/benefit and emissions | comparisons.
                  Below is one cost graphed and others listed. As the final few
                  years’ totals were added, <i>RAM&apos;s</i> predictions became
                  validated.
                </p>
                <p className="mb-4">
                  RAM has graphically shown realities of pollution from
                  incineration and ash distribution.
                </p>
                <p className="mb-4">
                  Wet/dry pilots <i>RAM</i> participated in never achieved less
                  than 75% recovery rates.
                </p>
                <p className="mb-4">
                  While per-capita growth of waste in the U.S. has finally
                  slowed — largely due to exporting it as manufacturing has been
                  outsourced...
                </p>
                <p className="mb-4">
                  ...Solid waste worldwide is presently projected to double over
                  the next 15 years if nothing is done to change present trends!
                  <i>RAM&apos;s</i> plan to totally eliminate waste is needed
                  now more than ever.
                </p>
                <p className="mb-4">
                  <i>RAM</i> calculated recovery percentages.
                </p>
              </div>

              <div id="text-bloc-4" className="mb-24">
                <p className="mb-4">
                  Davidson County, like so many other governments, chose
                  recycling methods advertised by landfill companies. The damage
                  done has been staggering. <i>RAM</i> has tried many ways to
                  show the magnitude.
                </p>
                <p className="mb-4">
                  In contrast, <i>RAM</i> constructed pilot demonstrations to
                  prove performance of wet/dry methods.
                </p>
                <p className="mb-4">
                  Following a pilot in Sumner County, in late 1993, Davidson
                  County began paying American Ash Recycling. Corp. of TN (AAR)
                  to distribute treated incinerator ash as loose construction
                  fill material. <i>RAM</i> objected. <i>RAM&apos;s</i>{" "}
                  documentation was sought by environmental groups in many
                  states. Tired of this, AAR sued <i>RAM</i> in early 1997. This
                  forced <i>RAM</i> to investigate further. This led to
                  discoveries which ultimately led Davidson County to end both
                  incineration and its use of AAR.
                </p>
                <p className="mb-4">
                  Over this period, notice how as usage violations became known,
                  treated ash shipments slowed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
