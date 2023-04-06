import Image from 'next/image';
import { categories } from '../../lib/data';
import Link from 'next/link';
 
export default function CategorieList() {
    return (
        <ul>
            {categories.map((category) => (
                <li key={category.id}>
                    <Image
                        src={category.image}
                        alt={`Category: ${category.name}`}
                        width={300}
                        height={300}
                    />
                    <Link href={`/categories/${category.slug}`}>
                        {category.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
