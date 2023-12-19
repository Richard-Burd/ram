import Link from "next/link";
import SecondaryNavbar from "@/components/SecondaryNavbar";
import PrimaryMastHead from "@/components/PrimaryMastHead";

export const primaryHierarchyProps = {
  // bgColor: "bg-[#3dff51]",
  bgColor: "bg-outreachBg",
  titles: [
    "Presentations",
    "Brochures",
    "Newsletters",
    "Handouts",
    "Submissions",
  ],
  path: "/outreach",
  topMargin: `my-2.5`,
};

export default function Outreach() {
  return (
    <div>
      <SecondaryNavbar {...primaryHierarchyProps} />
      <PrimaryMastHead
        title="Outreach"
        titleColor="text-[#c2ffbf]"
        subtitle="Education, publications"
        swooshColor="green"
        backgroundColor="to-[#14993c] from-[#08120b]"
        buttonsColor="bg-outreachBg" // "bg-[#8aff8c]"
        {...primaryHierarchyProps}
      />
      <div className="rough-draft-page-outline bg-zinc-900 pb-[500px]">
        <div className=" mx-8 max-w-screen-md pt-20 text-stone-200">
          <p className="mb-10 text-4xl font-semibold">
            This "Outreach" page is under development.
          </p>
          {/* <ul className="mx-6 sm:mx-10 list-square list-outside text-base">
            <li className="pt-3 text-2xl">
              A page or subsection called{" "}
              <Link
                className="text-blue-300 underline font-semibold"
                href="/brochures"
              >
                Brochures
              </Link>
            </li>
            <li className="pt-3 text-2xl">
              A page or subsection called{" "}
              <Link
                className="text-blue-300 underline font-semibold"
                href="/handouts"
              >
                Handouts
              </Link>
            </li>
            <li className="pt-3 text-2xl">
              A page or subsection called{" "}
              <Link
                className="text-blue-300 underline font-semibold"
                href="/newsletters"
              >
                Newsletters
              </Link>
            </li>
            <li className="pt-3 text-2xl">
              A page or subsection called{" "}
              <Link
                className="text-blue-300 underline font-semibold"
                href="/submissions"
              >
                Submissions
              </Link>
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  );
}
