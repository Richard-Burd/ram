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
  path: "/about/bios",
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
          <div className="m-4 p-4 text-center text-5xl pt-serif-700 text-[#ffe9bf] italic">
            Some Notable RAM Members
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
              <div>More details are anticipated soon.</div>
            </div>
            <center className="link-icon-set">
              <a
                href={`/organizing/contacts/leith`}
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

          <div id="martha-yanchyshyn" className="pt-40">
            <div className="text-4xl standard-font-1 border-b-2 border-zinc-700 mt-2 -mb-2">
              Martha Yanchyshyn
            </div>
            <div className="my-7 standard-font-3 text-justify text-lg">
              <div>
                Martha has agreed to be <i>RAM&apos;s</i> contact person in
                Stewart County. She had toured Sevier County's co-composting
                plant with Pixie and John, so she had some feel as to what the
                scale of material processing could be like for counties similar
                to her's in size.
              </div>
              <div className="my-4"></div>
              <div>
                Martha has had a long-standing interest in politics. She
                previously ran for office in the State House. The expected style
                of running for office did not suit her tastes. She has been a
                part of the Cumberland Green Bioregional Council for at least 34
                years.
              </div>
              <div className="my-4"></div>
              <div>More details are anticipated soon.</div>
            </div>
            <center className="link-icon-set">
              <a
                href={`/organizing/contacts/martha`}
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

          <div id="colleen-mclanaghan" className="pt-40">
            <div className="text-4xl standard-font-1 border-b-2 border-zinc-700 mt-2 -mb-2">
              Colleen McLanaghan
            </div>
            <div className="my-7 standard-font-3 text-justify text-lg">
              <div>
                Colleen continues to be <i>RAM&apos;s</i> contact person in
                Wayne County after the death of her husband, Randy Nocton, who
                was to be <i>RAM&apos;s</i> contact there until Colleen insisted
                on sharing that role with him.
              </div>
              <div className="my-4"></div>
              <div>Colleen has a nursing background.</div>
              <div className="my-4"></div>
              <div>More details are anticipated soon.</div>
            </div>
            <center className="link-icon-set">
              <a
                href={`/organizing/contacts/colleen`}
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

          <div id="catherine-murray" className="pt-40">
            <div className="text-4xl standard-font-1 border-b-2 border-zinc-700 mt-2 -mb-2">
              Catherine Murray
            </div>
            <div className="my-7 standard-font-3 text-justify text-lg">
              <div>
                Catherine agreed to be <i>RAM&apos;s</i> contact person in
                Washington County, with the understanding that she specializes
                in oppositional activities. that role with him.
              </div>
              <div className="my-4"></div>
              <div>
                Catherine was one of the commenters on the issue of State
                compost quality standards.
              </div>
              <div className="my-4"></div>
              <div>More details are anticipated soon.</div>
            </div>
            <center className="link-icon-set">
              <a
                href={`/organizing/contacts/catherine`}
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

          <div className="m-4 p-4 text-center text-5xl pt-serif-700 text-[#ffe9bf] italic mt-40">
            Some Notable Past RAM Members
          </div>

          <div id="anna-haislip" className="pt-2">
            <div className="text-4xl standard-font-1 border-b-2 border-zinc-700 mt-2 -mb-2">
              Anna Haislip
            </div>
            <div className="my-7 standard-font-3 text-justify text-lg">
              <div>
                Anna became involved with <i>RAM</i> in 2011, along with Karen
                Cisler and Michael Goff, after a presentation by John at a
                Nashville Peace & Justice Center forum including four groups.
                She attended many meetings and field trips to tour TN solid
                waste facilities.
              </div>
              <div className="my-4"></div>
              <div>
                Anna pushed for more recent material to be used. Jeff Broussall
                provided that material to John. A better presentation of
                recycling economic value was created as a result.
              </div>
              <div className="my-4"></div>
              <div>
                Anna moved from Davidson County to Cheatham County, and then to
                Rutherford County, and married in the process.
              </div>
              <div className="my-4"></div>
            </div>
          </div>

          <div id="andrew-evans" className="pt-40">
            <div className="text-4xl standard-font-1 border-b-2 border-zinc-700 mt-2 -mb-2">
              Andrew Evans
            </div>
            <div className="my-7 standard-font-3 text-justify text-lg">
              <div>
                Andy attended meetings of Davidson County's Solid Waste Region
                Board, Metro Council, and education sessions for members of
                those bodies.
              </div>
              <div className="my-4"></div>
              <div>
                Andy holds an MS degree in Sociology. He worked for Urban Cruise
                Ship for several months, focusing on transportation.
              </div>
              <div className="my-4"></div>
            </div>
          </div>

          <div id="a-c-sandy-loyd" className="pt-40">
            <div className="text-4xl standard-font-1 border-b-2 border-zinc-700 mt-2 -mb-2">
              A. C. (Sandy) Loyd
            </div>
            <div className="my-7 standard-font-3 text-justify text-lg">
              <div>
                The late Alexander Cicero (Sandy) Loyd (1918-2004) was a
                Co-Incorporator of <i>RAM</i>. He was <i>RAM&apos;s</i>{" "}
                secretary until his death.
              </div>
              <div className="my-4"></div>
              <div>
                Sandy travelled with John to tour a wide variety of solid waste
                facilities in 19 U.S. states and Ontario, Canada, between 1989
                and 1996, generously covering car costs beyond fuel.
              </div>
              <div className="my-4"></div>
              <div>
                Sandy figured out wet/dry material recovery techniques
                independently of other practitioners, and championed that
                methodology. He helped out on logistics of pilot demonstrations
                of those techniques. Sandy also advocated automated cart
                collection long before it became commonly used.
              </div>
              <div className="my-4"></div>
              <div>
                Sandy's drawings of solid waste processing facilities were
                included as Option C in a proposal John submitted to the
                Nashville Thermal Transfer Corporation as it considered
                front-end processing systems. This gained access to the
                selection process, and helped material recovery levels to be
                valued higher in the debate.
              </div>
            </div>
          </div>

          <div id="sherry-force" className="pt-40">
            <div className="text-4xl standard-font-1 border-b-2 border-zinc-700 mt-2 -mb-2">
              Sherry Force
            </div>
            <div className="my-7 standard-font-3 text-justify text-lg">
              <div>
                The late Sharon Holland (Sherry) Force (1948-2012) accompanied
                John in conducting solid waste education sessions for Board and
                Council members, and other interested citizens, for many years.
                She loved participating in the wet/dry pilot demonstrations at
                the Alliance for Native American Indian Rights annual pow wows.
              </div>
              <div className="my-4"></div>
              <div>
                As an Assistant at Granbery Elementary School, the organization
                she understandably ended up identifying with, Sherry created a
                food waste composting program that provided feedstock for an
                on-site in-vessel composter procured with money diverted from
                the re-carpeting of Metro Nashville's Recycling Office. To
                Metro's further consternation, she also started and managed a
                nonconforming but beloved weekly recycling drop-off at the
                school that doubled as a community gathering event.
              </div>
              <div className="my-4"></div>
              <div>
                Known for her eloquent, prepared addresses at every Region Solid
                Waste Board meeting, Sherry left the last one before her death
                early, in disgust. The Board had become run by the department it
                was supposed to govern -- a headwind almost impossible to
                overcome.
              </div>
              <div className="my-4"></div>
            </div>
          </div>

          <div id="joe-shedlock" className="pt-40">
            <div className="text-4xl standard-font-1 border-b-2 border-zinc-700 mt-2 -mb-2">
              Joe Shedlock
            </div>
            <div className="my-7 standard-font-3 text-justify text-lg">
              <div>
                The late Joseph Gerard (Joe) Shedlock (1955-2018) joined{" "}
                <i>RAM</i> after leaving an older solid waste-related 501(c)(3)
                organization he had supported due to its tax status. The late
                Gene TeSelle had convinced him that status was a valuable tool.{" "}
                <i>RAM</i> had rejected that status as a government tool to
                restrict activism options. <i>RAM</i> had achieved more than
                Joe's previous group had, over fewer years.
              </div>
              <div className="my-4"></div>
              <div>
                Joe was famous for focusing on minutiae. Joe pointed out a
                grammatical error that had lurked in <i>RAM&apos;s</i> Mission
                Statement unnoticed for over two decades. His correction was
                examined by Leslie Allen, a skilled writer herself. She
                concluded Joe was right. His correction remains part of{" "}
                <i>RAM&apos;s</i> Mission Statement to this day. It's the second
                "Which," which had been a "that."
              </div>
            </div>
          </div>

          <div id="leslie-allen" className="pt-40">
            <div className="text-4xl standard-font-1 border-b-2 border-zinc-700 mt-2 -mb-2">
              Leslie Allen
            </div>
            <div className="my-7 standard-font-3 text-justify text-lg">
              <div>
                As Leslie had done before, she dove into supporting <i>RAM</i>{" "}
                at what proved to be an unsustainable level. She hosted many{" "}
                <i>RAM</i> meetings at her house, and even a <i>RAM</i>{" "}
                Christmas party. She attended meetings of the Davidson County
                Solid Waste Region Board, the Metro Council, and education
                sessions for members of these and others. She became{" "}
                <i>RAM&apos;s</i> secretary after Sandy Loyd's death.
              </div>
              <div className="my-4"></div>
              <div>
                Ultimately, Leslie's business, I Dream of Weenie, and many other
                long-term friends, required enough attention that involvement
                with <i>RAM</i> became a casualty.
              </div>
            </div>
          </div>

          <div id="suzanna-lonce" className="pt-40">
            <div className="text-4xl standard-font-1 border-b-2 border-zinc-700 mt-2 -mb-2">
              Suzanna Lonce
            </div>
            <div className="my-7 standard-font-3 text-justify text-lg">
              <div>
                Suzanna assisted in several key education sessions, which proved
                very effective tools to change minds on the issue of
                incinerating trash.
              </div>
              <div className="my-4"></div>
              <div>
                She worked in research at Vanderbilt University, and respected{" "}
                <i>RAM&apos;s</i> research.
              </div>
              <div className="my-4">
                Suzanna also tabled for <i>RAM</i> for several years. As the
                years added up, she became unwilling to keep involved for an
                unlimited length of time.
              </div>
              <div></div>
            </div>
          </div>

          <div id="randy-nocton" className="pt-40">
            <div className="text-4xl standard-font-1 border-b-2 border-zinc-700 mt-2 -mb-2">
              Randy Nocton
            </div>
            <div className="my-7 standard-font-3 text-justify text-lg">
              <div>
                The late Randy Nocton agreed to be <i>RAM&apos;s</i> contact
                person in Wayne County after moving there from Davidson County.
              </div>
              <div className="my-4"></div>
              <div>
                In Davidson County, Randy, a big fan of permaculture,
                specialized in composting. Yet, when Metro's Dept. of Public
                Works proposed a Bordeaux location for the wood waste processing
                operation John had proposed, he opposed it on grounds of
                environmental racism. Randy had a conscience. He was also
                present at a lot of anti-incineration events.
              </div>
              <div className="my-4"></div>
              <div>
                Randy loved street theater, and once dressed up as a green elf
                outside a Tennessee Environmental Council Green Tie fundraiser.
                No tie for Randy. He helped collect cardboard boxes for John to
                build costumes like the much-used Walking Incinerator. Randy was
                fascinated with the plumbing in John's subsequent Walking
                Ashfill costume.
              </div>
              <div className="my-4"></div>
              <div>
                The opportunity to live in the woods in Wayne County proved
                irresistible, along with the opportunity to marry Colleen
                McLanaghan, who wanted to share the <i>RAM</i> contact person(s)
                role with him.
              </div>
            </div>
          </div>

          <div id="sandy-hepler" className="pt-40">
            <div className="text-4xl standard-font-1 border-b-2 border-zinc-700 mt-2 -mb-2">
              Sandy Hepler
            </div>
            <div className="my-7 standard-font-3 text-justify text-lg">
              <div>
                The late John S. (Sandy) Hepler agreed to be <i>RAM&apos;s</i>{" "}
                contact person in Jackson County. a role which extended past his
                death in the person of his long-term friend, and caretaker for
                his final year, Leith Patton.
              </div>
              <div className="my-4"></div>
              <div>
                Sandy brought John to Hartsville to meet with someone he hoped
                could successfully promote the abandoned Hartsville Nuclear
                Power plant as a recycling center. Sandy later took John on a
                tour of a plastic waste molding start-up in Gainsboro, a
                drop-off site, and the kick-off press announcement for a
                5-county recycling marketing co-op.
              </div>
              <div className="my-4"></div>
              <div>
                When John was sued over his objections to companies treating
                loose incinerator ash and marketing it to under-informed
                building contractors as fill material, Sandy organized a
                well-attended fundraising event at Leith Patton's house. The
                money raised helped show attorney Mary Parker how much support
                John had in the environmental community. Later personal words
                with Mary meant a lot to her as well.
              </div>
            </div>
          </div>

          <div id="don-miller" className="pt-40">
            <div className="text-4xl standard-font-1 border-b-2 border-zinc-700 mt-2 -mb-2">
              Don Miller
            </div>
            <div className="my-7 standard-font-3 text-justify text-lg">
              <div>
                Don was a co-incorporator of <i>RAM</i>. He hosted{" "}
                <i>RAM&apos;s</i> second meeting, in late 1992, in Sumner
                County, and subsequently became <i>RAM&apos;s</i> contact person
                for that county.
              </div>
              <div className="my-4"></div>
              <div>
                He loved working with Sherry Force in pilot wet/dry material
                recovery pilot demonstrations.
              </div>
              <div className="my-4"></div>
              <div>
                Don got <i>RAM&apos;s</i> letterhead printed. To say that was
                used a lot would be a severe understatement.
              </div>
              <div className="my-4"></div>
              <div>
                He volunteered to be <i>RAM&apos;s</i> newsletter editor, but
                was cursed with computer problems and finally gave that task to
                John.
              </div>
            </div>
          </div>

          <div id="pixie-lewis" className="pt-40">
            <div className="text-4xl standard-font-1 border-b-2 border-zinc-700 mt-2 -mb-2">
              Pixie Lewis
            </div>
            <div className="my-7 standard-font-3 text-justify text-lg">
              <div>
                Evelyn (Pixie) Lewis drove Martha Yanchyshyn and John on a field
                trip to the Bedminster co-composting plant in Sevier County. She
                was fascinated with its approach Later, Pixie, like John, was
                interviewed twice on the topic by Michelle Carratu for her
                gardening program on WPLN radio.
              </div>
              <div className="my-4"></div>
              <div>Pixie later moved to Birmingham, AL.</div>
            </div>
          </div>

          <div id="connie-collopy" className="pt-40">
            <div className="text-4xl standard-font-1 border-b-2 border-zinc-700 mt-2 -mb-2">
              Connie Collopy
            </div>
            <div className="my-7 standard-font-3 text-justify text-lg">
              <div>
                Connie attended events like John's court case, press
                conferences, Metro Council's vote on its incinerator's air
                pollution control upgrade, and education sessions. She
                accompanied John to the third showing of a documentary about his
                activism and lifestyle at the 2004 Nashville Film Festival.
              </div>
              <div className="my-4"></div>
              <div>
                Connie later moved to Milwaukee, WI, where she still lives.
              </div>
            </div>
          </div>

          <div id="connie-kaylor" className="pt-40">
            <div className="text-4xl standard-font-1 border-b-2 border-zinc-700 mt-2 -mb-2">
              Connie Kaylor
            </div>
            <div className="my-7 standard-font-3 text-justify text-lg">
              <div>
                Connie typed <i>RAM</i> newsletter articles. She also drove to
                Murfreesboro with John to meet with Recycle Rutherford.
              </div>
              <div className="my-4"></div>
              <div>
                Connie specialized in animal rights. She helped <i>RAM</i>{" "}
                recognize the scale of euthanasia, and waste associated with
                that. Of course, she bolstered <i>RAM&apos;s</i> efforts to
                reduce waste by promoting vegan diets.
              </div>
            </div>
          </div>

          <div id="connie-lehman" className="pt-40">
            <div className="text-4xl standard-font-1 border-b-2 border-zinc-700 mt-2 -mb-2">
              Connie Lehman
            </div>
            <div className="my-7 standard-font-3 text-justify text-lg">
              <div>
                Connie had volunteered to update <i>RAM&apos;s</i> mailing list
                -- an arduous task. That task was postponed -- as it turned out,
                indefinitely -- due to the scale of pressing issues requiring
                immediate attention. Years worth. A folder full of article
                material remains to this day. <i>RAM</i> did a lot of work that
                unfortunately many could never read the details of.
              </div>
            </div>
          </div>

          <div id="dan-sweeton" className="pt-40">
            <div className="text-4xl standard-font-1 border-b-2 border-zinc-700 mt-2 -mb-2">
              Dan Sweeton
            </div>
            <div className="my-7 standard-font-3 text-justify text-lg">
              <div>
                The late Daville (Dan) Sweeton agreed to be <i>RAM&apos;s</i>{" "}
                contact person in Wilson County. His death ended that role.
              </div>
              <div className="my-4"></div>
              <div>
                Dan's son Terry organized a radio interview and public
                presentation by John in Lebanon. Dan's family -- He, Marilyn,
                Terry, Rusty, and the late Timothy -- attended a fundraising
                event organized by Sandy Hepler, at Leith Patton's house, for
                John's legal defence against four related companies promoting
                loose, treated ash use on construction sites.
              </div>
            </div>
          </div>

          <div id="michael-traugot" className="pt-40">
            <div className="text-4xl standard-font-1 border-b-2 border-zinc-700 mt-2 -mb-2">
              Michael Traugot
            </div>
            <div className="my-7 standard-font-3 text-justify text-lg">
              <div>
                Michael agreed to be <i>RAM&apos;s</i> contact person in
                Lawrence County until relinquishing that role after 10 years.
              </div>
              <div className="my-4"></div>
              <div>
                A Harvard grad, Michael taught, and promoted recycling, at The
                Farm School, in Summertown.
              </div>
            </div>
          </div>

          <div id="ethel-spiller" className="pt-40">
            <div className="text-4xl standard-font-1 border-b-2 border-zinc-700 mt-2 -mb-2">
              Ethel Spiller
            </div>
            <div className="my-7 standard-font-3 text-justify text-lg">
              <div>
                Ethel agreed to be <i>RAM&apos;s</i> contact person in Robertson
                County, until she felt the need to retire from that role due to
                advanced age, after 16 years.
              </div>
              <div className="my-4"></div>
              <div>
                Ethel had headed Wastewatchers for years, which specialized in
                opposing landfills. John attended one of their meetings in
                Pulaski, TN.
              </div>
            </div>
          </div>

          <div id="pat-mcalpine" className="pt-40">
            <div className="text-4xl standard-font-1 border-b-2 border-zinc-700 mt-2 -mb-2">
              Pat McAlpine
            </div>
            <div className="my-7 standard-font-3 text-justify text-lg">
              <div>
                Pat agreed to be <i>RAM&apos;s</i> contact person in Humphreys
                County, retiring from that role due to advanced age, after 16
                years.
              </div>
              <div className="my-4"></div>
              <div>
                Pat had become engaged in the solid waste issue after a landfill
                was proposed in Humphreys County.
              </div>
            </div>
          </div>

          <div id="myles-jakubowski" className="pt-40">
            <div className="text-4xl standard-font-1 border-b-2 border-zinc-700 mt-2 -mb-2">
              Myles Jakubowski
            </div>
            <div className="my-7 standard-font-3 text-justify text-lg">
              <div>
                Myles agreed to be <i>RAM&apos;s</i> contact person in Putnam
                County until he bowed out of that role after 10 years.
              </div>
              <div className="my-4"></div>
              <div>
                Myles was involved with the Cumberland Green Bioregional
                Council, which John has been a part of for over 30 years,
                helping waste issues become a frequent topic there.
              </div>
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
