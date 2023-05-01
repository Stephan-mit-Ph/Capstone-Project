import { StyledInput } from './ProductQuantity.styled'
import { StyledPlusSquare, StyledMinusSquare, StyledButton, StyledWrapper, StyledPrice } from './ProductQuantity.styled'

function ProductQuantity({ sum, onIncrementQuantity, onDecrementQuantity, quantity }) {
  return (
    <>
      <StyledWrapper>
        <StyledButton type="button" onClick={onDecrementQuantity} aria-label="increase the amount of products">
          <StyledMinusSquare aria-hidden="true" />
        </StyledButton>

        <StyledInput
          style={{ width: '50px', textAlign: 'center' }}
          maxLength={5}
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          value={quantity}
          readOnly
          htmlFor="quantity"
          aria-label="quantity"
        />

        <StyledButton type="button" onClick={onIncrementQuantity} aria-label="decreasethe amount of products">
          <StyledPlusSquare aria-hidden="true" />
        </StyledButton>
      </StyledWrapper>
      <StyledPrice>Total Price: $ {sum.toFixed(2)}</StyledPrice>
    </>
  )
}

export default ProductQuantity
