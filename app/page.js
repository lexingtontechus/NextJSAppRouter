import Link from "next/link";
import Switch from "./components/switchtheme"
import Modal from "./components/modal";

export const metadata = {
  title: "Home",
};
export default function Home() {
  return (
    <div className="text-4xl uppercase text-center m-8 p-8">
      <h2>Clerk NextJS App Route Example</h2>
      <h3>Powered by DaisyUI</h3>
      <Switch/>
      <Modal/>
    </div>
  );
}
