import { useRouter } from "next/router";
import { categories } from "../../lib/data";
import Image from "next/image";
import styled from "styled-components";


const StyledPrice = styled.p`
  font-weight: 600;
  text-align: right;`;

export default function CategoryList() {
  const router = useRouter();
  const { slug } = router.query;

  const categoryIndex = categories.findIndex(
    (category) => category.slug === slug
  );

  const category = categories[categoryIndex];

  if (!category) {
    return null;
  }

  const { name, products} = category;

  return (
    <>
      <h2>{name}</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h4>{product.name}</h4>
            
            <Image
          src={product.image}
          alt={`Product image of ${product.name}`}
          width={300}
          height={300}
        />
        <StyledPrice>{product.price} $</StyledPrice>
          </li>
        ))}
      </ul>
    </>
  );
}
