import Head from "next/head";
import SecondaryNavbar from "@/components/SecondaryNavbar";
import TertiaryNavbar from "@/components/TertiaryNavbar";
import { secondaryHierarchyProps } from "@/pages/organizing/contacts";
import { primaryHierarchyProps } from "@/pages/organizing";

export default function Catherine() {
  return (
    <div>
      <Head>
        <title>Catherine Murray</title>
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
            Catherine Murray
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
                  <div>Catherine Murray</div>
                  <div>1716 King Springs Rd.</div>
                  <div>Johnson City, TN 37601</div>
                  <div>U.S.A.</div>
                </div>
                <div className="mt-20">
                  <b>Telephone</b>, preferably as close as possible to
                  9:00-11:00 pm Central U.S. time (CST):
                </div>
                <div className="ml-6 mt-4 inline-block max-w-max rounded-3xl bg-[#211052] p-4">
                  <div>931-929-8163</div>{" "}
                </div>
                <div className="mt-20">
                  <b>Email</b>, note that Catherine often does not read her
                  email for extended periods, in order to think more thoroughly:
                </div>
                <div className="ml-6 mt-4 inline-block max-w-max rounded-3xl bg-[#211052] p-4">
                  <div>
                    <a href="mailto:mtncat7@earthlink.net">
                      mtncat7@earthlink.net
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
