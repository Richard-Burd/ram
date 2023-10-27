import LandingButtons from "../components/LandingButtons";
// import { Inter } from "next/font/google";

export default function Home() {
  return (
    <div>
      <div className="bg-black">
        <img
          className="max-w-full max-h-[90vh] mx-auto py-8 px-4"
          src={`${process.env.NEXT_PUBLIC_ARTICLE_IMAGES_URI_PATH}/ram-logo-trans.png`}
          alt="RAM Logo"
        />
      </div>
      <LandingButtons />
    </div>
  );
}
