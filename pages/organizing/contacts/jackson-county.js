import Head from "next/head";
import SecondaryNavbar from "@/components/SecondaryNavbar";
import TertiaryNavbar from "@/components/TertiaryNavbar";
import { secondaryHierarchyProps } from "@/pages/organizing/contacts";
import { primaryHierarchyProps } from "@/pages/organizing";

export default function Leith() {
  return (
    <div>
      <Head>
        <title>Leith Patton</title>
        <meta
          name="keywords"
          content="contact, address, email, outreach, leadership"
        />
      </Head>
      <div className="bg-gradient-to-l from-[#591fab] to-[#160a36] pb-72 text-zinc-300">
        <SecondaryNavbar {...primaryHierarchyProps} />
        <TertiaryNavbar {...secondaryHierarchyProps} />
        <div
          id="title-and-text-box"
          className="m-11 rounded-6xl bg-neutral-950 p-6"
        >
          <div className="pt-serif-700 m-4 p-4 text-center text-7xl italic text-[#d4bfff]">
            Leith Patton
          </div>
          <div className="border-b-2 border-zinc-700 pt-6"></div>
          <div>
            <div className="text-set mx-4 pb-80 md:ml-0 md:mr-80">
              <div className="address-set text-2xl tracking-wide">
                <div>
                  To minimize resource consumption, including time, please send
                  only respectful, personal communication to:
                </div>{" "}
                <br></br>
                <div>
                  <b>Mailing Address</b>:{" "}
                </div>
                <div className="ml-6 mt-4 inline-block max-w-max rounded-3xl bg-[#211052] p-4">
                  <div>Leith Patton</div>
                  <div>529 Old Dodson Branch Rd.</div>
                  <div>Cookeville, TN 38501</div>
                  <div>U.S.A.</div>
                </div>
                <div className="mt-20">
                  <b>Telephone</b>, preferably not too early or late:
                </div>
                <div className="ml-6 mt-4 inline-block max-w-max rounded-3xl bg-[#211052] p-4">
                  <div>931-268-2642</div>{" "}
                </div>
                <div className="mt-20">
                  <b>Email</b>, To minimize resource consumption, including
                  time, please send only respectful, personal communication to:
                </div>
                <div className="ml-6 mt-4 inline-block max-w-max rounded-3xl bg-[#211052] p-4">
                  <div>
                    <a href="mailto:leithpatton2@gmail.com">
                      leithpatton2@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
