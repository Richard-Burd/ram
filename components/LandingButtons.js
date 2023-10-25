import Link from "next/link";
import LandingButton from "./LandingButton";

export default function LandingButtons() {
  return (
    <div>
      <div className="bg-black grid grid-cols-3 w-full">
        <Link href="/" passHref>
          <LandingButton
            title="Home"
            subTitle="This Page"
            bgColor="bg-homeBg"
          />
        </Link>

        <Link href="/about" passHref>
          <LandingButton
            title="About"
            subTitle="Our History"
            bgColor="bg-aboutBg"
          />
        </Link>

        <Link href="/studies" passHref>
          <LandingButton
            title="Studies"
            subTitle="Travels, pilots"
            bgColor="bg-studiesBg"
          />
        </Link>

        <Link href="/outreach" passHref>
          <LandingButton
            title="Outreach"
            subTitle="Education, publications"
            bgColor="bg-outreachBg"
          />
        </Link>

        <Link href="/successes" passHref>
          <LandingButton
            title="Successes"
            subTitle="Listed"
            bgColor="bg-successesBg"
          />
        </Link>

        <Link href="/successes" passHref>
          <LandingButton
            title="Organizing"
            subTitle="Join us"
            bgColor="bg-organizingBg"
          />
        </Link>
      </div>
    </div>
  );
}
