import Link from "next/link";
import LandingButton from "./LandingButton";

export default function LandingButtons() {
  return (
    <div>
      <div>This is where the landing page buttons are going to go</div>
      <Link href="/">
        <LandingButton title="Home" subTitle="This Page" bgColor="bg-homeBg" />
      </Link>

      <Link href="/about">
        <LandingButton
          title="About"
          subTitle="Our History"
          bgColor="bg-aboutBg"
        />
      </Link>
      <Link href="/studies">
        <LandingButton
          title="Studies"
          subTitle="Travels, pilots"
          bgColor="bg-studiesBg"
        />
      </Link>
      <Link href="/outreach">
        <LandingButton
          title="Outreach"
          subTitle="Education, publications"
          bgColor="bg-outreachBg"
        />
      </Link>
      <Link href="/successes">
        <LandingButton
          title="Successes"
          subTitle="Listed"
          bgColor="bg-successesBg"
        />
      </Link>
      <Link href="/successes">
        <LandingButton
          title="Organizing"
          subTitle="Join us"
          bgColor="bg-organizingBg"
        />
      </Link>
    </div>
  );
}
