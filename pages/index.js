import Image from "next/image";
// import { Inter } from "next/font/google";

export default function Home() {
  return (
    <div>
      <div className="m-8 text-2xl lg:text-6xl text-stone-700">
        ♻️ The RAM website is coming soon!
      </div>
      <div className="m-8 text-1xl lg:text-2xl text-stone-700">
        Richard got everything working in the backend, now he can just build out
        the website content. 😁
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
