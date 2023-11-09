import SecondaryNavbar from "@/components/SecondaryNavbar";
import { navbarProps } from "@/pages/about";

export default function MissionStatement() {
  return (
    <div>
      <div className="bg-gradient-to-l from-[#873f08] to-[#000000] text-zinc-300 pb-72">
        <SecondaryNavbar {...navbarProps} />
        <div
          id="title-and-text-box"
          className="bg-neutral-950 m-11 p-8 rounded-3xl"
        >
          <div className="m-4 p-4 text-center text-7xl pt-serif-700 text-[#ffe9bf] italic">
            Mission Statement
          </div>
          <div className="m-4 p-4 text-2xl">
            <i>RAM</i> is a research and education-based group of citizens which
            advocates for the development of recycling techniques which foster
            industrial improvement, new jobs, prosperity, awareness, health, a
            cleaner environment, and the elimination of landfilling.
          </div>
        </div>
      </div>
    </div>
  );
}
