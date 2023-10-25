import { motion } from "framer-motion";

export default function LandingButton({ title, subTitle, bgColor }) {
  return (
    <div className="m-2">
      <motion.div
        className={`${bgColor} rounded-full shadow-white`}
        whileHover={{
          scale: 1.07,
          boxShadow: "0 0 40px 5px rgba(255, 255, 255, 0.4)",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.25 }}
      >
        <button className={`w-full rounded-full ${bgColor}`}>
          <div
            style={{ fontSize: "2.7rem", fontStretch: "semi-expanded" }}
            className="text-black text-opacity-90 uppercase italic text-5xl pt-serif-700 pr-3"
          >
            {title}
          </div>
          <div
            style={{ fontSize: "1.77rem", fontStretch: "semi-expanded" }}
            className="roboto-font-500"
          >
            {subTitle}
          </div>
        </button>
      </motion.div>
    </div>
  );
}
