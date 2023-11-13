import SecondaryNavbar from "@/components/SecondaryNavbar";
import { navbarProps } from "@/pages/successes";

export default function BriefHistory() {
  return (
    <div>
      <div className="bg-gradient-to-l from-[#225394] to-[#060e1a] text-zinc-300 pb-16">
        <SecondaryNavbar {...navbarProps} />
        <div
          id="title-and-text-box"
          className="bg-neutral-950 m-11 p-8 rounded-6xl"
        >
          <div className="m-4 p-4 text-center text-6xl pt-serif-700 text-[#bfe6ff] italic">
            Some of RAM's Successes
          </div>
          <div className="mx-12 text-2xl">
            <ol className="list-decimal list-outside">
              <li id="1" className="pt-3">
                Set a high standard for studying issues by touring over 200
                facilities in 19 states and Ontario. 1989-present.
              </li>
              <li id="2" className="py-3">
                Conducted first series of 2-stream wet/dry recycling/composting
                pilots in southeast U.S. (to our knowledge) and tabulated
                statistics (78%-98% recovery), 1991-93
              </li>
              <li id="3" className="py-3">
                Helped inspire Tennessee Department of Corrections wet/dry
                recycling/composting program, 1991-95
              </li>
              <li id="4" className="py-3">
                Calculated economic impact of recycling all easily available
                basic Davidson County, Tennessee materials 1993
              </li>
              <li id="5" className="py-3">
                Successfully argued against allowing landfills in wetlands in
                Tennessee via Aquatic Resource Alteration Permit (ARAP),
                1993-final vote, Oct 4, 1994
              </li>
              <li id="6" className="py-3">
                Led effort that resulted in Tennessee being the first U.S. state
                with soil-based compost quality standards as an incentive class
                (Type A), 1993-final vote June 2, 1998
              </li>
              <li id="7" className="py-3">
                Achieved world’s first and only, to-date (to our
                knowledge),voluntary closure of a large, financially viable
                waste-to-energy plant with up-to-date air pollution
              </li>
              <li id="8" className="py-3">
                Eliminated permitting of treated incinerator ash as loose
                construction material in several states, 1993-present
              </li>
              <li id="9" className="py-3">
                Supported closure of unlined Bordeaux landfill in Davidson
                County, Tennessee accomplished March 19, 1994
              </li>
              <li id="10" className="py-3">
                Supportive material sent to Cedar Rapids, Iowa, was successfully
                used to end consideration of incineration and ash reutilization
                proposal, 1994
              </li>
              <li id="11" className="py-3">
                Successfully advocated for permanent household hazardous waste
                facility in Davidson County, Tennessee, 1994-96
              </li>
              <li id="12" className="py-3">
                Successfully persuaded Davidson County, Tennessee to try
                co-collection, 1996
              </li>
              <li id="13" className="py-3">
                Guided Davidson County to separately monofill fly ash and bottom
                ash, 1997-2002
              </li>
              <li id="14" className="py-3">
                Documentation sent to Boulder, Colorado, helped city to choose
                nonprofit Ecocycle to design and operate a new MRF instead of a
                for-profit proposal, 1998
              </li>
              <li id="15" className="py-3">
                Successfully argued against use of incineration ash as a plastic
                wood filler in Spokane, Washington, 2001
              </li>
              <li id="16" className="py-3">
                Helped mobilize ultimately successful opposition to a C&D
                landfill proposed for a former quarry off McCrory Lane. in
                Davidson County, Council District 35, 2006
              </li>
              <li id="17" className="py-3">
                Helped stop a C&D landfill and outdoor transfer station proposed
                in Davidson County, Tennessee Council District 22, 2012
              </li>
              <li id="18" className="py-3">
                Successfully argued against permitting a transfer station in
                Davidson County, Council District 5, 2012.
              </li>
              <li id="19" className="py-3">
                Calculated appropriate disposal tax levels 8 different ways,
                2012
              </li>
              <li id="20" className="py-3">
                Submitted legislation content to achieve independent disposal
                tax valuation and applications of this, 2012. This was rejected
                by Davidson County, citing restrictive state law, but that
                effort still built momentum for supporting the concept, and
                amending state law.
              </li>
              <li id="21" className="py-3">
                Successfully amended Tennessee state law to allow Davidson
                County to include all costs associated with disposal in assessed
                fees, 2015-passage in 2016. Kudos to Sen. Jeff Yarbro and the
                late Rep. Bill Beck for sponsoring the legislation with
                then-Rep. Brenda Gilmore joining Bill as a sponsor. Bill
                language credits are deserved by Rep. Harold Love. Support was
                not unanimous in either chamber, but not too far off. The Sierra
                Club's lobbyist, Scott Banbury, helped.
              </li>
              <li id="22" className="py-3">
                Successfully persuaded the Davidson County Solid Waste Region
                Board to call for a Zero-Waste Plan for its 10-year update, for
                the first time, March 2017. Credit to Linda Breggin for help on
                this. Though Metro's Dept. of Public Works successfully watered
                it down the scope of work, it did retain what was called "triple
                bottom line" economic valuation of recycling, which was what RAM
                had preached about for so long (see items 19-21 above) that it
                would have been just too obvious if it had been omitted.
              </li>
              <li id="23" className="py-3">
                Went on record as opposing passage of Davidson County Solid
                Waste Region Board 10 year plan on grounds that its methodology
                would not achieve zero waste. The plan passed, March 2019, but
                results so far support RAM's assessment, so RAM's integrity and
                reputation remain.
              </li>
              {/*
              <li id="24" className="py-3"></li>
              <li id="25" className="py-3"></li>
              <li id="26" className="py-3"></li>
              <li id="27" className="py-3"></li>
              <li id="28" className="py-3"></li>
              <li id="29" className="py-3"></li>
              <li id="30" className="py-3"></li> 
              */}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
