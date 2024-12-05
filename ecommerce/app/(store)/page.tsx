import { Button } from "@/components/ui/button";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";

export default async function Home() {
  const products = await getAllProducts();
  
  return (
    <div className="">
      <h1>Hello World</h1>
      {/* render all the products */}
      <Button>Click me</Button>
    </div>
  );
}
