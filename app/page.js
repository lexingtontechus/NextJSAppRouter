import Link from "next/link";
export const metadata = {
  title: "Home",
};
export default function Home() {
  return (
      <div className="text-4xl">
        <h2>
          Hello World. <Link href="/about">About</Link>
        </h2>
      </div>
  );
}
