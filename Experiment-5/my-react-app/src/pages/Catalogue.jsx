import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import catalogue from '../assets/images/catalogue.jpg';

function Catalogue() {
  const [products] = useState([
    { name: 'Product-1', product_name: 'Describe of product 1' },
    { name: 'Product-2', product_name: 'Describe of product 2' },
    { name: 'Product-3', product_name: 'Describe of product 3' },
    { name: 'Product-4', product_name: 'Describe of product 4' },
    { name: 'Product-5', product_name: 'Describe of product 5' }
  ]);

  return (
    <section className="section catalogue-section">
      <div className="container">
        <div className="row g-4 align-items-stretch">
          {products.map((product, index) => (
            <div className="col-lg-3 col-md-6 col-12" key={index}>
              <div className="card product-card overflow-hidden h-100">
                <div className="card-img">
                  <img src={catalogue} alt="Book" className="img-fluid" />
                </div>
                <div className="card-body d-flex flex-column">
                  <h4>{product.name}</h4>
                  <p>{product.product_name}</p>
                  <Link to="/cart" className="btn btn-primary w-100 mt-auto">Add to cart</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Catalogue;