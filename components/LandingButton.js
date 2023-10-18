export default function LandingButton({ title, subTitle, bgColor }) {
  return (
    <button className="w-48 md:w-64 lg:w-64 mx-auto">
      <div className={`rounded-full m-4 ${bgColor}`}>
        <div className="text-black text-opacity-90 uppercase italic text-2xl pt-serif-700 pl-2 pr-3">
          {title}
        </div>
        <div className="roboto-font-500">{subTitle}</div>
      </div>
    </button>
  );
}
