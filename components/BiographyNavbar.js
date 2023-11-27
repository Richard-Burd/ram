import Link from "next/link";
import BiographyNavbarButton from "./BiographyNavbarButton";

export default function BiographyNavbar({ bgColor, titles, path }) {
  return (
    <nav className="bg-neutral-950 px-1 py-2 border-y-slate-500 border-b-2">
      <div className="container flex justify-between">
        {/* Updated this div to allow wrapping of items */}
        <div className="flex flex-wrap flex-auto justify-items-stretch items-center">
          {titles.map((title, index) => (
            <Link
              key={index} // Added a key for each item
              className="min-w-32 flex-grow mx-1 my-1"
              href={`${path}/#${title
                // necessary since we have titles with "RAM" in them which must be italicized
                .toString()
                .toLowerCase()
                .replace(/ /g, "-")}`}
            >
              <BiographyNavbarButton title={title} bgColor={bgColor} />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

// // This is a previous version we used before we had to accomidate having
// // "RAM" in the title, which must be italicized.
// export default function BiographyNavbar({ bgColor, titles, path }) {
//   return (
//     <nav className="bg-neutral-950 px-1 py-2 border-y-slate-500 border-b-2">
//       <div className="container flex justify-between">
//         {/* Updated this div to allow wrapping of items */}
//         <div className="flex flex-wrap flex-auto justify-items-stretch items-center">
//           {titles.map((title, index) => (
//             <Link
//               key={index} // Added a key for each item
//               className="min-w-32 flex-grow mx-1 my-1"
//               href={`${path}/#${title.toLowerCase().replace(/ /g, "-")}`}
//             >
//               <BiographyNavbarButton title={title} bgColor={bgColor} />
//             </Link>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// }

// // This is the original version of the smaller navbar
// import Link from "next/link";
// import BiographyNavbarButton from "./BiographyNavbarButton";

// export default function BiographyNavbar({ bgColor, titles, path }) {
//   return (
//     <nav className="bg-neutral-950 px-1 py-2 border-y-slate-500 border-b-2">
//       <div className="container flex justify-between">
//         <div className="flex flex-auto justify-items-stretch items-center">
//           {titles.map((title) => (
//             <Link
//               className="min-w-32 flex-grow mx-1"
//               href={`${path}/#${title.toLowerCase().replace(/ /g, "-")}`}
//             >
//               <BiographyNavbarButton title={title} bgColor={bgColor} />
//             </Link>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// }
