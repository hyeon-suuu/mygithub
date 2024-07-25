import React, { useState } from 'react';
import './ProductCard.css';

function ProductCard({ product, addToCart, removeFromCart }) {
  const [added, setAdded] = useState(false);

  const handleButtonClick = () => {
    if (added) {
      removeFromCart(product);
    } else {
      addToCart(product);
    }
    setAdded(!added);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.description} className="product-image" />
      <div className="product-info">
        <h3>{product.brand}</h3>
        <p>{product.description}</p>
        <p className="product-price">{product.price}원</p>
        <button
          onClick={handleButtonClick}
          className={`product-button ${added ? 'added' : ''}`}
        >
          {added ? '담김!' : '담기'}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
