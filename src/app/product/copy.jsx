"use client";
import ColorButton from "@/components/ColorButton";
import SizeButton from "@/components/SizeButton";
import Image from "next/image";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function page() {
  const searchParams = useSearchParams();
  const selectedColor = searchParams.get("color");
  const selectedSize = searchParams.get("size");
  //   const [selectedSize, setSelectedSize] = useState("XS");
  //   const [selectedColor, setSelectedColor] = useState("Red");

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
              selectedColor={selectedColor}
              selectedSize={selectedSize}
            />
            <SizeButton
              size="S"
              selectedColor={selectedColor}
              selectedSize={selectedSize}
            />
            <SizeButton
              size="M"
              selectedColor={selectedColor}
              selectedSize={selectedSize}
            />
            <SizeButton
              size="L"
              selectedColor={selectedColor}
              selectedSize={selectedSize}
            />
          </div>
        </div>
        <div>
          <h2>Color</h2>
          <div className="flex gap-6">
            <ColorButton
              color="Red"
              selectedSize={selectedSize}
              selectedColor={selectedColor}
            />
            <ColorButton
              color="Blue"
              selectedSize={selectedSize}
              selectedColor={selectedColor}
            />
            <ColorButton
              color="Green"
              selectedSize={selectedSize}
              selectedColor={selectedColor}
            />
            <ColorButton
              color="Yellow"
              selectedSize={selectedSize}
              selectedColor={selectedColor}
            />
          </div>
        </div>
        <Link
          href={`/payment?color=${selectedColor || ""}&size=${
            selectedSize || ""
          }`}
        >
          <button>Gå til bestilling</button>
        </Link>
      </div>
    </article>
  );
}

export default page;
