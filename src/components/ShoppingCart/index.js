import Image from 'next/image'
import formatCurrency from '../../helpers/formatNumberToCurrency'
import { useShopStore } from '../../store'
import { StyledSubTitle } from '../ProductDetails/ProductDetails.styled'
import { StyledProductInfo, StyledCartItem, StyledCartList, StyledProductDetails, StyledProductName } from './ShoppingCart.styled'

function getTotalSum(cart) {
    return cart.reduce((total, item) => total + item.sum, 0);
  }
  

export default function ShoppingCart() {
  const cart = useShopStore((state) => state.cart)
  const totalSum = getTotalSum(cart);
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
              <StyledProductInfo>Qty: {item.quantity}</StyledProductInfo>
              <StyledProductInfo>Price: {formatCurrency(item.price)}</StyledProductInfo>
              <StyledProductInfo>{formatCurrency(item.sum)}</StyledProductInfo>
              </StyledProductDetails>
           
            </StyledCartItem>
          
          ))}
             <StyeledProductInfo>Total: {formatCurrency(totalSum)}</StyeledProductInfo>
      </StyledCartList>
    </>
  )
}
