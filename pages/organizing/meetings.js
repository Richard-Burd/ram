import Head from "next/head";
import SecondaryNavbar from "@/components/SecondaryNavbar";
import { navbarProps } from "@/pages/organizing";
import Image from "next/image";

export default function Contacts() {
  const crewDescriptionTestLayoutStyles =
    "columns-1 md:columns-2 lg:columns-3 my-7 standard-font-3 text-justify text-lg";
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
        <div
          id="title-and-text-box"
          className="bg-neutral-950 m-11 p-6 rounded-6xl"
        >
          <div className="m-4 p-4 mt-8 text-center text-7xl pt-serif-700 text-[#d4bfff] italic">
            Meetings
          </div>
          <div className="container mx-auto px-4">
            <div id="section-1" className="mx-8 my-8 text-2xl">
              <div className="title font-semibold underline">
                <i>RAM</i> Meeting Locations to date
              </div>
              <div className="paragraph">
                <p className="">
                  <i>RAM</i> thanks the following:
                </p>
                <p className="">
                  Northwest YMCA&apos;s board room, Davidson County, Council
                  District 2
                </p>
                <p className="">
                  Volunteer State Community College&apos;s cafeteria, Sumner
                  County
                </p>
                <p className="">
                  The Re-Use Center&apos;s meeting room, Davidson County,
                  Council District 17
                </p>
                <p className="">
                  John van der Harst&apos;s apartment, Davidson County, Council
                  District 6
                </p>
                <p className="">
                  Anna Haislip&apos;s house, Davidson County, Council District
                  16
                </p>
                <p className="">
                  Karen Cisler&apos;s apartment, Davidson County, Council
                  District 13
                </p>
                <p className="">
                  Leslie Allen&apos;s house, Davidson County, Council District 7
                </p>
                <p className="">
                  Jeff Brousal&apos;s house, Davidson County, Council District 9
                </p>
                <p className="">
                  Make Nashville&apos;s meeting room, Davidson County, Council
                  District 6
                </p>
                <p className="">
                  The Y&apos;s Art Embrace studio space, Davidson County,
                  Council District 6
                </p>
                <p className="">
                  Eddie Carpenter&apos;s house, Davidson County, Council
                  District 5
                </p>
              </div>
            </div>
            <div id="section-2" className="mx-8 my-14 text-2xl">
              <div className="title font-semibold underline">
                Documents related to these meetings
              </div>
              <div className="paragraph">
                <p className="">
                  Here you can park images that pertain to -- Agendas, Sign-in
                  sheets
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
