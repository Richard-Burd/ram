import Link from "next/link";
import LandingButtons from "../components/LandingButtons";

export default function About() {
  return (
    <div>
      <div className="bg-black">
        <div className="flex justify-center items-center">
          <img
            className="w-20 md:w-4/6 m-20"
            src={`${process.env.NEXT_PUBLIC_ARTICLE_IMAGES_URI_PATH}/ram-logo-trans.png`}
            alt="RAM Logo"
          />
        </div>
      </div>
      <LandingButtons />
    </div>
  );
}
