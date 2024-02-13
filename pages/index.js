import React, { useEffect, useState } from "react";
import LandingButtons from "../components/LandingButtons";

export default function Home() {
  const [backgroundFillRate, setBackgroundFillRate] = useState(20);

  useEffect(() => {
    // Function to update backgroundFillRate based on viewport height
    const updateBackgroundFillRate = () => {
      const viewportHeight = window.innerHeight;
      setBackgroundFillRate(viewportHeight <= 800 ? "17" : "10");
      if (viewportHeight <= 550) {
        setBackgroundFillRate("23");
      }
    };

    // Attach event listener to window resize
    window.addEventListener("resize", updateBackgroundFillRate);

    // Initial update
    updateBackgroundFillRate();

    // Clean up event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateBackgroundFillRate);
    };
  }, []);

  return (
    <div>
      <div className="bg-black">
        <div className={`right-fade-${backgroundFillRate}`}>
          <div className={`left-fade-${backgroundFillRate}`}>
            <div className="pb-10">
              <div className={``}>
                <img
                  className="mx-auto max-h-[90vh] max-w-[85vh] py-4"
                  src={`${process.env.NEXT_PUBLIC_ARTICLE_IMAGES_URI_PATH}/ram-logo-trans-red.v2.png`}
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
