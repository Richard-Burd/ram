// NOTE: anchor links and hyperlinks are both enabled by the
// Next.js "<Link />" component, so this component is slated for
// deletion and will be replaced by the <TextLink /> component.

import Link from "next/link";

export default function HyperLink({ text, link, theme = "dark" }) {
  const textColor = theme === "light" ? "text-blue-700" : "text-blue-300";

  return (
    <>
      <Link
        href={link}
        target="_blank"
        rel="noreferrer"
        className={`${textColor} duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline transition`}
      >
        <strong>{text}</strong>
      </Link>
    </>
  );
}
