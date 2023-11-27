import Head from "next/head";
import SecondaryNavbar from "@/components/SecondaryNavbar";
// import BiographyNavbar from "@/components/BiographyNavbar";
import { navbarProps } from "@/pages/organizing";

// export const bioNavbarProps = {
//   // bgColor: "bg-[#ff8938]",
//   bgColor: "bg-organizingBg",
//   titles: [
//     <>
//       <i>RAM</i> Meetings
//     </>,
//     "Documents for these",
//     "Coalition meetings",
//     "Documents for these",
//   ],
//   path: "/successes/major-successes",
// };

export default function Contacts() {
  const crewDescriptionTestLayoutStyles =
    "columns-1 md:columns-2 lg:columns-3 my-7 standard-font-3 text-justify text-lg";
  return (
    <div>
      <Head>
        <title>legal</title>
        <meta
          name="keywords"
          content="team, cohort, leadership, about us, people, persons"
        />
      </Head>
      <div className="bg-gradient-to-l from-[#591fab] to-[#160a36] text-zinc-300 pb-72">
        <SecondaryNavbar {...navbarProps} />
        {/* <BiographyNavbar {...bioNavbarProps} /> */}
        <div
          id="title-and-text-box"
          className="bg-neutral-950 m-11 p-6 rounded-6xl"
        >
          <div className="m-4 p-4 mt-8 text-center text-7xl pt-serif-700 text-[#d4bfff] italic">
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
