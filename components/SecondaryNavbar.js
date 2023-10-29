import Link from "next/link";
import SecondaryNavbarButton from "./SecondaryNavbarButton";

export default function SecondaryNavbar() {
  return (
    <nav className="bg-neutral-950 text-white px-1 py-2 border-y-slate-500 border-b-2">
      <div className="container flex justify-between">
        <div className="flex flex-auto justify-items-stretch items-center">
          <Link className="min-w-32 flex-grow mx-1" href="/about/zero-waste">
            <SecondaryNavbarButton title="Zero-Waste" bgColor="bg-aboutBg" />
          </Link>
          <Link className="min-w-32 flex-grow mx-1" href="/about/methodology">
            <SecondaryNavbarButton
              title="Methodology"
              bgColor="bg-aboutBg"
              className="ml-4"
            />
          </Link>
          <Link className="min-w-32 flex-grow mx-1" href="/about/travels">
            <SecondaryNavbarButton
              title="Travels"
              bgColor="bg-aboutBg"
              className="ml-4"
            />
          </Link>
          <Link className="min-w-32 flex-grow mx-1" href="/outreach">
            <SecondaryNavbarButton
              title="Outreach"
              bgColor="bg-aboutBg"
              className="ml-4"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
