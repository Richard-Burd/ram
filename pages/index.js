import Image from "next/image";
import { Inter } from "next/font/google";

export default function Home() {
  return (
    <div>
      <div className="m-8 text-2xl lg:text-6xl text-stone-700">
        The RAM website is comming soon!
      </div>
      <div className="m-8 text-1xl lg:text-1xl text-stone-700">
        Richard got everything working in the backend, now he can just build out
        the website content
      </div>
    </div>
  );
}
