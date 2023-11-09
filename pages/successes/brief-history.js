import SecondaryNavbar from "@/components/SecondaryNavbar";
import { navbarProps } from "@/pages/successes";

export default function BriefHistory() {
  return (
    <div>
      <div className="bg-zinc-900 text-zinc-300">
        <SecondaryNavbar {...navbarProps} />
        <div className="p-4 text-3xl text-center">Brief History</div>
        <div className="mx-12 text-xl pb-72">
          <p className="pb-8">
            The Recycling Advocates of Middle Tennessee (<i>RAM</i>) has been a
            pioneering force in advancing recycling and waste management
            practices. With a commitment to excellence, <i>RAM</i> has been
            setting high standards for research and implementation since 1989,
            touring over 200 facilities across 19 states and Ontario to
            understand best practices. Their dedication to innovation was
            evident in the early '90s, as they conducted the first 2-stream
            wet/dry recycling and composting pilots in the southeast U.S.,
            achieving an impressive 78%-98% recovery rate. This initiative not
            only showcased{" "}
            <i>
              <i>RAM</i>'s
            </i>
            capabilities but also inspired the Tennessee Department of
            Corrections to adopt a similar prog<i>RAM</i>.
          </p>
          <p className="pb-8">
            <i>
              <i>RAM</i>'s
            </i>{" "}
            impact on policy and practice extended beyond piloting novel prog
            <i>RAM</i>s. In 1993, they calculated the economic impact of
            recycling readily available materials in Davidson County, Tennessee,
            and engaged in critical advocacy to protect wetlands from landfill
            encroachment, resulting in a ban on such landfills by October 1994.
            Their efforts continued to shape state policies, leading to
            Tennessee becoming the first state to establish soil-based compost
            quality standards in 1998.
          </p>
          <p className="pb-8">
            The organization's dedication to environmental stewardship led to a
            landmark achievement in 2002, when they facilitated the voluntary
            closure of Nashville's Thermal Transfer Corp., a waste-to-energy
            plant. This marked the world’s first closure of its kind for a large
            and financially viable facility. Additionally, <i>RAM</i> has been
            instrumental in eliminating the permitting of treated incinerator
            ash as loose construction material, a testament to their ongoing
            commitment since 1993.
          </p>
          <p className="pb-8">
            Local successes have been significant as well. <i>RAM</i> supported
            the closure of the unlined Bordeaux landfill in 1994 and was pivotal
            in the establishment of a permanent household hazardous waste
            facility in Davidson County. They have consistently advocated for
            better waste management solutions, such as co-collection trials in
            1996 and advising on the separate monofilling of fly ash and bottom
            ash. Their influence has also been felt nationally, with their input
            guiding cities like Boulder, Colorado, to opt for nonprofit waste
            management solutions and dissuading the use of incinerator ash in
            products in Spokane, Washington.
          </p>
          <p className="pb-8">
            In more recent years, <i>RAM</i> has remained at the forefront of
            environmental activism. They played a key role in halting the
            development of construction and demolition (C&D) landfills and
            transfer stations in Davidson County in 2006 and 2012, respectively.
            Furthermore, their expertise in economic aspects of waste management
            led them to calculate appropriate disposal tax levels and contribute
            to legislation for independent disposal tax valuation. <i>RAM's</i>{" "}
            history is a testament to their unwavering dedication to
            environmental advocacy and sustainable waste management solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
