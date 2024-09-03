// FloatingButtonPage.jsx

import React, { useState, useEffect } from 'react';

const FloatingButtonPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const buttonRef = React.createRef();

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const offsetX = e.clientX - buttonRef.current.getBoundingClientRect().left;
    const offsetY = e.clientY - buttonRef.current.getBoundingClientRect().top;
    setButtonPosition({ x: offsetX, y: offsetY });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const x = e.clientX - buttonPosition.x;
      const y = e.clientY - buttonPosition.y;
      setButtonPosition({ x, y });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDragging]); // Add isDragging to dependencies

  return (
    <div className='floating-button-page' onMouseUp={handleMouseUp}>
      {/* Draggable floating button */}
      <div
        className='floating-button draggable'
        onClick={openPopup}
        ref={buttonRef}
        style={{ left: `${buttonPosition.x}px`, top: `${buttonPosition.y}px` }}
        onMouseDown={handleMouseDown}
      >
        Open Popup
      </div>

      {/* Popup window */}
      {isPopupOpen && (
        <div className='popup'>
          <div className='popup-content'>
            <span className='close-button' onClick={closePopup}>&times;</span>
            {/* Popup content goes here */}
            <p>This is a small popup window!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingButtonPage;
