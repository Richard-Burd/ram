import Link from "next/link";

import SecondaryNavbar from "@/components/SecondaryNavbar";
import { navbarProps } from "@/pages/successes";

export default function InitialAims() {
  return (
    <div>
      <div className="bg-gradient-to-l from-[#225394] to-[#060e1a] text-zinc-300 pb-16">
        <SecondaryNavbar {...navbarProps} />
        <div
          id="title-and-text-box"
          className="bg-neutral-950 m-11 p-8 rounded-6xl"
        >
          <div className="my-4 py-4 text-center text-5xl pt-serif-700 text-[#bfe6ff] italic">
            Initial Aims
          </div>
          <div className="mx-4 text-2xl">
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

            <ol className="list-decimal list-outside mx-12 text-xl">
              <li id="1" className="">
                <i>RAM</i> focused steadfastly on figuring out how to minimize
                disposal, the best way possible, in line with its Mission
                Statement.
              </li>
              <li id="2" className="pt-3">
                <i>RAM</i> focused on high-quality talent management, aimed at
                best utilizing what became available, as efficiently, humanely,
                and sustainably, as ever-limiting circumstances would allow. It
                was the failure to do this, by other groups, which led to the
                need for this. <i>RAM</i> did it well.
              </li>
            </ol>

            <p className="mb-4 mt-14">
              Both of these two are interrelated. Perhaps the most important
              characteristics of those with high quality talent are:
            </p>

            <ol className="list-alpha-upper list-outside mx-12 text-xl">
              <li id="1" className="">
                having a focus on, and yearning for, success, and
              </li>
              <li id="2" className="pt-3 pb-8">
                having the work ethic to make that happen.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
