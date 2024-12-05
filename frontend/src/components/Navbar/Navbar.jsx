import { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from './../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import PropTypes from 'prop-types';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery.trim()}`);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className='navbar'>
      <Link to='/'> <img src={assets.logo} alt="" className='logo' /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu('home')} className={menu === 'home' ? 'active' : ''}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu('menu')} className={menu === 'menu' ? 'active' : ''}>Menu</a>
        <a href='#book-table-section' onClick={() => setMenu('book-table-section')} className={menu === 'book-table' ? 'active' : ''}>Book a Table</a> {/* Updated this line */}
        <a href='#footer' onClick={() => setMenu('contact-us')} className={menu === 'contact-us' ? 'active' : ''}>Contact Us</a>
      </ul>

      <div className="navbar-right">
        <div className="navbar-search">
          <input 
            type="text" 
            placeholder="Search for items..." 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} 
          />
          <button onClick={handleSearch}>
            <img src={assets.search_icon} alt="search" />
          </button>
        </div>

        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon3} alt="" /></Link>
          <div className={getTotalCartAmount() === 0 ? '' : 'dot'}></div>
        </div>

        {!token ? (
          <button onClick={() => setShowLogin(true)}>Log In</button>
        ) : (
          <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

// Define PropTypes
Navbar.propTypes = {
  setShowLogin: PropTypes.func.isRequired,
};

export default Navbar;