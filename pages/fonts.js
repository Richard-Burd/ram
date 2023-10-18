import LandingButtons from "../components/LandingButtons";

export default function Fonts() {
  return (
    <div className="bg-slate-100">
      <div className="m-8 text-2xl">
        Below are some fonts that we can use on the website. They are all from{" "}
        <a
          className="text-blue-700 underline font-semibold"
          href="https://fonts.google.com/"
          target="_blank"
        >
          Google fonts
        </a>{" "}
      </div>
      <div className="text-slate-800 p-10 text-4xl">
        <div className="roboto-font-300 mb-6">Roboto Font 300</div>
        <div className="roboto-font-400 mb-6">Roboto Font 400</div>
        <div className="roboto-font-500 mb-6">Roboto Font 500</div>
        <div className="roboto-font-700 mb-6">Roboto Font 700</div>
        <div className="roboto-font-900 mb-6">Roboto Font 900</div>
        <div className="young-serif-font mb-6">Young Serif Font</div>
        <div className="averia-400 mb-6">Averia 400 Font</div>
        <div className="averia-700 mb-6">Averia 700 Font</div>
        <div className="pt-serif-400 mb-6">PT Serif Font 400</div>
        <div className="pt-serif-700 mb-6">PT Serif Font 700</div>
        <div className="varela-round mb-6">Young Serif Font</div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div className="bg-neutral-900 text-gray-100 p-10 tracking-wide">
          <div className="title-example">
            <div className="young-serif-font mb-2 text-4xl italic">
              Recycling Advocates of Middle Tennessee
            </div>
            <div className="roboto-font-400 mb-24 text-2xl pl-10">
              Font: (Young Serif)
            </div>
          </div>

          <div className="title-example">
            <div className="averia-400 mb-2 text-4xl italic">
              Recycling Advocates of Middle Tennessee
            </div>
            <div className="roboto-font-400 mb-24 text-2xl pl-10">
              Font: (Averia 400)
            </div>
          </div>

          <div className="title-example">
            <div className="averia-700 mb-2 text-4xl italic">
              Recycling Advocates of Middle Tennessee
            </div>
            <div className="roboto-font-400 mb-24 text-2xl pl-10">
              Font: (Averia 700)
            </div>
          </div>

          <div className="title-example">
            <div className="pt-serif-400 mb-2 text-4xl italic">
              Recycling Advocates of Middle Tennessee
            </div>
            <div className="roboto-font-400 mb-24 text-2xl pl-10">
              Font: (PT Serif 400)
            </div>
          </div>

          <div className="title-example">
            <div className="pt-serif-700 mb-2 text-4xl italic">
              Recycling Advocates of Middle Tennessee
            </div>
            <div className="roboto-font-400 mb-24 text-2xl pl-10">
              <div>Font: (PT Serif 700)</div>
              <div>NOTE: this is what's used on the button mockups below</div>
            </div>
          </div>

          <div className="pt-serif-700 mt-8">
            <div className="rounded-full inline-block bg-homeBg text-black text-opacity-90 italic m-2 p-4">
              &nbsp; HOME &nbsp;
            </div>
            <div className="rounded-full inline-block bg-aboutBg text-black text-opacity-90 italic m-2 p-4">
              &nbsp; ABOUT &nbsp;
            </div>
            <div className="rounded-full inline-block bg-studiesBg text-black text-opacity-90 italic m-2 p-4">
              &nbsp; STUDIES &nbsp;
            </div>
            <div className="rounded-full inline-block bg-outreachBg text-black text-opacity-90 italic m-2 p-4">
              &nbsp; OUTREACH &nbsp;
            </div>
            <div className="rounded-full inline-block bg-successesBg text-black text-opacity-90 italic m-2 p-4">
              &nbsp; SUCCESSES &nbsp;
            </div>
            <div className="rounded-full inline-block bg-organizingBg text-black text-opacity-90 italic m-2 p-4">
              &nbsp; ORGANIZING &nbsp;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
