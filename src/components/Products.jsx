"use client";
import Product from "./Product";
import useSWR from "swr";

// Custom fetcher function
const fetcher = (url) => fetch(url).then((res) => res.json());

function Products() {
  const { data, error, isValidating } = useSWR(
    "https://dummyjson.com/products", // Correct API URL
    fetcher
  );

  if (error) return <div>Failed to load products.</div>;
  if (isValidating) return <div>Loading...</div>; // Loading state using isValidating

  return (
    <div>
      <section className="py-12 px-4 flex flex-col gap-8">
        <div className="flex gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Tops
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Bottoms
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Shoes
          </button>
        </div>
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
