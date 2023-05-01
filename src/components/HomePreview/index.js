import PreviewImage from '../../../public/images/iphone-13-pro-max-silver.png'
import { StyledCard, StyledCardTitle } from '../CategoriesList/CategoriesList.styled'
import LinkWrapper from '../LinkWrapper'
import { StyledAbout, StyledImage, StyledTitle, StyledWrapper } from './HomePreview.styled'

export default function HomePreview() {
  return (
    <StyledWrapper>
      <StyledTitle>
        Welcome to our <br /> Online-Shop
      </StyledTitle>
      <StyledAbout>
        Looking for high-quality refurbished Apple products at
        <br /> unbeatable prices? Look no further than our e-commerce store!
        <br /> We offer a wide selection of top-of-the-line Apple products,
        <br />
        including iPhones, iPads, MacBooks, and more, all professionally
        <br /> refurbished to like-new condition and
        <br />
        backed by our quality guarantee.
      </StyledAbout>
      <StyledCard>
        <LinkWrapper href="/categories" alt="All Categories" aria-label="go to all categories">
          <StyledCardTitle>All Categories</StyledCardTitle>
          <StyledImage src={PreviewImage} alt="iPhone 13 Collection" width={300} height={300} />
        </LinkWrapper>
      </StyledCard>
    </StyledWrapper>
  )
}
