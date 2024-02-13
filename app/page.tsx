// Importing necessary modules
"use client"
import React, { useEffect, useState } from 'react';

// Define the home page component
export default function Page() {
  let [contect, setContent] = useState(0)
  useEffect(()=>{
    for (let i =0; i < 1000; i++){
      setContent(i);
    }
  },[])
  const [products, setProducts] = useState([]);

  // Fetch product data from the FakeStore API
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);
  return (
    <div className="container">
      <header>
        <h1>Welcome to my Next.js Demo</h1>
      </header>
      <main>
        <h2>Hello, Next.js!</h2>
        <p>This is a simple demo page using Next.js.</p>
        <p>Next.js is a React framework that enables functionality such as server-side rendering and generating static websites.</p>
        <p>It provides a great developer experience with features like automatic code splitting, hot module replacement, and route pre-fetching.</p>
        <p>Next.js is widely used for building modern web applications and has a growing community.</p>
        <p>This demo page showcases the basic setup of a Next.js application.</p>
        <p>Feel free to explore the code and customize it according to your needs.</p>
        <p>{contect}</p>
        {/* Add more content or components here */}
        <div className="product-list">
          {products.map(product => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <p>{product.description}</p>
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
      `}</style>
    </div>
  );
}
