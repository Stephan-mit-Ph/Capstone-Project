import { categories } from '../../data/categories'
import BackToLink from '../BackToLink'
import { StyledPrice } from '../CategoryList/CategoryList.styled'
import { StyledWrapper } from '../HomePreview/HomePreview.styled'
import { StyledSubTitle } from '../ProductDetails/ProductDetails.styled'
import StyledLink from '../StyledLink'
import { StyledCard, StyledCardTitle, StyledChevron, StyledChevronWrapper, StyledImage, StyledLinkWrapper, StyledList } from './CategoriesList.styled'

function CategoriesList() {
  return (
    <StyledWrapper>
      <BackToLink href="/" alt="go to Homepage">
        Home
      </BackToLink>
      <StyledSubTitle>All Categories</StyledSubTitle>
      <StyledList role="list">
        {categories.map((category) => (
          <li key={category.id}>
            <StyledCard>
            <StyledLink href={`/categories/${category.slug}`}>
              <StyledLinkWrapper>
              <StyledCardTitle>{category.name}</StyledCardTitle></StyledLinkWrapper>
              <StyledImage src={category.image} alt={category.name} width={300} height={300}
              />
              <StyledChevronWrapper>
                <StyledPrice>Shop Now</StyledPrice>
              <StyledChevron />
              </StyledChevronWrapper>
            </StyledLink>
            </StyledCard>
          </li>
        ))}
      </StyledList>
    </StyledWrapper>
  )
}

export default CategoriesList
