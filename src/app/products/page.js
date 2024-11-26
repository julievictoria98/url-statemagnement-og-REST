import Filter from "@/components/Filter";
import Products from "@/components/Products";

function page() {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  return (
    <>
      <Filter />
      <Products />
    </>
  );
}

export default page;
