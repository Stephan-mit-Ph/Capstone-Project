import { useState } from 'react'
import formatNumberToCurrency from '../../helpers/formatNumberToCurrency'
import { useShopStore } from '../../store'
import { StyledCard } from '../CategoriesList/CategoriesList.styled'

import ProductQuantity from '../ProductQuantity'
import ReadMoreLess from '../ReadMoreLess'
import { StyledButton, StyledCartIcon, StyledPrice, StyledProductDetails, StyledQuantity } from './ProductDetails.styled'
import ImageContainer from '../ImageContainer'

export default function ProductDetails({ category, product }) {
  const { addToCart } = useShopStore()
  const [quantity, setQuantity] = useState(1)
  const sum = quantity * product.price

  const handleAddToCart = () => {
    addToCart(product.id, productData, quantity)
  }

  const productData = {
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.image,
    quantity: quantity,
    sum: sum,
  }

  const incrementQuantity = () => {
    setQuantity(quantity + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <>
      <StyledCard>
        <ImageContainer images={product.image} showThumbnails={true} />
        <StyledProductDetails aria-label="product details" role="list">
          <StyledQuantity>Quantity:</StyledQuantity>
          <ProductQuantity sum={sum} onIncrementQuantity={incrementQuantity} onDecrementQuantity={decrementQuantity} quantity={quantity} />
          <StyledPrice>{formatNumberToCurrency(sum)}</StyledPrice>
          <StyledButton type="button" onClick={() => handleAddToCart()}>
            <StyledCartIcon aria-hidden="true" />
            Add to cart
          </StyledButton>
          <ReadMoreLess text="Details" content={product.description} />
        </StyledProductDetails>
      </StyledCard>
    </>
  )
}
