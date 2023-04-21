import { useRouter } from 'next/router'
import BackToLink from '../BackToLink'
import ReadMoreLess from '../ReadMoreLess'
import { StyledSubTitle } from './ProductDetails.styled'
import ProductQuantity from '../ProductQuantity'
import ProductPreview from '../ProductPreview'

export default function ProductDetails({ category, product }) {
  
  return (
    <>
      <BackToLink href={`/categories/${category.slug}`}>{category.name}</BackToLink>
      <StyledSubTitle>{product.name}</StyledSubTitle>
      <ProductPreview images={product.image} />
      <p>Price: {product.price} $</p>
      <ProductQuantity price={product.price} />
      <ReadMoreLess text="Details" content={product.description} />
    </>
  )
}
