import CategoriesList from '../../components/CategoriesList'
import BackButton from '../../components/BackButton'

export default function CategoriesPage() {
  return (
    <>
      <BackButton text="Home" ariaLabel="Go back to Homepage" />
      <CategoriesList />
    </>
  )
}
