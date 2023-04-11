import styled from "styled-components";
import Image from "next/image";

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const ThumbnailContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`;

const ProductPrice = styled.p`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px 0px;
`;

export default function ProductDetailPage({ product }) {
  return (
    <>
      <h3>{product.name}</h3>
      <p><strong>Description:</strong></p>
      <p>{product.description}</p>
      <ImageContainer>
      <Image
        src={product.image[0]}
        alt={`Product image of ${product.name}`}
        width={300}
        height={300}
      />
      <ThumbnailContainer><Image
        src={product.image[1]}
        alt={`Product image of ${product.name}`}
        width={100}
        height={100}
      />
      <Image
        src={product.image[2]}
        alt={`Product image of ${product.name}`}
        width={100}
        height={100}
      /></ThumbnailContainer>
      </ImageContainer>
      <ProductPrice><strong>Price:</strong>{product.price} $</ProductPrice>
    </>
  );
}
