import Image from 'next/image'
import { useState } from 'react'
import { PreviewContainer, Thumbnail, PreviewImage, ThumbnailWrapper } from './ProductPreview.styled'



const ProductPreview = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0])
  console.log(selectedImage)
  const handleThumbnailClick = (image) => {
    setSelectedImage(image)
  }

  return (
    <PreviewContainer>
      <PreviewImage src={selectedImage.path} width={300} height={300} alt='product-preview' />
      <ThumbnailWrapper>
      {images.map((image) => (
        <Thumbnail key={image.id} onClick={() => handleThumbnailClick(image)}>
          <Image src={image.path} width={80} height={80} alt='product-preview' />
        </Thumbnail>
        
      ))}
      </ThumbnailWrapper>
    </PreviewContainer>
  )
}

export default ProductPreview
