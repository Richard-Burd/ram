import Head from "next/head";
import SecondaryNavbar from "@/components/SecondaryNavbar";
import { primaryHierarchyProps } from "@/pages/organizing";

export default function Legal() {
  return (
    <div>
      <Head>
        <title>legal</title>
        <meta
          name="keywords"
          content="team, cohort, leadership, about us, people, persons"
        />
      </Head>
      <div className="bg-gradient-to-l from-[#591fab] to-[#160a36] pb-72 text-zinc-300">
        <SecondaryNavbar {...primaryHierarchyProps} />
        <div
          id="title-and-text-box"
          className="m-11 rounded-6xl bg-neutral-950 p-6"
        >
          <div className="pt-serif-700 m-4 mt-8 p-4 text-center text-7xl italic text-[#d4bfff]">
            Legal
          </div>
          <div className="container mx-auto px-4">
            <div id="section-1" className="mx-8 my-8 text-2xl">
              <div className="title font-semibold underline">
                Annual Reports
              </div>
              <div className="paragraph">
                <p className="mb-3">
                  Some of <i>RAM&apos;s</i> Annual Reports, required by the
                  State of Tennessee, Secretary of State&apos;s office, Business
                  Division, every year, by May 1:
                </p>
              </div>
            </div>

            <div id="section-2" className="mx-8 my-8 text-2xl">
              <div className="title font-semibold underline">
                Tax information
              </div>
              <div className="paragraph">
                <p className="mb-3">
                  A table of some key metrics remains under development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
