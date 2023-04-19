import Image from 'next/image'
import StyledLink from '../StyledLink'
import BackToLink from '../BackToLink'
import { StyledList } from '../CategoriesList/CategoriesList.styled'
import { StyledSubTitle } from '../ProductDetails/ProductDetails.styled'

export default function CategoryList({ category }) {
  const products = category.products

  return (
    <>
      <BackToLink href="/categories" alt="all categories">
        Categories
      </BackToLink>
      <StyledSubTitle>{category.name}</StyledSubTitle>
      <StyledList>
        {products.map((product) => (
          <li key={product.id}>
            <StyledLink href={`/categories/${category.slug}/${product.permalink}`}>
              <StyledSubTitle>{product.name}</StyledSubTitle>
              <Image src={product.image[0].path} alt={product.name} width={300} height={300} />
            </StyledLink>
          </li>
        ))}
      </StyledList>
    </>
  )
}
