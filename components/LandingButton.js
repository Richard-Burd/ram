export default function LandingButton({ title, subTitle, bgColor }) {
  return (
    <button className={`m-2 rounded-full ${bgColor}`}>
      <div className="text-black text-opacity-90 uppercase italic text-2xl pt-serif-700">
        {title}
      </div>
      <div className="roboto-font-500">{subTitle}</div>
    </button>
  );
}
