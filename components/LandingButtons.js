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
      <div className="grid grid-cols-3 w-full">
        <button className="bg-blue-200 p-4 m-1">Item 1</button>
        <button className="bg-blue-300 p-4 m-1">Item 2</button>
        <button className="bg-blue-400 p-4 m-1">Item 3</button>
        <button className="bg-blue-500 p-4 m-1">Item 4</button>
        <button className="bg-blue-600 p-4 m-1">Item 5</button>
        <button className="bg-blue-700 p-4 m-1">Item 6</button>
      </div>
    </div>
  );
}
