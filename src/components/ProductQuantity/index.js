import React, { useState } from 'react'

function ProductQuantity({ price }) {
  const [quantity, setQuantity] = useState(1)
  const sum = price * quantity

  const incrementQuantity = () => {
    setQuantity(quantity + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <div>
      <label htmlFor="quantity">Quantity:</label>
      <button type="button" onClick={decrementQuantity}>
        -
      </button>
      <input style={{ width: '50px', textAlign: 'center' }} maxLength={5} type="number" id="quantity" name="quantity" min="1" value={quantity} />
      <button type="button" onClick={incrementQuantity}>
        +
      </button>

      <p>Total Price: ${sum.toFixed(2)}</p>
    </div>
  )
}

export default ProductQuantity
