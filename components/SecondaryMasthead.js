import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SecondaryMastHead({
  title,
  description,
  titles,
  titleColor,
  buttonsColor,
  path,
  marginBetweenButtons,
}) {
  return (
    <div>
      <div
        className={`${titleColor} pt-12 pb-14 text-center text-7xl pt-serif-700 italic`}
      >
        {title}
      </div>
      <div className="flex w-full">
        <div className="text-slate-200 text-2xl mx-12 max-w-md">
          {description}
        </div>
        <div className="flex justify-center w-full">
          <div className={`text-center`}>
            <div className="mt-0">
              {titles.map((title) => (
                <div className={`${marginBetweenButtons}`}>
                  <Link
                    href={`${path}/${title.toLowerCase().replace(/ /g, "-")}`}
                  >
                    <motion.div
                      className={`${buttonsColor} rounded-2xl shadow-white`}
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
