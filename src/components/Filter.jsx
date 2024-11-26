"use client";

import { useSearchParams } from "next/navigation";

const Filter = () => {
  const searchParams = useSearchParams();

  const updateFilter = (category, value) => {
    const newParams = new URLSearchParams(searchParams);

    newParams.set(category, value);

    window.history.replaceState(null, "", "?" + newParams.toString());
  };

  return (
    <div>
      <button onClick={() => updateFilter("category", "tops")}>Tops</button>
      <button onClick={() => updateFilter("category", "beauty")}>Beauty</button>
      <button onClick={() => updateFilter("price", "low-to-high")}>
        Low to High
      </button>
    </div>
  );
};

export default Filter;
