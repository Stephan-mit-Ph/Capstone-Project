import { useRouter } from 'next/router'
import BackButton from '../../components/BackButton'
import SubTitle from '../../components/SubTitle'
import List from '../../components/List'
import ListItem from '../../components/ListItem'
import LinkWrapper from '../../components/LinkWrapper'
import LinkText from '../../components/LinkText'
import PreviewImage from '../../components/PreviewImage'
import formatNumberToCurrency from '../../helpers/formatNumberToCurrency'

export default function CategoryPage({ categories }) {
  const router = useRouter()
  const { slug } = router.query

  const category = categories.find((category) => category.slug === slug)

  if (!category) {
    return null
  }

  return (
    <>
      <BackButton text="Categories" ariaLabel="Go back to all categories">
        Categories
      </BackButton>
      <SubTitle text={category.name} />
      <List role="list of products">
        {category.products.map((product) => (
          <ListItem role="product-item" key={product.id}>
            <LinkWrapper href={`/categories/${category.slug}/${product.permalink}`} aria-label="go to product details page">
              {product.name}
              <PreviewImage src={product.image[0].path} alt={product.name} width={300} height={300} />
            </LinkWrapper>
            <LinkText>{formatNumberToCurrency(product.price)}</LinkText>
          </ListItem>
        ))}
      </List>
    </>
  )
}
