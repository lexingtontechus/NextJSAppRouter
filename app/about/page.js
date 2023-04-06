import Link from "next/link";

const Home = () => {
  return (
    <>
      <div className="text-4xl">
        <h2>
          Hello World. <Link href="/">Home</Link>
        </h2>
      </div>
    </>
  );
};

export default Home;
