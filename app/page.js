//import Link from "next/link";
//import Modal from "./components/modal";

export const metadata = {
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  title: "Home",
};
export default function Home() {
  return (
    <div className="text-4xl uppercase text-center m-8 p-8">
     <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">NextJS App Route Template</h1>
      <p className="py-6">Featuring DaisyUI Next Theme Integration.</p>
      <p className="py-6">Featuring ClerkJS WEB3 Authentication</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
<div className="m-4">
 <h2>Powered by</h2>
      <h3>Lexington Tech</h3>
    </div>
    </div>
  );
}
