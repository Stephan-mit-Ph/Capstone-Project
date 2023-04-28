import { useState } from 'react'
import { PreviewContainer, Thumbnail, ThumbnailWrapper } from './ProductPreview.styled'
import { StyledImage } from '../CategoriesList/CategoriesList.styled'

const ProductPreview = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0])
  const handleThumbnailClick = (image) => {
    setSelectedImage(image)
  }
  
  return (
    <PreviewContainer>
      <StyledImage src={selectedImage.path} width={300} height={300} alt="product-preview" />
      <ThumbnailWrapper>
        {images.map((image) => (
          <Thumbnail key={image.id} onClick={() => handleThumbnailClick(image)}>
            <StyledImage src={image.path} width={60} height={60} alt="product-preview" />
          </Thumbnail>
        ))}
      </ThumbnailWrapper>
    </PreviewContainer>
  )
}

export default ProductPreview
