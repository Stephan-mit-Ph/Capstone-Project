import Image from 'next/image'
import formatCurrency from '../../helpers/formatNumberToCurrency'
import { useShopStore } from '../../store'
import { StyledSubTitle } from '../ProductDetails/ProductDetails.styled'
import { StyeledProductInfo, StyledCartItem, StyledCartList, StyledProductDetails, StyledProductName } from './ShoppingCart.styled'

function getTotalSum(cart) {
    return cart.reduce((total, item) => total + item.sum, 0);
  }
  

export default function ShoppingCart() {
  const cart = useShopStore((state) => state.cart)
  const totalSum = getTotalSum(cart);
  /*  const currentProduct = cart[0].id */
  return (
    <>
      <StyledSubTitle>My Cart</StyledSubTitle>
      <StyledCartList role="list">
        {cart &&
          cart.map((item) => (
            <StyledCartItem key={item.id}>
              <Image src={item.image[0].path} alt={item.name} width={100} height={100} />
              <StyledProductDetails>
              <StyledProductName>{item.name}</StyledProductName>
              <StyeledProductInfo>Qty: {item.quantity}</StyeledProductInfo>
              <StyeledProductInfo>Price: {formatCurrency(item.price)}</StyeledProductInfo>
              <StyeledProductInfo>{formatCurrency(item.sum)}</StyeledProductInfo>
              </StyledProductDetails>
           
            </StyledCartItem>
          
          ))}
             <StyeledProductInfo>Total: {formatCurrency(totalSum)}</StyeledProductInfo>
      </StyledCartList>
    </>
  )
}
