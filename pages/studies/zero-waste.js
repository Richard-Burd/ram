import Link from "next/link";

import SecondaryNavbar from "@/components/SecondaryNavbar";
import BiographyNavbar from "@/components/BiographyNavbar";
import { navbarProps } from "@/pages/studies";

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
  return (
    <div>
      <div className="bg-gradient-to-l from-[#948e22] to-[#1a1906] text-zinc-300 pb-16">
        <SecondaryNavbar {...navbarProps} />
        <BiographyNavbar {...bioNavbarProps} />
        <div className="m-4 p-4 text-2xl">
          ...comming soon! This page is under construction.
        </div>
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
          </div>
          <div id="plans" className="mx-4 pt-4 mb-24">
            <div className="border-b-2 border-zinc-300 mt-2 pb-1 text-2xl font-bold mb-2">
              Plans
            </div>
          </div>
          <div id="scam-plan-steps" className="mx-4 pt-4 mb-24">
            <div className="border-b-2 border-zinc-300 mt-2 pb-1 text-2xl font-bold mb-2">
              Scam Plan Steps
            </div>
          </div>
          <div id="preventative-steps-beforehand" className="mx-4 pt-4 mb-24">
            <div className="border-b-2 border-zinc-300 mt-2 pb-1 text-2xl font-bold mb-2">
              Preventative Steps Beforehand
            </div>
          </div>
          {/* <div className="mx-4 text-2xl">
            <p className="mb-8">
              Of the list of Successes on the{" "}
              <Link
                href="/successes/brief-history"
                className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-300 transition"
                // target="_blank"
              >
                <strong>Brief History</strong>
              </Link>{" "}
              and{" "}
              <Link
                href="/successes/longer-history"
                className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-300 transition"
                // target="_blank"
              >
                <strong>Longer History</strong>
              </Link>{" "}
              pages (both with identical numbering), only numbers 1, 2, 3, 9,
              and 12 were already being worked on -- and most of these just
              beginning to be -- when <i>RAM</i> was forming in late 1992.
              Those, and the other 18 successes, happened for two important
              reasons:
            </p>

            <p className="mb-8">
              First, as history unfolds, unanticipated needs arise.
            </p>

            <p className="mb-4">
              Second, <i>RAM</i> had prepared itself to be able to turn such
              needs into opportunities, and then deliver solutions. This
              preparation resulted from two primary focuses:
            </p>
            <div className="bg-yellow-700 m-4 px-2 py-4 bg-opacity-30 rounded-2xl">
              <ol className="list-decimal list-outside mx-12">
                <li id="1" className="">
                  <i>RAM</i> focused steadfastly on figuring out how to{" "}
                  <b>minimize disposal</b>, the best way possible, in line with
                  its Mission Statement.
                </li>
                <li id="2" className="pt-3 pb-2">
                  <i>RAM</i> focused on high-quality <b>talent management</b>,
                  aimed at best utilizing what became available, as efficiently,
                  humanely, and sustainably, as ever-limiting circumstances
                  would allow. It was the failure to do this, by other groups,
                  which led to the need for this. <i>RAM</i> did it well.
                </li>
              </ol>
            </div>

            <p className="mb-4 mt-14">
              Both of these two are interrelated. Perhaps the most important
              characteristics of those with high quality talent are:
            </p>
            <div className="bg-yellow-700 m-4 px-2 py-4 bg-opacity-30 rounded-2xl">
              <ol className="list-alpha-upper list-outside mx-12">
                <li id="A" className="">
                  having a focus on, and yearning for, <b>success</b>, and
                </li>
                <li id="B" className="pt-3 pb-2">
                  having the <b>work ethic</b> to make that happen.
                </li>
              </ol>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
