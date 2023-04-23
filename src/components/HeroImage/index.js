import { StyledHeroWrapper } from './HeroImage.styled.js'
import Image from 'next/image'

export default function HeroImage({ src, alt }) {
  return (
    <StyledHeroWrapper>
      <Image src={src} alt={alt} fill quality={100} />
    </StyledHeroWrapper>
  )
}
