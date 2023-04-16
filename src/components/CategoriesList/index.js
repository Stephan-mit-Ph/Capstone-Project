import { categories } from '../../data/categories'
import Link from 'next/link'
import Image from 'next/image'

function CategoriesList() {
  return (
    <>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link className="preview-link" href={`/categories/${category.slug}`} passHref>
              <h4>{category.name}</h4>
              <Image src={category.image} alt={category.name} width={300} height={300} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default CategoriesList
