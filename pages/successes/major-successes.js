import Link from "next/link";

import SecondaryNavbar from "@/components/SecondaryNavbar";
import BiographyNavbar from "@/components/BiographyNavbar";
import { navbarProps } from "@/pages/successes";

export const bioNavbarProps = {
  // bgColor: "bg-[#ff8938]",
  bgColor: "bg-successesBg",
  titles: [
    "Internalizing externalized material recovery benefits and disposal costs",
    "First state soil-based compost quality standards as an incentive class",
    "First voluntary closure of a large, financially-viable, WTE incinerator with up-to-date air pollution control equipment",
    "No more treated incinerator ash outside landfills",
  ],
  path: "/successes/major-successes",
};

export default function MajorSuccesses() {
  return (
    <div>
      <div className="bg-gradient-to-l from-[#225394] to-[#060e1a] text-zinc-300 pb-16">
        <SecondaryNavbar {...navbarProps} />
        <BiographyNavbar {...bioNavbarProps} />
        <div
          id="title-and-text-box"
          className="bg-neutral-950 m-11 p-8 rounded-6xl"
        >
          <div className="my-4 py-4 text-center text-5xl pt-serif-700 text-[#bfe6ff] italic">
            Major Successes
          </div>

          <div
            id="internalizing-externalized-material-recovery-benefits-and-disposal-costs"
            className="mx-4 pt-4 text-2xl mb-24"
          >
            <div className="border-b-2 border-zinc-300 mt-2 pb-1 font-bold mb-2">
              Internalizing externalized material recovery benefits and disposal
              costs
            </div>
            <p>
              While this may sound boring, it is probably <i>RAM&apos;s</i> most
              important, long-lasting, and far-reaching achievement. Parts of it
              extend back before <i>RAM</i> formed, and parts played major
              underlying roles in success numbers 4, 7, 19-21, and 23 on the
              preceding{" "}
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
              pages, and what is on the subsequent{" "}
              <Link
                href="/successes/current-campaigns"
                className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-300 transition"
                // target="_blank"
              >
                <strong>Current Campaigns</strong>
              </Link>{" "}
              page.
            </p>
            <div className="bg-blue-700 px-12 py-6 bg-opacity-30 rounded-2xl mt-8">
              <p className="mb-8">
                Acquaintance with the concept for this -- and the application of
                it -- came as a result of John van der Harst doing work for the
                Institute for Self-Reliance (ILSR), in Washington, DC. -- which
                was at that time (early 1992) looked to for guidance nationally
                on the waste topic. This concept was needed to prove what John
                was hired to do.
              </p>
              <p>
                ILSR had not done this previously, referring to such costs and
                benefits as supplemental to the material recovery vs. disposal
                topic. John recommended that ILSR upgrade its economic analysis
                approach. ILSR felt that would make their previous work -- which
                they made money selling -- seem obsolete. ILSR not only chose to
                continue with their previous economically incorrectly-modelled
                valuations, but altered their contract&apos;s scope of work --
                physically crossing out part of it -- to preclude John from
                using this on their project thereafter. Further, ILSR refused to
                pay John for half of his previous work. John left in disgust.
                What a calcified, talent-wasting outfit! Not true to their PR.
                Thieves and frauds.
              </p>
            </div>
            <p className="mt-8">
              Back in Nashville, while planning for the second wet/dry pilot,
              John was ambushed by four lumber-and-baseball bat-wielding thugs,
              after being warned by a national disposal company manager that
              something might happen if he did not back off from his activism.
              John was badly injured, but survived. Broken nose. Sight lost in
              one eye, which fortunately later returned. Dental damage to a set
              of 32 teeth without a single filling in any of them. Every bit of
              strength and flexibility paid off. The connection seemed very
              obvious. John&apos;s previous group did not offer what he felt was
              the necessary preventative action called for, to protect their
              primary researcher. With this added to a long history of
              mismanagement in that group, John left.
            </p>
            <p className="mt-8">
              The attack confirmed the effectiveness of his work exposing sham
              recycling promoted by the disposal industry to preserve their
              disposal business.
            </p>
            <p className="mt-8">
              Later, John found out from a lobbyist that the waste company
              manager subsequently was promoted.
            </p>
            <p className="mt-8">
              After two traumatic leavings within a few months of each other,
              John seriously evaluated other affiliation options. All other
              groups would not allow John to upgrade their previous ineffective
              agendas. So John did what he had never aimed to do before. He
              conceived and organized <i>RAM</i>. That took a lot of time and
              effort. Often, tough choices faced criticism no matter what
              direction was chosen.
            </p>
            <p className="mt-8">
              After producing <i>RAM&apos;s</i> first newsletter, John applied
              economic internalization to incinerator expansion in Nashville --
              for a facility which then touted the best economic performance of
              any incinerator in the U.S., with its triple revenue stream. After
              completing a 5-scenario comparative analysis, John became the only
              person in Davidson County calling for shutting down the
              incinerator. He then used his analysis for over 9 years, as the
              foundation for an ultimately successful campaign. A powerful tool
              indeed!
            </p>
          </div>

          <div
            id="first-state-soil-based-compost-quality-standards-as-an-incentive-class"
            className="mx-4 pt-4 text-2xl mb-24"
          >
            <div className="border-b-2 border-zinc-300 mt-2 pb-1 font-bold mb-2">
              First state soil-based compost quality standards as an incentive
              class
            </div>
            <p className="mb-8">
              This campaign battled what was then becoming a nationwide wave of
              facilities producing bad quality composts, which threatened the
              image and popularity of composting. <i>RAM&apos;s</i> John van der
              Harst and Sandy Loyd had seen plenty of bad-quality composts being
              produced at facilities they had toured on their travels together.
              John had collected, kept, and labeled samples of these in glass
              jars.
            </p>
            <p>
              In addition to what has been described on the{" "}
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
              pages in item 6 (which is not being repeated here), it can not be
              overstated how much science and health risk assessment needed to
              be studied in order to successfully complete the regulatory
              establishment process. Also, communicating those complexities so
              that a wide variety of citizens could make sense of them was
              important. Two rounds of commenting took a lot of time.
            </p>
            <div className="bg-blue-700 px-12 py-6 bg-opacity-30 rounded-2xl mt-8">
              <p className="mb-8">
                A brief primer: For heavy metal levels, soil-based standards are
                typically derived by multiplying levels found in typical soils
                by 10, and then modifying from there based on any good science
                that becomes available. The 40 CFR (Code of Federal Register)
                Part 503 numbers come from health risk assessment, presenting a
                limited set of hypothetical scenarios as models, in isolation,
                in which assumptions are made as to what uptake by life should
                be expected, and the effect of that. Thresholds are used which
                assume no life is otherwise or previously impacted (as many
                children are, with lead -- they have already surpassed their
                thresholds).
              </p>
              <p className="mb-8">
                Advocates for these find comfort in NAEOL (No Adverse Effects
                Observed Levels) numbers that are higher -- but again, in order
                to get numbers, these came from artificial, controlled
                conditions . Once critics find effects at lower levels, as they
                have for cadmium, for example, trust in the whole set goes out
                the window.
              </p>
              <p>
                Mistrust also stems from conflict-of-interest, as the risk
                assessment was influenced heavily by sewage sludge producers who
                had enormous levels of heavy metals in material that they were
                wanting others to accept. On the plus side, compost added to
                soils low in organics -- as many are, unfortunately, after years
                of tilling and erosion -- generally lowers heavy metal uptake by
                edible life. Exceptions exist, like fungi, which tend to absorb
                mercury readily. But who eats mushrooms?
              </p>
            </div>
            <p className="mt-8">
              The lower-quality advocates in government/industry eventually paid
              for Rufus Cheney, of USDA, to address the board. A composting
              advocate had commented how ambitious Rufus seemed to be, as an
              amazingly prolific author. Discussion before the meeting evoked no
              passion. No ambition was obvious. Rather, he seemed like the type
              who would allow his name to be put on anything industry wrote.
              Rufus&apos; address to the board was unremarkable. The board --
              with only one seat held by a representative of the environmental
              community -- still seemed to have at least respect for those
              calling for higher standards -- more than when this process began.
            </p>
          </div>

          <div
            id="first-voluntary-closure-of-a-large,-financially-viable,-wte-incinerator-with-up-to-date-air-pollution-control-equipment"
            className="mx-4 pt-4 text-2xl mb-24"
          >
            <div className="border-b-2 border-zinc-300 mt-2 pb-1 font-bold mb-2">
              First voluntary closure of a large, financially-viable, WTE
              incinerator with up-to-date air pollution control equipment
            </div>
            <p className="mb-8">
              Some more details not found on the{" "}
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
              pages, item 7: When first proposed, the Staff Attorney for the
              40-member Metropolitan Council of Nashville and Davidson County
              publicly lectured against anyone who would propose such a
              supposedly impossible thing. The non-profit Nashville Thermal
              Transfer Corp. (NTTC) board included business and state and local
              government-appointees. Chilled water was its biggest commodity,
              followed by steam and electricity. It heated and cooled most of
              downtown Nashville. Avoidance of financing and maintaining
              separate HVAC equipment helped spur downtown development.
              Providing revenue bond financing for expansion of NTTC in 1983 had
              received a unanimous Council vote. American Ash Recycling Corp.
              (AAR), after late 1993, assured Metro that no more ash landfill
              expansion would ever be required.
            </p>
            <p className="mb-8">
              When incineration was proposed in Oakland County, Michigan, NTTC
              was used as the example to look at. Its economics were the best in
              the industry.
            </p>
            <p className="mb-8">
              Amid a massive search for a new local landfill, recycling became a
              topic, but mostly, city leaders backed expansion of incineration.
              Both at NTTC, and two separate additional ones.
            </p>
            <p className="mb-8">
              One by one, expansion plans were thwarted. Barely. But expansion
              still had a lot of support.{" "}
            </p>
            <p className="mb-8">
              Then, in front of this expansion backdrop, picture <i>RAM</i>{" "}
              coming out with a plan to close the incinerator. What?? Nobody saw
              that coming. Not even the other recycling, solid waste, and
              anti-incinerator advocacy groups.
            </p>
            <p className="mb-8">
              A multi-pronged campaign ensued which accumulated enough support
              for closure that Metro Council leadership (the Chair -- the Vice
              Mayor -- following the pro-incinerator Mayor), 3 years later,
              allowed an incinerator lobbyist to work the Council ahead of the
              required air pollution control equipment upgrade vote, one-by-one,
              in committee rooms, while citizens watched from outside locked,
              glass doors. <i>RAM</i> had also tried to achieve tighter
              standards than the USEPA allowed. Many pages of comments.
            </p>
            <p className="mb-8">
              After a slim majority vote to upgrade NTTC&apos;s APC equipment,
              to allow it to keep going past 2000, the mayor&apos;s arrogant
              chief policy guru berated <i>RAM&apos;s</i> John van der Harst in
              front of Council members. &quot;Get a life,&quot; he loudy
              exclaimed, &quot;Thermal is here to stay... It will never be shut
              down.&quot; No one there came to John&apos;s defense.
            </p>
            <p className="mb-8">
              One meeting later, an emboldened AAR sued <i>RAM</i> and John,
              separately, claiming tortious interference with legitimate
              business interests. Papers were served at the Council meeting.
              Carl Evertson was there. He and John headed straight over to the
              newspapers&apos; offices. Carl and others had let John do the
              heavy lifting on that issue previously. Hence a convenient,
              simple, isolated SLAPP target.
            </p>
            <p className="mb-8">
              After 3 1/4 years were taken out of John&apos;s and much of
              Carl&apos;s, Sherry Sloan&apos;s and others&apos; lives, amid
              multiple legal filings, final papers were mailed from the airport,
              as John raced to his mother&apos;s deathbed. She never was able to
              learn that John was finally free from his legal ordeal.
              John&apos;s new mess was 8 months dealing with a packed house and
              family. Wide distribution. Lots of recycling.
            </p>
            <p className="mb-8">
              5 years after John was berated over a seemingly impossible
              outcome, Metro Council voted to close NTTC. AAR&apos;s contract
              was ended. Temporary gas boilers used to transition to the planned
              new District Energy System were almost completely installed when a
              huge tipping floor fire caused Metro to cease operations at that
              point. One long rushed weekend, plus one business day, were all
              buildings had to endure lower HVAC function.
            </p>
            <p className="mb-8">
              A few months after NTTC closed, John noticed other distance
              runners besides himself for the first time in East Nashville. And
              bicyclists. Previously few of those ventured there, downwind of
              Thermal. East Nashville had been a lower-income part of town.
              Hence John living there. Runners and cyclists typically represent
              higher income demographics. Sure enough, gentrification then took
              off. 6 years after Thermal&apos;s closure, the East Nasty Running
              Club formed there (name paying homage to the former long-term
              vibe), and grew to become the biggest running club in the region.
              Half the runners would come there from other parts of town, and as
              far away as Nolensville and Culleoka. His East Nasty of the Week
              bio called John &quot;the original East Nasty.&quot;
            </p>
            <p className="mb-8">
              Ascend Amphitheater now stands where NTTC once did. Musicians
              perform where once the Walking Incinerator and Walking Ashfill
              used to -- dripping imitation quench water and leachate in their
              paths. Was <i>RAM</i> street theater higher in quality? It evoked
              far more intense emotion. It got good things done.
            </p>
          </div>

          <div
            id="no-more-treated-incinerator-ash-outside-landfills"
            className="mx-4 pt-4 text-2xl mb-24"
          >
            <div className="border-b-2 border-zinc-300 mt-2 pb-1 font-bold mb-2">
              No more treated incinerator ash outside landfills
            </div>
            <p>
              What was included on the preceding{" "}
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
              pages, item 8, left out a lot of detail. Not all of the remainder
              will be covered here either. It&apos;s too long. What&apos;s
              important to know is 1) the nature of incinerator ash, and 2) what
              treating it can lead to.
            </p>
            <div className="bg-blue-700 px-12 py-6 bg-opacity-30 rounded-2xl mt-8">
              <ol className="list-decimal list-outside mx-2">
                <li id="1" className="mb-16">
                  <p className="mb-4">
                    Solid waste is burned to reduce volume. While landfilling
                    reduces waste volume by about 50%, via compaction, and
                    balefilling by about 60%, burning reduces it by 85-90%.
                    Some, but not a lot, more. Burning waste reduces its weight
                    by less -- only 60-75% -- because revenues are maximized by
                    higher and constant rate throughputs, which leaves a lot of
                    the very-heterogeneous waste unburned.
                  </p>
                  <p className="mb-4">
                    Incineration creates a time-varying toxic and reactive,
                    corrosive, chemical mix. Only a few of the vast chemical set
                    created are regulated. Scrubbing more from smokestack
                    emissions puts more toxins into the ash. When visiting the
                    ash landfill where American Ash Recycling Corp. of TN (AAR)
                    was digging into it for their feedstock, the smell, and
                    accompanying insects, indicated a lot of raw, rotting waste.
                  </p>
                </li>
                <li id="2" className="mb-8">
                  <p className="mb-4">
                    AAR did a laudable job of recovering pieces of metal from
                    ash, to be recycled. However, it also paid to use a patented
                    process to spray a phosphoric acid solution on the rest
                    (decreasing lead&apos;s solubility, but increasing other
                    heavy metals&apos; like mercury), call it treated, and
                    transport it to construction sites for use as a loose fill
                    material. It was not supposed to remain surface-exposed
                    (1,800 ppm lead [EPA considers 400 hazardous]), but in
                    practice it was. A lot. This visibly violated AAR&apos;s
                    state permit, which was based upon modelling in a health
                    risk assessment (HRA) AAR submitted. Complaints were
                    dismissed. Then, same for complaints with photos. Ditto with
                    complaints with photos and translucent overlays with arrows.
                  </p>
                  <p className="mb-4">
                    At some point, the HRA, purposely intimidatingly long,
                    needed to be read, studied, and its flaws attacked.
                    Modelling, threshold, and toxicological assumptions ignored
                    realities. Many substances in ash were omitted. Only then,
                    the state brought in staff with HRA experience. They were
                    less lazy. Less slow. They educated formerly clueless staff.
                    Notices of Violation followed. AAR was shut down for a
                    while. Reevaluation occurred. Limits were tightened. Finally
                    TAA was only allowed on large sites which mimicked landfill
                    conditions more. By that point, complaints filled one
                    2&quot; ring binder plus one 1 1/2&quot; ring binder.
                  </p>
                </li>
              </ol>
            </div>

            <p className="mt-8">
              As those notebooks filled, tough confrontations occurred. Sherry
              Sloan was cornered in a convenience store, and warned she could be
              shot if she continued. The store clerk denied witnessing this to
              police. John was ambushed by three thugs, after running almost 6
              miles with copies. A passing driver stopped after seeing a fleeing
              John knocked to the ground. The thugs fled. He allowed John to get
              in the back of his truck, to escape. Only facial bruises and
              pulled forearm muscles this time. AAR employees confronted Steve
              Henry and John when they tried to visit. Steve drove a hasty
              retreat. An AAR employee employed tailgating road-rage tactics
              against Sherry Slone -- once alone, and once with John. Sherry was
              not tailgating when treated ash spilling/bouncing/blowing off a
              truck, and the roadway behind it (a common occurrence) cracked her
              windshield.
            </p>
            <p className="mt-8">
              <i>RAM</i> tried to suggest ways for AAR to improve their product.
              A cordial meeting was facilitated by Metro. No deal. <i>RAM</i>{" "}
              persuaded Metro to separate fly and bottom ash, only allowing AAR
              to access bottom ash. NTTC and AAR agreed. Finally, closure of
              NTTC cut off AAR&apos;s supply. Metro ended AAR&apos;s contract
              after the Council vote, and negotiated a low purchase price for
              their building. AAR continued to show a photo of their former
              processing facility on their website, implying it still operated.
              This self-inflicted dishonesty caused other environmental groups
              to ask <i>RAM</i> about it. That hurt AAR&apos;s reputation even
              further.
            </p>
            <p className="mt-8">
              The lawsuits filed by AAR and its affiliates came amid the
              regulatory drama. Initial, clueless state staff&apos;s negligence
              enabled lax permits, hid violations, and denied enforcement. One
              put that ignorance in writing. A single I-don&apos;t-see-anything
              letter. That emboldened AAR to get careless, and employ classic
              SLAPP lawsuit tactics when facing a single, poor, but extremely
              effective opponent. Tennessee was one of 3 states with a Chancery
              Court (Delaware and Louisiana are the others), designed to
              streamline business dispute resolution. This case was assigned to
              a Republican-appointed Chancellor not inclined to believe
              businesses would sue frivolously.
            </p>
            <p className="mt-8">
              A kind-but-very-direct, environmentally-experienced attorney
              suggested by the Southern Poverty Law Center, Mary Parker, brought
              realism to bear, amid limited options, including no prospect of
              significant money. She advocated trying to end this the quickest
              way possible, using First Amendment grounds. A drawback was, this
              would allow AAR to hammer <i>RAM</i> and John publicly on the
              issue, making it look like he was hiding behind free-speech laws.
              If John talked too much about the issue, that risked this becoming
              a dispute over the issue -- far more complex, and costly, legally.
            </p>
            <p className="mt-8">
              John put all of the responsibility on himself, to spare other{" "}
              <i>RAM</i> personnel. AAR accepted that, gaining the image of its
              opponent appearing smaller.
            </p>
            <p className="mt-8">
              Mary recruited help from attorney Stacy Gibson, an associate she
              knew was interested in First Amendment issues. John talked with an
              expert on SLAPPs at the University of Denver. Carl Evertson
              purchased his book, <i>SLAPPs: Getting Sued for Speaking Out</i>,
              by George W. Pring and Penelope Canan, Temple University Press. A
              must-read on this topic. Stacy left that book fringed with post-it
              strips. Its legal citations saved a lot of time.
            </p>
            <p className="mt-8">
              At the first hearing, Mary was able to show enough photos to
              establish need, an important component of the malice-standard
              checklist. Chancellor Lyle -- thorough, but lacking evidence --
              ruled against AAR, but then suggested how they might be able to
              proceed successfully, and allowed them to conduct discovery on
              John. One-sided. More time consumed -- one of the very purposes of
              filing SLAPP suits.
            </p>
            <p className="mt-8">
              Along the way, a long-time self-promoter filed a
              Friend-of-the-Court Brief, representing himself in court.
              Chancellor Lyle questioned his purpose, clearly intending to
              dismiss it. Mary kindly proposed a solution: This could be
              registered as a demonstration of external support. More time
              consumed. But also another newspaper article. Mary and Stacy ended
              up getting paid mostly with publicity. Plus compliments, and who
              they came from. The courtroom gallery, aside from AAR reps,
              contained John&apos;s supporters. Some money came from fundraising
              Sandy Hepler organized. Others chipped in as well. Some quite
              generously. The compliments seemed to matter most. Both Mary and
              Stacy, afterward, both had long and successful careers.
              Mary&apos;s bio is in several Marquis Who&apos;s Who reference
              books, as is John&apos;s.
            </p>
            <p className="mt-8">
              Chancellor Lyle eventually ruled against AAR, with prejudice,
              meaning AAR could not appeal further. She still refused to call it
              a SLAPP suit, nullifying the use of a state SLAPP suit law passed
              amid this lawsuit and its publicity. John sued back for damages.
              AAR hired another attorney, who filed another lawsuit, in federal
              court. This focused on McDonald&apos;s reversal on prior use of
              AAR&apos;s product. Discovery proceeded. Mary and John visited
              corporate attorney Joe Prochaska to hear about possible court
              action risks, including a judge mistakenly issuing an opinion on
              the issue itself that might be underinformed. AAR&apos;s new
              attorney, reading the sheer enormity of documentation against
              AAR&apos;s product at this point, offered to drop their lawsuit if
              John would drop his. Mary and Joe drew up the paperwork, and John,
              racing to his dying mother&apos;s bedside in Michigan, mailed it
              in from the airport. That was a significant factor in the
              settlement decision. All activists have personal lives. Not just
              those carrying light loads.
            </p>
            <p className="mt-8">
              More detailed accounts of <i>RAM&apos;s</i> successes on this
              issue in other states, plus another success related to it, remain
              under development. <i>RAM</i> is proud of these. But, they are
              lengthy. And complicated. <i>RAM</i> prefers to concentrate its
              time, now, more on preventing the need for disposal to begin with.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
