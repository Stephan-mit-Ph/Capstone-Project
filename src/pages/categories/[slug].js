import CategoryPage from '../../components/CategoryPage'
import BackToLink from '../../components/BackToLink'

export default function CategoryPa() {
  return (
    <>
      <BackToLink href={'/categories'} />
      <CategoryPage/>
    </>
  )
}
