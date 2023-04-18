import { categories } from '../../data/categories'
import Image from 'next/image'
import StyledLink from '../StyledLink'
import { StyledList } from './CategoriesList.styled'
import BackToLink from '../BackToLink'
import { StyledTitle } from '../ProductDetails/ProductDetails.styled'

function CategoriesList() {
  return (
    <>
      <BackToLink href="/" alt="go to Homepage">
        Home
      </BackToLink>
      <StyledList role='list'>
        {categories.map((category) => (
          <li key={category.id}>
            <StyledLink href={`/categories/${category.slug}`} passHref>
              <StyledTitle>{category.name}</StyledTitle>
              <Image src={category.image} alt={category.name} width={300} height={300} />
            </StyledLink>
          </li>
        ))}
      </StyledList>
    </>
  )
}

export default CategoriesList
