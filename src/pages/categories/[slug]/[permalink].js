import { useRouter } from 'next/router'
import ProductDetails from '../../../components/ProductDetails'

export default function ProductsPage({ categories }) {
  const router = useRouter()
  const { slug, permalink } = router.query
  const category = categories.find((category) => category.slug === slug)

  if (!category) {
    return null
  }

  const product = category.products.find((product) => product.permalink === permalink)

  if (!product) {
    return null
  }

  return <ProductDetails product={product} category={category} />
}
