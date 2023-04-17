import BackToLink from '../../components/BackToLink'
import CategoriesList from '../../components/CategoriesList'

export default function CategoriesPage() {
  return (
    <>
      <BackToLink href={'/'} />
      <h1>All Categories</h1>
      <CategoriesList />
    </>
  )
}
