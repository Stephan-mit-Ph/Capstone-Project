import CategoriesList from '../../components/CategoriesList'
import BackButton from '../../components/BackButton'
import SubTitle from '../../components/SubTitle'

export default function CategoriesPage() {
  return (
    <>
      <BackButton text="Home" ariaLabel="Go back to Homepage" />
      <SubTitle text="All Categories" />
      <CategoriesList />
    </>
  )
}
