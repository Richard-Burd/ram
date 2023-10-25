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
          This image is being served by our Amazon Web Services (AWS) S3 bucket.
          &nbsp; This S3 bucket will serve all of our images and (PDF)
          documents. &nbsp;If there is no image, that is because the AWS S3
          bucket is still being reconfigured.
        </div>
      </div>
      <div className="mx-4 text-1xl lg:text-xl text-stone-700">
        This image below is a PDF document that is being served by our Amazon
        Web Services (AWS) S3 bucket. We don't know what the individual pages on
        this site will look like yet, and how big the preview images will be on
        them. &nbsp;We will have to experiment with different sizes and see what
        we like. This image (along with a description) needs to be put into a
        component and then rendered dynamically across the site
      </div>
      <div className="bg-slate-400 p-2 m-8">
        <a
          href={`${process.env.NEXT_PUBLIC_ARTICLE_IMAGES_URI_PATH}/Agendas_and_minutes%20(minutes)%20[11_19_1992].pdf`}
          download
          target="_blank"
        >
          <img
            src={`${process.env.NEXT_PUBLIC_ARTICLE_IMAGES_URI_PATH}/Agendas_and_minutes%20(minutes)%20[11_19_1992]%20{p1%20of%204}.jpg`}
            alt="Agendas and Minutes PDF"
            style={{
              width: "20%",
              maxWidth: "600px",
              border: "1px solid gray",
            }}
          />
        </a>
      </div>
    </div>
  );
}
