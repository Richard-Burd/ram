import Link from "next/link";

export default function Studies() {
  return (
    <div>
      <div>This is going to be the Studies page.</div>
      <div className="m-8 text-2xl">
        Here is a page with different{" "}
        <Link className="text-blue-700 underline font-semibold" href="/fonts">
          fonts
        </Link>{" "}
        that we can use on this website
      </div>
      <div className="m-8 text-2xl lg:text-4xl text-stone-700">
        ♻️ This RAM website is under heavy construction!
      </div>

      <div className="m-8 text-2xl">
        Here is a page with different{" "}
        <Link className="text-blue-700 underline font-semibold" href="/fonts">
          fonts
        </Link>{" "}
        that we can use on this website
      </div>

      <div className="md:flex items-center m-8">
        {" "}
        <img
          style={{ width: "40rem", height: "40rem" }}
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
