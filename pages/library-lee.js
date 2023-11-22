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
        <text className="text-red-900 font-bold">red text </text>above the
        images below that say things like:<br></br>
        <text className="text-red-900 px-6">
          Agendas_and_minutes (agenda) [12/9/1992]{" "}
        </text>{" "}
        <br></br>
        are only tempoary and will not be on the final website. These are the
        labels that Lee put on all the documents he scanned in from the{" "}
        <a
          href="https://drive.google.com/drive/u/1/folders/1syzldHRu9hgyGNEcuDR9ynVuVvfIzS0E"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline"
        >
          seven binders of original scans
        </a>{" "}
        which he received from John. These original names are preserved in the
        code so as to make finding documents easier.
        <br></br>
        <br></br>
        <b>NOTE:</b> the{" "}
        <text className="text-red-900 font-bold">red text </text>on the images
        below that say things like
        <text className="text-red-900 young-serif-font italic font-semibold">
          {" "}
          doc-1{" "}
        </text>{" "}
        are only tempoary and will not be on the final website. These are labels
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

      <div id="binder-2">
        <div id="Bluestream">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-2 ➤ Bluestream
          </div>
          <div className="documents-element">
            <Document
              title=""
              leeTitle="Bluestem_1 (Volume 1.1) [8-1994]"
              fileName="doc-75"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Bluestem_2 (Volume 1.2) [9-1994]"
              fileName="doc-76"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Bluestem_3 (Volume 1.4) [10-1994]"
              fileName="doc-77"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Bluestem_4 (Volume 1.4) [11-1994]"
              fileName="doc-78"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="incinerator-vs-natural-gas">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-2 ➤ Incinerator vs Natural Gas
          </div>
          <div className="documents-element">
            <Document
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_1 (Public Hearing Schedule) [1-6-1994]"
              fileName="doc-79"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_2 (Cost Comparison) [11-8-1993]"
              fileName="doc-80"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_3 (Gas Conversion Benefits) [11-8-1993]"
              fileName="doc-81"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_4 (CPA Comments) [1-10-1994]"
              fileName="doc-82"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_5 (Councilmans Request to John) [1-24-1994]"
              fileName="doc-83"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_6 (Council Resolution R94-1008)"
              fileName="doc-84"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_7 (Solid Waste Public Hearing) [1-11-1994]"
              fileName="doc-85"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_8 (Solid Waste Public Hearing) [1-13-1994]"
              fileName="doc-86"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_9 (Solid Waste Public Hearing) [1-20-1994]"
              fileName="doc-87"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_10 (RAM replies to hearings) [1-31-1994]"
              fileName="doc-88"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_11 (Nashville Business Journal article on RAM) [2-14-1994]"
              fileName="doc-89"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_12 (joint meeting agenda notes)"
              fileName="doc-90"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_13 (Letter to Gary Odom) [5-10-1994]"
              fileName="doc-91"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_14 (Letter to Nashville Business Journal) [5-30-1994]"
              fileName="doc-92"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_15 (Letter to Civil Engineering) [5-30-1994]"
              fileName="doc-93"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_16 (Letter from Jennifer Rowe) [9-12-1994]"
              fileName="doc-94"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_17 (Letter from Jennifer Rowe) [9-22-1994]"
              fileName="doc-95"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_18 (Letter from Jennifer Rowe) [10-23-1994]"
              fileName="doc-96"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_19 (Waste to Energy Combustion Ash) [7-14-1994]"
              fileName="doc-97"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_20 (Ash Test Results) [7-26-1994]"
              fileName="doc-98"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_21 (Local News - Ash Price Rise) [8-5-1994]"
              fileName="doc-99"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_22 (BURNT letter to Metro Health) [8-7-1994]"
              fileName="doc-100"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_23 (Dioxin Sources) "
              fileName="doc-101"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_24 (EDF Ash Dump) [8-18-1994]"
              fileName="doc-102"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_25 (Activist Memorandum) [8-25-1994]"
              fileName="doc-103"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_26 (Ash Alert) [7-29-1994]"
              fileName="doc-104"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_27 (Letter to Representatives) [8-29-1994]"
              fileName="doc-105"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_28 (Memorandum to Incinerator Activists) [9-26-1994]"
              fileName="doc-106"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_29 (RAM Newsletter) [9-12-1994]"
              fileName="doc-107"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_30 (RAM Letter to Supporters) [9-12-1994]"
              fileName="doc-108"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_31 (Letter to Doug Cameron) [9-27-1994]"
              fileName="doc-109"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_31 (TEC Meeting Agenda) [11-19-1994]"
              fileName="doc-110"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_32 (RAM letter to Metro Health Dept) [10-12-1994]"
              fileName="doc-111"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_33 (Metro Council Workshop) [9-26-1995]"
              fileName="doc-112"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_34 (Metro Council Workshop 2) [9-26-1995]"
              fileName="doc-113"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_35 (Incineration Emission Standards) [2-14-1996]"
              fileName="doc-114"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_36 (RAM to Board of Health) [2-20-1996]"
              fileName="doc-115"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_37 (Ether Bunny Comic) [2-1996]"
              fileName="doc-116"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_38 (Letter to Nashville Scene) [6-29-1996]"
              fileName="doc-117"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_38 (Letter to The Tennessean) [6-30-1996]"
              fileName="doc-118"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_39 (Request to dismantle Thermal Plant) [7-15-1996]"
              fileName="doc-119"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_40 (Letter to Councilmember Janis Baird Sontany) [8-30-1996]"
              fileName="doc-120"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_41 (Resolution R96-474 Support)"
              fileName="doc-121"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_42 (Clearing the Air around Thermal event) [11-21-1996]"
              fileName="doc-122"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_43 (Meeting with the Mayor) [12-17-1996]"
              fileName="doc-123"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="lobbyist-issue">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-2 ➤ Lobbyist Issue
          </div>
          <div className="documents-element">
            <Document
              title=""
              leeTitle="Lobbyist_Issue_1 (Lobbyist Ordinance) [2-10-1995]"
              fileName="doc-124"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Lobbyist_Issue_2 (Lobbyist Registration) [1994]"
              fileName="doc-125"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Lobbyist_Issue_3 (Lobbyist Registration) [1995]"
              fileName="doc-126"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Lobbyist_Issue_4 (Air Pollution Control Vote) [2-7-1995]"
              fileName="doc-127"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Lobbyist_Issue_5 (Environmental Action Fund)"
              fileName="doc-128"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Lobbyist_Issue_6 (TN Conservation League) [12-20-1994]"
              fileName="doc-129"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Lobbyist_Issue_7 (RAM to Metro Clerk - Ann P Murray) [2-10-1995]"
              fileName="doc-130"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Lobbyist_Issue_8 (RAM to Metro Clerk - John P Williams) [2-10-1995]"
              fileName="doc-131"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Lobbyist_Issue_9 (RAM to Metro Clerk - Pam Wolfe) [2-10-1995]"
              fileName="doc-132"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Lobbyist_Issue_10 (Pam Wolfe responds) [2-14-1995]"
              fileName="doc-133"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Lobbyist_Issue_11 (John P Williams responds) [2-13-1995]"
              fileName="doc-134"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Lobbyist_Issue_12 (Ann P Murray responds) [2-13-1995]"
              fileName="doc-135"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Lobbyist_Issue_13 (RAM to Metro Clerk - Howard H (Butch) Eley) [2-16-1995]"
              fileName="doc-136"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Lobbyist_Issue_14 (RAM to Metro Clerk - Tony Campbell) [2-16-1995]"
              fileName="doc-137"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Lobbyist_Issue_15 (G Steven Henry to Metro Clerk) [2-17-1995]"
              fileName="doc-138"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Lobbyist_Issue_16 (RAM to Metro Clerk - Thomas V White) [2-17-1995]"
              fileName="doc-139"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Lobbyist_Issue_17 (RAM to Metro Clerk - John S Reed) [2-16-1995]"
              fileName="doc-140"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Lobbyist_Issue_18 (Ash Agreement) [1-28-1993]"
              fileName="doc-141"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Lobbyist_Issue_19 (Pam Wolfe addition) [2-16-1995]"
              fileName="doc-142"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Lobbyist_Issue_20 (John P Williams addition) [3-19-1995]"
              fileName="doc-143"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Lobbyist_Issue_21 (Metro Clerk responds) [5-17-1995]"
              fileName="doc-144"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Lobbyist_Issue_22 (Lobbying Questions)"
              fileName="doc-145"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="recycling-and-composting">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-2 ➤ Recycling and Composting
          </div>
          <div className="documents-element">
            <Document
              title=""
              leeTitle="Recycling_and_Composting_1 (Review and Letter from Sandy Helper) [7-19-1994]"
              fileName="doc-146"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Recycling_and_Composting_2 (Letter to Metro Council Candidates) [6-17-1995]"
              fileName="doc-147"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Recycling_and_Composting_3 (Backyard Composting) [1995]"
              fileName="doc-148"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Recycling_and_Composting_4 (Recycling Keeps Taxes Low) [1995]"
              fileName="doc-149"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Recycling_and_Composting_5 (Making Recycling Easier) [1996]"
              fileName="doc-150"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Recycling_and_Composting_6 (Good for the Garden) [1997]"
              fileName="doc-151"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Recycling_and_Composting_7 (Reuse article) [6-1996]"
              fileName="doc-152"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Recycling_and_Composting_8 (Reuse Haz Waste Collection)"
              fileName="doc-153"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Recycling_and_Composting_9 (MSW Recycling Submittal) [10-30-1995]"
              fileName="doc-154"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Recycling_and_Composting_10 (Metro Recycling Resolution) [11-21-1995]"
              fileName="doc-155"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Recycling_and_Composting_11 (R Cave on board) [11-22-1995]"
              fileName="doc-156"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Recycling_and_Composting_12 (Status Report Resolution)"
              fileName="doc-157"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Recycling_and_Composting_13 (Letter to John W Stone III) [1-17-1995-6]"
              fileName="doc-158"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Recycling_and_Composting_14 (Response to Resolution R96-139) [2-15-1996]"
              fileName="doc-159"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Recycling_and_Composting_15 (Garbage into Building Materials) [2-17-1996]"
              fileName="doc-160"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Recycling_and_Composting_16 (Resolution to Fund Recycling) [2-26-1996]"
              fileName="doc-161"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Recycling_and_Composting_17 (Council Letter) [3-11-1996]"
              fileName="doc-162"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Recycling_and_Composting_18 (RAM Responds) [4-13-1996]"
              fileName="doc-163"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Recycling_and_Composting_19 (Solid Waste Board Notes) [7-23-1996]"
              fileName="doc-164"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Recycling_and_Composting_20 (Solid Waste Board Response) [7-25-1996]"
              fileName="doc-165"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Recycling_and_Composting_21 (RAM Response) [8-5-1996]"
              fileName="doc-166"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Recycling_and_Composting_22 (Letter to Councilman Johns) [8-12-1996]"
              fileName="doc-167"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Recycling_and_Composting_23 (Letter to Councilwoman Eileen Beehan) [6-16-1996]"
              fileName="doc-168"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Recycling_and_Composting_24 (Letter to Councilman Julius Sloss) [7-4-1996]"
              fileName="doc-169"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Recycling_and_Composting_25 (Letter to Councilman Julius Sloss 2) [7-16-1996]"
              fileName="doc-170"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Recycling_and_Composting_26 (Green Box Fire Issue) [10-24-1996]"
              fileName="doc-171"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="solar-oven">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-2 ➤ Solar Oven
          </div>
          <div className="documents-element">
            <Document
              title=""
              leeTitle="Solar_Oven_1 (Solar Oven) [7-19-1994]"
              fileName="doc-172"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="solid-waste-general">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-2 ➤ Solid Waste - General
          </div>
          <div className="documents-element">
            <Document
              title=""
              leeTitle="Solid_Waste_-_General_1 (RAM letter to Mark Rogers - A Blueprint to Tackle Solid Waste Issues) [10-24-1994]"
              fileName="doc-173"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Solid_Waste_-_General_2 (Letter to Phil) [11-9-1994]"
              fileName="doc-174"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Solid_Waste_-_General_3 (Letter to Mark Bowers) [11-9-1994]"
              fileName="doc-175"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Solid_Waste_-_General_4 (Letter to EPA) [11-16-1994]"
              fileName="doc-176"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Solid_Waste_-_General_5 (Letter to EPA - HG lamps) [11-21-1994]"
              fileName="doc-177"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Solid_Waste_-_General_6 (RAM supports Reuse Center) [12-10-1994]"
              fileName="doc-178"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Solid_Waste_-_General_7 (Letter to Mark Rogers) [12-22-1994]"
              fileName="doc-179"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Solid_Waste_-_General_8 (Letter to Horace Johns - Citizen Participation) [2-7-1995]"
              fileName="doc-180"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Solid_Waste_-_General_9 (Letter to Steve Walsh - California Info) [3-26-1995] "
              fileName="doc-181"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Solid_Waste_-_General_10 (Questions for the Mayor) [5-9-1995]"
              fileName="doc-182"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Solid_Waste_-_General_11 (Squandered Waste)"
              fileName="doc-183"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Solid_Waste_-_General_12 (RAM Agenda) [11-15-2021] "
              fileName="doc-184"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Solid_Waste_-_General_13 (Mercer Survey Request) [3-5-1996] "
              fileName="doc-185"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Solid_Waste_-_General_14 (Mercer Survey) [3-7-1996]"
              fileName="doc-186"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Solid_Waste_-_General_15 (Response to LA ad on Solid Waste) [6-15-1996]"
              fileName="doc-187"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>
      </div>

      <div id="binder-3">
        <div id="ash">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-3 ➤ Ash
          </div>
          <div className="documents-element">
            <Document
              title=""
              leeTitle="Ash_1 (Vote No Flyer)"
              fileName="doc-188"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Ash_2 (Incinerator Expansion - Detroit)"
              fileName="doc-189"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Ash_3 (Washington Environmental Council) [2-25-1999]"
              fileName="doc-190"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Ash_4 (RAM to WEC on Ash) [3-7-1999]"
              fileName="doc-191"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Ash_5 (Dioxin Action Summit) [12-23-2000]"
              fileName="doc-192"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Ash_6 (John requests to address Thermal Board) [2-13-2001]"
              fileName="doc-193"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Ash_7 (Incinerator Shutdowns) [8-30-2001]"
              fileName="doc-194"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Ash_8 (Thermal Violation Notice) [11-19-2001]"
              fileName="doc-195"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Ash_9 (Thermal Violation in the News) [11-26-2001]"
              fileName="doc-196"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Ash_10 (RAM helps PA against thermal) [11-29-2001]"
              fileName="doc-197"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Ash_11 (Burn Plant News) [12-12-2001]"
              fileName="doc-198"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Ash_12 (Trash Burning in KY) [5-3-2003]"
              fileName="doc-199"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Ash_13 (RAM shares vistory) [7-20-2003]"
              fileName="doc-200"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Ash_14 (John helps fight ash in other countries) [9-29-2003]"
              fileName="doc-201"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Ash_15 (Hidden Taxes Pamphlet)"
              fileName="doc-202"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Ash_16 (Thermal Economics)"
              fileName="doc-203"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Ash_17 (Thermal Economics Draft)"
              fileName="doc-204"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <Document
              title=""
              leeTitle="Ash_18 (Reduce Pollution from Ash) [1-21-1999]"
              fileName="doc-205"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="cards-and-comics">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-3 ➤ Cards and Comics
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="green-party">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-3 ➤ Green Party
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="immaterial-john">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-3 ➤ Immaterial John
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="lobbying-issues">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-3 ➤ Lobbying Issues
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="peace">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-3 ➤ Peace
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="politics">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-3 ➤ Politics
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="pollution-and-health">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-3 ➤ Pollution and Health
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="recycling">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-3 ➤ Recycling
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="solid-waste-general">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-3 ➤ Solid Waste - General
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="ymca">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-3 ➤ YMCA
          </div>
          <div className="documents-element"></div>
        </div>
      </div>

      <div id="binder-4">
        <div id="ash">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-4 ➤ Ash
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="philanthropy">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-4 ➤ Philanthropy
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="pollution">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-4 ➤ Pollution
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="ram-agendas">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-4 ➤ RAM Agendas
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="recycling">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-4 ➤ Recycling
          </div>
          <div className="documents-element"></div>
        </div>
      </div>

      <div id="binder-5">
        <div id="agendas">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-5 ➤ Agendas
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="campaigns">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-5 ➤ Campaigns
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="legislation">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-5 ➤ Legislation
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="new-articles">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-5 ➤ New Article
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="permaculture">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-5 ➤ Permaculture
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="ram-website">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-5 ➤ RAM Website
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="recycling">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-5 ➤ Recycling
          </div>
          <div className="documents-element"></div>
        </div>
      </div>

      <div id="binder-6">
        <div id="511-main-st-nashville">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-6 ➤ 511 Main St Nashville
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="ash-landfill-expansion">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-6 ➤ Ash Landfill Expansion
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="cement-plant-rd">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-6 ➤ Cement Plant Rd
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="county-line-auto-salvage">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-6 ➤ County Line Auto Salvage
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="general-usage">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-6 ➤ General Usage
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="green-meadow-apts">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-6 ➤ Green Meadow Apts
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="greenbrier-self-storage">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-6 ➤ Greenbrier Self-Storage
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="hickory-grove">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-6 ➤ Hickory Grove
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="highland-rim-speedway">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-6 ➤ Highland Rim Speedway
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="metro-air-pollution">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-6 ➤ Metro Air Pollution
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="metro-ash-landfill">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-6 ➤ Metro Ash Landfill
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="metro-sewage-plant">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-6 ➤ Metro Sewage Plant
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="multiple-sites">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-6 ➤ Multiple Sites
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="regulations">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-6 ➤ Regulations
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="risk">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-6 ➤ Risk
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="spillage-on-roads">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-6 ➤ Spillage on Roads
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="testing">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-6 ➤ Testing
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="unknown-location">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-6 ➤ Unknown Location
          </div>
          <div className="documents-element"></div>
        </div>
      </div>

      <div id="binder-7">
        <div id="2176-ted-dorris-rd">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ 2176 Ted Dorris Rd
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="archey-center">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ Archey Center
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="central-parking">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ Central Parking
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="cimmaron-trace">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ Cimmaron Trace
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="city-road-chapel">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ City Road Chapel
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="comfort-suites">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ Comfort Suites
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="cvs-madison">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ CVS Madison
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="exxon-12th-broadway">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ Exxon 12th Broadway
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="exxon-i-65&24-shelby">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ Exxon I-65&24 Shelby
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="lakewood-condominiums">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ Lakewood Condominiums
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="last-plantation">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ Last Plantation
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="marcorp-constructors">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ Marcorp Constructors
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="mcdonalds-i-24-hwy-76">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ McDonalds I-24 Hwy 76
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="mcdonalds-nippers-corner">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ McDonalds Nippers Corner
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="mcquiston-heights">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ McQuiston Heights
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="n-mt-pleasant-rd-homes">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ N. Mt. Pleasant Rd. homes
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="pitt-excavating">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ Pitt Excavating
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="powell-ave-armory-dr">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ Powell Ave Armory Dr
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="rawls-estates">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ Rawls Estates
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="red-roof-inn-cool-springs">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ Red Roof Inn Cool Springs
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="ridgetop-auto-center">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ Ridgetop Auto Center
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="shadow-brook">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ Shadow Brook
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="southern-medical-disposal">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ Southern Medical Disposal
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="sterling-house">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ Sterling House
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="sunny-meadows-estates">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ Sunny Meadows Estates
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="sycamore-springs">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ Sycamore Springs
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="walgreens-melrose">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ Walgreens Melrose
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="whiteland-estates">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ Whiteland Estates
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="whitsett-elem-school">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ Whitsett Elem School
          </div>
          <div className="documents-element"></div>
        </div>

        <div id="willow-creek">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ Willow Creek
          </div>
          <div className="documents-element"></div>
        </div>
      </div>
    </div>
  );
}
