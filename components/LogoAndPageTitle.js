import Image from "next/image";

export default function LogoAndPageTitle({
  title,
  titleColor,
  subtitle,
  swooshColor,
  backgroundColor,
}) {
  return (
    <div>
      <div
        className={`bg-gradient-to-r from-black ${backgroundColor} flex border-y-slate-500 border-b-2`}
      >
        <Image
          className="ml-10 py-8"
          src={`${process.env.NEXT_PUBLIC_ARTICLE_IMAGES_URI_PATH}/ram-logo-trans-${swooshColor}.png`}
          alt="RAM Logo"
          width={500}
          height={500}
        />
        <div className="flex w-full">
          <div className="flex justify-center items-center w-full">
            <div className={`${titleColor} text-center`}>
              <div className="text-7xl pt-serif-700 italic">{title}</div>
              <div className="roboto-font-500 text-3xl">{subtitle}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
