import Head from "next/head";
import SecondaryNavbar from "@/components/SecondaryNavbar";
import FragmentIdentifierNavbar from "@/components/FragmentIdentifierNavbar";
import SocialMediaIcon from "@/components/SocialMediaIcon";
import { primaryHierarchyProps } from "@/pages/organizing";

const socialMediaIconProps = {
  icon: "email",
  backgroundColor: `#5f36b3`,
  activeBackgroundColor: `#ad9eff`,
};

export const secondaryHierarchyProps = {
  // bgColor: "bg-[#ff8938]",
  bgColor: "bg-organizingBg",
  titles: [
    "Davidson County",
    "Jackson County",
    "Stewart County",
    "Wayne County",
    "Washington County",
  ],
  path: "/organizing/contacts",
};

export default function Contacts() {
  return (
    <div>
      <Head>
        <title>RAM Contacts</title>
        <meta
          name="keywords"
          content="team, cohort, leadership, about us, people, persons"
        />
      </Head>
      <div className="bg-gradient-to-l from-[#591fab] to-[#160a36] pb-72 text-zinc-300">
        <SecondaryNavbar {...primaryHierarchyProps} />
        <FragmentIdentifierNavbar {...secondaryHierarchyProps} />
        <div
          id="title-and-text-box"
          className="m-11 rounded-6xl bg-neutral-950 p-6"
        >
          <div className="pt-serif-700 m-4 p-4 pb-12 text-center text-7xl italic text-[#d4bfff]">
            Contacts
          </div>
          <div className="container mx-auto px-4">
            <table className="">
              <tbody className="text-2xl">
                <tr id="davidson-county">
                  <td className="pb-16 text-left font-bold">Davidson County</td>
                  <td className="pb-16 pl-12 text-left">John van der Harst</td>
                  <td className="ml-9 pb-16 pl-20">
                    <SocialMediaIcon
                      anchorLink="/organizing/contacts/davidson-county"
                      {...socialMediaIconProps}
                    />
                  </td>
                </tr>

                <tr id="jackson-county">
                  <td className="pb-16 text-left font-bold">Jackson County</td>
                  <td className="pb-16 pl-12 text-left">Leith Patton</td>
                  <td className="ml-9 pb-16 pl-20">
                    <SocialMediaIcon
                      anchorLink="/organizing/contacts/jackson-county"
                      {...socialMediaIconProps}
                    />
                  </td>
                </tr>

                <tr id="stewart-county">
                  <td className="pb-16 text-left font-bold">Stewart County</td>
                  <td className="pb-16 pl-12 text-left">Martha Yanchyshyn</td>
                  <td className="ml-9 pb-16 pl-20">
                    <SocialMediaIcon
                      anchorLink="/organizing/contacts/stewart-county"
                      {...socialMediaIconProps}
                    />
                  </td>
                </tr>

                <tr id="wayne-county">
                  <td className="pb-16 text-left font-bold">Wayne County</td>
                  <td className="pb-16 pl-12 text-left">Colleen McLanaghan</td>
                  <td className="ml-9 pb-16 pl-20">
                    <SocialMediaIcon
                      anchorLink="/organizing/contacts/wayne-county"
                      {...socialMediaIconProps}
                    />
                  </td>
                </tr>

                <tr id="washington-county">
                  <td className="pb-16 text-left font-bold">
                    Washington County
                  </td>
                  <td className="pb-16 pl-12 text-left">Catherine Murray</td>
                  <td className="ml-9 pb-16 pl-20">
                    <SocialMediaIcon
                      anchorLink="/organizing/contacts/washington-county"
                      {...socialMediaIconProps}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
