import { useRouter } from 'next/router'
import { categories } from '../../data/categories'
import Image from 'next/image'
import BackToLink from '../BackToLink'
import ReadMoreLess from '../ReadMoreLess'
import { StyledTitle} from './ProductDetails.styled'
import ProductQuantity from '../ProductQuantity'

export default function ProductDetails() {
  const router = useRouter()
  const { slug, permalink } = router.query

  const category = categories.find((c) => c.slug === slug)

  if (!category) {
    return null
  }

  const product = category.products.find((p) => p.permalink === permalink)

  if (!product) {
    return null
  }

  const { name, description, image, price } = product

  return (
    <>
      <BackToLink href={`/categories/${slug}`}>{category.name}</BackToLink>
      <StyledTitle>{name}</StyledTitle>
      <Image src={image[0]} alt={name} width={300} height={300} />
      <p>Price: {price} $</p>
      <ProductQuantity price={price} />
      <ReadMoreLess text="Details" content={description} />
    </>
  )
}
