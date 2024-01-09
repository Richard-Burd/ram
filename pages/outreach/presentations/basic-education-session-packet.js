import SecondaryNavbar from "@/components/SecondaryNavbar";
import TertiaryNavbar from "@/components/TertiaryNavbar";
import { primaryHierarchyProps } from "@/pages/outreach";
import { secondaryHierarchyProps } from "@/pages/outreach/presentations";
import DocumentTwo from "@/components/DocumentTwo";

export default function BasicEducationSessionPacket() {
  return (
    <div>
      <div className="bg-gradient-to-l from-[#088723] to-[#021a07] pb-72">
        <SecondaryNavbar {...primaryHierarchyProps} />
        <TertiaryNavbar {...secondaryHierarchyProps} />
        <div
          id="title-and-text-box"
          className="m-11 rounded-6xl bg-neutral-950 p-8"
        >
          <div className="pt-serif-700 p-8 text-center text-7xl italic text-[#c2ffbf]">
            Basic Education Session Packet
          </div>

          <DocumentTwo
            title="Basic Education Session Packet"
            fileName="doc-705"
            description=""
            fileLabel={true}
          />

          {/* <div
            id="tennessee-solid-waste-disposal-control-board"
            className="mx-8 mb-24 pt-4 text-zinc-200"
          >
            <div className="mb-2 mt-2 border-b-2 border-zinc-300 pb-1 text-4xl font-bold">
              Tennessee Solid Waste Disposal Control Board
            </div>
            <div className="text-2xl">
              <p className="mb-8">
                Interpretation of statutes by the Tennessee Solid Waste Disposal
                Control Board. Submitted to the State of Tennessee, Office of
                the Attorney General. 2 pages, March 1993.
              </p>
              <p className="mb-8">
                Arguments for permittance by Order instead of by Rule for
                beneficial reuse of treated municipal waste combustor ash.
                Submitted to the Tennessee Solid Waste Disposal Control Board. 1
                page, July 1996.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
