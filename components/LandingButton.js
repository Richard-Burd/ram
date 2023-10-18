export default function LandingButton({ title, subTitle, bgColor }) {
  return (
    <button>
      <div className={`rounded-full m-4 ${bgColor}`}>
        <div className="text-black text-opacity-90 uppercase italic pt-serif-700 mt-8 pl-2 pr-3">
          {title}
        </div>
        <div className="roboto-font-500">{subTitle}</div>
      </div>
    </button>
  );
}
