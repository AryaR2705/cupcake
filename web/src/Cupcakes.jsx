// Cupcakes.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import tImage from './t2.png';
import './cup.css';

const Cupcakes = () => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    // Navigate to the ViewCart page
    navigate('/view-cart');
  };

  return (
    <div>
      <div className='price'>
        <h2>CUPCAKES</h2>
      </div> 
      <div className="cup">
        <p>
          In a panic or can't decide? Need a dozen awesome cupcakes but don't want to pick them out individually?
          Read no more, just hit the add to cart button, and we will pick out 12 delicious treats from our "always available" cupcakes.
        </p>
        <div className='price'>
          <img src={tImage} alt="/" width="800" height="400" />
        </div> 
        <div className='price'>
          Price $41.50/doz
        </div>
        <div className='butt'>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
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

export default Cupcakes;
