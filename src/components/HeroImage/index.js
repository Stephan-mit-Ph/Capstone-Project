import { StyledHeroWrapper, StyledHeroImage, StyledButtonWrapper, StyledLink } from './HeroImage.styled.js'

export default function HeroImage({ src, alt }) {
  return (
    <StyledHeroWrapper>
      <StyledHeroImage src={src} alt={alt} fill quality={100} />
      <StyledButtonWrapper>
        <StyledLink href="/categories/smartphones/iphone-13-pro-graphit" alt="Sale Link">
          Shop Now
        </StyledLink>
      </StyledButtonWrapper>
    </StyledHeroWrapper>
  )
}
