import Figure from "../components/Figure";

export default function About() {
  return (
    <div>
      <div className="rough-draft-page-outline bg-zinc-900 pb-[500px]">
        <div className=" text-stone-200 mx-8 pt-20 max-w-screen-md">
          <p className="text-4xl font-semibold mb-10">
            This "About" page will have the following items:
          </p>
          <ul className="mx-6 sm:mx-10 list-square list-outside text-base">
            <li className="pt-3 text-2xl">John's Bio</li>
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
        />
      </div>
    </div>
  );
}
