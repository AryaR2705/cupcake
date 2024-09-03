// Connect.jsx

import React from 'react';
import hImage from './map.png';
import './connect.css'; // Import the CSS file

const Connect = () => (
  <div>
    <h2 className='head'>Connect</h2>
    <div className='connect'>
      <img src={hImage} alt="/" width="600" height="400" />
      <div className='connect-info'>
        <p>
          HOURS OF OPERATION
          <br />
          Monday - Saturday
          <br />
          7am - 10pm
          <br />
          Sunday
          <br />
          7am - 10pm (no pick ups, deliveries for 2doz or more)
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

export default Connect;
