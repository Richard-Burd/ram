import Head from "next/head";
import SecondaryNavbar from "@/components/SecondaryNavbar";
import { navbarProps } from "@/pages/organizing";

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
      <div className="bg-gradient-to-l from-[#591fab] to-[#160a36] text-zinc-300 pb-72">
        <SecondaryNavbar {...navbarProps} />
        <div
          id="title-and-text-box"
          className="bg-neutral-950 m-11 p-6 rounded-6xl"
        >
          <div className="m-4 p-4 text-center text-7xl pt-serif-700 text-[#d4bfff] italic">
            Leith Patton
          </div>
          <div className="pt-6 border-b-2 border-zinc-700"></div>
          <div>
            <div className="text-set pb-80 md:ml-0 mx-4 md:mr-80">
              <div className="address-set text-2xl tracking-wide">
                <div>
                  To minimize resource consumption, including time, please send
                  only respectful, personal communication to:
                </div>{" "}
                <br></br>
                <div>
                  <b>Mailing Address</b>:{" "}
                </div>
                <div className="ml-6 mt-4 p-4 bg-slate-800 inline-block max-w-max rounded-3xl">
                  <div>Leith Patton</div>
                  <div>529 Old Dodson Branch Rd.</div>
                  <div>Cookeville, TN 38501</div>
                  <div>U.S.A.</div>
                </div>
                <div className="mt-20">
                  <b>Telephone</b>, preferably as close as possible to
                  9:00-11:00 pm Central U.S. time (CST):
                </div>
                <div className="ml-6 mt-4 p-4 bg-slate-800 inline-block max-w-max rounded-3xl">
                  <div>931-268-2642</div>{" "}
                </div>
                <div className="mt-20">
                  <b>Email</b>, note that Leith often does not read her email
                  for extended periods, in order to think more thoroughly:
                </div>
                <div className="ml-6 mt-4 p-4 bg-slate-800 inline-block max-w-max rounded-3xl">
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
