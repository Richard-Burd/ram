import Link from "next/link";

import SecondaryNavbar from "@/components/SecondaryNavbar";
import { navbarProps } from "@/pages/successes";

export default function CurrentCampaigns() {
  return (
    <div>
      <div className="bg-gradient-to-l from-[#225394] to-[#060e1a] text-zinc-300 pb-16">
        <SecondaryNavbar {...navbarProps} />
        <div
          id="title-and-text-box"
          className="bg-neutral-950 m-11 p-8 rounded-6xl"
        >
          <div className="my-4 py-4 text-center text-5xl pt-serif-700 text-[#bfe6ff] italic">
            Current Campaigns
          </div>
          <div className="mx-4 text-2xl">
            <p className="mb-8">
              First, RAM needs to maintain what it has proven good at --
              delivering solutions, as needs arise. Continue with two primary
              focuses that have worked so far:
            </p>
            <div className="bg-blue-700 m-4 px-2 py-4 bg-opacity-30 rounded-2xl">
              <ol className="list-decimal list-outside mx-12">
                <li id="1" className="">
                  Figuring out -- and communicating -- how to{" "}
                  <b>minimize disposal</b>, the best way possible, in line with{" "}
                  <i>RAM&apos;s</i>{" "}
                  <Link
                    href="/about/mission-statement"
                    className="duration-500 hover:text-red-900 underline hover:underline focus:text-red-900 focus:underline text-blue-200 transition"
                    // target="_blank"
                  >
                    Mission Statement
                  </Link>{" "}
                  . Current website construction is part of this.
                </li>
                <li id="2" className="pt-3 pb-2">
                  Maintaining high-quality <b>talent management</b>, aimed at
                  best utilizing what becomes available, as efficiently,
                  humanely, and sustainably, as ever-limiting circumstances
                  allow. <i>RAM</i> has demonstrated this successfully enough
                  that it should share how to do it. Hint: Seek talent, which
                  foremost, has the following two characteristics:
                </li>
                <ol className="list-alpha-upper list-outside mx-12">
                  <li id="A" className="">
                    having a focus on, and yearning for, <b>success</b>, and
                  </li>
                  <li id="B" className="pt-3 pb-2">
                    having the <b>work ethic</b> to make that happen.
                  </li>
                </ol>
              </ol>
            </div>

            <p className="mb-4 mt-14">
              As for current projects, one huge problem now begs for solutions:
              <i>Bad solid waste plans</i>. Citizens clamoring for zero-waste
              plans watch in horror as their governments waste tax money on the
              consulting industry's cockroach-like swarm of BS-spouting sales
              reps, touting dressed-up stock disposal industry-favoring plans as
              the best that can supposedly be done. Then they write op-eds about
              how zero-waste can't work.
            </p>
            <p>
              <i>RAM</i> has worked with both government and industry.{" "}
              <i>RAM&apos;s</i> current approach is to build a website that can
              explain the issue better than any before. Promote that. Then try
              other approaches. Evaluate. Adjust.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
