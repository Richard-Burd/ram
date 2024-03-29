import Link from "next/link";
import Carousel from "@/components/Carousel";
import Document from "@/components/Document";
import SecondaryNavbar from "@/components/SecondaryNavbar";
import PrimaryMastHead from "@/components/PrimaryMastHead";

export const primaryHierarchyProps = {
  bgColor: "bg-studiesBg",
  titles: ["Zero-Waste", "Methodology", "Literature", "Travels", "Pilots"],
  path: "/studies",
  topMarginForEachHierarchyButton: `my-2.5`,
};

export default function Studies() {
  return (
    <div>
      <SecondaryNavbar {...primaryHierarchyProps} />
      <PrimaryMastHead
        title="Studies"
        titleColor="text-[#f8ffbf]"
        subtitle="Travels, pilots"
        swooshColor="yellow"
        backgroundColor="to-[#8a8500] from-[#0f0f00]"
        buttonsColor="bg-studiesBg"
        {...primaryHierarchyProps}
      />
      <div className="rough-draft-page-outline bg-zinc-900 pb-[500px]">
        <div className=" mx-8 max-w-screen-md pt-20 text-stone-200">
          <p className="mb-10 text-4xl font-semibold">
            This "Studies" page will have the following subsections:
          </p>
          <ul className="mx-6 list-outside list-square text-base sm:mx-10">
            <li className="pt-3 text-2xl">
              A page or subsection called{" "}
              <Link
                className="font-semibold text-blue-300 underline"
                href="/pilots"
              >
                Pilots
              </Link>
            </li>
            <li className="pt-3 text-2xl">
              A page or subsection called{" "}
              <Link
                className="font-semibold text-blue-300 underline"
                href="/travels"
              >
                Travels
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-20 text-center text-4xl font-semibold text-stone-200">
          🎠 Carousel 🎠
        </div>
        <div className="mx-4 px-10 pt-2 text-justify text-2xl text-stone-200">
          Below is an example of something called a website "Carousel." it lets
          you pan left and right and see all of the items inside of it. This is
          one potential way we could display documents, figures, and other
          materials on this RAM website. This is a simple carousel that starts
          and ends, but carousels can also be infinite, meaning that they will
          loop around and around forever in an infinite scroll.
        </div>
        <Carousel>
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
          <Document title="" fileName="doc-3" description="" fileLabel={true} />
        </Carousel>
      </div>
    </div>
  );
}
