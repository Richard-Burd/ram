import SecondaryNavbar from "@/components/SecondaryNavbar";
import TertiaryNavbar from "@/components/TertiaryNavbar";
import SecondaryMastHead from "@/components/SecondaryMasthead";
import { navbarProps } from "@/pages/outreach";

// export const hyperlinkNavbarProps = {
//   bgColor: "bg-outreachBg",
//   titles: [
//     "General",
//     "Regulatory",
//     "Departmental",
//     "Board",
//     "Committee",
//     "Legislative",
//   ],
//   path: "/outreach/submissions",
// };

export const anchorlinkNavbarProps = {
  bgColor: "bg-outreachBg",
  titles: [
    "General",
    "Regulatory",
    "Departmental",
    "Board",
    "Committee",
    "Legislative",
  ],
  path: "/outreach/submissions",
};

const description = (
  <div>
    <p>...comming soon! This page is under construction.</p>
  </div>
);

export default function Submissions() {
  return (
    <div>
      <SecondaryNavbar {...navbarProps} />
      <TertiaryNavbar {...anchorlinkNavbarProps} />
      <div className="bg-gradient-to-l from-[#088723] to-[#021a07] pb-72">
        <SecondaryMastHead
          title="Submissions"
          description={description}
          titles={anchorlinkNavbarProps.titles}
          titleColor="text-[#c2ffbf]"
          buttonsColor="bg-outreachBg"
          path={anchorlinkNavbarProps.path}
          marginBetweenButtons="mt-4"
        />
      </div>
    </div>
  );
}

// import SecondaryNavbar from "@/components/SecondaryNavbar";
// import TertiaryNavbar from "@/components/TertiaryNavbar";
// import { navbarProps } from "@/pages/outreach";

// export const hyperlinkNavbarProps = {
//   bgColor: "bg-outreachBg",
//   titles: [
//     "General",
//     "Regulatory",
//     "Departmental",
//     "Board",
//     "Committee",
//     "Legislative",
//   ],
//   path: "/outreach/submissions",
// };

// export default function Submissions() {
//   return (
//     <div>
//       <SecondaryNavbar {...navbarProps} />
//       <TertiaryNavbar {...hyperlinkNavbarProps} />
//       <div className="bg-gradient-to-l from-[#088723] to-[#021a07] pb-72">
//         <div className="p-8 text-center text-7xl pt-serif-700 text-[#c2ffbf] italic">
//           Submissions
//         </div>
//         <div
//           id="comming-soon-placeholder"
//           className="m-4 p-4 text-2xl text-zinc-200"
//         >
//           ...comming soon! This page is under construction.
//         </div>
//       </div>
//     </div>
//   );
// }
