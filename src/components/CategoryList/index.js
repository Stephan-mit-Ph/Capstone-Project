import formatNumberToCurrency from '../../helpers/formatNumberToCurrency'
import { StyledCard, StyledCardTitle, StyledImage, StyledLinkWrapper, StyledList } from '../CategoriesList/CategoriesList.styled'
import { StyledSubTitle } from '../ProductDetails/ProductDetails.styled'
import StyledLink from '../StyledLink'
import { StyledPrice, StyledPriceWrapper } from './CategoryList.styled'
import BackButton from '../BackButton'

export default function CategoryList({ category }) {
  const products = category.products

  return (
    <>
      <StyledSubTitle>{category.name}</StyledSubTitle>
      <StyledList>
        {products.map((product) => (
          <li key={product.id}>
            <StyledCard>
              <StyledLink href={`/categories/${category.slug}/${product.permalink}`} aria-label="go to product details page">
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
