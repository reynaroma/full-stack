import { Product } from "@/sanity.types"

const ProductThumb = ({ product }: { product: Product }) => {
  const isOutOfStock = product.stock != null && product.stock <= 0;

  return (
    <div>{product.name}</div>
  )
}
export default ProductThumb;