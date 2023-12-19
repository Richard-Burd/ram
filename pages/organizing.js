import SecondaryNavbar from "@/components/SecondaryNavbar";
import PrimaryMastHead from "@/components/PrimaryMastHead";

export const primaryHierarchyProps = {
  bgColor: "bg-organizingBg",
  titles: ["Contacts", "Meetings", "Donors", "Legal"],
  path: "/organizing",
  topMargin: `mt-7`,
};

export default function Organizing() {
  return (
    <div>
      <SecondaryNavbar {...primaryHierarchyProps} />
      <PrimaryMastHead
        title="Organizing"
        titleColor="text-[#d4bfff]"
        subtitle="Join us"
        swooshColor="purple"
        backgroundColor="to-[#591fab] from-[#0b041c]"
        buttonsColor="bg-organizingBg" // "bg-[#d5a8ff]"
        {...primaryHierarchyProps}
      />
      <div className="rough-draft-page-outline bg-zinc-900 pb-[500px]">
        <div className=" mx-8 max-w-screen-md pt-20 text-stone-200">
          <p className="mb-10 text-4xl font-semibold">
            This "Organizing" page is under development.
          </p>
          {/* <ul className="mx-6 sm:mx-10 list-square list-outside text-base">
            <li className="pt-3 text-2xl">
              A page or subsection called{" "}
              <Link
                className="text-blue-300 underline font-semibold"
                href="/contacts"
              >
                Contacts
              </Link>
            </li>
            <li className="pt-3 text-2xl">
              A page or subsection called{" "}
              <Link
                className="text-blue-300 underline font-semibold"
                href="/history"
              >
                History
              </Link>
            </li>
            <li className="pt-3 text-2xl">
              A page or subsection called{" "}
              <Link
                className="text-blue-300 underline font-semibold"
                href="/legal"
              >
                Legal
              </Link>
            </li>
            <li className="pt-3 text-2xl">
              A page or subsection called{" "}
              <Link
                className="text-blue-300 underline font-semibold"
                href="/meetings"
              >
                Meetings
              </Link>
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  );
}
