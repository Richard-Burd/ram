import Link from "next/link";

import SecondaryNavbar from "@/components/SecondaryNavbar";
import { primaryHierarchyProps } from "@/pages/successes";

export default function InitialAims() {
  return (
    <div>
      <div className="bg-gradient-to-l from-[#225394] to-[#060e1a] pb-16 text-zinc-300">
        <SecondaryNavbar {...primaryHierarchyProps} />
        <div
          id="title-and-text-box"
          className="m-11 rounded-6xl bg-neutral-950 p-8"
        >
          <div className="pt-serif-700 my-4 py-4 text-center text-5xl italic text-[#bfe6ff]">
            Initial Aims
          </div>
          <div className="mx-4 text-2xl">
            <p className="mb-8">
              Of the list of Successes on the{" "}
              <Link
                href="/successes/brief-history"
                className="text-blue-300 transition duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline"
                // target="_blank"
              >
                <strong>Brief History</strong>
              </Link>{" "}
              and{" "}
              <Link
                href="/successes/longer-history"
                className="text-blue-300 transition duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline"
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
            <div className="m-4 rounded-2xl bg-blue-700 bg-opacity-30 px-2 py-4">
              <ol className="mx-12 list-outside list-decimal">
                <li id="1" className="">
                  <i>RAM</i> focused steadfastly on figuring out how to{" "}
                  <b>minimize disposal</b>, the best way possible, in line with
                  its Mission Statement.
                </li>
                <li id="2" className="pb-2 pt-3">
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
            <div className="m-4 rounded-2xl bg-blue-700 bg-opacity-30 px-2 py-4">
              <ol className="list-alpha-upper mx-12 list-outside">
                <li id="A" className="">
                  having a focus on, and yearning for, <b>success</b>, and
                </li>
                <li id="B" className="pb-2 pt-3">
                  having the <b>work ethic</b> to make that happen.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
