import { useRouter } from 'next/router'
import { categories } from '../../data/categories'
import Image from 'next/image'
import BackToLink from '../BackToLink'
import ReadMoreLess from '../ReadMoreLess'
import { StyledImageThumbnail, StyledTitle } from './ProductDetails.styled'

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

  const { name, description, image, price, categoryName, color } = product
  return (
    <>
      <BackToLink href={`/categories/${category.slug}`} />
      <StyledTitle className="heading-font">{name}</StyledTitle>
      <p>Category: {category.name}</p>
      <Image src={image[0]} alt={name} width={300} height={300} />
      <div>
        <StyledImageThumbnail>
          <li>
            <Image src={image[1]} alt={name} width={80} height={80} />
          </li>
          <li>
            <Image src={image[2]} alt={name} width={80} height={80} />
          </li>
          <li>
            <Image src={image[3]} alt={name} width={80} height={80} />
          </li>
        </StyledImageThumbnail>
      </div>
      <p>Price: {price} $</p>
      <ReadMoreLess text="Details" content={description} />
    </>
  )
}
