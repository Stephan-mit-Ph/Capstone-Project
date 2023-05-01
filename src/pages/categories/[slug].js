import { useRouter } from 'next/router'
import CategoryList from '../../components/CategoryList'
import BackButton from '../../components/BackButton'

export default function CategoryPage({ categories }) {
  const router = useRouter()
  const { slug } = router.query

  const category = categories.find((category) => category.slug === slug)

  if (!category) {
    return null
  }

  return (
    <>
      <BackButton text="Categories" ariaLabel="Go back to all categories" />
      <CategoryList category={category} />
    </>
  )
}
