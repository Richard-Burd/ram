import { motion } from "framer-motion";

export default function Document({
  fileName,
  title = "",
  description = "",
  width = "20%",
}) {
  return (
    <div>
      <div className="bg-slate-400 p-8 m-8 shadow-lg flex">
        <a
          href={`${process.env.NEXT_PUBLIC_ARTICLE_IMAGES_URI_PATH}/${fileName}.pdf`}
          download
          target="_blank"
          rel="noopener noreferrer"
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
                width,
                border: "1px solid gray",
                boxShadow: "4px 10px 10px rgba(0, 0, 0, 0.5)",
              }}
            />
          </motion.div>
        </a>
        <div className="">
          <div className="">{title}</div>
          <div className="">{description}</div>
        </div>
      </div>
    </div>
  );
}
