// ViewCart.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './cart.css';

const ViewCart = () => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    // Navigate to the Cupcakes page
    navigate('/cupcakes');
  };

  return (
    <div>
      <div className='ing'>
        <h2>View Cart</h2>
      </div>
      <div className='ing'>
        <button className='continue-shopping-button' onClick={handleContinueShopping}>
          Continue Shopping
        </button>
      </div>

      <div className='cart'>
        <p>Your shopping cart is empty.</p>
      </div>
      <hr style={{ width: '90%', margin: '80px auto', borderTop: '2px solid black' }} />
      <div className='link'>
        <a href="/about-us" style={{ marginRight: '100px', color: 'black' }}>About Us</a>
        <a href="/employment" style={{ marginRight: '100px', color: 'black' }}>Employment</a>
        <a href="/privacy-policy" style={{ color: 'black' }}>Privacy Policy</a>
      </div>
    </div>
  );
};

export default ViewCart;
