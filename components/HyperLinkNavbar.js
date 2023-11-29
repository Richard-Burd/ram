import Link from "next/link";
import TertiaryNavbarButton from "./TertiaryNavbarButton";

export default function HyperLinkNavbar({ bgColor, titles, path }) {
  return (
    <nav className="bg-neutral-950 text-white px-1 py-2 border-y-slate-500 border-b-2">
      <div className="container flex justify-between">
        <div className="flex flex-auto justify-items-stretch items-center">
          {titles.map((title) => (
            <Link
              className="min-w-32 flex-grow mx-1"
              href={`${path}/${title.toLowerCase().replace(/ /g, "-")}`}
            >
              <TertiaryNavbarButton title={title} bgColor={bgColor} />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
