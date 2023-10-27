import Document from "../components/Document";
import Link from "next/link";

export default function LibraryLee() {
  return (
    <div>
      <div className="mt-20 text-center font-semibold text-4xl">
        📚 Library of Lee's Scanned Documents 📄
      </div>
      <div className="mx-4 text-2xl text-stone-700 px-10 pt-20">
        Each of the items below are documents that Lee scanned in. Each instance
        contains a document's preview picture (of the first page) a clickable
        PDF document showing all pages within the document, and a title /
        description for each one. The title and description are optional. The
        first two documents have them in order to show how the title and
        description would be displayed. The rest have no title or description.
        <br></br>
        <br></br>
        The documents are sorted according to these{" "}
        <a
          href="https://drive.google.com/drive/u/1/folders/1m4k3QQLEKjYm7N0yBrhS5hGKkyAAIeeN"
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
              fileName="doc-1"
              description="Attendees: Terry Keleher, Anna Motsejenko et. al."
              fileLabel={true}
            />
            <Document
              title="Jefferson County Solid Waste Management District Board"
              fileName="doc-2"
              description="Attendees: Elgin Crull, Fred Banks, Joyce St. Clain, et. al. This is a rambling sentence that will let us see what a longer description would look like for a particular document."
              fileLabel={true}
            />
            <Document
              title=""
              fileName="doc-3"
              description=""
              fileLabel={true}
            />
          </div>
        </div>
        <div id="Ash Recycling">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-1 ➤ Ash Recycling
          </div>
          <div className="documents-element">
            {/* <Document title="" fileName="doc-3" description="" /> */}
          </div>
        </div>
        <div id="BURNT">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-1 ➤ BURNT
          </div>
          <div className="documents-element">
            {/* <Document title="" fileName="doc-3" description="" /> */}
          </div>
        </div>
        <div id="Coalition of Green Thumbs">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-1 ➤ Coalition of Green Thumbs
          </div>
          <div className="documents-element">
            {/* <Document title="" fileName="doc-3" description="" /> */}
          </div>
        </div>
        <div id="Environmental Justice Bill">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-1 ➤ Environmental Justice Bill
          </div>
          <div className="documents-element">
            {/* <Document title="" fileName="doc-3" description="" /> */}
          </div>
        </div>
        <div id="Front Pocket">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-1 ➤ Front Pocket
          </div>
          <div className="documents-element">
            {/* <Document title="" fileName="doc-3" description="" /> */}
          </div>
        </div>
        <div id="Near-Zero Landfilling">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-1 ➤ Near-Zero Landfilling
          </div>
          <div className="documents-element">
            {/* <Document title="" fileName="doc-3" description="" /> */}
          </div>
        </div>
        <div id="Solid Waste Reduction Goal">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-1 ➤ Solid Waste Reduction Goal
          </div>
          <div className="documents-element">
            {/* <Document title="" fileName="doc-3" description="" /> */}
          </div>
        </div>
        <div id="Thermal Replacement">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-1 ➤ Thermal Replacement
          </div>
          <div className="documents-element">
            {/* <Document title="" fileName="doc-3" description="" /> */}
          </div>
        </div>
        <div id="Wet/Dry">
          <div className="border-b-slate-900 border-b-2 m-4 mt-20 font-semibold text-4xl">
            Binder-1 ➤ Wet/Dry
          </div>
          <div className="documents-element">
            {/* <Document title="" fileName="doc-3" description="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
