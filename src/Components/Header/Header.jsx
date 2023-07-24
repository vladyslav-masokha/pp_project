import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';
import Navigation from './Navigation';

/**
 * Header component
 * @return {string}
 */
function Header() {
  const [date, setDate] = useState('');

  useEffect(() => {
    setTimeout(() => setDate((new Date().toLocaleTimeString())), 1000);
  });

  return (
    <header className='header'>
      <div className='wrapper'>
        <div className='headerBody'>
          {/* logo */}
          <Link to='/' className='headerLogo'>
            <img src='./Images/logo.png' alt='PP - персональний проєкт' />
          </Link>

          {/* local time */}
          <h3 className="time">{date}</h3>

          {/* navigation */}
          <Navigation />
        </div>
      </div>
    </header>
  );
}

export default Header;
