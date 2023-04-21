function ProductQuantity({ sum, onIncrementQuantity, onDecrementQuantity, quantity }) {
  return (
    <div>
      <label htmlFor="quantity">Quantity:</label>
      <button type="button" onClick={onDecrementQuantity} aria-label="increase the amount of products">
        -
      </button>
      <input
        style={{ width: '50px', textAlign: 'center' }}
        maxLength={5}
        type="number"
        id="quantity"
        name="quantity"
        min="1"
        value={quantity}
        readOnly
      />
      <button type="button" onClick={onIncrementQuantity} aria-label="decreasethe amount of products">
        +
      </button>

      <p>Total Price: ${sum.toFixed(2)}</p>
    </div>
  )
}

export default ProductQuantity
