import SecondaryNavbar from "@/components/SecondaryNavbar";
import LogoAndPageTitle from "@/components/LogoAndPageTitle";

const navbarProps = {
  // bgColor: "bg-[#d299ff]",
  bgColor: "bg-organizingBg",
  titles: ["Contacts", "Meetings", "Donors", "Legal"],
  path: "/organizing",
};

export default function Organizing() {
  return (
    <div>
      <SecondaryNavbar {...navbarProps} />
      <LogoAndPageTitle
        title="Organizing"
        titleColor="text-[#d4bfff]"
        subtitle="Join us"
        swooshColor="purple"
        backgroundColor="to-[#300c61] from-[#000000]"
        buttonsColor="bg-organizingBg" // "bg-[#d5a8ff]"
        {...navbarProps}
      />
      <div className="rough-draft-page-outline bg-zinc-900 pb-[500px]">
        <div className=" text-stone-200 mx-8 pt-20 max-w-screen-md">
          <p className="text-4xl font-semibold mb-10">
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
