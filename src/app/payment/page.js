"use client";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import MainButton from "@/components/MainButton";

function PaymentPage() {
  const searchParams = useSearchParams();
  const size = searchParams.get("size");
  const color = searchParams.get("color");

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
          <h1 className="underline">Bare en t-shirt</h1>
          <h2>Size: {size}</h2>
          <h3>Color: {color}</h3>
          <MainButton mainBtnText="Betal" />
        </div>
      </div>
    </article>
  );
}

export default PaymentPage;
