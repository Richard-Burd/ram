import React, { useState } from "react";

import AnchorLink from "@/components/AnchorLink";
import SecondaryNavbar from "@/components/SecondaryNavbar";
import AnchorLinkNavbar from "@/components/AnchorLinkNavbar";
import BrochureFig from "@/components/BrochureFig";
import { navbarProps } from "@/pages/studies";

export const hyperlinkNavbarProps = {
  bgColor: "bg-studiesBg",
  titles: ["Zero Waste", "Key Realizations", "Key Must-Haves"],
  path: "/studies/methodology",
};

export default function Methodology() {
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
            Methodology
          </div>

          <div id="zero-waste" className="mx-4 pt-4 mb-24">
            <div className="border-b-2 border-zinc-300 mt-2 pb-1 text-4xl font-bold mb-2">
              Zero Waste
            </div>

            <div className="text-2xl">
              <div className="mb-8">
                Internalization of economic, environmental, and health costs and
                benefits of both material recovery and disposal favor zero
                waste. Therefore, that is what <i>RAM</i> will present here. Why
                anything else?
              </div>
            </div>

            <div className="image mt-4 mb-8">
              <BrochureFig
                id="fig-25"
                fileName="tax-disparity.jpg"
                borderColor="#665c49"
                originalWidth="50%"
              />
            </div>
          </div>

          <div id="key-realizations" className="mx-4 pt-4">
            <div className="border-b-2 border-zinc-300 mt-2 pb-1 text-4xl font-bold mb-2">
              Key Realizations
            </div>

            <div className="text-2xl">
              <div className="mb-8">
                First, most environmental damage from disposal happens during
                virgin resource extraction. Far more. On average, roughly 50
                times more. Not even remotely close. Varies widely by type of
                material. E.g. 1 ton of cell phones contains more gold than 1
                ton of ore mined to extract that same amount of gold. About half
                of all U.S. solid waste is mining processing waste, but much
                mining required for U.S. goods happens outside the U.S.
              </div>

              <div id="fig-2" className="image mt-4 mb-8">
                <BrochureFig
                  fileName="iceberg.jpg"
                  borderColor="#665c49"
                  originalWidth="50%"
                />
              </div>

              <div className="mb-8">
                Second, most economic benefit from recycling comes from
                manufacturing products from recovered materials as feedstock.
                Developing local remanufacturing makes internalizing material
                recovery benefits easier for policymakers to understand, and
                communicate to constituents. Additional costs to recover
                materials are far less than benefits to waste producers&apos;
                bottom lines as a result of economic expansion stemming from
                additional remanufacturing fed by recovered feedstocks.
              </div>

              <div id="fig-23" className="image mt-4 mb-8">
                <BrochureFig
                  fileName="re-manufacture.jpg"
                  borderColor="#665c49"
                  originalWidth="50%"
                />
              </div>

              <div id="fig-24" className="image mt-4 mb-8">
                <BrochureFig
                  fileName="solid-waste-choices.jpg"
                  borderColor="#665c49"
                  originalWidth="50%"
                />
              </div>

              <div id="fig-22" className="image mt-4 mb-8">
                <BrochureFig
                  fileName="jobs.jpg"
                  borderColor="#665c49"
                  originalWidth="50%"
                />
              </div>

              <div className="mb-8">
                Third, typically most, about 2/3, of municipal solid waste (MSW)
                comes from commercial sources. Much of that is construction &
                demolition (C&D) wastes. Both of these are typically far richer
                in recyclable material value, and easier to recover from, than
                residential MSW. Often they are already either wet or dry
                streams, which makes cost-efficient wet/dry material recovery
                techniques easier to apply. In many cases, much larger
                quantities of single commodities are easy to separate at the
                source. Many source-separation practices are done under
                employers' supervision.
              </div>

              <div className="mb-8">
                Fourth and finally, today&apos;s municipalities typically focus
                nearly exclusively on single-family residential wastes. Causes
                for this include:
              </div>

              <div
                id="nothing"
                className="bg-yellow-700 my-4 px-2 py-4 bg-opacity-30 rounded-2xl text-2xl"
              >
                <ol className="list-decimal list-outside mx-12">
                  <li id="1" className="pt-3 pb-2">
                    Disposal companies promote this heavily, to divert attention
                    away from more lucrative disposal of commercial wastes.
                  </li>
                  <li id="2" className="pt-3 pb-2">
                    Many environmental activists fall for this trick because
                    they do not do their homework.
                  </li>
                  <li id="3" className="pt-3 pb-2">
                    Most voters -- who influence officeholders -- live in single
                    family homes.
                  </li>
                  <li id="4" className="pt-3 pb-2">
                    Municipalities often collect MSW from only single family
                    residences.
                  </li>
                  <li id="5" className="pt-3 pb-2">
                    Disposal interests keep the focus on this sector by focusing
                    on gimmicks like "Pay-As-You-Throw" (PAYT), with its endless
                    complications, and preservation of disposal. PAYT tricks
                    citizens and officeholders into thinking the problem can be
                    fixed most through higher participation rates, instead of
                    switching to much higher-yield wet/dry systems. In wet/dry
                    systems, participation boosts quality. Not diversion.
                    Wet/dry systems typically recover both more high-quality
                    materials, and more low-quality materials, than
                    source-separated recycling programs. Recovery via wet/dry
                    systems is only limited by market availability. Markets most
                    typically scarce involve composting, aggregates,
                    heavy-molded/extruded products, and pyrolysis.
                  </li>
                  <div id="fig-28" className="image mt-4 mb-8">
                    <BrochureFig
                      fileName="wet-dry-short.jpg"
                      borderColor="black"
                      originalWidth="50%"
                    />
                  </div>
                </ol>
              </div>
            </div>
          </div>

          <div id="key-must-haves" className="mx-4 pt-4">
            <div className="border-b-2 border-zinc-300 mt-20 pb-1 text-4xl font-bold mb-2">
              Key Must-Haves
            </div>
            <div className="text-2xl">
              <ol className="list-decimal list-outside mx-6">
                <li id="1" className="pt-3 pb-2">
                  All wastes must be processed, even if that only requires
                  quality control.
                </li>
                <li id="2" className="pt-3 pb-2">
                  For adequate capacity, All waste processing facilities must be
                  sized to handle maximum expected inputs over the coming
                  decade, at least.
                </li>
                <li id="3" className="pt-3 pb-2">
                  To avoid downtime, All facilities must be designed
                  sufficiently robustly to handle all types of wastes delivered
                  to them.
                </li>

                <li id="4" className="pt-3 pb-2">
                  <p>
                    Facilities must include, at a minimum, the following
                    (letters match corresponding items on the Zero-Waste page):
                  </p>

                  <div
                    id="nothing"
                    className="bg-yellow-700 my-4 px-2 py-4 bg-opacity-30 rounded-2xl text-2xl"
                  >
                    <ol id="A" className="list-alpha-upper list-outside mx-12">
                      <li className="pt-4 pb-2">
                        Dry waste sorting/recovery facilities, for both MSW and
                        C&D wastes, typically separately, as C&D sorting systems
                        have been developed already as a specialty. Residues
                        like e.g. soiled paper would go to Wet waste
                        composting/anaerobic digestion (B below), and broken
                        glass would go to Aggregates (C below).
                      </li>

                      <li id="B" className="pt-4 pb-2">
                        Wet waste composting/anaerobic digestion facilities.
                        Inorganic residues screened out from the compost would
                        go to Dry waste sorting/recovery facilities (A above),
                        which might send them to C, D, or E below. It is
                        important not to shred on the front end, which can
                        result in inorganics too small to be screened out from
                        compost later. Glass should be screened out for use in
                        aggregates, and not ground up as part of a compost
                        product -- as agricultural markets involving livestock
                        detest a hoof/foot-irritating component.
                      </li>

                      <li id="C" className="pt-4 pb-2">
                        Aggregate sorting/recovery facilities. This would market
                        these to contractors as a substitute for mined gravels.
                      </li>

                      <li id="D" className="pt-4 pb-2">
                        Heavy molded/extruded products facilities, which often
                        create composites out of thermoplastics as binders and
                        other wastes as fillers (e.g. Trex, which combines film
                        plastics with wood), some uses of which are illustrated
                        as examples below,
                      </li>

                      <div id="fig-21" className="image mt-4 mb-8">
                        <BrochureFig
                          fileName="heavy-molded.2.jpg"
                          borderColor="black"
                          originalWidth="50%"
                        />
                      </div>

                      <div id="fig-20" className="image mt-4 mb-8">
                        <BrochureFig
                          fileName="heavy-molded.1.jpg"
                          borderColor="black"
                          originalWidth="50%"
                        />
                      </div>

                      <li id="E" className="pt-4 pb-2">
                        Pyrolysis or other energy/fuels production facilities
                        (e.g. Enerkem, which makes methanol and cellulosic
                        alcohol out of waste) for wastes that can not be dealt
                        with better (higher-value product feedstock) by facility
                        types A-D. This does not include incineration of wastes,
                        as this produces environmentally inferior byproducts.
                        Residues would go to facility types A, C, or D,
                        depending on what they are -- e.g. metals to A, ceramics
                        to C, and residual chars to D for use as fillers.
                      </li>

                      <li id="F" className="pt-4 pb-2">
                        Hazardous waste collection and processing facilities,
                        which emphasize re-use as much as possible. Contractors
                        and individuals can sign waivers and take out discards
                        from others that they can use instead of new products.
                      </li>

                      <li id="G" className="pt-4 pb-2">
                        Another essential component is a contractual requirement
                        that all residues coming from facilities A-F must be
                        part of the feedstock for other facilities A-F. Not
                        disposal.
                      </li>
                    </ol>
                  </div>
                </li>

                <li id="5" className="pt-3 pb-2">
                  <p>Other key must-haves include:</p>

                  <div
                    id="nothing"
                    className="bg-yellow-700 my-4 py-4 bg-opacity-30 rounded-2xl text-2xl"
                  >
                    <ol className="list-alpha-upper-h list-outside mx-8">
                      <li id="H" className="pt-4 pb-2">
                        Successful marketing of all recovered commodities --
                        material recovery is measured in internalized value.
                      </li>

                      <li id="I" className="pt-4 pb-2">
                        Maximizing local market development -- to see results --
                        and be able to incorporate value into internalized
                        disposal fees with a minimum of dispute over valuation.
                      </li>

                      <li id="J" className="pt-4 pb-2">
                        All economic, environmental, and health costs and
                        benefits need to be internalized for both material
                        recovery, and hypothetical disposal. Flow control needs
                        to be assured, economically if possible, to steer all
                        unmanaged wastes to processing facilities. If allowable
                        by the state, disposal tip fees need to incorporate the
                        full internalized cost of disposal for wastes coming
                        from the jurisdiction aiming for zero waste -- to make
                        these far higher than processing facility tipping fees.
                        If such charges are levied by an extra-jurisdictional
                        disposal entity, it would help the flow control to work
                        if part of the cost assessed were to go to the disposal
                        entity, to pay for their efforts, and in order to assure
                        their cooperation.
                      </li>

                      <li id="K" className="pt-4 pb-2">
                        Collection needs to be coordinated with processing (A-F
                        above). Franchising should be considered, where a single
                        collection and processing entity is obligated to produce
                        the desired results, with penalties for failure
                        sufficient to assure compliance. As a starting point for
                        developing this, the city of San Jose, California has
                        made their contract for this in the commercial sector
                        (for a wet/dry approach) available to the public online.
                      </li>
                    </ol>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
