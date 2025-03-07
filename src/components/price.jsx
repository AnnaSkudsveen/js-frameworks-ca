import React from "react";

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
