import Link from "next/link";
import Document from "../components/Document";

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
          This image is being served by our Amazon Web Services (AWS) S3 bucket.
          &nbsp; This S3 bucket will serve all of our images and (PDF)
          documents. &nbsp;If there is no image, that is because the AWS S3
          bucket is still being reconfigured.
        </div>
      </div>
      <div className="mx-4 text-1xl lg:text-xl text-stone-700">
        This images below are PDF documents that are being served by our Amazon
        Web Services (AWS) S3 bucket. We don't know what the individual pages on
        this site will look like yet, and how big the preview images will be on
        them. &nbsp;We will have to experiment with different sizes and see what
        we like.
      </div>

      <Document
        title="Meeting Minutes December 9th, 1992"
        fileName="doc-1"
        description="Terry Keleher, Anna Motsejenko et. al."
      />
      <Document
        title="Jefferson County Solid Waste Management District Board"
        fileName="doc-2"
        description="Elgin Crull, Fred Banks, Joyce St. Clain, et. al. Elgin Crull, Fred Banks, Joyce St. Clain, et. al. Elgin Crull, Fred Banks, Joyce St. Clain, et. al. Elgin Crull, Fred Banks, Joyce St. Clain, et. al."
      />
      <Document title="" fileName="doc-3" description="" />
    </div>
  );
}
