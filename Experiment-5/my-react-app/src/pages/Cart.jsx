import React from 'react';
import '../App.css';

function Cart() {
  return (
    <section className="section cart-section">
      <div className="container">
        <h2 className="text-center cart-heading mb-4">Shopping Cart</h2>

        <div className="cart-layout">
          <div className="cart-items-column">
            <div className="card checkout-card">
              <div className="card-header">
                <h5>Your Items</h5>
              </div>
              <div className="card-body">
                <div className="row my-3">
                  <div className="col-lg-6 col-12 item-block">
                    <h6>Product Name</h6>
                    <p>Price: ₹10.00</p>
                    <input type="number" id="quantity" className="form-control" placeholder="Enter quantity" min="1" required />
                  </div>
                  <div className="col-lg-6 col-12 text-end">
                    <button className="btn btn-primary flat-button" id="addToCart">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cart-checkout-column">
            <div className="card checkout-card right-checkout-card">
              <div className="card-header">
                <h5>Checkout</h5>
              </div>
              <div className="card-body text-center">
                <p id="totalItemsDisplay" className="fw-bold mb-3 total-items">Total Items in Cart: 0</p>
                <button className="btn btn-danger gradient-button" id="checkout">Checkout Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;