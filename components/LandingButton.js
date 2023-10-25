export default function LandingButton({ title, subTitle, bgColor }) {
  return (
    <div className="m-2">
      <button className={`w-full rounded-full ${bgColor}`}>
        <div
          style={{ fontSize: "2.7rem", fontStretch: "semi-expanded" }}
          className="text-black text-opacity-90 uppercase italic text-5xl pt-serif-700"
        >
          {title}
        </div>
        <div
          style={{ fontSize: "1.77rem", fontStretch: "semi-expanded" }}
          className="roboto-font-500"
        >
          {subTitle}
        </div>
      </button>
    </div>
  );
}
