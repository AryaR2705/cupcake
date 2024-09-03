// Occasions.jsx

import React from 'react';
import w1Image from './wedding1.png';
import w2Image from './wedding2.png';
import w3Image from './happy_birthday1.png';
import './occasions.css';

const Occasions = () => (
  <div>
    <h2>Occasions</h2>
    <div className='image'>
      <div className='image-container'>
        <img src={w1Image} alt="Wedding 1" width="400" height="300" />
      </div>
      <div className='image-container'>
        <img src={w2Image} alt="Wedding 2" width="400" height="300" />
      </div>
      <div className='image-container'>
        <img src={w3Image} alt="Happy Birthday 1" width="400" height="300" />
      </div>
    </div>
    <p className='para'>
      Welcome to our exclusive Wedding and Engagement services, where possibilities are limitless. With over 1500 different combinations in our standard offerings, your vision is our command. If you desire something truly unique, we're here to make it happen. Choose from our array of cupcake stands, available in various sizes and shapes, or let us design and create a one-of-a-kind stand just for you.

      For your Birthdays and Anniversaries, we bring creativity to life. Themed celebrations are all the rage, and we've mastered them all – from whimsical Cookie Monster themes to the glamour of The Bachelorette. Every celebration is an opportunity to turn your dreams into a delectable reality.

      At our core, we're not just crafting desserts; we're curating experiences. Let us be part of your special moments, ensuring they're not only visually stunning but also a taste sensation that lingers in your memory. Whether it's the elegance of weddings, the excitement of engagements, or the fun-filled atmosphere of birthdays and anniversaries, we're here to turn your celebrations into extraordinary, mouthwatering events.
    </p>
    <hr style={{ width: '90%', margin: '80px auto', borderTop: '2px solid black' }} />
    <div className='link'>
      <a href="/about-us" style={{ marginRight: '100px', color: 'black' }}>About Us</a>
      <a href="/employment" style={{ marginRight: '100px', color: 'black' }}>Employment</a>
      <a href="/privacy-policy" style={{ color: 'black' }}>Privacy Policy</a>
    </div>
  </div>
);

export default Occasions;
