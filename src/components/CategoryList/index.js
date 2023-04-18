import { categories } from '../../data/categories'
import { useRouter } from 'next/router'
import Image from 'next/image'
import StyledLink from '../StyledLink'
import BackToLink from '../BackToLink'
import { StyledList } from '../CategoriesList/CategoriesList.styled'
import { StyledSubTitle} from '../ProductDetails/ProductDetails.styled'

export default function CategoryPage() {
  const router = useRouter()
  const { slug } = router.query

  const category = categories.find((category) => category.slug === slug)

  if (!category) {
    return null
  }

  const { name, products } = category

  return (
    <>
      <BackToLink href="/categories" alt="all categories">
        Categories
      </BackToLink>
      <StyledSubTitle>{name}</StyledSubTitle>
      <StyledList>
        {products.map((product) => (
          <li key={product.id}>
            <StyledLink href={`/categories/${category.slug}/${product.permalink}`} passHref>
              <StyledSubTitle>{product.name}</StyledSubTitle>
              <Image src={product.image[0]} alt={product.name} width={300} height={300} />
            </StyledLink>
          </li>
        ))}
      </StyledList>
    </>
  )
}
