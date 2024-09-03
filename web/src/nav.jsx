// Nav.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './nav.css';
import './nav1.css';

import Cupcakes from './Cupcakes';
import Occasions from './Occasions';
import Community from './Community';
import CupcakeDelivery from './CupcakeDelivery';
import Connect from './Connect';
import ViewCart from './ViewCart';
import CorporateEvents from './CorporateEvents';
import FAQs from './FAQs';

const Nav = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);

  };

  const handleLinkClick = (path) => {
    toggleDrawer(); // Close the drawer when a link is clicked
    navigate(path); // Navigate to the specified path
  };

  return (
    <div>
      <nav className="navbar">
        <div className={`burger-menu`} onClick={toggleDrawer}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
      <h1>TORONTO CUPCAKE</h1>
      <div className={`overlay ${isDrawerOpen ? 'show' : ''}`} onClick={toggleDrawer}></div>

      <div className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
        <div className="drawer-item" onClick={() => handleLinkClick('/')}>
          Home
        </div>
        <div className="drawer-item" onClick={() => handleLinkClick('/cupcakes')}>
          Cupcakes
        </div>
        <div className="drawer-item" onClick={() => handleLinkClick('/occasions')}>
          Occasions
        </div>
        <div className="drawer-item" onClick={() => handleLinkClick('/cupcake-delivery')}>
          Cupcake Delivery
        </div>
        <div className="drawer-item" onClick={() => handleLinkClick('/connect')}>
          Connect
        </div>
        <div className="drawer-item" onClick={() => handleLinkClick('/view-cart')}>
          View Cart
        </div>
        <div className="drawer-item" onClick={() => handleLinkClick('/faqs')}>
          FAQs
        </div>
      </div>
    </div>
  );
};

export default Nav;
