import { Button } from "@/components/ui/button";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";

export default async function Home() {
  const products = await getAllProducts();

  // console.log(
  //   crypto.randomUUID().slice(0, 5) +
  //   `>>> Rendered the home page cache with ${products.length} products and ${categories.length} categories`
  // );

  return (
    <div className="">
      <h1>Hello World</h1>

      <div className="flex flex-col items-center justify-normal min-h-screen bg-gray-100 p-4">
        <ProductsView products={products}/>
      </div>
    </div>
  );
}
