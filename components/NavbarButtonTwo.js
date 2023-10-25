import { motion } from "framer-motion";

export default function NavbarButtonTwo({ title, bgColor }) {
  return (
    <motion.div
      className={`${bgColor} rounded-full shadow-white`}
      whileHover={{
        scale: 1.07,
        boxShadow: "0 0 90px 5px rgba(255, 255, 255, 0.4)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.25 }}
    >
      <div className="rounded-full">
        <div
          style={{ fontSize: "1.3rem", paddingBottom: "2px" }}
          className="text-black text-center text-1xl text-opacity-80 uppercase italic pt-serif-700 pl-2 pr-3"
        >
          {title}
        </div>
      </div>
    </motion.div>
  );
}
