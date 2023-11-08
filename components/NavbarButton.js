import { motion } from "framer-motion";

// TODO: If the current URL path does not end in the title of the button,
//       then the button should not animate when hovered over.
//       this will have to be passed in as a prop from the parent component.
export default function NavbarButton({ title, bgColor }) {
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
        <div className="text-black text-center text-2xl text-opacity-80 uppercase italic pt-serif-700 pl-2 pr-3">
          {title}
        </div>
      </div>
    </motion.div>
  );
}
