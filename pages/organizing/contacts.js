import Head from "next/head";
import SecondaryNavbar from "@/components/SecondaryNavbar";
import { navbarProps } from "@/pages/organizing";
import Image from "next/image";

export default function Contacts() {
  const crewDescriptionTestLayoutStyles =
    "columns-1 md:columns-2 lg:columns-3 my-7 standard-font-3 text-justify text-lg";
  return (
    <div>
      <Head>
        <title>RAM Contacts</title>
        <meta
          name="keywords"
          content="team, cohort, leadership, about us, people, persons"
        />
      </Head>
      <div className="bg-gradient-to-l from-[#431780] to-[#000000] text-zinc-300 pb-72">
        <SecondaryNavbar {...navbarProps} />
        <div
          id="title-and-text-box"
          className="bg-neutral-950 m-11 p-6 rounded-6xl"
        >
          <div className="m-4 p-4 pb-12 text-center text-7xl pt-serif-700 text-[#d4bfff] italic">
            Contacts
          </div>
          <div className="container mx-auto px-4">
            <table className="">
              <tbody className="text-2xl">
                <tr id="john">
                  <td className="text-left font-bold pb-16">Davidson County</td>
                  <td className="text-left pb-16 pl-12">John van der Harst</td>
                  <td className="pl-12 pb-16">
                    <a
                      href={`/organizing/contacts/john`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        className="duration-500 ease-in-out focus:opacity-90 hover:opacity-90 mx-2 sm:mx-8 opacity-40 transition"
                        src={`/images/external-link-icons/email.svg`}
                        alt={"Email icon"}
                        height={50}
                        width={50}
                      />
                    </a>
                  </td>
                </tr>

                <tr id="leith">
                  <td className="text-left font-bold pb-16">Jackson County</td>
                  <td className="text-left pb-16 pl-12">Leith Patton</td>
                  <td className="pl-12 pb-16">
                    <a
                      href={`/organizing/contacts/leith`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        className="duration-500 ease-in-out focus:opacity-90 hover:opacity-90 mx-2 sm:mx-8 opacity-40 transition"
                        src={`/images/external-link-icons/email.svg`}
                        alt={"Email icon"}
                        height={50}
                        width={50}
                      />
                    </a>
                  </td>
                </tr>

                <tr id="martha">
                  <td className="text-left font-bold pb-16">Stewart County</td>
                  <td className="text-left pb-16 pl-12">Martha Yanchyshyn</td>
                  <td className="pl-12 pb-16">
                    <a
                      href={`/organizing/contacts/martha`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        className="duration-500 ease-in-out focus:opacity-90 hover:opacity-90 mx-2 sm:mx-8 opacity-40 transition"
                        src={`/images/external-link-icons/email.svg`}
                        alt={"Email icon"}
                        height={50}
                        width={50}
                      />
                    </a>
                  </td>
                </tr>

                <tr id="colleen">
                  <td className="text-left font-bold pb-16">Wayne County</td>
                  <td className="text-left pb-16 pl-12">Colleen McLanaghan</td>
                  <td className="pl-12 pb-16">
                    <a
                      href={`/organizing/contacts/colleen`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        className="duration-500 ease-in-out focus:opacity-90 hover:opacity-90 mx-2 sm:mx-8 opacity-40 transition"
                        src={`/images/external-link-icons/email.svg`}
                        alt={"Email icon"}
                        height={50}
                        width={50}
                      />
                    </a>
                  </td>
                </tr>

                <tr id="catherine">
                  <td className="text-left font-bold pb-16">
                    Washington County
                  </td>
                  <td className="text-left pb-16 pl-12">Catherine Murray</td>
                  <td className="pl-12 pb-16">
                    <a
                      href={`/organizing/contacts/catherine`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        className="duration-500 ease-in-out focus:opacity-90 hover:opacity-90 mx-2 sm:mx-8 opacity-40 transition"
                        src={`/images/external-link-icons/email.svg`}
                        alt={"Email icon"}
                        height={50}
                        width={50}
                      />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
