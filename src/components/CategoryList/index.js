import StyledLink from '../StyledLink'
import BackToLink from '../BackToLink'
import { StyledList, StyledCardTitle, StyledCard, StyledLinkWrapper, StyledImage } from '../CategoriesList/CategoriesList.styled'
import { StyledSubTitle } from '../ProductDetails/ProductDetails.styled'
import { StyledPriceWrapper, StyledPrice } from './CategoryList.styled'
import formatNumberToCurrency from '../../helpers/formatNumberToCurrency'

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
            <StyledCard>
              <StyledLink href={`/categories/${category.slug}/${product.permalink}`}>
                <StyledLinkWrapper>
                  <StyledCardTitle>{product.name}</StyledCardTitle>
                </StyledLinkWrapper>
                <StyledImage src={product.image[0].path} alt={product.name} width={300} height={300} />
              </StyledLink>
              <StyledPriceWrapper>
              <StyledPrice>{formatNumberToCurrency(product.price)}</StyledPrice>
              </StyledPriceWrapper>
            </StyledCard>
          </li>
        ))}
      </StyledList>
    </>
  )
}
