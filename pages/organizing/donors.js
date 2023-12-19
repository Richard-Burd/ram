import Head from "next/head";
import SecondaryNavbar from "@/components/SecondaryNavbar";
import FragmentIdentifierNavbar from "@/components/FragmentIdentifierNavbar";
import { primaryHierarchyProps } from "@/pages/organizing";

export const secondaryHierarchyProps = {
  // bgColor: "bg-[#ff8938]",
  bgColor: "bg-organizingBg",
  titles: ["Participation", "Expenses covered", "Monetary gifts"],
  path: "/organizing/donors",
};

export default function Donors() {
  const crewDescriptionTestLayoutStyles =
    "columns-1 md:columns-2 lg:columns-3 my-7 standard-font-3 text-justify text-lg";
  return (
    <div>
      <Head>
        <title>Donors</title>
        <meta
          name="keywords"
          content="team, cohort, leadership, about us, people, persons"
        />
      </Head>
      <div className="bg-gradient-to-l from-[#591fab] to-[#160a36] pb-72 text-zinc-300">
        <SecondaryNavbar {...primaryHierarchyProps} />
        <FragmentIdentifierNavbar {...secondaryHierarchyProps} />
        <div
          id="title-and-text-box"
          className="m-11 rounded-6xl bg-neutral-950 p-6"
        >
          <div className="pt-serif-700 m-4 mt-8 p-4 text-center text-7xl italic text-[#d4bfff]">
            Donors
          </div>
          <div className="container mx-auto px-4">
            <div id="participation" className="mx-8 my-8 text-2xl">
              <div className="title text-4xl font-semibold underline">
                Participation
              </div>
              <div className="paragraph">
                <p className="my-4 rounded-3xl bg-[#211052] p-4">
                  This represents irreplaceable time, and is the most
                  appreciated donation. The list is long, and partly for that
                  reason, currently remains under development. <i>RAM</i>{" "}
                  requests your patience on this.
                </p>
              </div>
            </div>
            <div id="expenses-covered" className="mx-8 my-14 text-2xl">
              <div className="title text-4xl font-semibold underline">
                Expenses covered
              </div>
              <div className="paragraph">
                <p className="my-4 rounded-3xl bg-[#211052] p-4">
                  The point where a person deserves to be listed here is
                  subjective. Here is a list of some of these who have given a
                  lot:
                </p>
                <p className="mb-3">
                  Mary Parker -- legal services, patience, and lots of strong
                  coffee for Stacy
                </p>
                <p className="mb-3">
                  Stacy Gibson -- wore out George Pring&apos;s book, which was
                  later passed on to John Johnston at the request of the late
                  Jacob Kasset
                </p>
                <p className="mb-3">
                  The late Sandy Loyd -- car expenses beyond fuel on many long
                  road trips to visit over 200 facilities of various types
                </p>
                <p className="mb-3">
                  Sherry Sloan -- car expenses for many ash-finding trips, and
                  photography, plus use of her home
                </p>
                <p className="mb-3">
                  Carl Evertson -- like Sherry, except not quite as many trips
                  or photos, plus use of his home
                </p>
                <p className="mb-3">
                  The late Sandy Hepler -- car expenses, flyers, extensive
                  connections
                </p>
                <p className="mb-3">
                  Karen Cisler -- car expenses plus food and cooking
                </p>
                <p className="mb-3">
                  Leslie Allen -- use of her home for many meetings and
                  hostings, plus car expenses for many trips
                </p>
                <p className="mb-3">
                  Leith Patton -- use of her home for newsletter bulk mailing
                  preparations and a big fundraiser for John&apos;s legal
                  expenses
                </p>
                <p className="mb-3">
                  The late Sherry Force -- car expenses, photography, and
                  overhead transparencies
                </p>
                <p className="mb-3">Jeff Brousal -- use of his home</p>
                <p className="mb-3">Connie Kaylor -- car expenses</p>
                <p className="mb-3">Eddie Carpenter -- use of his home</p>
                <p className="mb-3">Elizabeth Cutler -- music</p>
                <p className="mb-3">
                  Karen Fletcher -- Dr. Quotes subscription renewal
                </p>
                <p className="mb-3"></p>
                <p className="mb-3"></p>
              </div>
            </div>

            <div id="monetary-gifts" className="mx-8 my-14 text-2xl">
              <div className="title text-4xl font-semibold underline">
                Monetary gifts
              </div>
              <div className="paragraph">
                <p className="my-4 rounded-3xl bg-[#211052] p-4">
                  <p>Listed in order they were recorded.</p>{" "}
                  <p>
                    Donors with more than one donation are listed only once,
                    when they first donated, with their total number of
                    donations noted.
                  </p>
                </p>
                <p className="mb-3">
                  Ron McNutt, Davidson County (donated 3 times)
                </p>
                <p className="mb-3">
                  Ethel Spiller, Robertson County (donated 2 times)
                </p>
                <p className="mb-3">
                  The late Dan Sweeton, Wilson County (donated 2 times)
                </p>
                <p className="mb-3">
                  The late Sandy Loyd, Davidson County (donated 3 times)
                </p>
                <p className="mb-3">
                  The late Sandy Hepler, Jackson County (donated 9 times)
                </p>
                <p className="mb-3">Eric Lewis, Davidson County</p>
                <p className="mb-3">Kenneth Burley, Blount County</p>
                <p className="mb-3">Steve Schultheis, Davidson County</p>
                <p className="mb-3">
                  Diane Satterthwaite, Oakland County, Michigan
                </p>
                <p className="mb-3">
                  The late Sherry Force, Davidson County (donated 4 times)
                </p>
                <p className="mb-3">
                  Jim Selin, Davidson County (donated 4 times)
                </p>
                <p className="mb-3">Pixie Lewis, Davidson County</p>
                <p className="mb-3">Sherry Loller, Davidson County</p>
                <p className="mb-3">
                  Carl Evertson, Davidson County (donated 2 times [1 for book on
                  SLAPPs])
                </p>
                <p className="mb-3">Ellen Soper, Davidson County</p>
                <p className="mb-3">Pat Bilbrey, Fentress County</p>
                <p className="mb-3">Calvin Moore, Davidson County</p>
                <p className="mb-3">
                  Dioxin Conference attenders, St. Louis, Missouri
                </p>
                <p className="mb-3">Joel Solomon, Davidson County</p>
                <p className="mb-3">
                  Mack Pritchard, Davidson County (donated 2 times [1 via Sandy
                  Hepler])
                </p>
                <p className="mb-3">
                  The late Steve Atherton, Johnson County, Iowa
                </p>
                <p className="mb-3">Vicky Meltz, Lowndes County, Georgia</p>
                <p className="mb-3">
                  Adele Kushner, ACE (Action for Clean Environment), Habersham
                  Banks, White, Rabun, and Harp Counties, Georgia (donated 2
                  times)
                </p>
                <p className="mb-3">Glen & Mary DiMateo, Smith County</p>
                <p className="mb-3">Tom Dodson, Davidson County</p>
                <p className="mb-3">
                  The late Marylyn van der Harst, Wayne County, Michigan
                  (donated 5 times)
                </p>
                <p className="mb-3">
                  John van der Harst, Davidson County (donated 2 times)
                </p>
                <p className="mb-3">
                  Dioxin Conference attenders, Baton Rouge, Louisiana
                </p>
                <p className="mb-3">
                  The late Mrs. A. J. M. van der Harst-Vermuelen, Den Haag, The
                  Netherlands, via Marria Van Driel, Beaconsfield, Quebec,
                  Canada
                </p>
                <p className="mb-3">John H. Noel III, Davidson County</p>
                <p className="mb-3">
                  Joel Solomon Co, dba SOL Properties, Davidson County (donated
                  2 times)
                </p>
                <p className="mb-3">The late Everett Long, Davidson County</p>
                <p className="mb-3">
                  Sherry Sloan, Davidson County (donated 7 times)
                </p>
                <p className="mb-3">
                  Mark Gingles and Alan Doty, Cumberland Transit, Davidson
                  County, via Sandy Hepler, Jackson County
                </p>
                <p className="mb-3">
                  Will Fischer, Nashville Auto Haus, Davidson County, via Sandy
                  Hepler, Jackson County
                </p>
                <p className="mb-3">
                  Unknown (cash), via Sandy Hepler, Jackson County
                </p>
                <p className="mb-3">
                  The Produce Place, Inc., Davidson County, via Sandy Hepler,
                  Jackson County
                </p>
                <p className="mb-3">
                  Al (aka Al Ehlers) and Emily Cantrell, Helena, Montana, via
                  Sandy Hepler, Jackson County
                </p>
                <p className="mb-3">Gene Teselle, Davidson County</p>
                <p className="mb-3">
                  Beverly Sweeton, Wilson County (donated 2 times)
                </p>
                <p className="mb-3">Beth Lewis, Davidson County</p>
                <p className="mb-3">
                  Merchandise Brokers Inc., dba MBI Trailers Inc., Davidson
                  County
                </p>
                <p className="mb-3">Suzanna Lonce, Davidson County</p>
                <p className="mb-3">Joe Shedlock, Davidson County</p>
                <p className="mb-3">
                  Craig Canan, Davidson County (donated 2 times [1 via Carl
                  Evertson, Davidson County])
                </p>
                <p className="mb-3">
                  Lois Latman, Davidson County, via Carl Evertson, Davidson
                  County
                </p>
                <p className="mb-3">
                  Work on Waste, USA, St. Lawrence County, New York
                </p>
                <p className="mb-3">
                  Tennessee Environmental Council, per wishes of Sherry Loller,
                  Davidson County
                </p>
                <p className="mb-3">Recycle! Nashville, Davidson County</p>
                <p className="mb-3">
                  Tennessee Environmental Council, per wishes of Sherry Sloan,
                  Davidson County
                </p>
                <p className="mb-3">Bruce Wood</p>
                <p className="mb-3">
                  Karen Fletcher and David Baker, via Leith Patton, Davidson
                  County
                </p>
                <p className="mb-3">Connie Lehman, Davidson County</p>
                <p className="mb-3">Jon Wolfe, Davidson County</p>
                <p className="mb-3">
                  Tennessee Environmental Council, per wishes of Rowland
                  Huddleston, Davidson County
                </p>
                <p className="mb-3">
                  Tennessee Environmental Council, per wishes of Sandy Loyd,
                  Davidson Count
                </p>
                <p className="mb-3">Lisa Larson, Davidson County</p>
                <p className="mb-3">Sizwe Herring, Davidson County</p>
                <p className="mb-3">
                  About 60 attenders of fundraiser at Leith Patton&apos;s house
                  (cash), Davidson County
                </p>
                <p className="mb-3">
                  Carol LaChance van der Harst, Bay County, Michigan (donated 3
                  times)
                </p>
                <p className="mb-3">
                  Tennessee Environmental Council, per wishes of Cristl Peacock,
                  Davidson County
                </p>
                <p className="mb-3">Harold Stokes, Wayne County, Michigan</p>
                <p className="mb-3">Ed McArdle, Wayne County, Michigan</p>
                <p className="mb-3">Jane Hussain, Davidson County</p>
                <p className="mb-3">Barbara Clinton, Davidson County</p>
                <p className="mb-3">
                  Joyce and Richard Rouse, Williamson County
                </p>
                <p className="mb-3">Steven Ingram, Davidson County</p>
                <p className="mb-3">Susan Fischer, Davidson County</p>
                <p className="mb-3">Wild Oats Markets, Inc., Davidson County</p>
                <p className="mb-3">
                  Coalition Against the Incinerator (CAI), Dauphin County,
                  Pennsylvania
                </p>
                <p className="mb-3"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
