import LinkWrapper from '../../components/LinkWrapper'
import BackButton from '../../components/BackButton'
import SubTitle from '../../components/SubTitle'
import List from '../../components/List'
import ListItem from '../../components/ListItem'
import PreviewImage from '../../components/PreviewImage'
import LinkText from '../../components/LinkText'
import { ChevronRight } from '../../components/Icons'

export default function CategoriesPage({ categories }) {
  return (
    <>
      <BackButton>Home</BackButton>
      <SubTitle text="All Categories" />
      <List role="list of categories">
        {categories.map((category) => (
          <ListItem role="category" key={category.id}>
            <LinkWrapper href={`/categories/${category.slug}`} alt={`${category.name}`}>
              {category.name}
              <PreviewImage src={category.image} alt={category.name} width={300} height={300} />
              <LinkText>
                Shop Now <ChevronRight aria-hidden="true" />
              </LinkText>
            </LinkWrapper>
          </ListItem>
        ))}
      </List>
    </>
  )
}
