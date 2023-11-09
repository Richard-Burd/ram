import LandingButtons from "../components/LandingButtons";
// import { Inter } from "next/font/google";
export default function Home() {
  return (
    <div>
      <div className="bg-black">
        <div className="bg-gradient-to-l from-[#871014] to-10% to-transparent">
          <div className="bg-gradient-to-l to-[#871014] from-90% from-transparent">
            <div className="pb-10">
              <div className={``}>
                <img
                  className="max-w-[85vh] max-h-[90vh] mx-auto py-4"
                  src={`${process.env.NEXT_PUBLIC_ARTICLE_IMAGES_URI_PATH}/ram-logo-trans-red.png`}
                  alt="RAM Logo"
                />
              </div>
              <LandingButtons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
