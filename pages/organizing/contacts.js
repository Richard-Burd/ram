import Head from "next/head";
import AnchorLinkNavbar from "@/components/AnchorLinkNavbar";
import SecondaryNavbar from "@/components/SecondaryNavbar";
import SocialMediaIcon from "@/components/SocialMediaIcon";
import { navbarProps } from "@/pages/organizing";

const socialMediaIconProps = {
  icon: "email",
  backgroundColor: `#5f36b3`,
  activeBackgroundColor: `#ad9eff`,
};

export const hyperlinkNavbarProps = {
  // bgColor: "bg-[#ff8938]",
  bgColor: "bg-organizingBg",
  titles: [
    "Davidson County / John van der Harst",
    "Jackson County / Leith Patton",
    "Stewart County / Martha Yanchyshyn",
    "Wayne County / Colleen McLanaghan",
    "Washington County / Catherine Murray",
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
      <div className="bg-gradient-to-l from-[#591fab] to-[#160a36] text-zinc-300 pb-72">
        <SecondaryNavbar {...navbarProps} />
        <AnchorLinkNavbar {...hyperlinkNavbarProps} />
        <div
          id="title-and-text-box"
          className="bg-neutral-950 m-11 p-6 rounded-6xl"
        >
          <div className="m-4 p-4 pb-12 text-center text-7xl pt-serif-700 text-[#d4bfff] italic">
            Contacts
          </div>
          <div className="container mx-auto px-4">
            <table className="">
              <tbody className="text-2xl">
                <tr id="davidson-county-/-john-van-der-harst">
                  <td className="text-left font-bold pb-16">Davidson County</td>
                  <td className="text-left pb-16 pl-12">John van der Harst</td>
                  <td className="pl-20 pb-16 ml-9">
                    <SocialMediaIcon
                      anchorLink="/organizing/contacts/john"
                      {...socialMediaIconProps}
                    />
                  </td>
                </tr>

                <tr id="jackson-county-/-leith-patton">
                  <td className="text-left font-bold pb-16">Jackson County</td>
                  <td className="text-left pb-16 pl-12">Leith Patton</td>
                  <td className="pl-20 pb-16 ml-9">
                    <SocialMediaIcon
                      anchorLink="/organizing/contacts/leith"
                      {...socialMediaIconProps}
                    />
                  </td>
                </tr>

                <tr id="stewart-county-/-martha-yanchyshyn">
                  <td className="text-left font-bold pb-16">Stewart County</td>
                  <td className="text-left pb-16 pl-12">Martha Yanchyshyn</td>
                  <td className="pl-20 pb-16 ml-9">
                    <SocialMediaIcon
                      anchorLink="/organizing/contacts/martha"
                      {...socialMediaIconProps}
                    />
                  </td>
                </tr>

                <tr id="wayne-county-/-colleen-mclanaghan">
                  <td className="text-left font-bold pb-16">Wayne County</td>
                  <td className="text-left pb-16 pl-12">Colleen McLanaghan</td>
                  <td className="pl-20 pb-16 ml-9">
                    <SocialMediaIcon
                      anchorLink="/organizing/contacts/colleen"
                      {...socialMediaIconProps}
                    />
                  </td>
                </tr>

                <tr id="washington-county-/-catherine-murray">
                  <td className="text-left font-bold pb-16">
                    Washington County
                  </td>
                  <td className="text-left pb-16 pl-12">Catherine Murray</td>
                  <td className="pl-20 pb-16 ml-9">
                    <SocialMediaIcon
                      anchorLink="/organizing/contacts/catherine"
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
