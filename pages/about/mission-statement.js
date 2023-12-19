import SecondaryNavbar from "@/components/SecondaryNavbar";
import { primaryHierarchyProps } from "@/pages/about";

export default function MissionStatement() {
  return (
    <div>
      <div className="bg-gradient-to-l from-[#873f08] to-[#1a0c02] pb-72 text-zinc-300">
        <SecondaryNavbar {...primaryHierarchyProps} />
        <div
          id="title-and-text-box"
          className="m-11 rounded-6xl bg-neutral-950 p-8"
        >
          <div className="pt-serif-700 m-4 p-4 text-center text-7xl italic text-[#ffe9bf]">
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
