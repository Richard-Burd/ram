import { motion } from "framer-motion";

export default function BiographyNavbarButton({ title, bgColor }) {
  return (
    <motion.div
      className={`rounded-lg shadow-white`}
      whileHover={{
        scale: 1.07,
        boxShadow: "0 0 90px 5px rgba(255, 255, 255, 0.4)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.25 }}
    >
      <div className={`${bgColor} rounded-lg`}>
        <div className="text-black px-3 text-center text-xl text-opacity-80 roboto-font-500">
          {title}
        </div>
      </div>
    </motion.div>
  );
}
