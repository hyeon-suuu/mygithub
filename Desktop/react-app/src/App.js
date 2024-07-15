import React from 'react';
import ProductCard from './ProductCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>온라인 쇼핑몰</h1>
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
  );
}

export default App;
