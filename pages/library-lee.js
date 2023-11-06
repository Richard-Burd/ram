import Document from "../components/Document";
import Link from "next/link";

export default function LibraryLee() {
  return (
    <div>
      <div className="mt-20 text-center font-semibold text-4xl">
        📚 Library of Lee's Scanned Documents 📄
      </div>
      <div className="mx-4 text-2xl text-stone-800 px-10 pt-20">
        Each of the items below are documents that Lee scanned in. Each instance
        contains a document's preview picture (of the first page) a clickable
        PDF document showing all pages within the document, and a title /
        description for each one. The title and description are optional. The
        first two documents have them in order to show how the title and
        description would be displayed. The rest have no title or description.
        <br></br>
        <br></br>
        <b>NOTE:</b> the{" "}
        <text className="text-red-900 font-bold">red text </text>on the images
        below that says things like
        <text className="text-red-900 young-serif-font italic font-semibold">
          {" "}
          doc-1{" "}
        </text>{" "}
        is only tempoary and will not be on the final website. These are labels
        for all documents (doc) and figures (fig) we plan to put on the website.
        This makes it easy for the crew to discuss moving such-and-such doc or
        fig to a given place in the website.
        <br></br>
        <br></br>
        The below documents are sorted according to these{" "}
        <a
          href="https://drive.google.com/drive/u/1/folders/1syzldHRu9hgyGNEcuDR9ynVuVvfIzS0E"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline font-semibold"
        >
          seven binders of original scans
        </a>{" "}
        that Lee received from John.
      </div>
      <div id="binder-1">
        <div id="Agendas and Minutes">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-1 ➤ Agendas and Minutes
          </div>
          <div className="documents-element">
            <Document
              title="Meeting Minutes December 9th, 1992"
              leeTitle="Agendas_and_minutes (agenda) [12/9/1992]"
              fileName="doc-1"
              description="Attendees: Terry Keleher, Anna Motsejenko et. al."
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title="Jefferson County Solid Waste Management District Board"
              leeTitle="Agendas_and_minutes (minutes) [11/19/1992]"
              fileName="doc-2"
              description="Attendees: Elgin Crull, Fred Banks, Joyce St. Clain, et. al. This is a rambling sentence that will let us see what a longer description would look like for a particular document."
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Agendas_and_minutes_1 (Agenda) [9-14-1992]"
              fileName="doc-3"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>
        <div id="Ash Recycling">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-1 ➤ Ash Recycling
          </div>
          <div className="documents-element">
            <Document
              title=""
              leeTitle="Ash_Recycling_1 (RAM Press Conference Notes) [10-17-1993]"
              fileName="doc-4"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Ash_Recycling_2 (Opposition Resolution) [date unknown]"
              fileName="doc-5"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>
        <div id="BURNT">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-1 ➤ BURNT
          </div>
          <div className="documents-element">
            <Document
              title=""
              leeTitle="BURNT_1 (Letter to BURNT) [12-1993]"
              fileName="doc-6"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="BURNT_2 (Bylaws) [6-21-1993]"
              fileName="doc-7"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>
        <div id="Coalition of Green Thumbs">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-1 ➤ Coalition of Green Thumbs
          </div>
          <div className="documents-element">
            <Document
              title=""
              leeTitle="Coalition_of_Green_Thumbs_1 (Recycling Forum) [7-8-1993]"
              fileName="doc-8"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Coalition_of_Green_Thumbs_2 (John Speaking App)"
              fileName="doc-9"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Coalition_of_Green_Thumbs_3 (Public Opinion Survey)"
              fileName="doc-10"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Coalition_of_Green_Thumbs_4 (Recycling Forum 2) [7-9-1993]"
              fileName="doc-11"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>
        <div id="Convenience Center Rules">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-1 ➤ Convenience Center Rules
          </div>
          <div className="documents-element">
            <Document
              title=""
              leeTitle="Convenience_Center_Rules_1 (Public Comments) [11_17_1992]"
              fileName="doc-12"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Convenience_Center_Rules_2 (Amendment Proposal) [2_1_1993]"
              fileName="doc-13"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Convenience_Center_Rules_3 (BURNT letter) [3_2_1993]"
              fileName="doc-14"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Convenience_Center_Rules_4 (RAM letter) [3_13_1993]"
              fileName="doc-15"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>
        <div id="Environmental Justice Bill">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-1 ➤ Environmental Justice Bill
          </div>
          <div className="documents-element">
            <Document
              title=""
              leeTitle="Environmental_Justice_Bill_1 (Senate Bill 1499) [2-18-1993]"
              fileName="doc-16"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Environmental_Justice_Bill_2 (Summary) [1993]"
              fileName="doc-17"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Environmental_Justice_Bill_3 (Save Our Cumberland Mountains - Fact Sheet)"
              fileName="doc-18"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Environmental_Justice_Bill_4 (Summary) [1994]"
              fileName="doc-19"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Environmental_Justice_Bill_5 (Bad Boy Law Advert)"
              fileName="doc-20"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Environmental_Justice_Bill_6 (Legislative Update) [9-1993]"
              fileName="doc-21"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Environmental_Justice_Bill_7 (SOCM Handwritten Letter) [12-14-1992]"
              fileName="doc-22"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Environmental_Justice_Bill_8 (Bad Boy Law)"
              fileName="doc-23"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Environmental_Justice_Bill_9 (Proposed Amendment)"
              fileName="doc-24"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Environmental_Justice_Bill_10 (Senate_House List)"
              fileName="doc-25"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Environmental_Justice_Bill_11 (Waste Legislation Meeting Agenda) [1993]"
              fileName="doc-26"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Environmental_Justice_Bill_12 (Congressman Letter to John) [3-22-1993]"
              fileName="doc-27"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>
        <div id="Front Pocket">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-1 ➤ Front Pocket
          </div>
          <div className="documents-element">
            <Document
              title=""
              leeTitle="front_pocket_1 (comic - upper left important)"
              fileName="doc-28"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="front_pocket_2 (Federal Income Tax Exemption) [3_24_1993]"
              fileName="doc-29"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="front_pocket_3 (RAM Officers)"
              fileName="doc-30"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="front_pocket_4 (non-profit corporation founding) [1_15_1993]"
              fileName="doc-31"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="front_pocket_5 (charter) [1_15_1993]"
              fileName="doc-32"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="front_pocket_6 (Annual Report Form) [5_1_2015]"
              fileName="doc-33"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="front_pocket_7 (Annual Report Form) [5_1_2018]"
              fileName="doc-34"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>
        <div id="Near-Zero Landfilling">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-1 ➤ Near-Zero Landfilling
          </div>
          <div className="documents-element">
            <Document
              title=""
              leeTitle="Near-Zero_Landfilling_1 (House Rep Letter to John) [7-12-1993]"
              fileName="doc-35"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Near-Zero_Landfilling_2 (RAM How To Sheet) [7-31-1993]"
              fileName="doc-36"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Near-Zero_Landfilling_3 (Heavy Molded Products Handout) [8-23-1993]"
              fileName="doc-37"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Near-Zero_Landfilling_4 (Comparison) [1-1-1992]"
              fileName="doc-38"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Near-Zero_Landfilling_5 (RAM Endorsement) [1-1-1993]"
              fileName="doc-39"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Near-Zero_Landfilling_6 (Greenpeace Endorsement)"
              fileName="doc-40"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Near-Zero_Landfilling_7 (BURNT Endorsement)"
              fileName="doc-41"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Near-Zero_Landfilling_8 (Nashville Peace and Justice Center Endorsement)"
              fileName="doc-42"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Near-Zero_Landfilling_9 (LifeWorks Endorsement)"
              fileName="doc-43"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Near-Zero_Landfilling_10 (Board Reminder) [9-21-1993]"
              fileName="doc-44"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Near-Zero_Landfilling_11 (Waste Reduction Chart with Notes)"
              fileName="doc-45"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Near-Zero_Landfilling_12 (Letter to John) [1-17-1994]"
              fileName="doc-46"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>
        <div id="Solid Waste Reduction Goal">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-1 ➤ Solid Waste Reduction Goal
          </div>
          <div className="documents-element">
            <Document
              title=""
              leeTitle="Solid_Waste_Reduction_Goal_1 (Solid Waste Assistance Memorandum) [10_9_1992]"
              fileName="doc-47"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Solid_Waste_Reduction_Goal_2 (Amendment Draft)"
              fileName="doc-48"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Solid_Waste_Reduction_Goal_3 (RAM Response) [12_3_1992]"
              fileName="doc-49"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Solid_Waste_Reduction_Goal_4 (Council Comment) [12_7_1992]"
              fileName="doc-50"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Solid_Waste_Reduction_Goal_5 (John Response) [12_14_1992]"
              fileName="doc-51"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Solid_Waste_Reduction_Goal_6 (Ram Response) [1_12_1993]"
              fileName="doc-52"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Solid_Waste_Reduction_Goal_7 (Agenda Notice) [1_20_1993]"
              fileName="doc-53"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Solid_Waste_Reduction_Goal_8 (Memorandum) [1_22_1993]"
              fileName="doc-54"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Solid_Waste_Reduction_Goal_9 (Media Conference) [1_30_1993]"
              fileName="doc-55"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Solid_Waste_Reduction_Goal_10 (RAM Info Sheet) [1_31_1993]"
              fileName="doc-56"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Solid_Waste_Reduction_Goal_11 (News Article) [2_2_1993]"
              fileName="doc-57"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Solid_Waste_Reduction_Goal_12 (SW Control Board Agenda) [2_2_1993]"
              fileName="doc-58"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Solid_Waste_Reduction_Goal_13 (SW Control Board Members)"
              fileName="doc-59"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Solid_Waste_Reduction_Goal_14 (SWA Meeting Summary)"
              fileName="doc-60"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Solid_Waste_Reduction_Goal_15 (Waste Disposal Amendment)"
              fileName="doc-61"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>
        <div id="Thermal Replacement">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-1 ➤ Thermal Replacement
          </div>
          <div className="documents-element">
            <Document
              title=""
              leeTitle="Thermal_Replacement_1 (RAM letter to Metro Public Works) [5-19-1993]"
              fileName="doc-62"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Thermal_Replacement_2 (RAM letter to Metro Council) [6-21-1993]"
              fileName="doc-63"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Thermal_Replacement_3 (Info by John) [7-5-1993]"
              fileName="doc-64"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Thermal_Replacement_4 (Letter to Ron Wise) [9-14-1993]"
              fileName="doc-65"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Thermal_Replacement_5 (Cost Comparison) [11-8-1993]"
              fileName="doc-66"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Thermal_Replacement_6 (Press Conference Info) [11-10-1993]"
              fileName="doc-67"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Thermal_Replacement_7 (Mayors Response) [11-19-1993]"
              fileName="doc-68"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Thermal_Replacement_8 (RAM responds to Solid Waste Region Board) [11-8-1993]"
              fileName="doc-69"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>
        <div id="Wet/Dry">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-1 ➤ Wet/Dry
          </div>
          <div className="documents-element">
            <Document
              title=""
              leeTitle="wet_dry_1 (mayor letter to John) [10_27_1992]"
              fileName="doc-70"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="wet_dry_2 (resolution) [9_29_1992]"
              fileName="doc-71"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="wet_dry_3 (RAM letter) [11_12_1992]"
              fileName="doc-72"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="wet_dry_5 (RAM letter to Chairman) [4-26-1993]"
              fileName="doc-73"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="wet_dry_6 (John endorsement)"
              fileName="doc-74"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
