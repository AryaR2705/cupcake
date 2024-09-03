// Cupcakes.jsx

import React from 'react';
import hImage from './deliveryhalloween.png';
import './delivery.css';

const Cupcakes = () => (
  <div>
    <div className='title'>
      <h2>CUPCAKE DELIVERY</h2>
    </div> 
    <div className="cake">
      <div className='delivery'>
        <img src={hImage} alt="/" width="600" height="400" />
        <p className='bikes'>
          Click here to start ordering for delivery.

          Cupcake delivery Toronto and GTA. Our cupcake delivery service is available 7 days a week and covers approximately 80km surrounding Toronto. Sending cupcakes has never been easier.

          Most deliveries can be made on the same day you order. If you need a delivery to a location that is outside of downtown Toronto, we require notice at least the night before. Morning deliveries are typically for M** postal codes.

          Order three dozen or more, and your delivery to downtown Toronto is free or greatly reduced to other locations.

          We deliver to: Oakville; Auroa; Markham; Scarborough; Vaughn,; Ajax; and Pickering, to name a few.

          Delivery fee is based on the delivery location postal code and in special cases, time of day.
        </p>
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


export default Cupcakes;
