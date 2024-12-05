import { Button } from "@/components/ui/button";

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
