// import React from 'react';
import './Header.css';

const Header = () => {
  // Function to handle the View Menu button click
  const handleViewMenuClick = () => {
    // Scroll to the explore-menu section smoothly
    document.getElementById('explore-menu').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>Experience the convenience of having your favorite meals delivered straight to your doorstep, no matter where you are!</p>
        {/* View Menu Button with click handler */}
        <button onClick={handleViewMenuClick}>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
