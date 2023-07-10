import Link from "next/link";
export const metadata = {
  title: "Terms",
};

export default function Terms() {
  return (
      <div className="container mx-auto">
        <div className="text-4xl uppercase text-center my-2">
          <h2>Terms</h2>
          <h3> Last Updated 1 Jan {new Date().getFullYear()}</h3>
        </div>
  <div tabIndex={0} className="collapse  collapse-arrow bg-accent text-primary-content focus:bg-secondary focus:text-secondary-content my-2 rounded-md">
    <div className="collapse-title">
    Focus me to see content
    </div>
  <div className="collapse-content text-xs"> 
    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
  </div>
</div>
<div tabIndex={1} className="collapse  collapse-arrow bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content my-2 rounded-md">
  <div className="collapse-title">
    Focus me to see content
  </div>
  <div className="collapse-content text-xs"> 
    <p>tabIndex={1} attribute is necessary to make the div focusable</p>
  </div>
</div>
</div>
  );
};


