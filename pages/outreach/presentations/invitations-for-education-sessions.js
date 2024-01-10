import SecondaryNavbar from "@/components/SecondaryNavbar";
import TertiaryNavbar from "@/components/TertiaryNavbar";
import { primaryHierarchyProps } from "@/pages/outreach";
import { secondaryHierarchyProps } from "@/pages/outreach/presentations";
import DocumentTwo from "@/components/DocumentTwo";

export default function InvitationsForEducationSessions() {
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
            Invitations for Education Sessions
          </div>

          <DocumentTwo
            title="Invitations for Education Sessions"
            fileName="doc-706"
            description=""
            fileLabel={true}
          />
        </div>
      </div>
    </div>
  );
}
