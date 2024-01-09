import Head from "next/head";
import SecondaryNavbar from "@/components/SecondaryNavbar";
import { primaryHierarchyProps } from "@/pages/organizing";
import SocialMediaIcon from "@/components/SocialMediaIcon";

const socialMediaIconProps = {
  icon: "home",
  backgroundColor: `#5f36b3`,
  activeBackgroundColor: `#ad9eff`,
};

export default function Membership() {
  return (
    <div>
      <Head>
        <title>Membership</title>
        <meta
          name="keywords"
          content="team, cohort, leadership, about us, people, persons"
        />
      </Head>
      <div className="bg-gradient-to-l from-[#591fab] to-[#160a36] pb-72 text-zinc-300">
        <SecondaryNavbar {...primaryHierarchyProps} />
        <div
          id="title-and-text-box"
          className="m-11 rounded-6xl bg-neutral-950 p-6"
        >
          <div className="pt-serif-700 m-4 mt-8 p-4 text-center text-7xl italic text-[#d4bfff]">
            Membership
          </div>
          <div className="flex justify-between px-4">
            <div id="section-1" className="mx-8 my-8 text-2xl">
              <div className="flex-1">
                <div className="title font-semibold underline">
                  Nashville Peace and Justice Center
                </div>
                <div className="paragraph">
                  <p className="mb-3">2010 and 2012-2023.</p>
                </div>
              </div>
              <div className="flex-1">
                <SocialMediaIcon
                  hyperLink="https://www.nashvillepeacejustice.org/"
                  {...socialMediaIconProps}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
