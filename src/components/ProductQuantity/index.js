import { StyledInput } from './ProductQuantity.styled'
import { StyledPlusSquare, StyledMinusSquare, StyledButton, StyledWrapper } from './ProductQuantity.styled'

function ProductQuantity({ sum, onIncrementQuantity, onDecrementQuantity, quantity }) {
  return (
    <>
    <StyledWrapper>
      <label htmlFor="quantity">Quantity:</label>
      <StyledButton type="button" onClick={onDecrementQuantity} aria-label="increase the amount of products">
        <StyledMinusSquare />
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
      />
      <StyledButton type="button" onClick={onIncrementQuantity} aria-label="decreasethe amount of products">
        <StyledPlusSquare />
      </StyledButton>

      
    </StyledWrapper>
    <p>Total Price: ${sum.toFixed(2)}</p>
    </>
  )
}

export default ProductQuantity
