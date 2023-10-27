import Link from "next/link";

export default function Studies() {
  return (
    <div>
      <div className="rough-draft-page-outline bg-zinc-900 pb-[500px]">
        <div className=" text-stone-200 mx-8 pt-20 max-w-screen-md">
          <p className="text-4xl font-semibold mb-10">
            This "Studies" page will have the following subsections:
          </p>
          <ul className="mx-6 sm:mx-10 list-square list-outside text-base">
            <li className="pt-3 text-2xl">
              A page or subsection called{" "}
              <Link
                className="text-blue-300 underline font-semibold"
                href="/pilots"
              >
                Pilots
              </Link>
            </li>
            <li className="pt-3 text-2xl">
              A page or subsection called{" "}
              <Link
                className="text-blue-300 underline font-semibold"
                href="/travels"
              >
                Travels
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
