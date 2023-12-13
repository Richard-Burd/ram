import { motion } from "framer-motion";
import Link from "next/link";

export default function LibrarycardCatalog({ fileName, leeTitle = "" }) {
  return (
    <div>
      <div className="text-2xl ml-8 mb-8">
        <Link
          href={`${process.env.NEXT_PUBLIC_ARTICLE_IMAGES_URI_PATH}/${fileName}.pdf`}
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          <table className="table-auto border-none">
            <tbody>
              <tr>
                <td className="text-red-800 averia-700 w-32 align-top italic">
                  {fileName}
                </td>
                <td className="text-blue-700 roboto-font-400 border align-top font-bold border-none">
                  {leeTitle}
                </td>
              </tr>
            </tbody>
          </table>
        </Link>
      </div>
    </div>
  );
}
