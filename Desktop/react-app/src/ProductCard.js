import React from 'react';
import './ProductCard.css';

const ProductCard = ({ image, brand, description, price }) => {
  return (
    <div className="product-card">
      <img src={image} alt={`${brand} product`} className="product-image" />
      <div className="product-info">
        <h3>{brand}</h3>
        <p>{description}</p>
        <span className="product-price">{price}원</span>
        <button className="product-button">담기</button>
      </div>
    </div>
  );
};

export default ProductCard;

