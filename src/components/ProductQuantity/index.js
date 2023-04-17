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
      <input type="number" id="quantity" name="quantity" min="1" value={quantity} />
      <button type="button" onClick={incrementQuantity}>
        +
      </button>
      <button type="button" onClick={decrementQuantity}>
        -
      </button>
      <p>Total Price: ${sum.toFixed(2)}</p>
    </div>
  )
}

export default ProductQuantity
