import SecondaryNavbar from "@/components/SecondaryNavbar";
import { navbarProps } from "@/pages/successes";

export default function BriefHistory() {
  return (
    <div>
      <div className="bg-zinc-900 text-zinc-300">
        <SecondaryNavbar {...navbarProps} />
        <div className="m-4 p-4 text-3xl">Brief History</div>
        <div className="m-4 p-4 text-xl pb-72">
          When RAM began, Davidson and Sumner Counties incinerated much of their
          solid waste. RAM’s efforts to end this included education sessions
          which explained the Davidson County system clearly. Following a pilot
          in Sumner County, in late 1993, Davidson County began paying American
          Ash Recycling Corp. of TN (AAR) to distribute treated incinerator ash
          as loose construction fill material. RAM objected. RAM’s documentation
          was sought by environmental groups in many states. Tired of this, AAR
          sued RAM in early 1997. This forced RAM to investigate further. This
          led to discoveries which ultimately led Davidson County to end both
          incineration and its use of AAR. RAM showed that loose, treated
          incinerator ash, used as construction fill, would make harmful
          contents more available to soil life than AAR’s submitted health risk
          assessment modeling had assumed.
        </div>
      </div>
    </div>
  );
}
