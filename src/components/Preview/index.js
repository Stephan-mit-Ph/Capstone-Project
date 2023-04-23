import Image from 'next/image'
import PreviewImage from '../../../public/images/iphone-13-pro-camera-silver.png'
import { StyledAbout } from './Preview.styled'
import StyledLink from '../StyledLink'

export default function Preview() {
  return (
    <>
      <StyledAbout>
        Looking for high-quality refurbished Apple products at unbeatable prices? Look no further than our e-commerce store! We offer a wide selection
        of top-of-the-line Apple products,including iPhones, iPads, MacBooks, and more, all professionally refurbished to like-new condition and
        backed by our quality guarantee.
      </StyledAbout>
      <StyledLink href="/categories" alt="All Categories">
        <Image src={PreviewImage} alt="iPhone 13 Collection" width={300} height={300} />
        All Categories
      </StyledLink>
    </>
  )
}
