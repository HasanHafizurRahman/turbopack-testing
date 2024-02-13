// Importing necessary modules
"use client"
// Importing necessary modules
import React, { useState, useEffect } from 'react';

// Define the home page component
export default function Page() {
  // State to store the product data
  const [products, setProducts] = useState([]);
  // State to store items in the cart
  const [cartItems, setCartItems] = useState([]);

  // Fetch product data from the FakeStore API
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  // Function to handle adding items to the cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="container">
      <header>
        <h1>Welcome to my Next.js Demo</h1>
      </header>
      <nav>
        {/* Display cart icon with item count */}
        <div className="cart-icon">
          🛒 {cartItems.length}
        </div>
      </nav>
      <main>
        <h2>Hello, Next.js!</h2>
        <p>This is a simple demo page using Next.js.</p>
        <div className="product-list">
          {products.map(product => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <p>{product.description}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </main>
      <footer>
        <p>© 2024 Your Company</p>
      </footer>

      {/* Add styling for the container */}
      <style jsx>{`
        .container {
          width: 80%;
          margin: 0 auto;
          padding: 20px;
          text-align: center;
        }
        header {
          margin-bottom: 20px;
        }
        nav {
          margin-bottom: 20px;
        }
        h1 {
          color: #333;
        }
        h2 {
          color: #666;
        }
        footer {
          margin-top: 20px;
          color: #999;
        }
        .product-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }
        .product {
          border: 1px solid #ddd;
          padding: 10px;
        }
        .product img {
          width: 100%;
          max-height: 200px;
          object-fit: cover;
        }
        button {
          background-color: #4caf50;
          color: white;
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .cart-icon {
          font-size: 24px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
