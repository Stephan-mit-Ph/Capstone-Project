import { useRouter } from 'next/router'
import CategoryList from '../../components/CategoryList'

export default function CategoryPage({ categories }) {
  const router = useRouter()
  const { slug } = router.query

  const category = categories.find((category) => category.slug === slug)

  if (!category) {
    return null
  }

  return <CategoryList category={category} />
}
