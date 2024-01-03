import Link from "next/link";

export default function Construction() {
  return (
    <div>
      <div className="mt-20 text-center text-4xl font-semibold">
        🚧 This website is under construction 🚧
      </div>
      <div className="mt-8 px-8 text-justify text-2xl">
        This area contains links to things that are not actual pages in the
        site, but instead are references while the site is under construction.
      </div>
      <div className="p-8 text-2xl">
        Here is a page with different{" "}
        <Link className="font-semibold text-blue-700 underline" href="/fonts">
          fonts
        </Link>{" "}
        that we can use on this website
      </div>
      <div className="px-8 pb-10 text-2xl">
        📚 Here is the{" "}
        <Link
          className="font-semibold text-blue-700 underline"
          href="/library-lee"
        >
          doc library
        </Link>{" "}
        that contains all documents scanned in by Lee. 📄
      </div>
      <div className="px-8 pb-10 text-2xl">
        🖼️ Here is the{" "}
        <Link
          className="font-semibold text-blue-700 underline"
          href="/figures-richard"
        >
          figure gallery
        </Link>{" "}
        that contains all figures scanned in by Richard. 🖼️
      </div>
      <div className="px-8 pb-32 text-2xl">
        🚗 This{" "}
        <Link
          className="font-semibold text-blue-700 underline"
          href="/parking-lot"
        >
          parking lot
        </Link>{" "}
        contains misc. text and info that needs placement. 🖊️
      </div>
    </div>
  );
}
