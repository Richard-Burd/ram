import Head from "next/head";
import SecondaryNavbar from "@/components/SecondaryNavbar";
import HyperLinkNavbar from "@/components/HyperLinkNavbar";
import { hyperlinkNavbarProps } from "@/pages/organizing/contacts";
import { navbarProps } from "@/pages/organizing";

export default function John() {
  return (
    <div>
      <Head>
        <title>John van der Harst</title>
        <meta
          name="keywords"
          content="contact, address, email, outreach, leadership"
        />
      </Head>
      <div className="bg-gradient-to-l from-[#591fab] to-[#160a36] text-zinc-300 pb-72">
        <SecondaryNavbar {...navbarProps} />
        <HyperLinkNavbar {...hyperlinkNavbarProps} />
        <div
          id="title-and-text-box"
          className="bg-neutral-950 m-11 p-6 rounded-6xl"
        >
          <div className="m-4 p-4 text-center text-7xl pt-serif-700 text-[#d4bfff] italic">
            John van der Harst
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
                <div className="ml-6 mt-4 p-4 bg-[#211052] inline-block max-w-max rounded-3xl">
                  <div>John van der Harst</div>
                  <div>1407 Roberts Ave.</div>
                  <div>Nashville, TN 37206</div>
                  <div>U.S.A.</div>
                </div>
                <div className="mt-20">
                  <b>Telephone</b>, preferably as close as possible to
                  9:00-11:00 pm Central U.S. time (CST):
                </div>
                <div className="ml-6 mt-4 p-4 bg-[#211052] inline-block max-w-max rounded-3xl">
                  <div>615-227-3499</div>{" "}
                </div>
                <div className="mt-20">
                  <b>Email</b>, note that John often does not read his email for
                  extended periods, in order to think more thoroughly:
                </div>
                <div className="ml-6 mt-4 p-4 bg-[#211052] inline-block max-w-max rounded-3xl">
                  <div>
                    <a href="mailto:johnvanderharst@gmail.com">
                      johnvanderharst@gmail.com
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
