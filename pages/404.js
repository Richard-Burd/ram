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
      <div className=" text-stone-200 mx-20 pt-20 max-w-screen-md">
        <p className="text-4xl font-semibold mb-10">
          Oops, that page either does not exist or is still under
          construction.🛠️
        </p>{" "}
        <p className="text-2xl font-semibold mb-10" p>
          You can go to the{" "}
          <Link className="text-blue-300 underline font-semibold" href="/">
            Homepage
          </Link>{" "}
          or wait to be redirected there in a moment.
        </p>
      </div>
    </div>
  );
}
