import { motion } from "framer-motion";

export default function Document({ fileName, title = "", description = "" }) {
  return (
    <div>
      <div
        className={`bg-slate-300 p-8 m-8 shadow-lg flex items-start ${
          title || description ? "max-w-2xl" : "max-w-[290px]"
        }`}
        // style={{ maxWidth: "700px" }}
      >
        <a
          href={`${process.env.NEXT_PUBLIC_ARTICLE_IMAGES_URI_PATH}/${fileName}.pdf`}
          download
          target="_blank"
          rel="noopener noreferrer"
          // this value below makes the preview image bigger or smaller
          style={{ maxWidth: "220px" }}
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
              alt="Agendas and Minutes PDF"
              style={{
                width: "100%",
                border: "1px solid gray",
                boxShadow: "7px 10px 10px rgba(0, 0, 0, 0.5)",
              }}
            />
          </motion.div>
        </a>
        {(title || description) && (
          <div className="ml-8">
            <div className="averia-700 pb-5 text-xl border-b-2 border-b-gray-900">
              {title}
            </div>
            <div className="averia-400 pt-4">{description}</div>
          </div>
        )}
      </div>
    </div>
  );
}
