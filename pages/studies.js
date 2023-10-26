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
          This image is the original mockup that John and Richard made for the
          landing page.
        </div>
      </div>
      <div className="mx-4 text-1xl lg:text-xl text-stone-700 px-10">
        The images below are PDF documents that are being served by our Amazon
        Web Services (AWS) S3 bucket. Each one is inside of a dynamic, reusable
        component with the preview image at ±25% of the viewport size. We could
        make this a little bigger or smaller, we can also change the fonts and
        text sizes of the titles and descriptions below on the right side of the
        image. The bottom one is a document with no title or description. When
        we change the preview image size, the background colors or anything else
        on the 'document component (in the code) it changes all instances of a
        document throughout the website.'
      </div>

      <Document
        title="Meeting Minutes December 9th, 1992"
        fileName="doc-1"
        description="Attendees: Terry Keleher, Anna Motsejenko et. al."
      />
      <Document
        title="Jefferson County Solid Waste Management District Board"
        fileName="doc-2"
        description="Attendees: Elgin Crull, Fred Banks, Joyce St. Clain, et. al. This is a rambling sentence that will let us see what a longer description would look like for a particular document."
      />
      <Document title="" fileName="doc-3" description="" />
    </div>
  );
}
