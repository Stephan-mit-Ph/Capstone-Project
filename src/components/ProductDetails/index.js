import { useState } from 'react'
import { useShopStore } from '../../store'
import ImageContainer from '../ImageContainer'
import ProductQuantity from '../ProductQuantity'
import ReadMoreLess from '../ReadMoreLess'
import { StyledButton, StyledCartIcon, StyledProductDetails, StyledQuantity, StyledPrice } from './ProductDetails.styled'
import formatNumberToCurrency from '../../helpers/formatNumberToCurrency'

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
      <StyledProductDetails>
        <ImageContainer images={product.image} showThumbnails={true} alt={`${product.name} images`} />
        <StyledPrice>{formatNumberToCurrency(product.price)}</StyledPrice>
        <StyledQuantity>Quantity:</StyledQuantity>
        <ProductQuantity sum={sum} onIncrementQuantity={incrementQuantity} onDecrementQuantity={decrementQuantity} quantity={quantity} />
        <StyledButton type="button" onClick={() => handleAddToCart()}>
          <StyledCartIcon aria-hidden="true" />
          Add to cart
        </StyledButton>
        <ReadMoreLess text="Details" content={product.description} />
      </StyledProductDetails>
    </>
  )
}
