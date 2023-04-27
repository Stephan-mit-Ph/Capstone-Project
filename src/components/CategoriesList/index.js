import { categories } from '../../data/categories'
import StyledLink from '../StyledLink'
import { StyledCardTitle, StyledList, StyledCard, StyledImage, StyledChevron, StyledLinkWrapper, StyledChevronWrapper } from './CategoriesList.styled'
import BackToLink from '../BackToLink'
import {  StyledSubTitle } from '../ProductDetails/ProductDetails.styled'
import { StyledWrapper } from '../Preview/Preview.styled'
import { StyledPrice} from '../CategoryList/CategoryList.styled'

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
