import { useShopStore } from '../../store'
import { StyledSubTitle } from '../ProductDetails/ProductDetails.styled'
import { StyledList } from '../CategoriesList/CategoriesList.styled'
import Image from 'next/image'
import formatCurrency from '../../helpers/formatNumberToCurrency'

export default function ShoppingCart() {
    const cart = useShopStore((state) => state.cart)
  /*  const currentProduct = cart[0].id */
  return (
    <>
      <StyledSubTitle>My Cart</StyledSubTitle>
      <StyledList role='list'>
        {cart &&
          cart.map((item) => (
            <li key={item.id}>
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{item.quantity}</p>
              <p>{formatCurrency(item.price)}</p>
              <Image src={item.image[0].path} alt={item.name} width={100} height={100} />
            </li>
          ))}
      </StyledList>
    </>
  )
}
