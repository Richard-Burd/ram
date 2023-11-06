import Figure from "@/components/Figure";
import Document from "@/components/Document";
import FigureTwo from "@/components/FigureTwo";
import DocumentTwo from "@/components/DocumentTwo";
import SecondaryNavbar from "@/components/SecondaryNavbar";
import LogoAndPageTitle from "@/components/LogoAndPageTitle";

const navbarProps = {
  // bgColor: "bg-[#ff8938]",
  bgColor: "bg-aboutBg",
  titles: ["Mission Statement", "Brief History", "Longer History", "Bios"],
  path: "/about",
  topMargin: `mt-7`,
};

export default function About() {
  return (
    <div>
      <SecondaryNavbar {...navbarProps} />
      <LogoAndPageTitle
        title="About Us"
        titleColor="text-[#ffe9bf]"
        subtitle="Our History"
        swooshColor="orange"
        backgroundColor="to-[#873f08] from-[#000000]"
        buttonsColor="bg-aboutBg" //"bg-[#ffd28a]"
        {...navbarProps}
      />
      <div className="rough-draft-page-outline bg-zinc-900 pb-[500px]">
        <div className=" text-stone-200 mx-8 pt-20 max-w-screen-md">
          <p className="text-4xl font-semibold mb-10">
            This "About" page will have the following items:
          </p>
          <ul className="mx-6 sm:mx-10 list-square list-outside text-base">
            {/* <li className="pt-3 text-2xl">John's Bio</li> */}
            <li className="pt-3 text-2xl">List of Donors</li>
            <ul>
              <li>- Ron McNutt, Davidson County</li>
              <li>- Ethel Spiller, Davidson County</li>
              <li>- Sandy Loyd, Davidson County</li>
              <li>- Dan Sweeton, Davidson County</li>
            </ul>
          </ul>
        </div>
        <Figure
          title="Metro Gov't of Nashville & Davidson County"
          fileName="fig-1"
          description="Circa 2015, Council members, mayor, scale annd other details"
          fileLabel={true}
        />
        <Document
          title="Jefferson County Solid Waste Management District Board"
          fileName="doc-2"
          description="Attendees: Elgin Crull, Fred Banks, Joyce St. Clain, et. al. This is a rambling sentence that will let us see what a longer description would look like for a particular document."
          fileLabel={true}
        />
        <br></br>
        <br></br>
        <div className="mx-4 text-2xl px-10 pt-20 text-zinc-100">
          The images below are the same as above, the only difference is that
          they do not have a background color, as the background is transparent.
          This is just an alternative way to display content.
        </div>
        <br></br>
        <br></br>
        <FigureTwo
          title="Metro Gov't of Nashville & Davidson County"
          fileName="fig-1"
          description="Circa 2015, Council members, mayor, scale annd other details"
          fileLabel={true}
        />
        <DocumentTwo
          title="Jefferson County Solid Waste Management District Board"
          fileName="doc-2"
          description="Attendees: Elgin Crull, Fred Banks, Joyce St. Clain, et. al. This is a rambling sentence that will let us see what a longer description would look like for a particular document."
          fileLabel={true}
        />
      </div>
    </div>
  );
}
