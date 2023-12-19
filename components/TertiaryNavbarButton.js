import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { italicizeRam } from "@/utils/italicizeRam";

export default function TertiaryNavbarButton({ title, bgColor }) {
  const formattedTitle = italicizeRam(title);

  // state machine to track location in heirarchy
  const router = useRouter();
  const isActive = router.pathname.includes(
    title.toLowerCase().replace(/ /g, "-"),
  );

  // Apply conditional styling based on isActive
  const buttonStyle = isActive ? `-my-2 py-2 -mx-1 px-1 bg-slate-500` : null;

  return (
    <div className={`${buttonStyle}`}>
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
          <div className="roboto-font-500 px-3 text-center text-xl text-black text-opacity-80">
            {formattedTitle}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
