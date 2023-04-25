import Image from 'next/image'
import PreviewImage from '../../../public/images/iphone-13-pro-max-silver.png'
import { StyledAbout, StyledTitle, StyledWrapper } from './Preview.styled'
import StyledLink from '../StyledLink'

export default function Preview() {
  return (
    <StyledWrapper>
      <StyledTitle>
        Welcome to our <br /> Online-Shop
      </StyledTitle>
      <StyledAbout>
        Looking for high-quality refurbished Apple products at<br/> unbeatable prices? Look no further than our e-commerce store!<br/> We offer a wide selection
        of top-of-the-line Apple products,<br/>including iPhones, iPads, MacBooks, and more, all professionally<br/> refurbished to like-new condition and<br/>
        backed by our quality guarantee.
      </StyledAbout>
      <StyledLink href="/categories" alt="All Categories">
        <Image src={PreviewImage} alt="iPhone 13 Collection" width={300} height={300} />
        All Categories
      </StyledLink>
    </StyledWrapper>
  )
}
