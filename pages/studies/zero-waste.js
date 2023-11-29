import React, { useState } from "react";

import SecondaryNavbar from "@/components/SecondaryNavbar";
import BiographyNavbar from "@/components/BiographyNavbar";
import BrochureFig from "@/components/BrochureFig";
import { navbarProps } from "@/pages/studies";

// // used for the pie chart
// import { Pie } from "react-chartjs-2";
// import "chart.js/auto";

// // pie chart
// function PieChartComponent() {
//   const data = {
//     labels: [
//       "Reused, Recycled, Composted or Anaerobically Digested",
//       "Used as Aggregates",
//       "Made into Heavy Molded/Extruded Products",
//       "To Pyrolysis",
//       "To Hazerous Treatement Facilities",
//     ],
//     datasets: [
//       {
//         data: [78, 5, 9, 6, 2], // Your data values as percentages
//         backgroundColor: [
//           "#d15276",
//           "#d16b52",
//           "#62ab55",
//           "#f0f0f0",
//           "#60d1cd",
//         ],
//         hoverBackgroundColor: [
//           "#612637",
//           "#824131",
//           "#33592d",
//           "#bfbfbf",
//           "#3c8280",
//         ],
//       },
//     ],
//   };

//   const options = {
//     plugins: {
//       legend: false,
//     },
//   };

//   const labels = data.labels.map((label, i) => (
//     <div className="pb-2" key={label} style={{ display: "flex" }}>
//       <div
//         className="mt-1"
//         style={{
//           width: "24px",
//           height: "24px",
//           backgroundColor: data.datasets[0].backgroundColor[i],
//           marginRight: "8px",
//         }}
//       />
//       <div>{label}</div>
//     </div>
//   ));

//   return (
//     <div>
//       <div className="px-12 mb-8">{labels}</div>
//       <div className="px-40">
//         <Pie data={data} options={options} />
//       </div>
//     </div>
//   );
// }

export const bioNavbarProps = {
  // bgColor: "bg-[#ff8938]",
  bgColor: "bg-studiesBg",
  titles: [
    "Diversion",
    "Plans",
    "Scam Plan Steps",
    "Preventative Steps Beforehand",
  ],
  path: "/studies/zero-waste",
};

export default function ZeroWaste() {
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
        <BiographyNavbar {...bioNavbarProps} />

        <div
          id="title-and-text-box"
          className="bg-neutral-950 m-11 p-8 rounded-6xl"
        >
          <div className="my-4 py-4 text-center text-5xl pt-serif-700 text-[#fcffbf] italic">
            Zero-Waste
          </div>
          <div id="diversion" className="mx-4 pt-4 mb-24">
            <div className="border-b-2 border-zinc-300 mt-2 pb-1 text-2xl font-bold mb-2">
              Diversion
            </div>
            <div className="text-2xl">
              <p className="mb-8">
                <i>RAM</i> supports true zero waste. Two RAM graphics describe
                maximizing diversion from municipal solid waste -- destinations
                when quality-oriented high-recovery systems are applied to it.
                First a bar chart:
              </p>
              <div className="mb-12">
                <BrochureFig
                  figureNumber="Fig-3"
                  fileName="net-zero-landfilling.jpg"
                  borderColor="#665c49"
                  width={width}
                  onClick={toggleSize}
                />
              </div>

              {/* <p className="mb-8">
                For those preferring a simplified, less precise graphic to help
                them remember:
              </p>
              <div id="pie-chart" className="mb-12">
                <PieChartComponent />
              </div> */}
              <p className="mb-8">
                For those preferring a simplified, less precise graphic to help
                them remember:
              </p>
              <div className="mb-12">
                <BrochureFig
                  figureNumber=""
                  fileName="typical-solid-waste-destinations.jpg"
                  borderColor="#665c49"
                  width={"100%"}
                />
              </div>
            </div>
          </div>
          <div id="plans" className="mx-4 pt-4">
            <div className="border-b-2 border-zinc-300 mt-2 pb-1 text-2xl font-bold mb-2">
              Plans
            </div>
            <div className="text-2xl">
              <p className="mb-8">
                Citizens across the U.S. have called for zero waste too,
                convincing their governments to pay for plans describing how to
                accomplish it.. Unfortunately, then, often, a scam unfolds, of a
                common type:
              </p>
            </div>
          </div>
          <div id="scam-plan-steps" className="mx-4 pt-4 mb-24">
            <div className="border-b-2 border-zinc-300 mt-2 pb-1 text-2xl font-bold mb-2">
              Scam Plan Steps
            </div>
            <div className="bg-yellow-700 my-4 px-2 py-4 bg-opacity-30 rounded-2xl text-2xl">
              <ol className="list-decimal list-outside mx-12">
                <li id="1" className="">
                  A Scope of Work is assembled by government bureaucrats who
                  aren&apos;t as committed to change as the activists, or if
                  they&apos;re really lazy or bought by disposal companies,
                  don&apos;t want change at all.
                </li>
                <li id="2" className="pt-3 pb-2">
                  Salespersons for consultants come running, with slick
                  presentations, promising to deliver.
                </li>
                <li id="3" className="pt-3 pb-2">
                  Lots of money is asked for, to bring in &quot;experts&quot;
                  from elsewhere.
                </li>
                <li id="4" className="pt-3 pb-2">
                  After contract signing, the consultants assemble a relatively
                  standardized plan used by many in the industry, that preserves
                  their positioning to make money off future lucrative disposal
                  projects -- but does not achieve zero waste. They add bulky
                  cosmetics, like scenic photos, intended make it look like a
                  custom plan. Their input sessions with the public end up being
                  PR shows.
                </li>
                <li id="5" className="pt-3 pb-2">
                  When activists start seeing evidence of such content, they
                  become upset that the plan does NOT call for zero waste. It
                  still contains disposal. Lots of it. Consultants have clever
                  come-back lines, like &quot;Achieving 100% zero waste would be
                  prohibitively expensive,&quot; which is not true.
                </li>
                <li id="6" className="pt-3 pb-2">
                  At that point, what can activists do? The money has been
                  spent.
                </li>
              </ol>
            </div>
          </div>
          <div id="preventative-steps-beforehand" className="mx-4 pt-4 mb-24">
            <div className="border-b-2 border-zinc-300 mt-2 pb-1 text-2xl font-bold mb-2">
              Preventative Steps Beforehand
            </div>
            <div className="text-2xl">
              <p className="mb-8">To prevent plan scams as much as possible:</p>
            </div>
            <div className="my-4 px-2 py-4 bg-opacity-30  text-2xl">
              <ol className="list-decimal list-outside mx-12">
                <li id="1" className="">
                  RAM has tried to explain zero waste methodology in the next
                  page of this website, so activists can read and understand it.
                </li>
                <li id="2" className="pt-3 pb-2">
                  Activists need to insist that any Scope of Work requires
                  consultants to describe how 100% zero waste would certainly be
                  achieved, in an environmentally responsible and acceptable
                  manner, the most economical way possible. Cost ranges for
                  every element need to be included. As to whether every element
                  can be afforded, that decision is for the clients to make. NOT
                  the consultants.
                </li>
                <li id="3" className="pt-3 pb-2">
                  <p>
                    At a minimum, plans need to include the following types of
                    facilities:
                  </p>
                  <div className="bg-yellow-700 my-4 px-4 py-4 bg-opacity-30 rounded-2xl">
                    <table>
                      <tbody>
                        <tr id="row-1">
                          <td className="column-1 pr-3 align-top pb-4"></td>
                          <td className="column-2 pr-3 align-top pb-4">A.</td>
                          <td className="column-3 pr-3 align-top pb-4">
                            Dry waste sorting/recovery facilities, for both MSW
                            and C&D wastes, typically separately,
                          </td>
                        </tr>
                        <tr id="row-2">
                          <td className="column-1 pr-3 align-top pb-4"></td>
                          <td className="column-2 pr-3 align-top pb-4">B.</td>
                          <td className="column-3 pr-3 align-top pb-4">
                            Wet waste composting/anaerobic digestion facilities,
                          </td>
                        </tr>
                        <tr id="row-3">
                          <td className="column-1 pr-3 align-top pb-4"></td>
                          <td className="column-2 pr-3 align-top pb-4">C.</td>
                          <td className="column-3 pr-3 align-top pb-4">
                            Aggregate sorting/recovery facilities,
                          </td>
                        </tr>
                        <tr id="row-4">
                          <td className="column-1 pr-3 align-top pb-4"></td>
                          <td className="column-2 pr-3 align-top pb-4">D.</td>
                          <td className="column-3 pr-3 align-top pb-4">
                            Heavy molded/extruded products facilities, which
                            often create composites out of unrecyclable plastics
                            as binders and other wastes as fillers (e.g. Trex),
                          </td>
                        </tr>
                        <tr id="row-5">
                          <td className="column-1 pr-3 align-top pb-4"></td>
                          <td className="column-2 pr-3 align-top pb-4">E.</td>
                          <td className="column-3 pr-3 align-top pb-4">
                            Pyrolysis or other energy/fuels production
                            facilities (e.g. Enerkem) for only wastes that can
                            not be dealt with by facility types A-D. This does
                            not include incineration of wastes, as this produces
                            environmentally inferior byproducts. And,
                          </td>
                        </tr>
                        <tr id="row-6">
                          <td className="column-1 pr-3 align-top pb-4"></td>
                          <td className="column-2 pr-3 align-top pb-4">F.</td>
                          <td className="column-3 pr-3 align-top pb-4">
                            Hazardous waste collection and processing
                            facilities, which emphasize re-use as much as
                            possible.
                          </td>
                        </tr>
                        <tr id="row-7">
                          <td className="column-1 pr-3 align-top pb-4"></td>
                          <td className="column-2 pr-3 align-top pb-4">G.</td>
                          <td className="column-3 pr-3 align-top pb-4">
                            Another essential component is a contractual
                            requirement that all residues coming from facilities
                            A-F must be part of the feedstock for other
                            facilities A-F. Not disposal.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </li>
                <li id="4" className="pt-3 pb-2">
                  <p>Other key must-have plan elements include:</p>
                  <div className="bg-yellow-700 my-4 px-4 py-4 bg-opacity-30 rounded-2xl">
                    <table>
                      <tbody>
                        <tr id="row-1">
                          <td className="column-1 pr-3 align-top pb-4"></td>
                          <td className="column-2 pr-3 align-top pb-4">H.</td>
                          <td className="column-3 pr-3 align-top pb-4">
                            Marketing of all recovered commodities,
                          </td>
                        </tr>
                        <tr id="row-2">
                          <td className="column-1 pr-3 align-top pb-4"></td>
                          <td className="column-2 pr-3 align-top pb-4">I.</td>
                          <td className="column-3 pr-3 align-top pb-4">
                            Maximizing local market development,
                          </td>
                        </tr>
                        <tr id="row-3">
                          <td className="column-1 pr-3 align-top pb-4"></td>
                          <td className="column-2 pr-3 align-top pb-4">J.</td>
                          <td className="column-3 pr-3 align-top pb-4">
                            All economic, environmental, and health costs and
                            benefits need to be internalized for both material
                            recovery, and hypothetical disposal,
                          </td>
                        </tr>
                        <tr id="row-4">
                          <td className="column-1 pr-3 align-top pb-4"></td>
                          <td className="column-2 pr-3 align-top pb-4">K.</td>
                          <td className="column-3 pr-3 align-top pb-4">
                            Collection needs to be coordinated with processing
                            (A-F above). Franchising should be considered, where
                            a single collection and processing entity is
                            obligated to produce the desired results, with
                            penalties for failure sufficient to assure
                            compliance. Wet/dry techniques can reduce costs.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </li>
                <li id="5" className="pt-3 pb-2">
                  To save money and eyewash, certain elements consultants
                  typically include in their plans need to be banned, for all
                  plan providers:
                  <div className="bg-yellow-700 my-4 px-4 py-4 bg-opacity-30 rounded-2xl">
                    <table>
                      <tbody>
                        <tr id="row-1">
                          <td className="column-1 pr-3 align-top pb-4"></td>
                          <td className="column-2 pr-3 align-top pb-4">L.</td>
                          <td className="column-3 pr-3 align-top pb-4">
                            Any photographs of the municipality or other scenery
                            not necessary for the understanding of elements,
                            like facilities, in the plan,
                          </td>
                        </tr>
                        <tr id="row-2">
                          <td className="column-1 pr-3 align-top pb-4"></td>
                          <td className="column-2 pr-3 align-top pb-4">M.</td>
                          <td className="column-3 pr-3 align-top pb-4">
                            Any branding, naming, color schemes, or education
                            programming. These are best created locally,
                            including through schools or contests. Plenty of
                            sources of these are freely accessible online, and
                          </td>
                        </tr>
                        <tr id="row-3">
                          <td className="column-1 pr-3 align-top pb-4"></td>
                          <td className="column-2 pr-3 align-top pb-4">N.</td>
                          <td className="column-3 pr-3 align-top pb-4">
                            &#34;Pay-As-You-Throw&#34; (PAYT), or its
                            confusingly euphemistic identical twin
                            "Save-As-You-Throw," applied to residential
                            collection. These preserve disposal (indeed make
                            funding dependent on that continuing), increase
                            illegal dumping (San Francisco is plagued with
                            this), increase backyard burning, and cause
                            processing difficulties due to what residents do
                            with their set-outs. They achieve almost no waste
                            reduction. E.g. Nashville/Davidson County&apos;s
                            curbside recycling program reduces its total solid
                            solid waste stream by a mere 1%, with about a 74%
                            participation rate. Even if participation were
                            increased to 100% with PAYT (not likely), that would
                            change 1% to just 1.3% -- huge percentage-wise,
                            consultants enjoy pointing out, but insignificant
                            for achieving zero waste. PAYT increases billing
                            costs. It fills up plans, bulk-wise, with endless
                            implementational complexities. PAYT also erects a
                            smokescreen that causes residents to think something
                            good is being done while actually virtually nothing
                            is. Thus, PAYT actually prevents zero waste.
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
