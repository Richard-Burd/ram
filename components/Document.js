import { motion } from "framer-motion";

export default function Document({
  fileName,
  title = "",
  leeTitle = "",
  description = "",
  fileLabel = false,
  showLeeLabel = false,
}) {
  return (
    <div>
      <div className="parent">
        {fileLabel && (
          <div className="child-1 relative">
            {fileLabel && (
              <div className="absolute z-20 -translate-y-8 translate-x-4">
                <div className="text-xl text-red-800">{leeTitle}</div>
              </div>
            )}
          </div>
        )}
        <div className="child-2">
          <div
            className={`mx-4 my-12 flex items-start bg-slate-300 p-4 shadow-lg ${
              title || description
                ? "min-w-[480px] max-w-[480px]"
                : "min-w-[184px] max-w-[184px]"
            }`}
            // style={{ maxWidth: "700px" }}
          >
            <a
              href={`${process.env.NEXT_PUBLIC_ARTICLE_IMAGES_URI_PATH}/${fileName}.pdf`}
              download
              target="_blank"
              rel="noopener noreferrer"
              // this value below makes the preview image bigger or smaller
              style={{ minWidth: "150px", maxWidth: "150px" }}
              // if you see this yellow below, something is wrong
              className=""
              draggable="false"
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
                  draggable="false"
                  style={{
                    width: "100%",
                    border: "1px solid gray",
                    boxShadow: "7px 10px 10px rgba(0, 0, 0, 0.5)",
                  }}
                />
              </motion.div>
            </a>
            {(title || description) && (
              <div className="title-n-description ml-8">
                <div className="averia-700 border-b-2 border-b-gray-900 pb-5 text-lg">
                  {title}
                </div>
                <div className="averia-400 pt-4">{description}</div>
              </div>
            )}
          </div>
        </div>
        {fileLabel && (
          <div className="child-1 relative">
            <div className="absolute z-20 -translate-y-28 translate-x-12">
              <div className="young-serif-font relative text-3xl font-semibold italic text-red-800 text-opacity-70">
                {fileName}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
