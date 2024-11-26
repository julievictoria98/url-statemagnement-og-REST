// "use client";

// import Link from "next/link";

// function SizeButton({ size, selectedColor, selectedSize }) {
//   return (
//     <Link
//       href={`?size=${size}&color=${selectedColor}`} // Correct query parameter names
//       passHref
//     >
//       <div
//         className={`rounded-full px-2 border border-black hover:bg-black hover:text-white ${
//           selectedSize === size ? "border-blue-500" : ""
//         }`}
//       >
//         {size}
//       </div>
//     </Link>
//   );
// }

// export default SizeButton;

"use client";
import Link from "next/link";

function SizeButton({ size, selectedSize, setSelectedSize, selectedColor }) {
  return (
    <Link href={`?size=${size}&color=${selectedColor}`}>
      <div
        onClick={() => setSelectedSize(size)} // Update state on click
        className={`rounded-full px-2 border border-black hover:bg-black hover:text-white ${
          selectedSize === size ? "border-blue-500" : ""
        }`}
      >
        {size}
      </div>
    </Link>
  );
}

export default SizeButton;
