import Head from "next/head";
import SecondaryNavbar from "@/components/SecondaryNavbar";
import BiographyNavbar from "@/components/BiographyNavbar";
import { navbarProps } from "@/pages/organizing";

export const bioNavbarProps = {
  // bgColor: "bg-[#ff8938]",
  bgColor: "bg-organizingBg",
  titles: [
    <text>
      <i>RAM</i> Meetings
    </text>,
    "Coalition Meetings",
    "Documents for these",
  ],
  path: "/organizing/meetings",
};

export default function Contacts() {
  return (
    <div>
      <Head>
        <title>Meetings</title>
        <meta
          name="keywords"
          content="team, cohort, leadership, about us, people, persons"
        />
      </Head>
      <div className="bg-gradient-to-l from-[#591fab] to-[#160a36] text-zinc-300 pb-72">
        <SecondaryNavbar {...navbarProps} />
        <BiographyNavbar {...bioNavbarProps} />
        <div
          id="title-and-text-box"
          className="bg-neutral-950 m-11 p-6 rounded-6xl"
        >
          <div className="m-4 p-4 mt-8 text-center text-7xl pt-serif-700 text-[#d4bfff] italic">
            Meetings
          </div>
          <div className="container mx-auto px-4">
            <div id="ram" className="mx-8 my-8 text-2xl">
              <div className="title font-semibold underline">
                <i>RAM</i> Meeting Locations to date
              </div>
              <div className="paragraph">
                <p className="mb-3">
                  <i>RAM</i> thanks the following:
                </p>
                <p className="mb-3">
                  Northwest YMCA&apos;s board room, Davidson County, Council
                  District 2
                </p>
                <p className="mb-3">
                  Volunteer State Community College&apos;s cafeteria, Sumner
                  County
                </p>
                <p className="mb-3">
                  The Re-Use Center&apos;s meeting room, Davidson County,
                  Council District 17
                </p>
                <p className="mb-3">
                  John van der Harst&apos;s apartment, Davidson County, Council
                  District 6
                </p>
                <p className="mb-3">
                  Anna Haislip&apos;s house, Davidson County, Council District
                  16
                </p>
                <p className="mb-3">
                  Karen Cisler&apos;s apartment, Davidson County, Council
                  District 13
                </p>
                <p className="mb-3">
                  Leslie Allen&apos;s house, Davidson County, Council District 7
                </p>
                <p className="mb-3">
                  Jeff Brousal&apos;s house, Davidson County, Council District 9
                </p>
                <p className="mb-3">
                  Make Nashville&apos;s meeting room, Davidson County, Council
                  District 6
                </p>
                <p className="mb-3">
                  The Y&apos;s Art Embrace studio space, Davidson County,
                  Council District 6
                </p>
                <p className="mb-3">
                  Eddie Carpenter&apos;s house, Davidson County, Council
                  District 5
                </p>
              </div>
            </div>
            <div id="coalition-meetings" className="mx-8 my-14 text-2xl">
              <div className="title font-semibold underline">
                Meeting locations for Coalitions RAM was a part of
              </div>
              <div className="paragraph">
                <p className="mb-3">
                  <i>RAM</i> thanks the following:
                </p>
                <p className="mb-3">
                  Vanderbilt University&apos;s Center for Public Policy
                  Research, Davidson County, Council District 18 -- organized by
                  SOCM (Save Our Cumberland Mountains)
                </p>
                <p className="mb-3">
                  Steiner-Liff Iron & Metal Co.&apos;s meeting room, Davidson
                  County, Council District 6 -- lrganized by Steiner Liff&apos;s
                  Noah Liff, Mitch Magid, and Skila Harris
                </p>
                <p className="mb-3">
                  Leith Patton&apos;s home&apos;s rear deck, Davidson County,
                  Council District 18 -- organized by <i>RAM</i>
                </p>
                <p className="mb-3">
                  Nashville Peace and Justice Center, Davidson County, Council
                  District 18 -- organized by <i>RAM</i>
                </p>
                <p className="mb-3">
                  Nashville Greenlands&apos; living room and front porch,
                  Davidson County, Council District 21 -- organized by Karl
                  Meyer
                </p>
                <p className="mb-3">
                  The Y-Cap&apos;s meeting room, Davidson County, Council
                  District 6 -- organized by Chris McCarthy
                </p>
              </div>
            </div>
            <div id="documents-for-these" className="mx-8 my-14 text-2xl">
              <div className="title font-semibold underline">
                Documents related to these meetings
              </div>
              <div className="paragraph">
                <p className="mb-3">
                  Agendas and minutes/sign-in sheets, where applicable:
                </p>
                <p className="mb-3">
                  Images for these are expected to appear here soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
