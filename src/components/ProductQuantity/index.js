import React, { useState } from 'react'

function ProductQuantity(props) {
  const [quantity, setQuantity] = useState(1)
  const [price, setPrice] = useState(props.price)

  const incrementQuantity = () => {
    setQuantity(quantity + 1)
    setPrice(price + props.price)
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
      setPrice(price - props.price)
    }
  }

  return (
    <div>
      <label htmlFor="quantity">Quantity:</label>
      <input type="number" id="quantity" name="quantity" min="1" value={quantity} onChange={() => console.log('Quantity changed')} />
      <button onClick={incrementQuantity}>+</button>
      <button onClick={decrementQuantity}>-</button>
      <p>Total Price: ${price.toFixed(2)}</p>
    </div>
  )
}

export default ProductQuantity
