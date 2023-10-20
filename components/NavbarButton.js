import { motion } from "framer-motion";

export default function NavbarButton({ title, bgColor }) {
  return (
    <motion.div
      className={`${bgColor} rounded-full m-4 shadow-white`} // Move the bgColor here and add the shadow-white class
      whileHover={{
        scale: 1.15,
        boxShadow: "0 0 90px 5px rgba(255, 255, 255, 0.4)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.25 }}
    >
      <div className="rounded-full">
        {" "}
        {/* Remove the bgColor from here */}
        <div className="text-black text-opacity-90 uppercase italic pt-serif-700 mt-8 pl-2 pr-3">
          {title}
        </div>
      </div>
    </motion.div>
  );
}
