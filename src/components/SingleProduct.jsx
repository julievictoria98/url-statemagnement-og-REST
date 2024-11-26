"use client";
import ColorButton from "./ColorButton";
import SizeButton from "./SizeButton";
import Image from "next/image";

function SingleProdut() {
  return (
    <article className="grid grid-cols-2 w-2/3 self-center justify-self-center">
      <Image
        src="/t-shirt-billed.webp"
        alt="T-shirt"
        width={400}
        height={400}
      />
      <div className="flex flex-col gap-10 items-start">
        <div className="flex flex-col">
          <h1>Bare en t-shirt</h1>
          <h2>Size</h2>
          <div className="flex gap-6">
            <SizeButton size="XS" />
            <SizeButton size="S" />
            <SizeButton size="M" />
            <SizeButton size="L" />
          </div>
        </div>
        <div>
          <h2>Color</h2>
          <div className="flex gap-6">
            <ColorButton color="Red" />
            <ColorButton color="Blue" />
            <ColorButton color="Green" />
            <ColorButton color="Yellow" />
          </div>
        </div>
        <button>Gå til bestilling</button>
      </div>
    </article>
  );
}

export default SingleProdut;
