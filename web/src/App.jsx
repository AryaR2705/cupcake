// App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import tImage from './t.png';
import Nav from './Nav';// Import WelcomeMessage component
import Cupcakes from './Cupcakes';
import Occasions from './Occasions';

import CupcakeDelivery from './CupcakeDelivery';

import Connect from './Connect';
import ViewCart from './ViewCart';

import FAQs from './FAQs';

const WelcomeMessage = () => (
  <div className='body'>
    <h2>Welcome!</h2>
    <p className='custom-font'>
      Thank you for stopping by Toronto Cupcake. Canada's and the GTA's favourite stop for that special treat.
      Order cupcakes online 24/7 for your special event. Delivery available most days between 8 and 6 pm TO time.
    </p>
    <p className='custom-font'>
      Celebrating our 13th year of providing Canada's most delicious cupcakes for business meetings, birthdays, weddings, or for no other reason than because.
    </p>
    <p className='custom-font'>
      Our cupcakes are baked daily using the finest ingredients. Cupcake delivery is available throughout Toronto, the GTA, and beyond.
      Cupcakes are delivered in our signature pink box.
    </p>
    <div className='t'>
      <img src={tImage} alt="T Image" width="800" height="400" />
    </div>

    {/* Add a horizontal line (footer) */}
    <hr style={{ width: '90%', margin: '80px auto', borderTop: '2px solid black' }} />
    <div className='link'>
      <a href="/about-us" style={{ marginRight: '100px', color: 'black' }}>About Us</a>
      <a href="/employment" style={{ marginRight: '100px', color: 'black' }}>Employment</a>
      <a href="/privacy-policy" style={{ color: 'black' }}>Privacy Policy</a>
    </div>
  </div>
);
const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<WelcomeMessage />} />
        <Route path="/cupcakes" element={<Cupcakes />} />
        <Route path="/occasions" element={<Occasions />} />
        <Route path="/cupcake-delivery" element={<CupcakeDelivery />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/view-cart" element={<ViewCart />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
    </Router>
  );
};

export default App;




