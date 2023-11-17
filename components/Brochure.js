import { motion } from "framer-motion";

export default function Brochure({
  fileName,
  title = "",
  description = "",
  fileLabel = false,
}) {
  return (
    <div>
      <div className="parent">
        <div className="child-2">
          <div
            className={`bg-[#b8d1c8] bg-opacity-90 opacity-90 p-4 rounded-xl ml-5 my-4 shadow-lg ${
              title || description
                ? "max-w-[480px]"
                : "bg-gray-100 max-w-[480px]"
            }`}
            // style={{ maxWidth: "700px" }}
          >
            {(title || description) && (
              <div className="">
                <div className="pt-serif-700 italic pb-5 text-2xl text-center border-b-2 border-b-gray-900">
                  {title}
                </div>
                <div className="averia-400 py-4">{description}</div>
              </div>
            )}
            <a
              href={`${process.env.NEXT_PUBLIC_ARTICLE_IMAGES_URI_PATH}/${fileName}.pdf`}
              download
              target="_blank"
              rel="noopener noreferrer"
              // this value below makes the preview image bigger or smaller
              style={{ maxWidth: "400px" }}
              // if you see this yellow below, something is wrong
              className="bg-yellow-400"
            >
              <motion.div
                className={``}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.25 }}
              >
                <img
                  src={`${process.env.NEXT_PUBLIC_ARTICLE_IMAGES_URI_PATH}/${fileName}.jpg`}
                  className="drop-shadow-lg"
                  alt={`missing PDF document: ${fileName}`}
                  style={{
                    width: "100%",
                    border: "1px solid gray",
                    boxShadow: "7px 10px 10px rgba(0, 0, 0, 0.5)",
                  }}
                />
              </motion.div>
            </a>
          </div>
        </div>
        {fileLabel && (
          <div className="child-1">
            <div className="-translate-y-44 translate-x-12 absolute z-20">
              <div className="text-red-800 text-7xl young-serif-font text-opacity-80 italic relative">
                {fileName}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
