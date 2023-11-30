import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function EmailIcon({
  icon,
  anchorLink,
  hyperLink,
  backgroundColor,
  activeBackgroundColor,
}) {
  let renderedPath = undefined;
  if (icon === "email") {
    renderedPath = emailPath;
  } else if (icon === "github") {
    renderedPath = githubPath;
  } else if (icon === "linkedin") {
    renderedPath = linkedinPath;
  } else if (icon === "home") {
    renderedPath = homePath;
  } else if (icon === "x") {
    renderedPath = xPath;
  }

  const [isHovered, setIsHovered] = useState(false);

  // Animation variants for the SVG
  const svgVariants = {
    initial: { scale: 1 },
    tap: { scale: 1.2 },
  };

  // Animation for the top path (green color)
  const topPathVariants = {
    initial: { opacity: 0 },
    hover: { opacity: 1 },
  };

  // Transition properties
  const transition = {
    type: "tween",
    duration: 0.3,
    ease: "easeInOut",
  };

  const renderSVG = () => (
    <motion.svg
      width="50"
      height="50"
      viewBox="0 0 13.229 13.229"
      xmlns="http://www.w3.org/2000/svg"
      initial="initial"
      whileTap="tap"
      variants={svgVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* initial path color */}
      <path
        d={renderedPath}
        fill={backgroundColor}
        transform="translate(-2.05 -195.087)"
      />
      {/* active path color */}
      <motion.path
        d={renderedPath}
        fill={activeBackgroundColor}
        transform="translate(-2.05 -195.087)"
        variants={topPathVariants}
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
        transition={transition}
      />
    </motion.svg>
  );

  return (
    <div>
      {anchorLink ? (
        <Link href={anchorLink}>{renderSVG()}</Link>
      ) : hyperLink ? (
        <a href={hyperLink} target="_blank">
          {renderSVG()}
        </a>
      ) : (
        renderSVG()
      )}
    </div>
  );
}

const emailPath = `M3.706 195.087c-.917 0-1.656.739-1.656 1.656v9.917c0 .918.739 1.656 1.656 1.656h9.917c.918 0 1.656-.738 1.656-1.656v-9.917c0-.917-.738-1.656-1.656-1.656H3.706zm1.003 3.207h7.911l-3.955 2.9-3.956-2.9zm-.542.616.818.6 3.438 2.521a.409.409 0 0 0 .484 0l3.438-2.52.818-.6v5.79a.409.409 0 0 1-.41.408H4.577a.409.409 0 0 1-.41-.408v-5.79z`;

const githubPath = `M3.706 195.087c-.917 0-1.656.739-1.656 1.656v9.917c0 .918.739 1.656 1.656 1.656h9.917c.918 0 1.656-.738 1.656-1.656v-9.917c0-.917-.738-1.656-1.656-1.656H3.706zm4.958 2.227h.001a4.498 4.498 0 0 1 4.498 4.498 4.48 4.48 0 0 1-3.087 4.262c-.232.045-.31-.096-.31-.213 0-.146.005-.631.005-1.233 0-.42-.146-.697-.303-.831 1-.11 2.052-.491 2.052-2.219a1.75 1.75 0 0 0-.46-1.208c.044-.113.197-.571-.045-1.19 0 0-.376-.12-1.232.46-.36-.099-.742-.15-1.124-.152a4.34 4.34 0 0 0-1.125.153c-.86-.582-1.237-.462-1.237-.462-.242.62-.09 1.078-.04 1.191a1.738 1.738 0 0 0-.462 1.208c0 1.724 1.05 2.11 2.049 2.223-.128.11-.245.31-.285.6-.257.116-.909.315-1.31-.373 0 0-.237-.432-.688-.463 0 0-.44-.006-.032.273 0 0 .295.139.5.657 0 0 .264.876 1.516.605l.004.764c0 .12-.082.26-.307.217a4.499 4.499 0 0 1 1.422-8.767z" transform="translate(-2.05 -195.087)`;

const linkedinPath = `M3.706 195.087c-.917 0-1.656.739-1.656 1.656v9.917c0 .918.739 1.656 1.656 1.656h9.917c.918 0 1.656-.738 1.656-1.656v-9.917c0-.917-.738-1.656-1.656-1.656H3.706zm1.749 2.117a1.228 1.228 0 1 1 0 2.455 1.228 1.228 0 0 1 0-2.455zm5.497 2.876c2.221 0 2.209 2.075 2.209 3.215v2.623a.28.28 0 0 1-.28.28h-1.387a.28.28 0 0 1-.28-.28v-2.542c0-.38.112-1.661-.99-1.661-.855 0-1.028.877-1.063 1.271v2.932a.28.28 0 0 1-.28.28H7.54a.279.279 0 0 1-.28-.28v-5.468c0-.154.126-.279.28-.279H8.88a.28.28 0 0 1 .28.28v.472c.317-.476.788-.843 1.791-.843zm-6.144.091h1.293c.168 0 .303.136.303.303v5.42a.303.303 0 0 1-.303.303H4.808a.303.303 0 0 1-.303-.303v-5.42c0-.167.135-.303.303-.303z`;

const homePath = `M3.706 195.087c-.917 0-1.656.739-1.656 1.656v9.917c0 .918.739 1.656 1.656 1.656h9.917c.918 0 1.656-.738 1.656-1.656v-9.917c0-.917-.738-1.656-1.656-1.656H3.706zm7.323 2.602h1.004a.215.215 0 0 1 .215.215v2.482l1.498 1.234a.215.215 0 0 1 .03.303l-.457.556a.215.215 0 0 1-.303.028l-4.214-3.47a.218.218 0 0 0-.274 0l-4.214 3.47a.215.215 0 0 1-.303-.029l-.458-.555a.215.215 0 0 1 .03-.303l4.535-3.735a.86.86 0 0 1 1.092 0l1.605 1.32v-1.301a.215.215 0 0 1 .214-.215zm-2.364 2.034a.218.218 0 0 1 .137.048l3.303 2.718v2.939a.287.287 0 0 1-.287.286l-2.007-.006a.287.287 0 0 1-.287-.287v-1.714a.287.287 0 0 0-.286-.287H8.09a.287.287 0 0 0-.287.287v1.715a.287.287 0 0 1-.285.287l-2.008.006a.287.287 0 0 1-.286-.287v-2.937l3.303-2.72a.218.218 0 0 1 .137-.048z" transform="translate(-2.05 -195.087)`;

const xPath = `M 3.7062088 195.087 C 2.7892097 195.087 2.05 195.82621 2.05 196.74321 L 2.05 206.65979 C 2.05 207.57779 2.7892097 208.316 3.7062088 208.316 L 13.622791 208.316 C 14.54079 208.316 15.279 207.57779 15.279 206.65979 L 15.279 196.74321 C 15.279 195.82621 14.54079 195.087 13.622791 195.087 L 3.7062088 195.087 z M 3.3785843 196.92356 L 6.7235577 196.92356 L 9.0334651 199.97708 L 11.704586 196.92356 L 13.325655 196.92356 L 9.7837974 200.97132 L 13.950416 206.47944 L 10.688124 206.47944 L 8.133273 203.1386 L 5.2094573 206.47944 L 3.5873545 206.47944 L 7.3751893 202.15005 L 3.3785843 196.92356 z M 5.2714682 197.84287 L 11.135636 205.50897 L 12.033761 205.50897 L 6.2357383 197.84287 L 5.2714682 197.84287 z `;
