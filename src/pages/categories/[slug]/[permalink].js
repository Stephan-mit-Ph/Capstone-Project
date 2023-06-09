import { useRouter } from 'next/router'
import ProductDetails from '../../../components/ProductDetails'
import BackButton from '../../../components/BackButton'
import SubTitle from '../../../components/SubTitle'

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

  return (
    <>
      <BackButton ariaLabel={`go back to ${category.name}`} text={category.name}>
        {category.name}
      </BackButton>
      <SubTitle text={product.name} />
      <ProductDetails product={product} category={category} />
    </>
  )
}
