import { useState } from 'react'
import { toast } from 'react-toastify'
import formatNumberToCurrency from '../../helpers/formatNumberToCurrency'
import { useShopStore } from '../../store'
import BackToLink from '../BackToLink'
import { StyledCard } from '../CategoriesList/CategoriesList.styled'
import ProductPreview from '../ProductPreview'
import ProductQuantity from '../ProductQuantity'
import ReadMoreLess from '../ReadMoreLess'
import { StyledButton, StyledCartIcon, StyledPrice, StyledProductDetails, StyledQuantity, StyledSubTitle } from './ProductDetails.styled'

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
      <BackToLink href={`/categories/${category.slug}`} aria-label="back to category">
        {category.name}
      </BackToLink>
      <StyledSubTitle>{product.name}</StyledSubTitle>
      <StyledCard>
        <ProductPreview images={product.image} />
        <StyledProductDetails>
          <StyledPrice>Price: {formatNumberToCurrency(product.price)}</StyledPrice>
          <StyledQuantity>Quantity</StyledQuantity>
          <ProductQuantity onDecrementQuantity={decrementQuantity} onIncrementQuantity={incrementQuantity} sum={sum} quantity={quantity} />
          <StyledButton
            type="button"
            onClick={() => handleAddToCart(product.id, productData, quantity) & addToCartNotification()}
            aria-label="add to cart button"
          >
            Add to Cart <StyledCartIcon aria-hidden="true" />
          </StyledButton>
          <ReadMoreLess text="Details" content={product.description} />
        </StyledProductDetails>
      </StyledCard>
    </>
  )
}
