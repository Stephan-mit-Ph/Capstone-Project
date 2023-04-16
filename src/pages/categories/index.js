import BackToLink from '../../components/BackToLink'
import Image from 'next/image'
import { categories } from '../../data/categories'
import Link from 'next/link'

export default function CategoriesPage() {
  return (
    <>
      <BackToLink />
      <ul>
        {categories.map((category) => (
          <Link key={category.id} href={`/categories/${category.slug}`}>
            <li>
              <h4>{category.name}</h4>
              <Image src={category.image} alt={category.name} width={300} height={300} />
            </li>
          </Link>
          

        ))}
      </ul>
    </>
  )
}

function Preview({ image, name, slug }) {
  return (
    <section>
      <h4>{name}</h4>
      <Image src={image.src} alt={name.alt} width={300} height={300} />
      <Link href={slug.href} passHref>
        {name}
      </Link>
    </section>
  )
}
