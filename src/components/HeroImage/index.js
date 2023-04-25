import { StyledHeroWrapper, StyledHeroImage } from './HeroImage.styled.js'

export default function HeroImage({ src, alt }) {
  return (
    <StyledHeroWrapper>
      <StyledHeroImage src={src} alt={alt} fill quality={100} />
    </StyledHeroWrapper>
  )
}
