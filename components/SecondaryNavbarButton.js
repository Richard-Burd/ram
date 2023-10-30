import { motion } from "framer-motion";

export default function SecondaryNavbarButton({ title, bgColor }) {
  return (
    <motion.div
      className={`bg-white rounded-full shadow-white`}
      whileHover={{
        scale: 1.07,
        boxShadow: "0 0 90px 5px rgba(255, 255, 255, 0.4)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.25 }}
    >
      <div className={`${bgColor} bg-opacity-80 rounded-full`}>
        <div className="text-black text-center text-2xl text-opacity-80 roboto-font-500 pl-2 pr-3">
          {title}
        </div>
      </div>
    </motion.div>
  );
}
