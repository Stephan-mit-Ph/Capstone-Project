import BackToLink from '../BackToLink'
import ProductPreview from '../ProductPreview'
import ProductQuantity from '../ProductQuantity'
import ReadMoreLess from '../ReadMoreLess'
import { StyledSubTitle, StyledButton, StyledCartIcon } from './ProductDetails.styled'
import { useState } from 'react'
import { useShopStore } from '../../store'


export default function ProductDetails({ category, product }) {
  const { addToCart, cart } = useShopStore()
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
      <BackToLink href={`/categories/${category.slug}`}>{category.name}</BackToLink>
      <StyledSubTitle>{product.name}</StyledSubTitle>
      <ProductPreview images={product.image} />
      <p>Price: {product.price} $</p>
      <ProductQuantity onDecrementQuantity={decrementQuantity} onIncrementQuantity={incrementQuantity} sum={sum} quantity={quantity} />
      <StyledButton type="button" onClick={() => addToCart(product.id, productData, quantity)}>
        Add to Cart <StyledCartIcon />
      </StyledButton>
      <ReadMoreLess text="Details" content={product.description} />
    </>
  )
}
