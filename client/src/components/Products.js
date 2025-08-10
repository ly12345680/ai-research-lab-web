import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../api';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts()
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section id="products" className="section products">
        <div className="container">
          <h2>Our Products</h2>
          <div className="loading">Loading products...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="section products">
      <div className="container">
        <h2>Our Products</h2>
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <span className="product-category">{product.category}</span>
              <p>{product.description}</p>
              
              <div className="product-features">
                <h4>Features:</h4>
                <ul className="features-list">
                  {product.features.split(', ').map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              {product.video_url && (
                <div className="product-video">
                  <video controls poster={product.image_url}>
                    <source src={product.video_url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
