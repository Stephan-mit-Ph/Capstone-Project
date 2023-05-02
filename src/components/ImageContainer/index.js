import { useState } from 'react'
import { PreviewContainer, Thumbnail, ThumbnailWrapper } from './ImageContainer.styled'
import PreviewImage from '../PreviewImage'

const ImageContainer = ({ images, showThumbnails = false, alt,  }) => {
  const [selectedImage, setSelectedImage] = useState(images[0])
  const handleThumbnailClick = (image) => {
    setSelectedImage(image)
  }

  return (
    <PreviewContainer>
      <PreviewImage src={selectedImage.path} width={300} height={300} alt={alt} />
      {showThumbnails && (
        <ThumbnailWrapper >
          {images.map((image) => (
            <Thumbnail key={image.id} onClick={() => handleThumbnailClick(image)}>
              <PreviewImage src={image.path} width={60} height={60} alt="product-preview" />
            </Thumbnail>
          ))}
        </ThumbnailWrapper>
      )}
    </PreviewContainer>
  )
}

export default  ImageContainer
