/**
 * Component that displays the price of a product.
 * If the product has a discounted price lower than the original price,
 * it shows the original price with a strikethrough and the discounted price in red.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {Object} props.product - The product object containing pricing information.
 * @param {number} props.product.price - The original price of the product.
 * @param {number} props.product.discountedPrice - The discounted price of the product.
 * @returns {JSX.Element} The rendered price display.
 */

function CheckPrice({ product }) {
  return (
    <>
      {product.discountedPrice < product.price ? (
        <div>
          <p style={{ textDecoration: "line-through" }}>{product.price} kr</p>
          <p style={{ color: "red" }}>{product.discountedPrice} kr</p>
        </div>
      ) : (
        <p>{product.price} kr</p>
      )}
    </>
  );
}

export default CheckPrice;
