import PreviewImage from '../PreviewImage'
import ListItem from '../ListItem'
import SubTitle from '../SubTitle'
import LinkWrapper from '../LinkWrapper'
import LinkText from '../LinkText'
import  ChevronRight  from '../Icons/ChevroRight'
import { StyledAbout } from './HomePreview.styled'

export default function HomePreview() {
  return (
    <>
      <SubTitle>
        Welcome to our <br /> Online-Shop
      </SubTitle>
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
      <ListItem>
        <LinkWrapper href="/categories" aria-label="go to all categories">
          All Categories
          <PreviewImage src="/images/iphone-13-pro-max-silver.png" alt="iPhone 13 Pro" width={300} height={300} />
          <LinkText>
            Shop Now <ChevronRight aria-hidden="true" />
          </LinkText>
        </LinkWrapper>
      </ListItem>
    </>
  )
}
