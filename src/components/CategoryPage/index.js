import { categories } from '../../data/categories'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

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
      <h1>{name}</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link className="preview-link" href={`/categories/${category.slug}/${product.permalink}`}>
              <h4>{product.name}</h4>
              <Image src={product.image[0]} alt={product.name} width={300} height={300} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
