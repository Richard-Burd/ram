// NOTE: anchor links and hyperlinks are both enabled by the
// Next.js "<Link />" component, so the <AnchorLink /> and
// <HyperLink /> components are slated for deletion and will be
// replaced by the <TextLink /> component below.

import Link from "next/link";

export default function TextLink({ text, link }) {
  return (
    <>
      <Link
        // an href beginning with "http" is a hyperlink (external website)
        // an href beginning with "/" is an anchor link (internal to this website)
        href={link}
        target="_blank"
        rel="noreferrer"
        className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-300 transition"
      >
        <strong>{text}</strong>
      </Link>
    </>
  );
}
