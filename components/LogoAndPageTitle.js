import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// framer-motion variants
const buttonVariants = {
  hover: {
    x: 15,
  },
};

export default function LogoAndPageTitle({
  title,
  titles,
  titleColor,
  // subtitle, // currently not used
  swooshColor,
  backgroundColor,
  buttonsColor,
  path,
}) {
  return (
    <div>
      <div
        className={`bg-gradient-to-r from-black ${backgroundColor} flex border-y-slate-500 border-b-2`}
      >
        <Image
          className="ml-10 py-8"
          src={`${process.env.NEXT_PUBLIC_ARTICLE_IMAGES_URI_PATH}/ram-logo-trans-${swooshColor}.png`}
          alt="RAM Logo"
          width={500}
          height={500}
        />
        <div className="flex w-full">
          <div className="flex justify-center items-center w-full">
            <div className={`text-center`}>
              <div className={`${titleColor} text-7xl pt-serif-700 italic`}>
                {title}
              </div>
              {/* <div className="roboto-font-500 text-3xl">{subtitle}</div> */}
              <div className="mt-4">
                {titles.map((title) => (
                  <Link
                    className=""
                    href={`${path}/${title.toLowerCase().replace(/ /g, "-")}`}
                  >
                    <motion.div
                      className={`${buttonsColor} rounded-lg shadow-white`}
                      whileHover={{
                        x: 15,
                        boxShadow: "0 0 40px 5px rgba(255, 255, 255, 0.4)",
                      }}
                      whileTap={{ x: -10 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div
                        className={` m-2 p-2 text-4xl text-black text-opacity-90 roboto-font-500`}
                      >
                        {title}
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
