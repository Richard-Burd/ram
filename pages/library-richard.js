import Figure from "../components/Figure";
import Link from "next/link";

export default function LibraryRichard() {
  return (
    <div className="bg-zinc-900">
      <div className="pt-20 text-center font-semibold text-4xl text-zinc-200">
        📚 Gallery of Richard's Scanned Exhibits 🖼️
      </div>
      <div className="mx-4 text-2xl px-10 pt-20 text-zinc-100">
        Each of the items below are figures that Richard scanned in. Each
        instance contains a figure's preview picture (of the first page) a
        clickable download into the browser window, and a title / description
        for each one. The title and description are optional. The first one has
        them in order to show how the title and description would be displayed.
        The second has no title or description.
      </div>
      <Figure
        title="Metro Gov't of Nashville & Davidson County"
        fileName="fig-1"
        description="Circa 2015, Council members, mayor, scale annd other details "
      />
      <Figure title="" fileName="fig-2" description="" />
      <div className="pb-48"></div>
    </div>
  );
}
