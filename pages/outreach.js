import Link from "next/link";
import SecondaryNavbar from "@/components/SecondaryNavbar";
import LogoAndPageTitle from "@/components/LogoAndPageTitle";

const navbarProps = {
  bgColor: "bg-outreachBg",
  titles: [
    "Presentations",
    "Brochures",
    "Newsletters",
    "Handouts",
    "Submissions",
  ],
  path: "/outreach",
};

export default function Outreach() {
  return (
    <div>
      <SecondaryNavbar {...navbarProps} />
      <LogoAndPageTitle
        title="Outreach"
        titleColor="text-[#c2ffbf]"
        subtitle="Education, publications"
        swooshColor="green"
        backgroundColor="to-[#013009]"
        buttonsColor="bg-[#8aff8c]"
        {...navbarProps}
      />
      <div className="rough-draft-page-outline bg-zinc-900 pb-[500px]">
        <div className=" text-stone-200 mx-8 pt-20 max-w-screen-md">
          <p className="text-4xl font-semibold mb-10">
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
