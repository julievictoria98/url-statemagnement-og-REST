"use client";

import ColorButton from "@/components/ColorButton";
import SizeButton from "@/components/SizeButton";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

function Page() {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

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
            <SizeButton
              size="XS"
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              selectedColor={selectedColor}
            />
            <SizeButton
              size="S"
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              selectedColor={selectedColor}
            />
            <SizeButton
              size="M"
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              selectedColor={selectedColor}
            />
            <SizeButton
              size="L"
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              selectedColor={selectedColor}
            />
          </div>
        </div>
        <div>
          <h2>Color</h2>
          <div className="flex gap-6">
            <ColorButton
              color="Red"
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
              selectedSize={selectedSize}
            />
            <ColorButton
              color="Blue"
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
              selectedSize={selectedSize}
            />
            <ColorButton
              color="Green"
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
              selectedSize={selectedSize}
            />
            <ColorButton
              color="Yellow"
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
              selectedSize={selectedSize}
            />
          </div>
        </div>
        {/* Generate URL with selected color and size */}
        <Link
          href={`/payment?color=${selectedColor || ""}&size=${
            selectedSize || ""
          }`}
        >
          <button className="p-4 bg-blue-500 text-white rounded">
            Gå til bestilling
          </button>
        </Link>
      </div>
    </article>
  );
}

export default Page;
