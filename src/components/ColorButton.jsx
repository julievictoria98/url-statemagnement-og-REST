// "Use client";

// import Link from "next/link";

// function ColorButton({ color, selectedSize, selectedColor }) {
//   return (
//     <Link href={`?size=${selectedSize}&color=${color}`}>
//       <div
//         className={`rounded-full px-2 border border-black hover:bg-black hover:text-white ${
//           selectedColor === color ? "border-blue-500" : ""
//         }`}
//       >
//         {color}
//       </div>
//     </Link>
//   );
// }

// export default ColorButton;

"use client";
import Link from "next/link";

function ColorButton({ color, selectedColor, setSelectedColor, selectedSize }) {
  return (
    <Link href={`?size=${selectedSize}&color=${color}`}>
      <div
        onClick={() => setSelectedColor(color)}
        className={`rounded-full px-2 border border-black hover:bg-black hover:text-white ${
          selectedColor === color ? "border-blue-500" : ""
        }`}
      >
        {color}
      </div>
    </Link>
  );
}

export default ColorButton;
