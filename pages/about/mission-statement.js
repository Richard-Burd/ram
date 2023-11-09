import SecondaryNavbar from "@/components/SecondaryNavbar";
import { navbarProps } from "@/pages/about";

export default function MissionStatement() {
  return (
    <div>
      <div className="bg-zinc-900 text-zinc-300">
        <SecondaryNavbar {...navbarProps} />
        <div className="m-4 p-4 text-3xl text-center">Mission Statement</div>
        <div className="m-4 p-4 text-xl pb-72">
          RAM is a research and education-based group of citizens which
          advocates for the development of recycling techniques that foster
          industrial improvement, new jobs, prosperity, awareness, health, a
          cleaner environment, and the elimination of landfilling.
        </div>
      </div>
    </div>
  );
}
