import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Logo from '../assets/images/white_logo.png';
import CartIcon from '../assets/images/white_cart.png';

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Logo" className="logo-image" />
      </div>

      <nav className="navigation">
        <Link to="/" className="active">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/registration">Registration</Link>
        <Link to="/catalogue">Catalogue</Link>
        <Link to="/cart">
          <img src={CartIcon} alt="Cart" className="cart-icon" />
        </Link>
      </nav>
    </header>
  );
}

export default Header;