import SecondaryNavbar from "@/components/SecondaryNavbar";
import LogoAndPageTitle from "@/components/LogoAndPageTitle";

const navbarProps = {
  bgColor: "bg-successesBg",
  titles: [
    "Brief History",
    "Longer History",
    "Major Successes",
    "Current Campaigns",
  ],
  path: "/successes",
};

export default function Successes() {
  return (
    <div>
      <SecondaryNavbar {...navbarProps} />
      <LogoAndPageTitle
        title="Successes"
        titleColor="text-[#bfe6ff]"
        subtitle="Listed"
        swooshColor="blue"
        backgroundColor="from-[#0f2f6e] to-[#000000]"
        buttonsColor="bg-[#8aceff]"
        {...navbarProps}
      />
      <div className="rough-draft-page-outline bg-zinc-900 pb-[500px]">
        <div className=" text-stone-200 mx-8 pt-20 max-w-screen-md">
          <p className="text-4xl font-semibold mb-10">
            This "Successes" page will have the following subsections:
          </p>
          <ul className="mx-6 sm:mx-10 list-square list-outside text-base">
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
