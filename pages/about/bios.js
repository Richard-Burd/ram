import Head from "next/head";
import SecondaryNavbar from "@/components/SecondaryNavbar";
import BiographyNavbar from "@/components/BiographyNavbar";
import { navbarProps } from "@/pages/about";
import Image from "next/image";

export const bioNavbarProps = {
  // bgColor: "bg-[#ff8938]",
  bgColor: "bg-aboutBg",
  titles: [
    "John van der Harst",
    "Leith Patton",
    "Martha Yanchyshyn",
    "Colleen McLanaghan",
    "Catherine Murray",
    "Lee Nelson",
    "Richard Burd",
  ],
  path: "/about",
};

export default function Bios() {
  const crewDescriptionTestLayoutStyles =
    "columns-1 md:columns-2 lg:columns-3 my-7 standard-font-3 text-justify text-lg";
  return (
    <div>
      <Head>
        <title>RAM Biographys</title>
        <meta
          name="keywords"
          content="team, bio, background, about us, biography, persons"
        />
      </Head>
      <div className="bg-gradient-to-l from-[#873f08] to-[#1a0c02] text-zinc-300 pb-72">
        <SecondaryNavbar {...navbarProps} />
        <BiographyNavbar {...bioNavbarProps} />
        <div
          id="title-and-text-box"
          className="bg-neutral-950 m-11 p-6 rounded-6xl"
        >
          <div className="m-4 p-4 text-center text-7xl pt-serif-700 text-[#ffe9bf] italic">
            Bios
          </div>
          <div id="john-van-der-harst">
            <div className="text-4xl standard-font-1 border-b-2 border-zinc-700 mt-2 -mb-2">
              John van der Harst
            </div>
            <div className={crewDescriptionTestLayoutStyles}>
              <div>
                John is a Co-Incorporator, Registered Agent, President, Davidson
                County and out-of-state Contact Person, Newsletter Editor,
                brochure creator and Treasurer for <i>RAM.</i>
              </div>
              <div className="my-4"></div>
              <div>
                His background in Architecture, Landscape Architecture, Civil
                Engineering, Planning, and Illustration was mostly preceded by
                various factory work. Plenty of exposure to management of people
                and materials. John's 31 years of managing <i>RAM</i> was
                preceded by leadership in material recovery methodology for
                other solid waste management advocacy groups. Their limits led
                John to create <i>RAM</i> as a last resort.
              </div>
              <div className="my-4"></div>
              <div>
                John&apos;s studies included touring 196 solid waste facilities
                in 19 states and Ontario, Canada, from 1989 to 1996, with Sandy
                Loyd, and others past then. He organized several pilot wet/dry
                material recovery demonstrations. Hands on.
              </div>
              <div className="my-4"></div>
              <div>
                John focused on internalizing externalized economic and health
                valuations, particularly for waste disposal tip fees. These
                formed the foundation under long but ultimately successful
                campaigns to end combining fly and bottom ash, waste
                incineration, and loose treated ash utilization outside lined
                landfills. In 1993, John&apos;s calculations led him to be the
                only person in Davidson County to campaign for the closure of
                what was then the most economical waste-to-energy plant in the
                U.S. In 2002, it became the only voluntary closure of a large,
                financially viable WTE incinerator with up-to-date air pollution
                control equipment.
              </div>
              <div className="my-4"></div>
              <div>
                John volunteered for, and then worked at, The Re-Use Center,
                Inc., Nashville, TN, in 1996, organizing their paints and other
                chemicals
              </div>
              <div className="my-4"></div>
              <div>
                The mulch/compost operation John proposed still recovers more
                tonnage than any other program in Davidson County, 31 years
                after its implementation -- roughly the weight of one Titanic
                every year. He rallied statewide support that led TN to become
                the first U.S. state to establish soil-based compost quality
                standards as an incentive class. John successfully campaigned
                for permanent household hazardous waste collection centers in
                Davidson County. He led a team effort that changed state law to
                allow Davidson County to charge for all costs associated with
                solid waste disposal. John helped convince Davidson County's
                Solid Waste Region Board to call for a zero-waste plan, but then
                tried and failed to persuade it and the Metropolitan Council of
                Nashville and Davidson County to insist on a Scope of Work that
                would assure that outcome. He's still trying to correct that.
              </div>
              <div className="my-4"></div>
              <div>
                The last 9 years have also included co-founding and management
                (with Michael Goff) of&nbsp;
                <br></br>
                <a
                  href="https://www.urbancruiseship.org"
                  target="_blank"
                  rel="noreferrer"
                  className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-300 transition"
                >
                  <strong>Urban Cruise Ship</strong>
                </a>
                &nbsp; which has a Waste site, but also covers all environmental
                issues worldwide and beyond (like Space debris). A project of
                UCS, &nbsp;
                <a
                  href="https://urbanfootnotes.org"
                  target="_blank"
                  rel="noreferrer"
                  className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-300 transition"
                >
                  <strong>Urban Foot Notes</strong>
                </a>
                , aims to reduce transportation and construction waste.
              </div>
            </div>
            <center className="link-icon-set">
              <a
                href={`/organizing/contacts/john`}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="duration-500 ease-in-out focus:opacity-90 hover:opacity-90 mx-2 sm:mx-8 opacity-40 transition"
                  src={`/images/external-link-icons/email.svg`}
                  alt={"Email icon"}
                  height={50}
                  width={50}
                />
              </a>
            </center>
          </div>

          <div id="karen-cisler" className="pt-40">
            <div className="text-4xl standard-font-1 border-b-2 border-zinc-700 mt-2 -mb-2">
              Karen Cisler
            </div>
            <div className="my-7 standard-font-3 text-justify text-lg">
              <div>
                Karen is <i>RAM's</i> Secretary, taking over from Leslie Allen.
                She has attended many meetings, provided transportation to
                facility tours, and provided vegan meals prior to many RAM
                meetings.
              </div>
              <div className="my-4"></div>
              <div>She has had a long career as an Analytical Chemist.</div>
              <div className="my-4"></div>
              <div>
                More details of Karen's background and RAM involvement are
                anticipated soon.
              </div>
            </div>
          </div>

          <div id="ursula-king" className="pt-40">
            <div className="text-4xl standard-font-1 border-b-2 border-zinc-700 mt-2 -mb-2">
              Ursula King
            </div>
            <div className="my-7 standard-font-3 text-justify text-lg">
              <div>
                Ursula worked hard with John to pass state legislation allowing
                Davidson County to charge for all costs associated with solid
                waste disposal. She attended <i>RAM</i> and other meetings to
                try to increase material recovery.
              </div>
              <div className="my-4"></div>
              <div>
                Ursula has also been involved with trying to enact statewide
                deposit legislation in TN, and lined up other lobbyists for this
                as well.
              </div>
              <div className="my-4"></div>
              <div>More details are anticipated soon.</div>
            </div>
          </div>

          <div id="jeff-broussal" className="pt-40">
            <div className="text-4xl standard-font-1 border-b-2 border-zinc-700 mt-2 -mb-2">
              Jeff Broussal
            </div>
            <div className="my-7 standard-font-3 text-justify text-lg">
              <div>
                Jeff tried to sensitize the Davidson County Solid Waste Region
                Board to the hazards of solid waste disposal. He has assisted in
                a number of education sessions.
              </div>
              <div className="my-4"></div>
              <div>
                Jeff, a PhD, had tried to work within TN's Department of
                Environment and Conservation for years, before leaving to take
                in even more variety of schooling at TSU.
              </div>
              <div className="my-4"></div>
              <div>More details are anticipated soon.</div>
            </div>
          </div>

          <div id="lee-nelson" className="pt-40">
            <div className="text-4xl standard-font-1 border-b-2 border-zinc-700 mt-2 -mb-2">
              Lee Nelson
            </div>
            {/* <div className={crewDescriptionTestLayoutStyles}> */}
            <div className="my-7 standard-font-3 text-justify text-lg">
              <div>
                Lee has been digitally archiving many notebooks full of{" "}
                <i>RAM</i> material for over two years. <i>RAM's</i> dense hard
                copy files take up over 6 feet of shelving and are accompanied
                by over 8 feet of related material.
              </div>
              <div className="my-4"></div>
              <div>
                Lee has been working on&nbsp;
                <a
                  href="https://www.urbancruiseship.org"
                  target="_blank"
                  rel="noreferrer"
                  className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-300 transition"
                >
                  <strong>Urban Cruise Ship&apos;s</strong>
                </a>
                &nbsp;graphics and content for over 5 years, including solutions
                on UCS's Waste, Matter, and Energy sites, aimed toward reducing
                various wastes and consumption.
              </div>
              <div className="my-4"></div>
              <div>More details are anticipated soon.</div>
            </div>
            <center className="grid grid-cols-3 content-center mx-64">
              <a
                href="https://www.linkedin.com/in/lee-nelson-b5701981"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="duration-500 ease-in-out focus:opacity-90 hover:opacity-90 mx-2 sm:mx-8 opacity-40 transition"
                  src={`/images/external-link-icons/linkedin.svg`}
                  alt={"LinkedIn icon"}
                  height={50}
                  width={50}
                />
              </a>
              <a
                href="https://www.supremelifeforce.info/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="duration-500 ease-in-out focus:opacity-90 hover:opacity-90 mx-2 sm:mx-8 opacity-40 transition"
                  src={`/images/external-link-icons/home.svg`}
                  alt={"Home icon"}
                  height={50}
                  width={50}
                />
              </a>
              <a
                href="mailto:lee@urbancruiseship.org"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="duration-500 ease-in-out focus:opacity-90 hover:opacity-90 mx-2 sm:mx-8 opacity-40 transition"
                  src={`/images/external-link-icons/email.svg`}
                  alt={"Email icon"}
                  height={50}
                  width={50}
                />
              </a>
            </center>
          </div>

          <div id="richard-burd" className="pt-40">
            <div className="text-4xl standard-font-1 border-b-2 border-zinc-700 mt-2 -mb-2">
              Richard Burd
            </div>
            {/* <div className={crewDescriptionTestLayoutStyles}> */}
            <div className="my-7 standard-font-3 text-justify text-lg">
              <div>
                Richard is <i>RAM&apos;s</i> webmaster, and is taking material
                Lee has digitally archived and adjusting its resolution levels
                for insertion into this website.
              </div>
              <div className="my-4"></div>
              <div>
                Richard has been working on Urban Cruise Ship's Human Endeavors,
                Solutions, Handouts, and website architecture for almost 4
                years. He has also built the&nbsp;
                <a
                  href="https://www.urbanfootnotes.org"
                  target="_blank"
                  rel="noreferrer"
                  className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-300 transition"
                >
                  <strong>Urban Foot Notes</strong>
                </a>
                &nbsp;website, a project of&nbsp;
                <a
                  href="https://www.urbancruiseship.org"
                  target="_blank"
                  rel="noreferrer"
                  className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-300 transition"
                >
                  <strong>Urban Cruise Ship</strong>
                </a>
                &nbsp;, aiming to reduce transportation and construction waste.
              </div>
              <div className="my-4"></div>
              <div>More details are anticipated soon.</div>
            </div>
            <center className="grid grid-cols-4 content-center mx-52">
              <a
                href="https://www.linkedin.com/in/richardburd/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="duration-500 ease-in-out focus:opacity-90 hover:opacity-90 mx-2 sm:mx-8 opacity-40 transition"
                  src={`/images/external-link-icons/linkedin.svg`}
                  alt={"LinkedIn icon"}
                  height={50}
                  width={50}
                />
              </a>
              <a
                href="https://richard-burd.github.io/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="duration-500 ease-in-out focus:opacity-90 hover:opacity-90 mx-2 sm:mx-8 opacity-40 transition"
                  src={`/images/external-link-icons/home.svg`}
                  alt={"Home icon"}
                  height={50}
                  width={50}
                />
              </a>
              <a
                href="https://github.com/Richard-Burd"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="duration-500 ease-in-out focus:opacity-90 hover:opacity-90 mx-2 sm:mx-8 opacity-40 transition"
                  src={`/images/external-link-icons/github.svg`}
                  alt={"GitHub icon"}
                  height={50}
                  width={50}
                />
              </a>
              <a
                href="mailto:richard@urbancruiseship.org"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="duration-500 ease-in-out focus:opacity-90 hover:opacity-90 mx-2 sm:mx-8 opacity-40 transition"
                  src={`/images/external-link-icons/email.svg`}
                  alt={"Email icon"}
                  height={50}
                  width={50}
                />
              </a>
            </center>
          </div>

          <div id="leith-patton" className="pt-40">
            <div className="text-4xl standard-font-1 border-b-2 border-zinc-700 mt-2 -mb-2">
              Leith Patton
            </div>
            <div className="my-7 standard-font-3 text-justify text-lg">
              <div>
                Leith agreed to be <i>RAM&apos;s</i> contact person in Jackson
                County following the death of Sandy Hepler. During the last year
                of Sandy's life, much of his time was spent at Leith's house
              </div>
              <div className="my-4"></div>
              <div>
                Prior to moving to Jackson County, Leith had lived in Davidson
                County and was quite active on solid waste, particularly
                anti-incineration issues. Her daughter Lila typed address labels
                for <i>RAM&apos;s</i> second newsletter. Her house became the
                staging area for <i>RAM</i> newsletters&apos; bulk mailing
                preparations. Tables and floors full of piles.
              </div>
              <div className="my-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default function Bios() {
//   return (
//     <div>
//       <div className="bg-gradient-to-l from-[#873f08] to-[#1a0c02] text-zinc-300 pb-72">
//         <SecondaryNavbar {...navbarProps} />
//         <div
//           id="title-and-text-box"
//           className="bg-neutral-950 m-11 p-8 rounded-6xl"
//         >
//           <div className="m-4 p-4 text-center text-7xl pt-serif-700 text-[#ffe9bf] italic">
//             Bios
//           </div>
//           <div className="m-4 p-4 text-2xl">
//             <i>RAM</i> is a research and education-based group of citizens which
//             advocates for the development of recycling techniques which foster
//             industrial improvement, new jobs, prosperity, awareness, health, a
//             cleaner environment, and the elimination of landfilling.
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
