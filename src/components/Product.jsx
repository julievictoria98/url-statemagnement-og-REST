function Product({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <img src={product.thumbnail} alt="Product" className="mb-4" />
      <h3 className="text-xl font-bold mb-2">{product.title}</h3>
      <p className="text-gray-600 mb-4">{product.price}</p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Buy Now
      </button>
    </div>
  );
}

export default Product;
