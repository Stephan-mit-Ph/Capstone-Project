import { categories } from '../../data/categories'
import LinkWrapper from '../LinkWrapper'
import { StyledCard, StyledCardTitle, StyledChevronRight, StyledChevronWrapper, StyledImage, StyledLinkWrapper, StyledList } from './CategoriesList.styled'

function CategoriesList() {
  return (
    <>
      <StyledList role="list">
        {categories.map((category) => (
          <li key={category.id}>
            <StyledCard>
              <LinkWrapper href={`/categories/${category.slug}`}>
                <StyledLinkWrapper>
                  <StyledCardTitle>{category.name}</StyledCardTitle>
                </StyledLinkWrapper>
                <StyledImage src={category.image} alt={category.name} width={300} height={300} />
                <StyledChevronWrapper>
                  Shop Now
                  <StyledChevronRight aria-hidden='true'/>
                </StyledChevronWrapper>
              </LinkWrapper>
            </StyledCard>
          </li>
        ))}
      </StyledList>
    </>
  )
}

export default CategoriesList
