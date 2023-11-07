import LandingButtons from "../components/LandingButtons";
// import { Inter } from "next/font/google";

export default function Home() {
  return (
    <div>
      <div
        className={`bg-gradient-24 to-[#450f08] from-[#000000] from-50% flex border-y-slate-500 border-b-2`}
      >
        <img
          className="max-w-[85vh] max-h-[90vh] mx-auto py-8"
          src={`${process.env.NEXT_PUBLIC_ARTICLE_IMAGES_URI_PATH}/ram-logo-trans.png`}
          alt="RAM Logo"
        />
      </div>
      <LandingButtons />
    </div>
  );
}
