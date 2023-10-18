import Image from "next/image";
import LandingButtons from "../components/LandingButtons";
// import { Inter } from "next/font/google";

export default function Home() {
  return (
    <div>
      <LandingButtons />
      <div className="m-8 text-2xl lg:text-6xl text-stone-700">
        ♻️ The RAM website is under heavy construction!
      </div>
      <div className="m-8 text-1xl lg:text-2xl text-stone-700">
        Please come back soon and see our awesome website. 😁
      </div>
      <div className="md:flex items-center m-8">
        {" "}
        <img
          className="w-20 h-20 md:w-96 md:h-96" // w-40 & h-40 for below "medium" and w-96 & h-96 for above "medium" viewport
          src={`${process.env.NEXT_PUBLIC_ARTICLE_IMAGES_URI_PATH}/ram-homepage.png`}
          alt="RAM Logo"
        />
        <div className="mx-4 lg:max-w-xs text-1xl lg:text-2xl text-stone-700">
          {" "}
          This image is being served by our Amazon Web Services (AWS) S3 bucket.
          &nbsp; This S3 bucket will serve all of our images and (PDF)
          documents. &nbsp;If there is no image, that is because the AWS S3
          bucket is still being reconfigured.
        </div>
      </div>
      <div className="text-slate-700 m-10 text-6xl">
        <div className="roboto-font-300 mb-6">Roboto Font 300</div>
        <div className="roboto-font-400 mb-6">Roboto Font 400</div>
        <div className="roboto-font-500 mb-6">Roboto Font 500</div>
        <div className="roboto-font-700 mb-6">Roboto Font 700</div>
        <div className="roboto-font-900 mb-6">Roboto Font 900</div>
        <div className="young-serif-font mb-6">Young Serif Font</div>
        <div className="averia-400 mb-6">Averia 400 Font</div>
        <div className="averia-700 mb-6">Averia 700 Font</div>
        <div className="pt-serif-400 mb-6">PT Serif Font 400</div>
        <div className="pt-serif-700 mb-6">PT Serif Font 700</div>
        <div className="varela-round mb-6">Young Serif Font</div>
        <div className="text-gray-900 young-serif-font mb-6 text-4xl italic">
          Recycling Advocates of Middle Tennessee
        </div>
        <div className="text-gray-900 averia-400 mb-6 text-4xl italic">
          Recycling Advocates of Middle Tennessee
        </div>
        <div className="text-gray-900 averia-700 mb-6 text-4xl italic">
          Recycling Advocates of Middle Tennessee
        </div>
        <div className="text-gray-900 pt-serif-400 mb-6 text-4xl italic">
          Recycling Advocates of Middle Tennessee
        </div>
        <div className="text-gray-900 pt-serif-700 mb-6 text-4xl italic">
          Recycling Advocates of Middle Tennessee
        </div>
        <div className="pt-serif-700 mt-8">
          <div className="inline-block bg-homeBg text-black text-opacity-90 italic m-2 p-4">
            &nbsp; HOME &nbsp;
          </div>
          <div className="inline-block bg-aboutBg text-black text-opacity-90 italic m-2 p-4">
            &nbsp; ABOUT &nbsp;
          </div>
          <div className="inline-block bg-studiesBg text-black text-opacity-90 italic m-2 p-4">
            &nbsp; STUDIES &nbsp;
          </div>
          <div className="inline-block bg-outreachBg text-black text-opacity-90 italic m-2 p-4">
            &nbsp; OUTREACH &nbsp;
          </div>
          <div className="inline-block bg-successesBg text-black text-opacity-90 italic m-2 p-4">
            &nbsp; SUCCESSES &nbsp;
          </div>
          <div className="inline-block bg-organizingBg text-black text-opacity-90 italic m-2 p-4">
            &nbsp; ORGANIZING &nbsp;
          </div>
        </div>
      </div>
    </div>
  );
}
