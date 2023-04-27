import PreviewImage from '../../../public/images/iphone-13-pro-max-silver.png'
import { StyledAbout, StyledTitle, StyledWrapper, StyledImage } from './Preview.styled'
import StyledLink from '../StyledLink'
import { StyledCard, StyledCardTitle } from '../CategoriesList/CategoriesList.styled'

export default function Preview() {
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
        <StyledLink href="/categories" alt="All Categories">
          <StyledCardTitle>All Categories</StyledCardTitle>
          <StyledImage src={PreviewImage} alt="iPhone 13 Collection" width={300} height={300} />
        </StyledLink>
      </StyledCard>
    </StyledWrapper>
  )
}
