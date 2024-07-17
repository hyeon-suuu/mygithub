import React from 'react';
import ProductCard from './ProductCard';
import './App.css';
import cartIcon from './image1.png'; // 장바구니

function App() {
  return (
    <div className="App">
      <br></br>
      <br></br>
      <div className="product-container">
      <div className="header">
          <h1>슈킹 쇼핑몰</h1>
          <img src={cartIcon} alt="Cart" />
      </div>
      <p className="description"><h1>신발 상품 목록</h1></p>
      <p className="description">현재 6개의 상품이 있습니다.</p>
      <p></p>
        <div className="product-list">
          <ProductCard 
            image="/images/product1.png" 
            brand="브랜드A" 
            description="편안하고 착용감이 좋은 신발" 
            price="35,000" 
          />
          <ProductCard 
            image="/images/product2.png" 
            brand="브랜드A" 
            description="힙한 컬러가 매력적인 신발" 
            price="25,000" 
          />
          <ProductCard 
            image="/images/product3.png" 
            brand="브랜드B" 
            description="편안하고 착용감이 좋은 신발" 
            price="35,000" 
          />
          <ProductCard 
            image="/images/product4.png" 
            brand="브랜드B" 
            description="힙한 컬러가 매력적인 신발" 
            price="35,000" 
          />
          <ProductCard 
            image="/images/product5.png" 
            brand="브랜드C" 
            description="편안하고 착용감이 좋은 신발" 
            price="35,000" 
          />
          <ProductCard 
            image="/images/product6.png" 
            brand="브랜드C" 
            description="힙한 컬러가 매력적인 신발" 
            price="35,000" 
          />
        </div>
      </div>
    </div>
  );
}

export default App;