import BackToLink from '../BackToLink'
import ProductPreview from '../ProductPreview'
import ProductQuantity from '../ProductQuantity'
import ReadMoreLess from '../ReadMoreLess'
import { StyledSubTitle } from './ProductDetails.styled'
import { useState } from 'react'
import { useShopStore } from '../../store'

export default function ProductDetails({ category, product }) {
  const [quantity, setQuantity] = useState(1)
  const cart = useShopStore((state) => state.cart)
  const addToCart = useShopStore((state) => state.addToCart)
  const sum = product.price * quantity

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

  console.log(cart)
  return (
    <>
      <BackToLink href={`/categories/${category.slug}`}>{category.name}</BackToLink>
      <StyledSubTitle>{product.name}</StyledSubTitle>
      <ProductPreview images={product.image} />
      <p>Price: {product.price} $</p>
      <ProductQuantity onDecrementQuantity={decrementQuantity} onIncrementQuantity={incrementQuantity} sum={sum} quantity={quantity} />
      <button type="button" onClick={() => addToCart(product.id, productData, quantity)}>
        Add to Cart
      </button>
      <ReadMoreLess text="Details" content={product.description} />
    </>
  )
}
