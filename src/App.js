import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './App.css';
import cartIcon from './image1.png'; // 장바구니 이미지

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter(item => item.id !== product.id));
  };

  const products = [
    { id: 1, image: '/images/product1.png', brand: '브랜드A', description: '편안하고 착용감이 좋은 신발', price: '35,000' },
    { id: 2, image: '/images/product2.png', brand: '브랜드A', description: '힙한 컬러가 매력적인 신발', price: '25,000' },
    { id: 3, image: '/images/product3.png', brand: '브랜드B', description: '편안하고 착용감이 좋은 신발', price: '35,000' },
    { id: 4, image: '/images/product4.png', brand: '브랜드B', description: '힙한 컬러가 매력적인 신발', price: '35,000' },
    { id: 5, image: '/images/product5.png', brand: '브랜드C', description: '편안하고 착용감이 좋은 신발', price: '35,000' },
    { id: 6, image: '/images/product6.png', brand: '브랜드C', description: '힙한 컬러가 매력적인 신발', price: '35,000' },
  ];

  return (
    <div className="App">
      <br></br>
      <br></br>
      <div className="product-container">
        <div className="header">
          <h1>슈킹 쇼핑몰</h1>
          <div className="cart">
            <img src={cartIcon} alt="Cart" className="cart-icon" />
            <span className="cart-count">{cart.length}</span>
          </div>
        </div>
        <br></br>
        <p className="description"><h1>신발 상품 목록</h1></p>
        <p className="description">현재 {products.length}개의 상품이 있습니다.</p><br></br>
        <div className="product-list">
          {products.map(product => (
            <ProductCard 
              key={product.id}
              product={product}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
