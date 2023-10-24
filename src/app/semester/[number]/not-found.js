import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center mx-auto w-fit min-h-screen">
      <h2 className="text-4xl">404 Not Found</h2>
      <Link href="/" className="underline w-fit ml-16 cursor-pointer">
        Return Home
      </Link>
    </div>
  );
}
