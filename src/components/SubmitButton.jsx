"use client";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();
  console.log(pending);
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:bg-red-700"
    >
      {pending ? "sumbitting..." : "submit"}
    </button>
  );
}

export default SubmitButton;
