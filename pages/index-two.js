import Link from "next/link";
import LandingButtons from "../components/LandingButtons";
// import { Inter } from "next/font/google";

export default function Home() {
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
      <div className="m-8 text-2xl lg:text-4xl text-stone-700">
        ♻️ This RAM website is under heavy construction!
      </div>
      <div className="m-8 text-2xl">
        NOTE: nothing is sized correctly, right now we are working on
        infrastructure instead of final arrangements.
      </div>
      <div className="m-8 text-2xl">
        Here is a page with different{" "}
        <Link className="text-blue-700 underline font-semibold" href="/fonts">
          fonts
        </Link>{" "}
        that we can use on this website
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
    </div>
  );
}
