import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function SecondaryNavbarButton({ title, bgColor }) {
  // state machine to track location in heirarchy
  const router = useRouter();
  const isActive = router.pathname.includes(
    title.toLowerCase().replace(/ /g, "-"),
  );

  // Apply conditional styling based on isActive
  const behindButtonStyle = isActive ? `-my-2 py-2 -mx-1 px-1 bg-white` : null;
  const buttonStyle = isActive
    ? `-my-2 py-2 -mx-1 px-1 ${bgColor} bg-opacity-30`
    : null;

  return (
    <div className={`${behindButtonStyle}`}>
      <div className={`${buttonStyle}`}>
        <motion.div
          className={`rounded-lg shadow-white ${bgColor}`}
          whileHover={{
            scale: 1.07,
            boxShadow: "0 0 90px 5px rgba(255, 255, 255, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.25 }}
        >
          <div className={`shadow-lower-right-offset rounded-lg`}>
            <div className="roboto-font-500 pl-2 pr-3 text-center text-2xl text-black text-opacity-80">
              {title}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
