import BlackFridayBanner from "@/components/BlackFridayBanner";
import ProductsView from "@/components/ProductsView";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";

export default async function Home() {
  const products = await getAllProducts();
  const categories = await getAllCategories();

  return (
    <div className="">
      <BlackFridayBanner />

      <div className="flex flex-col items-center justify-normal min-h-screen bg-gray-100 p-4">
        <ProductsView products={products} categories={categories} />
      </div>
    </div>
  );
}
