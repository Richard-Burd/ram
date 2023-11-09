import SecondaryNavbar from "@/components/SecondaryNavbar";
import { navbarProps } from "@/pages/successes";

export default function BriefHistory() {
  return (
    <div>
      <div className="bg-zinc-900 text-zinc-300">
        <SecondaryNavbar {...navbarProps} />
        <div className="m-4 p-4 text-3xl">Brief History</div>
        <div className="m-4 p-4 text-xl pb-72">Fill this in</div>
      </div>
    </div>
  );
}
