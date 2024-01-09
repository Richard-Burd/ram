import SecondaryNavbar from "@/components/SecondaryNavbar";
import PrimaryMastHead from "@/components/PrimaryMastHead";

export const primaryHierarchyProps = {
  // bgColor: "bg-[#33caff]",
  bgColor: "bg-successesBg",
  titles: [
    "Initial Aims",
    "Brief History",
    "Longer History",
    "Major Successes",
    "Current Campaigns",
  ],
  path: "/successes",
  topMarginForEachHierarchyButton: `my-2.5`,
};

export default function Successes() {
  return (
    <div>
      <SecondaryNavbar {...primaryHierarchyProps} />
      <PrimaryMastHead
        title="Successes"
        titleColor="text-[#bfe6ff]"
        subtitle="Listed"
        swooshColor="blue"
        backgroundColor="to-[#225394] from-[#000000]"
        buttonsColor="bg-successesBg"
        {...primaryHierarchyProps}
      />
      <div className="rough-draft-page-outline bg-zinc-900 pb-[500px]">
        <div className=" mx-8 max-w-screen-md pt-20 text-stone-200">
          <p className="mb-10 text-4xl font-semibold">
            This "Successes" page will have the following subsections:
          </p>
          <ul className="mx-6 list-outside list-square text-base sm:mx-10">
            <li className="pt-3 text-2xl">
              A page or subsection discussing the incinerator shutdown
            </li>
            <li className="pt-3 text-2xl">
              A page or subsection discussing other successes
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
