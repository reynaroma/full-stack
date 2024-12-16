import ProductGrid from "@/components/ProductGrid";
import { getProductBySlug } from "@/sanity/lib/products/getProductBySlug";
import { notFound } from "next/navigation";

async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return notFound();
  };

  const isOutOfStock = product.stock != null && product.stock <= 0;

  return (
    <div>
      
    </div>
  )
}

export default ProductPage
