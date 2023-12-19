import Link from "next/link";
import TertiaryNavbarButton from "./TertiaryNavbarButton";
import React from "react";

export default function FragmentIdentifierNavbar({ bgColor, titles, path }) {
  return (
    <nav className="bg-neutral-950 px-1 py-1 border-y-slate-500 border-b-2">
      <div className="container flex justify-between">
        <div className="flex flex-wrap flex-auto justify-items-stretch items-center">
          {titles.map((title, index) => {
            let titleText = "";
            if (typeof title === "string") {
              titleText = title;
            } else if (React.isValidElement(title)) {
              titleText = title.props.children;
            }

            const hrefText =
              typeof titleText === "string"
                ? titleText.toLowerCase().replace(/ /g, "-")
                : `${title.props.children[0].props.children}`
                    .toString()
                    .toLowerCase()
                    .replace(/ /g, "-");

            return (
              <Link
                key={index}
                className="min-w-32 flex-grow mx-1 my-1"
                // Internal Section Links (or Fragment Identifiers) "#"
                href={`${path}/#${hrefText}`}
              >
                <TertiaryNavbarButton title={titleText} bgColor={bgColor} />
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
