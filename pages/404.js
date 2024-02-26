import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 7000);

    // Clear the timer upon component unmounting or dependency changes to
    // prevent memory leaks and avoid navigation attempts after component unmount.
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="rough-draft-page-outline bg-zinc-900 pb-[500px]">
      <div className=" mx-20 max-w-screen-md pt-20 text-stone-200">
        <p className="mb-10 text-4xl font-semibold">
          Oops, that page either does not exist or is still under
          construction.🛠️
        </p>{" "}
        <p className="mb-10 text-2xl font-semibold">
          You can go to the{" "}
          <Link className="font-semibold text-blue-300 underline" href="/">
            Homepage
          </Link>{" "}
          or wait to be redirected there in a moment.
        </p>
      </div>
    </div>
  );
}
