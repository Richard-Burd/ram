// NOTE: this page is slated for deletion
// import Figure from "../components/Figure";
// import Brochure from "../components/Brochure";
// import FigurePng from "../components/FigurePng";
// import Link from "next/link";
import DocumentTwo from "@/components/DocumentTwo";
import BrochureFig from "@/components/BrochureFig";

export default function FiguresRichard() {
  return (
    <div className="bg-zinc-900">
      <div className="mx-8 pt-20 text-center text-4xl font-semibold text-zinc-200">
        📚 Figure Gallery of Richard's Scanned Exhibits & Reconfigured PDF Files
        🖼️
      </div>
      <div className="mx-4 px-10 pt-20 text-2xl text-zinc-100">
        Each of the items below are figures that Richard scanned in, or are
        re-ordered PDF files made from Lee's scans, and/or compilations of scans
        done by Richard. The PDF files have a smapp preview with an (optional)
        title & description for each one. The figures are just the images shown
        in a larger format. When the image is too big for the browser viewport
        at full scale, the user can click on the image to inlarge it, and click
        again to shrink it back down.
        <br></br>
        <br></br>
        <b>NOTE:</b> the{" "}
        <text className="font-bold text-red-400">red text </text>on the images
        below that says things like
        <text className="young-serif-font font-semibold italic text-red-400">
          {" "}
          fig-1{" "}
        </text>{" "}
        is only tempoary and will not be on the final website. These are labels
        for all documents (doc) and figures (fig) we plan to put on the website.
        This makes it easy for the crew to discuss moving such-and-such doc or
        fig to a given place in the website.
      </div>
      <div id="documents-list" className="ml-20">
        {/* <DocumentTwo
          title="Education Session Presentation"
          fileName="doc-699"
          description=""
          fileLabel={true}
        />
        <DocumentTwo
          title="Additional Education Session Packet (Involves Incineration)"
          fileName="doc-704"
          description="This includes figs 8, 9, 10, 16, 17, 17.1, 26, 27, 29.1, 29.2, and 33.1-33.4."
          fileLabel={true}
        /> */}
      </div>
      <div className="roboto-font-400 m-6 rounded-6xl bg-[#cfcfcf] bg-opacity-70 px-6 pb-16 pt-12 text-zinc-950">
        {/* <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-1.1"
              fileName="Fig-1.1.jpg"
            />
            <br></br>
            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-1.2"
              fileName="Fig-1.2.jpg"
            />
            <br></br>
            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-1.3"
              fileName="Fig-1.3.jpg"
            />
            <br></br>
            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-1.4"
              fileName="Fig-1.4.jpg"
            />
            <br></br> */}
        {/* <BrochureFig
            originalWidth="50%"
            figureNumber="Fig-2"
            fileName="iceberg.jpg"
          />
          <br></br> */}
        <BrochureFig
          originalWidth="50%"
          figureNumber="Fig-2.1"
          fileName="Fig-2.1.jpg"
        />
        <br></br>
        {/* <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-3"
              fileName="net-zero-landfilling.jpg"
            />
            <br></br>
            <BrochureFig figureNumber="Fig-4" fileName="composting.jpg" />
            <br></br>
            <BrochureFig figureNumber="Fig-5" fileName="trommel.jpg" />
            <br></br>
            <BrochureFig figureNumber="Fig-6" fileName="ants.jpg" />
            <br></br>
            <BrochureFig figureNumber="Fig-7" fileName="gravel.jpg" /> */}
        <br></br>
        <BrochureFig figureNumber="Fig-8" fileName="entire-thermal.jpg" />
        <br></br>
        <BrochureFig
          originalWidth="50%"
          figureNumber="Fig-9"
          fileName="metro-to-thermal.jpg"
        />
        <br></br>
        {/* <BrochureFig figureNumber="Fig-10" fileName="human-intake.jpg" />
            <br></br>
            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-11"
              fileName="wet-dry-pow.jpg"
            />
            <br></br>
            <BrochureFig figureNumber="Fig-12" fileName="recovery.jpg" />
            <br></br>
            <BrochureFig figureNumber="Fig-13" fileName="trash.jpg" />
            <br></br>
            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-14.1"
              fileName="Fig-14.1.jpg"
            />
            <br></br>
            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-14.2"
              fileName="Fig-14.2.jpg"
            />
            <br></br>
            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-14.3"
              fileName="Fig-14.3.jpg"
            />
            <br></br>
            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-14.4"
              fileName="Fig-14.4.jpg"
            />
            <br></br>
            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-14.5"
              fileName="Fig-14.5.jpg"
            />
            <br></br>
            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-14.6"
              fileName="Fig-14.6.jpg"
            /> */}
        <br></br>
        <br></br>
        <br></br>
        {/* <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-15"
              fileName="buckets.jpg"
            />
            <br></br> */}
        <BrochureFig
          originalWidth="50%"
          figureNumber="Fig-16"
          fileName="complaints.jpg"
        />
        <br></br>
        <BrochureFig
          originalWidth="50%"
          figureNumber="Fig-17"
          fileName="aar.jpg"
        />
        <br></br>
        <BrochureFig
          originalWidth="50%"
          figureNumber="Fig-17.1"
          fileName="Fig-17.1.jpg"
        />
        <br></br>
        {/* same as Fig-4, can be deleted. */}
        {/* <BrochureFig figureNumber="Fig-18" fileName="composting.jpg" /> */}
        <br></br>
        {/* <BrochureFig
            originalWidth="50%"
            figureNumber="Fig-19.1"
            fileName="Fig-19.1.jpg"
          />
          <br></br>
          <BrochureFig
            originalWidth="50%"
            figureNumber="Fig-19.2"
            fileName="Fig-19.2.jpg"
          />
          <br></br> */}
        {/* <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-20"
              fileName="heavy-molded.1.jpg"
            />
            <br></br>
            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-21"
              fileName="heavy-molded.2.jpg"
            />
            <br></br>
            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-22"
              fileName="jobs.jpg"
            />
            <br></br>
            <BrochureFig figureNumber="Fig-23" fileName="re-manufacture.jpg" />
            <br></br> 
            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-24"
              fileName="solid-waste-choices.jpg"
            />
            <br></br>
            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-25"
              fileName="tax-disparity.jpg"
            />
            <br></br> */}
        <BrochureFig
          originalWidth="50%"
          figureNumber="Fig-26"
          fileName="tree.jpg"
        />
        <br></br>
        <BrochureFig
          originalWidth="50%"
          figureNumber="Fig-27"
          fileName="trees.jpg"
        />
        <br></br>
        {/* <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-28"
              fileName="wet-dry-short.jpg"
            />
          <br></br> 
          <BrochureFig
            originalWidth="50%"
            figureNumber="Fig-29"
            fileName="Fig-29.jpg"
          />
          <br></br> */}
        <BrochureFig
          originalWidth="50%"
          figureNumber="Fig-29.1"
          fileName="Fig-29.1.jpg"
        />
        <br></br>
        <BrochureFig
          originalWidth="50%"
          figureNumber="Fig-29.2"
          fileName="Fig-29.2.jpg"
        />
        <br></br>
        {/* <BrochureFig
            originalWidth="50%"
            figureNumber="Fig-30"
            fileName="Fig-30.jpg"
          />
          <br></br>
          <BrochureFig
            originalWidth="50%"
            figureNumber="Fig-31"
            fileName="Fig-31.jpg"
          />
          <br></br> */}
        {/* <BrochureFig
            originalWidth="50%"
            figureNumber="Fig-32"
            fileName="Fig-32.jpg"
          />
          <br></br> */}
        <BrochureFig
          originalWidth="50%"
          figureNumber="Fig-33.1"
          fileName="Fig-33.1.jpg"
        />
        <br></br>
        <BrochureFig
          originalWidth="50%"
          figureNumber="Fig-33.2"
          fileName="Fig-33.2.jpg"
        />
        <br></br>
        <BrochureFig
          originalWidth="50%"
          figureNumber="Fig-33.3"
          fileName="Fig-33.3.jpg"
        />
        <br></br>
        <BrochureFig
          originalWidth="50%"
          figureNumber="Fig-33.4"
          fileName="Fig-33.4.jpg"
        />
        {/* <br></br>
        <BrochureFig
          originalWidth="50%"
          figureNumber="Fig-34"
          fileName="Fig-34.jpg"
        /> */}
      </div>
      <div className="pb-48"></div>
    </div>
  );
}
