import { useState } from 'react'
import { toast } from 'react-toastify'
import formatNumberToCurrency from '../../helpers/formatNumberToCurrency'
import { useShopStore } from '../../store'
import { StyledCard } from '../CategoriesList/CategoriesList.styled'
import ProductPreview from '../ProductPreview'
import ProductQuantity from '../ProductQuantity'
import ReadMoreLess from '../ReadMoreLess'
import { StyledButton, StyledCartIcon, StyledPrice, StyledProductDetails, StyledQuantity} from './ProductDetails.styled'

export default function ProductDetails({ category, product }) {
  const { addToCart } = useShopStore()
  const [quantity, setQuantity] = useState(1)
  const sum = quantity * product.price

  const handleAddToCart = () => {
    addToCart(product.id, productData, quantity)
  }

  const addToCartNotification = () =>
    toast.success(`${quantity}x ${product.name} added to cart!`, {
      position: 'bottom-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      progress: undefined,
      theme: 'dark',
    })

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
        <ProductPreview images={product.image} />
        <StyledProductDetails aria-label="product details" role="list">
          <StyledQuantity>Quantity:</StyledQuantity>
          <ProductQuantity sum={sum} onIncrementQuantity={incrementQuantity} onDecrementQuantity={decrementQuantity} quantity={quantity} />
          <StyledPrice>{formatNumberToCurrency(sum)}</StyledPrice>
          <StyledButton type="button" onClick={() => handleAddToCart() & addToCartNotification()}>
            <StyledCartIcon aria-hidden="true" />
            Add to cart
          </StyledButton>
          <ReadMoreLess text="Details" content={product.description} />
        </StyledProductDetails>
      </StyledCard>
    </>
  )
}
