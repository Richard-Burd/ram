import LibrarycardCatalog from "@/components/LibraryCardCatalog";

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
            <LibrarycardCatalog
              title="Meeting Minutes December 9th, 1992"
              leeTitle="Agendas_and_minutes (agenda) [12/9/1992]"
              fileName="doc-1"
              description="Attendees: Terry Keleher, Anna Motsejenko et. al."
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title="Jefferson County Solid Waste Management District Board"
              leeTitle="Agendas_and_minutes (minutes) [11/19/1992]"
              fileName="doc-2"
              description="Attendees: Elgin Crull, Fred Banks, Joyce St. Clain, et. al. This is a rambling sentence that will let us see what a longer description would look like for a particular document."
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
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
            <LibrarycardCatalog
              title=""
              leeTitle="Ash_Recycling_1 (RAM Press Conference Notes) [10-17-1993]"
              fileName="doc-4"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
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
            <LibrarycardCatalog
              title=""
              leeTitle="BURNT_1 (Letter to BURNT) [12-1993]"
              fileName="doc-6"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
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
            <LibrarycardCatalog
              title=""
              leeTitle="Coalition_of_Green_Thumbs_1 (Recycling Forum) [7-8-1993]"
              fileName="doc-8"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Coalition_of_Green_Thumbs_2 (John Speaking App)"
              fileName="doc-9"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Coalition_of_Green_Thumbs_3 (Public Opinion Survey)"
              fileName="doc-10"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
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
            <LibrarycardCatalog
              title=""
              leeTitle="Convenience_Center_Rules_1 (Public Comments) [11_17_1992]"
              fileName="doc-12"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Convenience_Center_Rules_2 (Amendment Proposal) [2_1_1993]"
              fileName="doc-13"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Convenience_Center_Rules_3 (BURNT letter) [3_2_1993]"
              fileName="doc-14"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
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
            <LibrarycardCatalog
              title=""
              leeTitle="Environmental_Justice_Bill_1 (Senate Bill 1499) [2-18-1993]"
              fileName="doc-16"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Environmental_Justice_Bill_2 (Summary) [1993]"
              fileName="doc-17"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Environmental_Justice_Bill_3 (Save Our Cumberland Mountains - Fact Sheet)"
              fileName="doc-18"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Environmental_Justice_Bill_4 (Summary) [1994]"
              fileName="doc-19"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Environmental_Justice_Bill_5 (Bad Boy Law Advert)"
              fileName="doc-20"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Environmental_Justice_Bill_6 (Legislative Update) [9-1993]"
              fileName="doc-21"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Environmental_Justice_Bill_7 (SOCM Handwritten Letter) [12-14-1992]"
              fileName="doc-22"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Environmental_Justice_Bill_8 (Bad Boy Law)"
              fileName="doc-23"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Environmental_Justice_Bill_9 (Proposed Amendment)"
              fileName="doc-24"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Environmental_Justice_Bill_10 (Senate_House List)"
              fileName="doc-25"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Environmental_Justice_Bill_11 (Waste Legislation Meeting Agenda) [1993]"
              fileName="doc-26"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
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
            <LibrarycardCatalog
              title=""
              leeTitle="front_pocket_1 (comic - upper left important)"
              fileName="doc-28"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="front_pocket_2 (Federal Income Tax Exemption) [3_24_1993]"
              fileName="doc-29"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="front_pocket_3 (RAM Officers)"
              fileName="doc-30"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="front_pocket_4 (non-profit corporation founding) [1_15_1993]"
              fileName="doc-31"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="front_pocket_5 (charter) [1_15_1993]"
              fileName="doc-32"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="front_pocket_6 (Annual Report Form) [5_1_2015]"
              fileName="doc-33"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
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
            <LibrarycardCatalog
              title=""
              leeTitle="Near-Zero_Landfilling_1 (House Rep Letter to John) [7-12-1993]"
              fileName="doc-35"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Near-Zero_Landfilling_2 (RAM How To Sheet) [7-31-1993]"
              fileName="doc-36"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Near-Zero_Landfilling_3 (Heavy Molded Products Handout) [8-23-1993]"
              fileName="doc-37"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Near-Zero_Landfilling_4 (Comparison) [1-1-1992]"
              fileName="doc-38"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Near-Zero_Landfilling_5 (RAM Endorsement) [1-1-1993]"
              fileName="doc-39"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Near-Zero_Landfilling_6 (Greenpeace Endorsement)"
              fileName="doc-40"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Near-Zero_Landfilling_7 (BURNT Endorsement)"
              fileName="doc-41"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Near-Zero_Landfilling_8 (Nashville Peace and Justice Center Endorsement)"
              fileName="doc-42"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Near-Zero_Landfilling_9 (LifeWorks Endorsement)"
              fileName="doc-43"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Near-Zero_Landfilling_10 (Board Reminder) [9-21-1993]"
              fileName="doc-44"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Near-Zero_Landfilling_11 (Waste Reduction Chart with Notes)"
              fileName="doc-45"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
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
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_Reduction_Goal_1 (Solid Waste Assistance Memorandum) [10_9_1992]"
              fileName="doc-47"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_Reduction_Goal_2 (Amendment Draft)"
              fileName="doc-48"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_Reduction_Goal_3 (RAM Response) [12_3_1992]"
              fileName="doc-49"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_Reduction_Goal_4 (Council Comment) [12_7_1992]"
              fileName="doc-50"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_Reduction_Goal_5 (John Response) [12_14_1992]"
              fileName="doc-51"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_Reduction_Goal_6 (Ram Response) [1_12_1993]"
              fileName="doc-52"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_Reduction_Goal_7 (Agenda Notice) [1_20_1993]"
              fileName="doc-53"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_Reduction_Goal_8 (Memorandum) [1_22_1993]"
              fileName="doc-54"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_Reduction_Goal_9 (Media Conference) [1_30_1993]"
              fileName="doc-55"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_Reduction_Goal_10 (RAM Info Sheet) [1_31_1993]"
              fileName="doc-56"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_Reduction_Goal_11 (News Article) [2_2_1993]"
              fileName="doc-57"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_Reduction_Goal_12 (SW Control Board Agenda) [2_2_1993]"
              fileName="doc-58"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_Reduction_Goal_13 (SW Control Board Members)"
              fileName="doc-59"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_Reduction_Goal_14 (SWA Meeting Summary)"
              fileName="doc-60"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
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
            <LibrarycardCatalog
              title=""
              leeTitle="Thermal_Replacement_1 (RAM letter to Metro Public Works) [5-19-1993]"
              fileName="doc-62"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Thermal_Replacement_2 (RAM letter to Metro Council) [6-21-1993]"
              fileName="doc-63"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Thermal_Replacement_3 (Info by John) [7-5-1993]"
              fileName="doc-64"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Thermal_Replacement_4 (Letter to Ron Wise) [9-14-1993]"
              fileName="doc-65"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Thermal_Replacement_5 (Cost Comparison) [11-8-1993]"
              fileName="doc-66"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Thermal_Replacement_6 (Press Conference Info) [11-10-1993]"
              fileName="doc-67"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Thermal_Replacement_7 (Mayors Response) [11-19-1993]"
              fileName="doc-68"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
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
            <LibrarycardCatalog
              title=""
              leeTitle="wet_dry_1 (mayor letter to John) [10_27_1992]"
              fileName="doc-70"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="wet_dry_2 (resolution) [9_29_1992]"
              fileName="doc-71"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="wet_dry_3 (RAM letter) [11_12_1992]"
              fileName="doc-72"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="wet_dry_5 (RAM letter to Chairman) [4-26-1993]"
              fileName="doc-73"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
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
            <LibrarycardCatalog
              title=""
              leeTitle="Bluestem_1 (Volume 1.1) [8-1994]"
              fileName="doc-75"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Bluestem_2 (Volume 1.2) [9-1994]"
              fileName="doc-76"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Bluestem_3 (Volume 1.4) [10-1994]"
              fileName="doc-77"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
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
            <LibrarycardCatalog
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_1 (Public Hearing Schedule) [1-6-1994]"
              fileName="doc-79"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_2 (Cost Comparison) [11-8-1993]"
              fileName="doc-80"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_3 (Gas Conversion Benefits) [11-8-1993]"
              fileName="doc-81"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_4 (CPA Comments) [1-10-1994]"
              fileName="doc-82"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_5 (Councilmans Request to John) [1-24-1994]"
              fileName="doc-83"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_6 (Council Resolution R94-1008)"
              fileName="doc-84"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_7 (Solid Waste Public Hearing) [1-11-1994]"
              fileName="doc-85"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_8 (Solid Waste Public Hearing) [1-13-1994]"
              fileName="doc-86"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_9 (Solid Waste Public Hearing) [1-20-1994]"
              fileName="doc-87"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_10 (RAM replies to hearings) [1-31-1994]"
              fileName="doc-88"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_11 (Nashville Business Journal article on RAM) [2-14-1994]"
              fileName="doc-89"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_12 (joint meeting agenda notes)"
              fileName="doc-90"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_13 (Letter to Gary Odom) [5-10-1994]"
              fileName="doc-91"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_14 (Letter to Nashville Business Journal) [5-30-1994]"
              fileName="doc-92"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_15 (Letter to Civil Engineering) [5-30-1994]"
              fileName="doc-93"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_16 (Letter from Jennifer Rowe) [9-12-1994]"
              fileName="doc-94"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_17 (Letter from Jennifer Rowe) [9-22-1994]"
              fileName="doc-95"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_18 (Letter from Jennifer Rowe) [10-23-1994]"
              fileName="doc-96"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_19 (Waste to Energy Combustion Ash) [7-14-1994]"
              fileName="doc-97"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_20 (Ash Test Results) [7-26-1994]"
              fileName="doc-98"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_21 (Local News - Ash Price Rise) [8-5-1994]"
              fileName="doc-99"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_22 (BURNT letter to Metro Health) [8-7-1994]"
              fileName="doc-100"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_23 (Dioxin Sources) "
              fileName="doc-101"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_24 (EDF Ash Dump) [8-18-1994]"
              fileName="doc-102"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_25 (Activist Memorandum) [8-25-1994]"
              fileName="doc-103"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_26 (Ash Alert) [7-29-1994]"
              fileName="doc-104"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_27 (Letter to Representatives) [8-29-1994]"
              fileName="doc-105"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_28 (Memorandum to Incinerator Activists) [9-26-1994]"
              fileName="doc-106"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_29 (RAM Newsletter) [9-12-1994]"
              fileName="doc-107"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_30 (RAM Letter to Supporters) [9-12-1994]"
              fileName="doc-108"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_31 (Letter to Doug Cameron) [9-27-1994]"
              fileName="doc-109"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_31 (TEC Meeting Agenda) [11-19-1994]"
              fileName="doc-110"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_32 (RAM letter to Metro Health Dept) [10-12-1994]"
              fileName="doc-111"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_33 (Metro Council Workshop) [9-26-1995]"
              fileName="doc-112"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_34 (Metro Council Workshop 2) [9-26-1995]"
              fileName="doc-113"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_35 (Incineration Emission Standards) [2-14-1996]"
              fileName="doc-114"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_36 (RAM to Board of Health) [2-20-1996]"
              fileName="doc-115"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_37 (Ether Bunny Comic) [2-1996]"
              fileName="doc-116"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_38 (Letter to Nashville Scene) [6-29-1996]"
              fileName="doc-117"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_38 (Letter to The Tennessean) [6-30-1996]"
              fileName="doc-118"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_39 (Request to dismantle Thermal Plant) [7-15-1996]"
              fileName="doc-119"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_40 (Letter to Councilmember Janis Baird Sontany) [8-30-1996]"
              fileName="doc-120"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_41 (Resolution R96-474 Support)"
              fileName="doc-121"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Incinerator_vs_Natural_Gas_42 (Clearing the Air around Thermal event) [11-21-1996]"
              fileName="doc-122"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
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
            <LibrarycardCatalog
              title=""
              leeTitle="Lobbyist_Issue_1 (Lobbyist Ordinance) [2-10-1995]"
              fileName="doc-124"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Lobbyist_Issue_2 (Lobbyist Registration) [1994]"
              fileName="doc-125"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Lobbyist_Issue_3 (Lobbyist Registration) [1995]"
              fileName="doc-126"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Lobbyist_Issue_4 (Air Pollution Control Vote) [2-7-1995]"
              fileName="doc-127"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Lobbyist_Issue_5 (Environmental Action Fund)"
              fileName="doc-128"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Lobbyist_Issue_6 (TN Conservation League) [12-20-1994]"
              fileName="doc-129"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Lobbyist_Issue_7 (RAM to Metro Clerk - Ann P Murray) [2-10-1995]"
              fileName="doc-130"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Lobbyist_Issue_8 (RAM to Metro Clerk - John P Williams) [2-10-1995]"
              fileName="doc-131"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Lobbyist_Issue_9 (RAM to Metro Clerk - Pam Wolfe) [2-10-1995]"
              fileName="doc-132"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Lobbyist_Issue_10 (Pam Wolfe responds) [2-14-1995]"
              fileName="doc-133"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Lobbyist_Issue_11 (John P Williams responds) [2-13-1995]"
              fileName="doc-134"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Lobbyist_Issue_12 (Ann P Murray responds) [2-13-1995]"
              fileName="doc-135"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Lobbyist_Issue_13 (RAM to Metro Clerk - Howard H (Butch) Eley) [2-16-1995]"
              fileName="doc-136"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Lobbyist_Issue_14 (RAM to Metro Clerk - Tony Campbell) [2-16-1995]"
              fileName="doc-137"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Lobbyist_Issue_15 (G Steven Henry to Metro Clerk) [2-17-1995]"
              fileName="doc-138"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Lobbyist_Issue_16 (RAM to Metro Clerk - Thomas V White) [2-17-1995]"
              fileName="doc-139"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Lobbyist_Issue_17 (RAM to Metro Clerk - John S Reed) [2-16-1995]"
              fileName="doc-140"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Lobbyist_Issue_18 (Ash Agreement) [1-28-1993]"
              fileName="doc-141"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Lobbyist_Issue_19 (Pam Wolfe addition) [2-16-1995]"
              fileName="doc-142"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Lobbyist_Issue_20 (John P Williams addition) [3-19-1995]"
              fileName="doc-143"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Lobbyist_Issue_21 (Metro Clerk responds) [5-17-1995]"
              fileName="doc-144"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
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
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_and_Composting_1 (Review and Letter from Sandy Helper) [7-19-1994]"
              fileName="doc-146"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_and_Composting_2 (Letter to Metro Council Candidates) [6-17-1995]"
              fileName="doc-147"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_and_Composting_3 (Backyard Composting) [1995]"
              fileName="doc-148"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_and_Composting_4 (Recycling Keeps Taxes Low) [1995]"
              fileName="doc-149"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_and_Composting_5 (Making Recycling Easier) [1996]"
              fileName="doc-150"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_and_Composting_6 (Good for the Garden) [1997]"
              fileName="doc-151"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_and_Composting_7 (Reuse article) [6-1996]"
              fileName="doc-152"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_and_Composting_8 (Reuse Haz Waste Collection)"
              fileName="doc-153"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_and_Composting_9 (MSW Recycling Submittal) [10-30-1995]"
              fileName="doc-154"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_and_Composting_10 (Metro Recycling Resolution) [11-21-1995]"
              fileName="doc-155"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_and_Composting_11 (R Cave on board) [11-22-1995]"
              fileName="doc-156"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_and_Composting_12 (Status Report Resolution)"
              fileName="doc-157"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_and_Composting_13 (Letter to John W Stone III) [1-17-1995-6]"
              fileName="doc-158"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_and_Composting_14 (Response to Resolution R96-139) [2-15-1996]"
              fileName="doc-159"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_and_Composting_15 (Garbage into Building Materials) [2-17-1996]"
              fileName="doc-160"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_and_Composting_16 (Resolution to Fund Recycling) [2-26-1996]"
              fileName="doc-161"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_and_Composting_17 (Council Letter) [3-11-1996]"
              fileName="doc-162"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_and_Composting_18 (RAM Responds) [4-13-1996]"
              fileName="doc-163"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_and_Composting_19 (Solid Waste Board Notes) [7-23-1996]"
              fileName="doc-164"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_and_Composting_20 (Solid Waste Board Response) [7-25-1996]"
              fileName="doc-165"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_and_Composting_21 (RAM Response) [8-5-1996]"
              fileName="doc-166"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_and_Composting_22 (Letter to Councilman Johns) [8-12-1996]"
              fileName="doc-167"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_and_Composting_23 (Letter to Councilwoman Eileen Beehan) [6-16-1996]"
              fileName="doc-168"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_and_Composting_24 (Letter to Councilman Julius Sloss) [7-4-1996]"
              fileName="doc-169"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_and_Composting_25 (Letter to Councilman Julius Sloss 2) [7-16-1996]"
              fileName="doc-170"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
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
            <LibrarycardCatalog
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
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_-_General_1 (RAM letter to Mark Rogers - A Blueprint to Tackle Solid Waste Issues) [10-24-1994]"
              fileName="doc-173"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_-_General_2 (Letter to Phil) [11-9-1994]"
              fileName="doc-174"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_-_General_3 (Letter to Mark Bowers) [11-9-1994]"
              fileName="doc-175"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_-_General_4 (Letter to EPA) [11-16-1994]"
              fileName="doc-176"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_-_General_5 (Letter to EPA - HG lamps) [11-21-1994]"
              fileName="doc-177"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_-_General_6 (RAM supports Reuse Center) [12-10-1994]"
              fileName="doc-178"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_-_General_7 (Letter to Mark Rogers) [12-22-1994]"
              fileName="doc-179"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_-_General_8 (Letter to Horace Johns - Citizen Participation) [2-7-1995]"
              fileName="doc-180"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_-_General_9 (Letter to Steve Walsh - California Info) [3-26-1995] "
              fileName="doc-181"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_-_General_10 (Questions for the Mayor) [5-9-1995]"
              fileName="doc-182"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_-_General_11 (Squandered Waste)"
              fileName="doc-183"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_-_General_12 (RAM Agenda) [11-15-2021] "
              fileName="doc-184"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_-_General_13 (Mercer Survey Request) [3-5-1996] "
              fileName="doc-185"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_-_General_14 (Mercer Survey) [3-7-1996]"
              fileName="doc-186"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
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
            <LibrarycardCatalog
              title=""
              leeTitle="Ash_1 (Vote No Flyer)"
              fileName="doc-188"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Ash_2 (Incinerator Expansion - Detroit)"
              fileName="doc-189"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Ash_3 (Washington Environmental Council) [2-25-1999]"
              fileName="doc-190"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Ash_4 (RAM to WEC on Ash) [3-7-1999]"
              fileName="doc-191"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Ash_5 (Dioxin Action Summit) [12-23-2000]"
              fileName="doc-192"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Ash_6 (John requests to address Thermal Board) [2-13-2001]"
              fileName="doc-193"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Ash_7 (Incinerator Shutdowns) [8-30-2001]"
              fileName="doc-194"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Ash_8 (Thermal Violation Notice) [11-19-2001]"
              fileName="doc-195"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Ash_9 (Thermal Violation in the News) [11-26-2001]"
              fileName="doc-196"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Ash_10 (RAM helps PA against thermal) [11-29-2001]"
              fileName="doc-197"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Ash_11 (Burn Plant News) [12-12-2001]"
              fileName="doc-198"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Ash_12 (Trash Burning in KY) [5-3-2003]"
              fileName="doc-199"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Ash_13 (RAM shares vistory) [7-20-2003]"
              fileName="doc-200"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Ash_14 (John helps fight ash in other countries) [9-29-2003]"
              fileName="doc-201"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Ash_15 (Hidden Taxes Pamphlet)"
              fileName="doc-202"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Ash_16 (Thermal Economics)"
              fileName="doc-203"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Ash_17 (Thermal Economics Draft)"
              fileName="doc-204"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
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
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Cards_and_Comics_1 (Earth Day Card) [3-30-2002]"
              fileName="doc-206"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Cards_and_Comics_2 (Christmas Card) [5-1994]"
              fileName="doc-207"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Cards_and_Comics_3 (Clear the Air Card) [11-21-1996]"
              fileName="doc-208"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="green-party">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-3 ➤ Green Party
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Green_Party_1 (Agenda) [1-10-2001]"
              fileName="doc-209"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="immaterial-john">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-3 ➤ Immaterial John
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Immaterial_John_1 (Flyer) [4-26-2004]"
              fileName="doc-210"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="lobbying-issues">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-3 ➤ Lobbying Issues
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Lobbying_Issues_1 (Murphy and White) [8-12-2003]"
              fileName="doc-211"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Lobbying_Issues_2 (Murphy responds) [10-21-2003]"
              fileName="doc-212"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Lobbying_Issues_3 (White responds) [10-21-2003]"
              fileName="doc-213"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Lobbying_Issues_4 (Should lawyers register as lobbyists) [10-30-2003]"
              fileName="doc-214"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Lobbying_Issues_5 (John on lobbying ethics) [11-9-2003]"
              fileName="doc-215"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Lobbying_Issues_6 (Metro Clerk decision) [11-25-2003]"
              fileName="doc-216"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Lobbying_Issues_7 (News article) [11-27-2003]"
              fileName="doc-217"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="peace">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-3 ➤ Peace
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Peace_1 (Strategy Meeting 1) [5-1-2002)"
              fileName="doc-218"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Peace_2 (Strategy Meeting 2) [5-8-2002)"
              fileName="doc-219"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Peace_3 (Common Ground) [11-1993)"
              fileName="doc-220"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Peace_4 (Lookism Flyers)"
              fileName="doc-221"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="politics">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-3 ➤ Politics
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Politics_1 (NPJC decides which candidate to support) [9-15-2003]"
              fileName="doc-222"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Politics_2 (NPJC Flyer)"
              fileName="doc-223"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="pollution-and-health">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-3 ➤ Pollution and Health
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Pollution_and_Health_1 (Air, Soil, Water Pollution and Health) [11-17-1998]"
              fileName="doc-224"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Pollution_and_Health_2 (RAM on Pollution) [11-29-1998]"
              fileName="doc-225"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Pollution_and_Health_3 (Dr Guengerich responds) [12-9-1998]"
              fileName="doc-226"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Pollution_and_Health_4 (Dr Olden responds) [12-18-1998]"
              fileName="doc-227"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Pollution_and_Health_5 (UK Study) [4-24-2000]"
              fileName="doc-228"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Pollution_and_Health_6 (RAM requests study) [12-7-2000]"
              fileName="doc-229"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Pollution_and_Health_7 (Tire Burning)"
              fileName="doc-230"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Pollution_and_Health_8 (Tire Burning 2) [5-21-2001]"
              fileName="doc-231"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Pollution_and_Health_9 (Tire Burning 3) [6-24-2001]"
              fileName="doc-232"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Pollution_and_Health_10 (Letter to American Lung Association) [6-17-2001]"
              fileName="doc-233"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Pollution_and_Health_11 (PEACH)"
              fileName="doc-234"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Pollution_and_Health_12 (PEACH July Report) [8-1-2003]"
              fileName="doc-235"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Pollution_and_Health_13 (PEACH August Report) [8-1-2003]"
              fileName="doc-236"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Pollution_and_Health_14 (Benefit Flyer)"
              fileName="doc-237"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Pollution_and_Health_15 (LEAF Certificate) [6-2001]"
              fileName="doc-238"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="recycling">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-3 ➤ Recycling
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_1 (Recycling Summary) 2-7-2003"
              fileName="doc-239"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_2 (Organizing Recycling Presentation) [8-6-2002]"
              fileName="doc-240"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_3 (Recycling Report Flyer) [2-17-2003]"
              fileName="doc-241"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_4 (Recycling Report PRess Release) [2-17-2003]"
              fileName="doc-242"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_5 (Recycling Handout) [12-31-2002]"
              fileName="doc-243"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_6 (Recycling Facility Idea) [2-11-2003]"
              fileName="doc-244"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_7 (Recycling Facility Idea - John Responds) [3-9-2003]"
              fileName="doc-245"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_8 (John Hepler letter) [3-15-2003]"
              fileName="doc-246"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_9 (Recycling Classification MEtro vs RAM-BURNT)"
              fileName="doc-247"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_10 (Composting as Recycling Symposium) [10-30-2003]"
              fileName="doc-248"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_11 (Recycling News) [11-4-1992]"
              fileName="doc-249"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_12 (Petition)"
              fileName="doc-250"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_13 (RAM Logos)"
              fileName="doc-251"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_14 (BURNT Logos)"
              fileName="doc-252"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="solid-waste-general">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-3 ➤ Solid Waste - General
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_General_1 (Metro Council to John) [9-19-1997]"
              fileName="doc-253"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_General_2 (RAM Top Ten List) [10-8-1997]"
              fileName="doc-254"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_General_3 (Sierra Club List) [10-10-1997]"
              fileName="doc-255"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_General_4 (Metro Council asks John to speak) [11-5-1997]"
              fileName="doc-256"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_General_5 (Advocate List) [1-13-1998]"
              fileName="doc-257"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_General_6 (RAM Legislative Proposal) [4-15-1998]"
              fileName="doc-258"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_General_7 (RAM Recycling Memorandum) [6-19-1998]"
              fileName="doc-259"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_General_8 (RAM Recycling Switch)"
              fileName="doc-260"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_General_9 (Dissertation request) [8-18-1998]"
              fileName="doc-261"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_General_10 (Grassroots Groups Survey)"
              fileName="doc-262"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_General_11 (Letter to CRAB) [3-12-1999]"
              fileName="doc-263"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_General_12 (Remanufacturing TP)"
              fileName="doc-264"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_General_13 (Zero Waste Goal article) [9-1999]"
              fileName="doc-265"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_General_14 (Solid Waste Board public hearing comments) [9-21-1999]"
              fileName="doc-266"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_General_15 (5-Year plan recommendations) [10-19-1999]"
              fileName="doc-267"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_General_16 (Metro Council Solid Waste recommendations) [1-23-2001]"
              fileName="doc-268"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_General_17 (Equal Time Request) [2-6-2001]"
              fileName="doc-269"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_General_18 (Equal Time Request 2) [2-14-2001]"
              fileName="doc-270"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_General_19 (Recycling vs Burning-Landfilling) [2-27-2001]"
              fileName="doc-271"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_General_20 (Recycling-Composting Field Trip) [3-20-2001]"
              fileName="doc-272"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_General_21 (Metro Trash Discussion Flyer) [4-1-2001]"
              fileName="doc-273"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_General_22 (Thermal Conversion Options by Cost Scenario) [4-19-2001]"
              fileName="doc-274"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_General_23 (Subsidies versus Benefits) [5-9-2001]"
              fileName="doc-275"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_General_24 (Senator Thompson to John) [6-7-2001]"
              fileName="doc-276"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_General_25 (Senator Thompson to John) [6-22-2001]"
              fileName="doc-277"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_General_26 (Landfill Gas News) [2-26-2001]"
              fileName="doc-278"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_General_27 (WTE-LFG News) [3-5-2001]"
              fileName="doc-279"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_General_28 (Waste in Congress News) [4-2-2001]"
              fileName="doc-280"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_General_29 (Letter to Senators) [6-28-2002]"
              fileName="doc-281"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_General_30 (Senator Thompson responds) [7-23-2002]"
              fileName="doc-282"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_General_31 (Public Works Solid Waste Meeting) [9-4-2001]"
              fileName="doc-283"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_General_32 (Don Majors letter to John) [9-5-2001]"
              fileName="doc-284"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_General_33 (Wet-Dry Pilot Flyer) [9-11-2001]"
              fileName="doc-285"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_General_34 (Civic Design Center thanks John) [9-24-2001]"
              fileName="doc-286"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_General_35 (John digs into Recycling Plan) [12-8-2001]"
              fileName="doc-287"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_General_36 (MSW Journal reviews Nashville Plan) [4-13-2006]"
              fileName="doc-288"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_General_37 (Bill BL2002-931 with changes by John) [12-31-2001]"
              fileName="doc-289"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_General_38 (Waste Stream Analysis) [5-4-2003]"
              fileName="doc-290"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_General_39 (John rewards good stewardship - CCIP) [8-15-2003]"
              fileName="doc-291"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_General_40 (SW subcommittee candidates) [9-11-2003]"
              fileName="doc-292"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_General_41 (Annual Report corrections) [9-20-2003]"
              fileName="doc-293"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_General_42 (Recycling-Composting-Disposal numbers) [10-5-2003]"
              fileName="doc-294"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_General_43 (Recycling-Composting-Disposal numbers 2) [10-5-2003]"
              fileName="doc-295"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_General_44 (Waste represented as ferries) [10-17-2003]"
              fileName="doc-296"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_General_45 (Program Flyer) [10-16-1995]"
              fileName="doc-297"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_General_46 (RAM Agenda) [11-15-1995]"
              fileName="doc-298"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_General_47 (Hazardous Waste Collection) [6-1-1996]"
              fileName="doc-299"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Solid_Waste_General_48 (Wet-Dry Advert)"
              fileName="doc-300"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="ymca">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-3 ➤ YMCA
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="YMCA_1 (Earth Service Report Card) [2000]"
              fileName="doc-301"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>
      </div>

      <div id="binder-4">
        <div id="ash">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-4 ➤ Ash
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Ash_1 (news article) [2004]"
              fileName="doc-302"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="philanthropy">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-4 ➤ Philanthropy
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="philanthropy_1 (donation to CCIP) [9-26-2005]"
              fileName="doc-303"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="pollution">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-4 ➤ Pollution
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Pollution_1 (Letter to EPA) [5-21-2004]"
              fileName="doc-304"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="ram-agendas">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-4 ➤ RAM Agendas
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="RAM_Agendas_1 (Public Works MSW direction) [1-15-2004]"
              fileName="doc-305"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="RAM_Agendas_2 (BURNT responds) [1-2004]"
              fileName="doc-306"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="RAM_Agendas_3 (Pilot Projects) [1-19-2004]"
              fileName="doc-307"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="RAM_Agendas_4 (handout) [3-2013]"
              fileName="doc-308"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="recycling">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-4 ➤ Recycling
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_1 (NNOCI wants to improve recycling)"
              fileName="doc-309"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_2 (NPJC on recycling)"
              fileName="doc-310"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_3 (Karl Meyer on recycling)"
              fileName="doc-311"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_4 (Direction for MSW)"
              fileName="doc-312"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_5 (Recycling Survey) [2-4-2004]"
              fileName="doc-313"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_6 (Press Release) [2-7-2004]"
              fileName="doc-314"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_7 (Recycling Trends) [2-26-2004]"
              fileName="doc-315"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_8 (Recycling Trends 2) [3-9-2004]"
              fileName="doc-316"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_9 (Recycling Performance) [9-5-2004]"
              fileName="doc-317"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_10 (MSW Trends) [9-6-2004]"
              fileName="doc-318"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_11 (Numbers) [12-10-2004]"
              fileName="doc-319"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_12 (Letter to Mayor Bill Purcell) [2-15-2005]"
              fileName="doc-320"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_13 (Flyer) [2-27-2005]"
              fileName="doc-321"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_14 (Curby News) [4-20-2005]"
              fileName="doc-322"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_15 (Draft Recycling Rate Resolution) [4-23-2005]"
              fileName="doc-323"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_16 (Recycling Rate Resolution) [7-7-2005]"
              fileName="doc-324"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_17 (Councilman Jameson responds) [7-12-2005]"
              fileName="doc-325"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_18 (Recycling Rates) [9-14-2005]"
              fileName="doc-326"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_19 (Numbers) [9-15-2005]"
              fileName="doc-327"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_20 (Recycling Rate) [9-16-2005]"
              fileName="doc-328"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_21 (Capital Improvement Misuse)"
              fileName="doc-329"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_22 (more numbers) [7-23-2006]"
              fileName="doc-330"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_23 (more trends) [7-23-2006]"
              fileName="doc-331"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_24 (Letter to Solid Waste Board) [5-30-2008]"
              fileName="doc-332"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_25 (Letter to Solid Waste Board) [12-17-2008]"
              fileName="doc-333"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_26 (Free Press Vol 1) [1-15-2009]"
              fileName="doc-334"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_27 (Solid Waste Destinations) [11-1-2011]"
              fileName="doc-335"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_28 (Solid Waste Destinations 2) [2-18-2012]"
              fileName="doc-336"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_29 (Growing the Recycling Economy) [4-23-2012]"
              fileName="doc-337"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_30 (Growing the Recycling Economy - Numbers) [4-18-2012]"
              fileName="doc-338"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_31 (Growing the Recycling Economy 2) [5-8-2012]"
              fileName="doc-339"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_32 (Tax Disparity) [8-21-2012]"
              fileName="doc-340"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_33 (Landfilling Cost) [6-1-2012]"
              fileName="doc-341"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_34 (Recycling Economy 3) [6-2-2012]"
              fileName="doc-342"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_35 (Proposed Closed-loop Solid Waste System) [10-15-2012]"
              fileName="doc-343"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_36 (E-mail to Solid Waste Board) [1-7-2013]"
              fileName="doc-344"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_37 (Where it goes) [7-26-2013]"
              fileName="doc-345"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>
      </div>

      <div id="binder-5">
        <div id="agendas">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-5 ➤ Agendas
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Agendas [multiyear]"
              fileName="doc-346"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="campaigns">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-5 ➤ Campaigns
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Campaigns_1 (TVA Energy Efficiency)"
              fileName="doc-347"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Campaigns_2 (Nashville Climate Coalition)"
              fileName="doc-348"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Campaigns_3 (Questions for Candidates) [2-23-2015]"
              fileName="doc-349"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Campaigns_4 (Zero-Waste Wish List) [12-14-2017]"
              fileName="doc-350"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="legislation">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-5 ➤ Legislation
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Legislation_1 (solid waste system proposal) [9-23-2012]"
              fileName="doc-351"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Legislation_2 (closed-loop system) [10-15-2012]"
              fileName="doc-352"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Legislation_3 (Ordinance No. BL2013-59) [12-3-2013]"
              fileName="doc-353"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Legislation_4 (RAM meets Metro Council) [3-5-2014]"
              fileName="doc-354"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Legislation_5 (Proposed Landfill)"
              fileName="doc-355"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Legislation_6 (Proposed Landfill Fact Sheet)"
              fileName="doc-356"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Legislation_7 (Proposed Landfill Map)"
              fileName="doc-357"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Legislation_8 (Proposed Landfill Application) [6-20-2012]"
              fileName="doc-358"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Legislation_9 (Proposed Landfill Public Hearing) [3-13-2014]"
              fileName="doc-359"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Legislation_10 (Proposed Landfill Letter to Flood) [3-26-2014]"
              fileName="doc-360"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Legislation_11 (Proposed Landfill Letter to Flood 2) [3-27-2014]"
              fileName="doc-361"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Legislation_12 (Proposed Landfill Memorandum) [6-30-2014]"
              fileName="doc-362"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Legislation_13 (Proposed Solid Waste Lifecycle Legislation) [9-8-2014]"
              fileName="doc-363"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Legislation_14 (Recycling Legislation) [1-13-2015]"
              fileName="doc-364"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Legislation_15 (Resolution on Solid Waste Fees)"
              fileName="doc-365"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Legislation_16 (Resolutions and Bills)"
              fileName="doc-366"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Legislation_17 (Elections Map) [2015]"
              fileName="doc-367"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="new-articles">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-5 ➤ New Article
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="News_Articles_1 (trash-free) [7-25-2010]"
              fileName="doc-368"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="News_Articles_2 (overflow) [1-19-2012]"
              fileName="doc-369"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="News_Articles_3 (recycling center)"
              fileName="doc-370"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="News_Articles_4 (compost collection) [5-11-2012]"
              fileName="doc-371"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="News_Articles_5 (Green Blueprint) [6-19-2015]"
              fileName="doc-372"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="permaculture">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-5 ➤ Permaculture
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Permaculture_1 (principles) [2-3-2014]"
              fileName="doc-373"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        {/* <div id="ram-website">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-5 ➤ RAM Website
          </div>
          <div className="documents-element"></div>
        </div> */}

        <div id="recycling">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-5 ➤ Recycling
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_1 (electronic recycling) [2008]"
              fileName="doc-374"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_2 (solid waste status) [7-26-2013]"
              fileName="doc-375"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_3 (solid waste where it goes) [4-28-2014]"
              fileName="doc-376"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_4 (Recycling Services)"
              fileName="doc-377"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_5 (Recycling Services Response)"
              fileName="doc-378"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_6 (Solid Waste where it goes) [7-28-2015]"
              fileName="doc-379"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_7 (Resource Capture)"
              fileName="doc-380"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_8 (Solid Waste where it goes) [10-16-2016]"
              fileName="doc-381"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Recycling_9 (Solid Waste where it goes) [5-12-2017]"
              fileName="doc-382"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>
      </div>

      <div id="binder-6">
        <div id="511-main-st-nashville">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-6 ➤ 511 Main St Nashville
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="511_Main_St_Nashville_1 (improper use of TAA) [2-5-1997]"
              fileName="doc-383"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="511_Main_St_Nashville_2 (investigation) [3-20-1997]"
              fileName="doc-384"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="511_Main_St_Nashville_3 (DoEaC response) [8-6-1997]"
              fileName="doc-385"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="511_Main_St_Nashville_4 (companion complaint) [11-20-1997]"
              fileName="doc-386"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="511_Main_St_Nashville_5 (DoEaC response) [11-25-1997]"
              fileName="doc-387"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="ash-landfill-expansion">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-6 ➤ Ash Landfill Expansion
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Ash_Landfill_Expansion_1 (Johns thoughts on Ash Landfill) [10-19-1998]"
              fileName="doc-388"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Ash_Landfill_Expansion_2 (Dept of Environment and Conservation responds) [10-30-1998]"
              fileName="doc-389"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Ash_Landfill_Expansion_3 (unpermitted usage) [2-11-1999]"
              fileName="doc-390"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Ash_Landfill_Expansion_4 (fly ash and TAA) [8-30-1999]"
              fileName="doc-391"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Ash_Landfill_Expansion_5 (fly ash and TAA) [12-1-1999]"
              fileName="doc-392"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Ash_Landfill_Expansion_6 (fly ash and TAA response) [2-3-2000]"
              fileName="doc-393"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Ash_Landfill_Expansion_7 (fly ash and TAA continued) [3-29-2000]"
              fileName="doc-394"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Ash_Landfill_Expansion_8 (fly ash exposure) [5-29-2000]"
              fileName="doc-395"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="cement-plant-rd">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-6 ➤ Cement Plant Rd
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Cement_Plant_Rd_1 (TAA improper usage) [3-12-1997]"
              fileName="doc-396"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Cement_Plant_Rd_2 (MSW Ash) [5-1994"
              fileName="doc-397"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Cement_Plant_Rd_3 (investigation memorandum) [3-20-1997]"
              fileName="doc-398"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Cement_Plant_Rd_4 (response and updates) [8-6-1997]"
              fileName="doc-399"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Cement_Plant_Rd_5 (companion complaint) [12-11-1997]"
              fileName="doc-400"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Cement_Plant_Rd_6 (non-compliance) [9-15-1999]"
              fileName="doc-401"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="county-line-auto-salvage">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-6 ➤ County Line Auto Salvage
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="County_Line_Auto_Salvage_1 (TAA improper usage) [6-17-1997]"
              fileName="doc-402"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="County_Line_Auto_Salvage_2 (companion complaint plus photos) [11-10-1997]"
              fileName="doc-403"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="County_Line_Auto_Salvage_3 (letter recieved) [11-25-1997]"
              fileName="doc-404"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="County_Line_Auto_Salvage_4 (improper TAA usage) [6-28-1998]"
              fileName="doc-405"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="County_Line_Auto_Salvage_5 (companion complaint) [7-1-1998]"
              fileName="doc-406"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="general-usage">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-6 ➤ General Usage
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="General_Usage_1 (construction material use) [12-22-1994]"
              fileName="doc-407"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="General_Usage_2 (contract facts) [10-17-1993]"
              fileName="doc-408"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="General_Usage_3 (beneficial use in question) [7-11-1996]"
              fileName="doc-409"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="General_Usage_4 (response) [1-7-1997]"
              fileName="doc-410"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="General_Usage_5 (noncompliance) [4-4-1997]"
              fileName="doc-411"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="General_Usage_6 (ninvestigations) [4-11-1997]"
              fileName="doc-412"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="General_Usage_7 (ninvestigations) [4-14-1997]"
              fileName="doc-413"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="General_Usage_8 (BURNT appeal) [9-22-1997]"
              fileName="doc-414"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="General_Usage_9 (dioxin) [2-7-1998]"
              fileName="doc-415"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="General_Usage_10 (water and air contamination) [2-3-1998]"
              fileName="doc-416"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="General_Usage_11 (info request) [2-27-1998]"
              fileName="doc-417"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="General_Usage_12 (post card) [3-16-1998]"
              fileName="doc-418"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="General_Usage_13 (complaint consolidation) [4-1-1998]"
              fileName="doc-419"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="General_Usage_14 (more details) [4-4-1998]"
              fileName="doc-420"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="General_Usage_15 (BURNT request) [5-21-1998]"
              fileName="doc-421"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="General_Usage_16 (response to BURNT request) [6-9-1998]"
              fileName="doc-422"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="General_Usage_17 (sisters concern) [5-27-1998]"
              fileName="doc-423"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="General_Usage_18 (concern and response) [7-25-1998]"
              fileName="doc-424"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="General_Usage_19 (efforts to improve) [9-29-1998]"
              fileName="doc-425"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="General_Usage_20 (Thermal ash processing policy) [9-21-1998]"
              fileName="doc-426"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="General_Usage_21 (EPA petition) [9-16-2000]"
              fileName="doc-427"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="green-meadow-apts">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-6 ➤ Green Meadow Apts
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Green_Meadow_Apts_1 (TAA complaint) [8-6-1997]"
              fileName="doc-428"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Green_Meadow_Apts_2 (complaint add-on) [9-4-1997]"
              fileName="doc-429"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Green_Meadow_Apts_3 (complaint update) [1-21-1998]"
              fileName="doc-430"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="greenbrier-self-storage">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-6 ➤ Greenbrier Self-Storage
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Greenbrier_Self-Storage_1 (TAA improper usage) [8-31-1997]"
              fileName="doc-431"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Greenbrier_Self-Storage_2 (companion complaint) [9-13-1997]"
              fileName="doc-432"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Greenbrier_Self-Storage_3 (TAA complaint) [9-14-1997]"
              fileName="doc-433"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="hickory-grove">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-6 ➤ Hickory Grove
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Hickory_Grove_1 (complaint) [9-23-1997]"
              fileName="doc-434"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Hickory_Grove_2 (washout complaint) [12-19-1997]"
              fileName="doc-435"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Hickory_Grove_3 (TAA leaching complaint) [1-23-1998]"
              fileName="doc-436"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Hickory_Grove_4 (TAA erosion) [1-23-1998]"
              fileName="doc-437"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Hickory_Grove_5 (DoEaC recieved) [1-23-1998]"
              fileName="doc-438"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Hickory_Grove_6 (companion complaint) [1-31-1998]"
              fileName="doc-439"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="highland-rim-speedway">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-6 ➤ Highland Rim Speedway
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Highland_Rim_Speedway_1 (TAA improper usage) [4-21-1997]"
              fileName="doc-440"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Highland_Rim_Speedway_2 (TAA improper usage) [4-21-1997]"
              fileName="doc-441"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Highland_Rim_Speedway_3 (investigation) [4-25-1997]"
              fileName="doc-442"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Highland_Rim_Speedway_4 (letter received) [5-1-1997]"
              fileName="doc-443"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Highland_Rim_Speedway_5 (lTAA improper usage) [4-26-1997]"
              fileName="doc-444"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Highland_Rim_Speedway_6 (investigation report) [4-29-1997]"
              fileName="doc-445"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Highland_Rim_Speedway_7 (DoEaC response) [5-30-1997]"
              fileName="doc-446"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Highland_Rim_Speedway_8 (DoEaC summary of responses) [8-6-1997]"
              fileName="doc-447"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Highland_Rim_Speedway_9 (update to complaints) [12-22-1997]"
              fileName="doc-448"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Highland_Rim_Speedway_10 (complaint) [1-5-1998]"
              fileName="doc-449"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Highland_Rim_Speedway_11 (received) [1-16-1998]"
              fileName="doc-450"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Highland_Rim_Speedway_12 (companion complaint plus photos) [1-20-1998]"
              fileName="doc-451"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Highland_Rim_Speedway_13 (improper use complaint) [1-23-1998]"
              fileName="doc-452"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Highland_Rim_Speedway_14 (investigation report) [1-27-1998]"
              fileName="doc-453"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="metro-air-pollution">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-6 ➤ Metro Air Pollution
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Air_Pollution_1 (fugitive emissions) [8-30-1997]"
              fileName="doc-454"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Air_Pollution_2 (handwritten letters) [9-4-1997]"
              fileName="doc-455"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Air_Pollution_3 (e-mail) [9-15-1997]"
              fileName="doc-456"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Air_Pollution_4 (fugitive dust) [9-4-1997]"
              fileName="doc-457"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Air_Pollution_5 (handwritten plus test results) [12-11-1996]"
              fileName="doc-458"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Air_Pollution_6 (dust clouds) [11-24-1997]"
              fileName="doc-459"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Air_Pollution_7 (visible emissions) [11-29-1997]"
              fileName="doc-460"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Air_Pollution_8 (respone) [12-3-1997]"
              fileName="doc-461"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Air_Pollution_9 (series of events) [12-6-1997]"
              fileName="doc-462"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Air_Pollution_10 (emissions comparison) [12-21-1997]"
              fileName="doc-463"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Air_Pollution_11 (board of health response) [1-5-1998]"
              fileName="doc-464"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Air_Pollution_12 (companion complaint) [1-16-1998]"
              fileName="doc-465"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Air_Pollution_13 (dust emissions) [12-15-1997]"
              fileName="doc-466"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Air_Pollution_14 (dust emissions) [12-19-1997]"
              fileName="doc-467"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Air_Pollution_15 (companion complaint) [1-17-1998]"
              fileName="doc-468"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Air_Pollution_16 (response) [1-27-1998]"
              fileName="doc-469"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Air_Pollution_17 (ash cloud) [5-25-1998]"
              fileName="doc-470"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Air_Pollution_18 (lack of cover) [9-7-1999]"
              fileName="doc-471"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Air_Pollution_19 (ash cloud) [10-14-1999]"
              fileName="doc-472"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Air_Pollution_20 (ash dust plus pictures) [6-22-2000]"
              fileName="doc-473"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="metro-ash-landfill">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-6 ➤ Metro Ash Landfill
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Ash_Landfill_1 (ash complaint) [7-10-1996]"
              fileName="doc-474"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Ash_Landfill_2 (response) [10-15-1995]"
              fileName="doc-475"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Ash_Landfill_3 (clarification) [8-22-1997]"
              fileName="doc-476"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Ash_Landfill_4 (response) [11-26-1997]"
              fileName="doc-477"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Ash_Landfill_5 (permit) [2-5-1997]"
              fileName="doc-478"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Ash_Landfill_6 (complaint-request) [3-31-1997]"
              fileName="doc-479"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Ash_Landfill_7 (final disposition) [3-9-1994]"
              fileName="doc-480"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Ash_Landfill_8 (cross section) [3-1997]"
              fileName="doc-481"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Ash_Landfill_9 (color photos) [1994]"
              fileName="doc-482"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Ash_Landfill_10 (repeat complaint) [7-21-1997]"
              fileName="doc-483"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Ash_Landfill_11 (end use distinction) [3-9-1994]"
              fileName="doc-484"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Ash_Landfill_12 (complaint and photos) [7-30-1997]"
              fileName="doc-485"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Ash_Landfill_13 (cross section, revised [7-1997]"
              fileName="doc-486"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Ash_Landfill_14 (add-on complaint with pictures) [9-12-1997]"
              fileName="doc-487"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Ash_Landfill_15 (purchase order) [8-1-1995]"
              fileName="doc-488"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Ash_Landfill_16 (photo) [9-12-1997]"
              fileName="doc-489"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Ash_Landfill_17 (complaint) [10-7-1997]"
              fileName="doc-490"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Ash_Landfill_18 (complaint) [9-5-1999]"
              fileName="doc-491"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Ash_Landfill_19 (response) [2-3-2000]"
              fileName="doc-492"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Ash_Landfill_20 (follow-up) [4-2-2000]"
              fileName="doc-493"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Ash_Landfill_21 (complaint) [9-7-1999]"
              fileName="doc-494"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Ash_Landfill_22 (continued exposure) [3-28-2000]"
              fileName="doc-495"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="metro-sewage-plant">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-6 ➤ Metro Sewage Plant
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Sewage_Plant_1 (TAA erosion) [3-25-1997]"
              fileName="doc-496"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Sewage_Plant_2 (companion complaint) [5-14-1997]"
              fileName="doc-497"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Sewage_Plant_3 (unpermitted usage) [8-10-1997]"
              fileName="doc-498"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Sewage_Plant_4 (improper usage) [8-11-1997]"
              fileName="doc-499"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Sewage_Plant_5 (companion complaint) [7-4-1998]"
              fileName="doc-500"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Sewage_Plant_6 (field activity report) [10-16-2001]"
              fileName="doc-501"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Sewage_Plant_7 (lab results) [10-23-2001]"
              fileName="doc-502"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Metro_Sewage_Plant_8 (lab results, Johns take) [4-8-2002]"
              fileName="doc-503"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="multiple-sites">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-6 ➤ Multiple Sites
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="multiple_sites_1 (ash aggregate complaints) [11-5-1997]"
              fileName="doc-504"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="multiple_sites_2 (memorandum) [11-19-1997]"
              fileName="doc-505"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="multiple_sites_3 (site complaints) [2-2-1998]"
              fileName="doc-506"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="multiple_sites_4 (greenbrier ash re-use sites) [2-4-1998]"
              fileName="doc-507"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="multiple_sites_5 (lack of response) [2-6-1998]"
              fileName="doc-508"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="multiple_sites_6 (comments on response) [2-8-1998]"
              fileName="doc-509"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="multiple_sites_7 (comments on response) [2-13-1998]"
              fileName="doc-510"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="multiple_sites_8 (AAR response) [5-11-1998]"
              fileName="doc-511"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="multiple_sites_9 (remediation efforts) [5-25-1998]"
              fileName="doc-512"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="multiple_sites_10 (remediation efforts) [5-31-1998]"
              fileName="doc-513"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="multiple_sites_11 (lack of containment) [6-1-1998]"
              fileName="doc-514"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="multiple_sites_12 (lack of containment) [8-5-1998]"
              fileName="doc-515"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="multiple_sites_13 (weigh tickets) [1-4-2000]"
              fileName="doc-516"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="multiple_sites_14 (ash exposure) [1-18-2000]"
              fileName="doc-517"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="multiple_sites_15 (ash sites status) [2-8-2000]"
              fileName="doc-518"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="multiple_sites_16 (ash exposure) [5-29-2000]"
              fileName="doc-519"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="multiple_sites_17 (unpermitted usage) [2-11-2001]"
              fileName="doc-520"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="multiple_sites_18 (color images) [2-11-2001]"
              fileName="doc-521"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="multiple_sites_19 (site reports) [11-21-2001]"
              fileName="doc-522"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="regulations">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-6 ➤ Regulations
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Regulations_1 (Permit) [1-26-1993]"
              fileName="doc-523"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Regulations_2 (Uses of ash) [3-9-1994]"
              fileName="doc-524"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Regulations_3 (Uses of ash) [8-8-1997]"
              fileName="doc-525"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Regulations_4 (Placement Specification) [7-23-1997]"
              fileName="doc-526"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Regulations_5 (Meeting Results) [3-25-1998]"
              fileName="doc-527"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Regulations_6 (Memorandum) [6-25-1998]"
              fileName="doc-528"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Regulations_7 (Approved End Uses) [11-17-1998]"
              fileName="doc-529"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Regulations_8 (Beneficial Use Approval) [6-28-1999]"
              fileName="doc-530"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Regulations_9 (Conditions of Continued Permit) [12-11-1996]"
              fileName="doc-531"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Regulations_10 (Closing notes) [12-9-2003]"
              fileName="doc-532"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Regulations_11 (Permit Termination) [12-17-2003]"
              fileName="doc-533"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="risk">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-6 ➤ Risk
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Risk_1 (permit denial) [6-19-1996]"
              fileName="doc-534"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Risk_2 (ash aggregate) [8-5-1996]"
              fileName="doc-535"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Risk_3 (ash review) [4-23-1998]"
              fileName="doc-536"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Risk_4 (ash review) [5-22-1998]"
              fileName="doc-537"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Risk_5 (lab results) [6-3-1998]"
              fileName="doc-538"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Risk_6 (problems with ash) [6-17-1998]"
              fileName="doc-539"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Risk_7 (risk assessment) [6-6-1998]"
              fileName="doc-540"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Risk_8 (health risk assessment) [7-9-1998]"
              fileName="doc-541"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Risk_9 (health risk assessment comment) [7-14-1998]"
              fileName="doc-542"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Risk_10 (health risk assessment) [7-27-1998]"
              fileName="doc-543"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Risk_11 (health risk assessment complaint) [4-15-1999]"
              fileName="doc-544"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Risk_12 (health risk assessment permit in question) [5-12-1999]"
              fileName="doc-545"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Risk_13 (toxic synergies) [10-25-1999]"
              fileName="doc-546"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Risk_14 (more HRA complaints) [1-19-2000]"
              fileName="doc-547"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="spillage-on-roads">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-6 ➤ Spillage on Roads
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Spillage_on_Roads_1 (TAA road spillage) [7-15-1997]"
              fileName="doc-548"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Spillage_on_Roads_2 (DoEaC response) [8-6-1997]"
              fileName="doc-549"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Spillage_on_Roads_3 (complaint calls) [8-13-1997]"
              fileName="doc-550"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Spillage_on_Roads_4 (ash truck spillage) [10-14-1999]"
              fileName="doc-551"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Spillage_on_Roads_5 (ash truck spillage) [12-1-1999]"
              fileName="doc-552"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Spillage_on_Roads_6 (ash truck spillage plus photos) [12-6-1999]"
              fileName="doc-553"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Spillage_on_Roads_7 (TAA road spillage) [1-18-2000]"
              fileName="doc-554"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Spillage_on_Roads_8 (Field Activity Report) [10-16-2001]"
              fileName="doc-555"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="testing">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-6 ➤ Testing
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Testing_1 (Test Data) [4-14-1994]"
              fileName="doc-556"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Testing_2 (Letter to SWM) [4-26-1998]"
              fileName="doc-557"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="unknown-location">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-6 ➤ Unknown Location
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Unknown_Location_1 (permit violation) [7-10-1996]"
              fileName="doc-558"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Unknown_Location_2 (DoEaC response) [10-15-1995-1996]"
              fileName="doc-559"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Unknown_Location_3 (questions) [8-22-1997]"
              fileName="doc-560"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Unknown_Location_4 (DoEaC response) [11-26-1997]"
              fileName="doc-561"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>
      </div>

      <div id="binder-7">
        <div id="2176-ted-dorris-rd">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ 2176 Ted Dorris Rd
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="2176_Ted_Dorris_Rd_1 (photo) [4-9-2000]"
              fileName="doc-562"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="archey-center">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ Archey Center
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Archery_Center_1 (TAA spillage) [5-28-1998]"
              fileName="doc-563"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="central-parking">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ Central Parking
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Central_Parking_1 (complaint)"
              fileName="doc-564"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="cimmaron-trace">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ Cimmaron Trace
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Cimmaron_Trace_1 (handwritten)"
              fileName="doc-565"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Cimmaron_Trace_2 (complaint) [4-29-1998]"
              fileName="doc-566"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Cimmaron_Trace_3 (companion complaint) [5-5-1998]"
              fileName="doc-567"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Cimmaron_Trace_4 (complaint response) [5-5-1998]"
              fileName="doc-568"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Cimmaron_Trace_5 (complaints and responses) [5-6-2000"
              fileName="doc-569"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Cimmaron_Trace_6 (TAA erosion) [1-5-2000]"
              fileName="doc-570"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Cimmaron_Trace_7 (ash waste issues) [5-9-2000]"
              fileName="doc-571"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Cimmaron_Trace_8 (exposed TAA) [5-29-2000]"
              fileName="doc-572"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="city-road-chapel">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ City Road Chapel
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="City_Road_Chapel_1 (complaint) [1-1-1999]"
              fileName="doc-573"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="City_Road_Chapel_2 (complaint) [1-3-1999]"
              fileName="doc-574"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="City_Road_Chapel_3 (information) [1-7-1999]"
              fileName="doc-575"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="City_Road_Chapel_4 (investigation) [1-8-1999]"
              fileName="doc-576"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="City_Road_Chapel_5 (response) [1-11-1999]"
              fileName="doc-577"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="City_Road_Chapel_6 (response) [1-18-1999]"
              fileName="doc-578"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="City_Road_Chapel_7 (parking lot construction) [1-21-1999]"
              fileName="doc-579"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="City_Road_Chapel_8 (follow up) [2-2-1999]"
              fileName="doc-580"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="City_Road_Chapel_9 (notice) [3-4-1999]"
              fileName="doc-581"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="City_Road_Chapel_10 (Director_s Order) [6-28-1999]"
              fileName="doc-582"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="City_Road_Chapel_11 (review order) [8-2-1999]"
              fileName="doc-583"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="City_Road_Chapel_12 (amended order) [10-29-1999]"
              fileName="doc-584"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="comfort-suites">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ Comfort Suites
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Comfort_Suites_1 (photo) [11-20-1999]"
              fileName="doc-585"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Comfort_Suites_2 (photos) [11-22-1999]"
              fileName="doc-586"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Comfort_Suites_3 (complaint) [12-2-1999]"
              fileName="doc-587"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Comfort_Suites_4 (pictures) [12-8-1999]"
              fileName="doc-588"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Comfort_Suites_5 (photo) [1-5-2000]"
              fileName="doc-589"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Comfort_Suites_6 (photo) [2-11-2000]"
              fileName="doc-590"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Comfort_Suites_7 (add-on complaint) [4-1-2000]"
              fileName="doc-591"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Comfort_Suites_8 (photos) [5-29-2000]"
              fileName="doc-592"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="cvs-madison">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ CVS Madison
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="CVS_madison_1 (complaint) [1-17-1999]"
              fileName="doc-593"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="exxon-12th-broadway">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ Exxon 12th Broadway
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Exxon_12th_Broadway_1 (complaint) [4-29-1999]"
              fileName="doc-594"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="exxon-i-65&24-shelby">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ Exxon I-65&24 Shelby
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Exxon_I-65_24_Shelby (complaint) [4-27-1999]"
              fileName="doc-594b"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="lakewood-condominiums">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ Lakewood Condominiums
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Lakewood_Condominiums_1 (ash spillage) [3-4-1998]"
              fileName="doc-595"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="last-plantation">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ Last Plantation
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Last_Plantation_1 (photos) [10-9-2000]"
              fileName="doc-596"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Last_Plantation_2 (response) [10-25-2000]"
              fileName="doc-597"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Last_Plantation_3 (response) [12-4-2000]"
              fileName="doc-598"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Last_Plantation_4 (complaint-response) [10-16-2000]"
              fileName="doc-599"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="marcorp-constructors">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ Marcorp Constructors
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Marcorp_Constructors_1 (complaint chain) [4-7-2001]"
              fileName="doc-600"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Marcorp_Constructors_2 (response) [4-20-2001]"
              fileName="doc-601"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Marcorp_Constructors_3 (response) [4-29-2001]"
              fileName="doc-602"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Marcorp_Constructors_4 (response) [5-13-2001]"
              fileName="doc-603"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Marcorp_Constructors_5 (correspondence) [5-24-2001]"
              fileName="doc-604"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Marcorp_Constructors_6 (response) [6-14-2001]"
              fileName="doc-605"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Marcorp_Constructors_7 (response) [6-29-2001]"
              fileName="doc-606"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Marcorp_Constructors_8 (site evaluation communication) [6-7-2001]"
              fileName="doc-607"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Marcorp_Constructors_9 (standard disputes) [7-7-2001]"
              fileName="doc-608"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Marcorp_Constructors_10 (response) [7-23-2001]"
              fileName="doc-609"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Marcorp_Constructors_11 (response) [8-28-2001]"
              fileName="doc-610"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Marcorp_Constructors_12 (photos) [9-17-2001]"
              fileName="doc-611"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Marcorp_Constructors_13 (response) [10-24-2001]"
              fileName="doc-612"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Marcorp_Constructors_14 (complaint) [10-15-2001]"
              fileName="doc-613"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Marcorp_Constructors_15 (progress report) [1-10-2002]"
              fileName="doc-614"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Marcorp_Constructors_16 (complaint) [2-7-2002]"
              fileName="doc-615"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Marcorp_Constructors_17 (complaint with photos) [2-17-2002]"
              fileName="doc-616"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Marcorp_Constructors_18 (complaint) [3-4-2002]"
              fileName="doc-617"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Marcorp_Constructors_19 (trip report) [4-1-2002]"
              fileName="doc-618"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="mcdonalds-i-24-hwy-76">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ McDonalds I-24 Hwy 76
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="McDonalds_I-24_Hwy_76_1 (complaint) [5-5-1999]"
              fileName="doc-619"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="McDonalds_I-24_Hwy_76_2 (pictures) [6-1-2000]"
              fileName="doc-620"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="McDonalds_I-24_Hwy_76_3 (response) [11-8-2000]"
              fileName="doc-621"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="McDonalds_I-24_Hwy_76_4 (address) [1-16-2001]"
              fileName="doc-622"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="mcdonalds-nippers-corner">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ McDonalds Nippers Corner
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="McDonalds_Nippers_Corner_1 (complaint) [11-3-1998]"
              fileName="doc-623"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="McDonalds_Nippers_Corner_2 (documentation) [5-21-1999]"
              fileName="doc-624"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="mcquiston-heights">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ McQuiston Heights
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="McQuiston_Heights_1 (TAA erosion) [9-3-1997]"
              fileName="doc-625"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="McQuiston_Heights_2 (TAA migration) [9-6-1997]"
              fileName="doc-626"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="McQuiston_Heights_3 (exposed TAA) [1-17-1998]"
              fileName="doc-627"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="McQuiston_Heights_4 (investigation report) [1-27-1998]"
              fileName="doc-628"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="n-mt-pleasant-rd-homes">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ N. Mt. Pleasant Rd. homes
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="N_Mt_Pleasant_Rd_homes_1 (complaint) [5-10-1998]"
              fileName="doc-629"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="N_Mt_Pleasant_Rd_homes_2 (complaint) [5-15-1998]"
              fileName="doc-630"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="pitt-excavating">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ Pitt Excavating
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Pitt_Excavating_1 (complaint) [5-4-1998]"
              fileName="doc-631"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Pitt_Excavating_2 (violation) [9-25-1998]"
              fileName="doc-632"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Pitt_Excavating_3 (deficiency notice) [10-6-1998]"
              fileName="doc-633"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Pitt_Excavating_4 (response) [10-15-1998]"
              fileName="doc-634"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Pitt_Excavating_5 (approval) [11-30-1998]"
              fileName="doc-635"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Pitt_Excavating_6 (elevation plan) [1-7-1999]"
              fileName="doc-636"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Pitt_Excavating_7 (elevation map) [1-7-1999]"
              fileName="doc-637"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Pitt_Excavating_8 (water quality violation) [1-18-1999]"
              fileName="doc-638"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Pitt_Excavating_9 (TAA complaint) [1-21-1999]"
              fileName="doc-639"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Pitt_Excavating_10 (TAA complaint) [2-22-1999]"
              fileName="doc-640"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Pitt_Excavating_11 (TAA complaint) [2-26-1999]"
              fileName="doc-641"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Pitt_Excavating_12 (water pollution control) [2-1-1999]"
              fileName="doc-642"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Pitt_Excavating_13 (field investigation) [3-5-1999]"
              fileName="doc-643"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Pitt_Excavating_14 (violation notice) [3-12-1999]"
              fileName="doc-644"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Pitt_Excavating_15 (restrictions lifted) [4-22-1999]"
              fileName="doc-645"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Pitt_Excavating_16 (discharge) [8-18-1999]"
              fileName="doc-646"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Pitt_Excavating_17 (stream designation) [9-1-1999]"
              fileName="doc-647"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Pitt_Excavating_18 (stream designation 2) [9-2-1999]"
              fileName="doc-648"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Pitt_Excavating_19 (TAA issues) [9-4-1999]"
              fileName="doc-649"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Pitt_Excavating_20 (update) [1-5-2000]"
              fileName="doc-650"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Pitt_Excavating_21 (fire report) [6-22-2000]"
              fileName="doc-651"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Pitt_Excavating_22 (air complaint) [7-8-2000]"
              fileName="doc-652"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Pitt_Excavating_23 (violation) [8-8-2000]"
              fileName="doc-653"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Pitt_Excavating_24 (violation) [2-28-2001]"
              fileName="doc-654"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="powell-ave-armory-dr">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ Powell Ave Armory Dr
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Powell_Ave_Armory_Dr_1 (complaints) [2-8-1998]"
              fileName="doc-655"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Powell_Ave_Armory_Dr_2 (memorandum) [2-9-1998"
              fileName="doc-656"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="rawls-estates">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ Rawls Estates
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Rawls_Estates_1 (TAA complaint) [1-23-1998]"
              fileName="doc-657"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="red-roof-inn-cool-springs">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ Red Roof Inn Cool Springs
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Red_Roof_Inn_Cool_Springs_1 (reinstatement) [6-26-1998]"
              fileName="doc-658"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Red_Roof_Inn_Cool_Springs_2 (complaint) [1-18-1999]"
              fileName="doc-659"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="ridgetop-auto-center">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ Ridgetop Auto Center
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Ridgetop_Auto_Center_1 (complaint) [10-8-2000]"
              fileName="doc-660"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="shadow-brook">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ Shadow Brook
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Shadow_Brook_1 (TAA complaint) [10-26-1997]"
              fileName="doc-661"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Shadow_Brook_2 (update complaint) [1-29-1998]"
              fileName="doc-662"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Shadow_Brook_3 (TAA photo) [11-20-1999]"
              fileName="doc-663"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="southern-medical-disposal">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ Southern Medical Disposal
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Southern_Medical_Disposal_1 (complaint) [7-5-1998]"
              fileName="doc-664"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="sterling-house">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ Sterling House
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Sterling_House_1 (waste ash) [2-6-1998]"
              fileName="doc-665"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Sterling_House_2 (complaint) [1-18-2000]"
              fileName="doc-666"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="sunny-meadows-estates">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ Sunny Meadows Estates
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Sunny_Meadows_Estates_1 (complaint) [2-21-1999]"
              fileName="doc-667"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="sycamore-springs">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ Sycamore Springs
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Sycamore_Springs_1 (TAA complaint) [2-23-1998]"
              fileName="doc-668"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="walgreens-melrose">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ Walgreens Melrose
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Walgreens_Melrose_1 (complaint) [10-13-1998]"
              fileName="doc-669"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Walgreens_Melrose_2 (deficient request) [10-6-1998]"
              fileName="doc-670"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Walgreens_Melrose_3 (photos) [10-20-1998]"
              fileName="doc-671"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Walgreens_Melrose_4 (resident request) [10-20-1998]"
              fileName="doc-672"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Walgreens_Melrose_5 (violation) [11-9-1998]"
              fileName="doc-673"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="whiteland-estates">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ Whiteland Estates
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Whiteland_Estates_1 (TAA erosion) [9-2-1997]"
              fileName="doc-674"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Whiteland_Estates_2 (TAA complaint) [11-24-1997]"
              fileName="doc-675"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Whiteland_Estates_3 (companion complaint) [12-10-1997]"
              fileName="doc-676"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Whiteland_Estates_4 (DoEaC reciept) [12-17-1997]"
              fileName="doc-677"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Whiteland_Estates_5 (complaint update) [1-19-1998]"
              fileName="doc-678"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Whiteland_Estates_6 (TAA erosion) [1-23-1998]"
              fileName="doc-679"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="whitsett-elem-school">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ Whitsett Elem School
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Whitsett_Elem_School_1 (deficiency notice) [10-6-1998]"
              fileName="doc-680"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Whitsett_Elem_School_2 (deficiency notice) [10-15-1998]"
              fileName="doc-681"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>

        <div id="willow-creek">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-7 ➤ Willow Creek
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="Willow_Creek_1 (complaint) [4-30-1998]"
              fileName="doc-682"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Willow_Creek_2 (response) [5-5-1998]"
              fileName="doc-683"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
          </div>
        </div>
      </div>

      <div id="binder-8">
        <div id="richards-scans">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-8 ➤ Richard&apos;s Scans
          </div>
          <div className="documents-element">
            <LibrarycardCatalog
              title=""
              leeTitle="John Solid Waste Management Resume [7-1996]"
              fileName="doc-684"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="John Resume 3 Pages [7-1996]"
              fileName="doc-685"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Tax Disparity [10-2014]"
              fileName="doc-686"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Creating a Level Playing Field"
              fileName="doc-687"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Household Hazardous Waste Collection Flyer [6-1-1996]"
              fileName="doc-688"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Remanufacturing Example: Making Toilet Paper Flyer"
              fileName="doc-689"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Food Waste Seperation POW WOW Flyer "
              fileName="doc-690"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Guelph Expierence by Wane Ardnt Flyer [1995] "
              fileName="doc-691"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="10 Hidden Taxes Caused by Thermal Plant"
              fileName="doc-692"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Optimizing Material Recovery Flyer 1"
              fileName="doc-693"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Optimizing Material Recovery Flyer 2"
              fileName="doc-694"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="The Tennessean Newspaper Clip [11-15-1999]"
              fileName="doc-695"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Airborne & Solid Waste Emissions Booklet"
              fileName="doc-696"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="AAR Cumulative Billings Booklet [11-11-1999]"
              fileName="doc-697"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Metro Municipal Solid Waste [10-18-2003]"
              fileName="doc-698"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Large Misc. Booklet"
              fileName="doc-699"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Massachusetts Dept. Env. Protection [7-1992]"
              fileName="doc-700"
              description=""
              fileLabel={true}
              showLeeLabel={true}
            />
            <LibrarycardCatalog
              title=""
              leeTitle="Davidson County Solid Waste TAX DISPARITY [8-21-2012]"
              fileName="doc-701"
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
