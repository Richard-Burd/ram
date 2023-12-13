import { motion } from "framer-motion";
import Link from "next/link";

export default function LibrarycardCatalog({ fileName, leeTitle = "" }) {
  return (
    <div>
      <div className="ml-8 mb-8">
        <Link
          href={`${process.env.NEXT_PUBLIC_ARTICLE_IMAGES_URI_PATH}/${fileName}.pdf`}
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="averia-400 italic mr-4 text-2xl text-red-800">
            <b>{fileName}</b>
          </span>
          <span className="roboto-font-300 text-2xl text-blue-700">
            <b>{leeTitle}</b>
          </span>
        </Link>
      </div>
    </div>
  );
}
