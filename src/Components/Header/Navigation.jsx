import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';

/**
 * Navigation component
 * @return {string}
 */
function Navigation() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const openNavigation = () => setOpen(!open);

  return (
    <div>
      <nav className='nav' role='navigation'>
        <ul className={open ? 'visible' : ''}>
          <li>
            <Link to='/' className={`navLink ${location.pathname === '/' ? 'active' : ''}`}>Головна</Link>
          </li>
          <li>
            <Link
              to='/dorames'
              className={`navLink ${
                            location.pathname === '/dorames' ? 'active' : ''
              }`}
            >
                            Дорами
            </Link>
          </li>
          <li>
            <Link
              to='/anime'
              className={`navLink ${
                            location.pathname === '/anime' ? 'active' : ''
              }`}
            >
                            Аніме
            </Link>
          </li>
          <li>
            <Link
              to='/learning'
              className={`navLink ${
                            location.pathname === '/learning' ? 'active' : ''
              }`}
            >
                            Навчання
            </Link>
          </li>
          <li>
            <Link
              to='/admin-cv'
              className={`navLink ${
                            location.pathname === '/admin-cv' ? 'active' : ''
              }`}
            >
                            Про Нас
            </Link>
          </li>
        </ul>
      </nav>

      <button
        type='button'
        className={open ? 'burgerNav open' : 'burgerNav'}
        onClick={openNavigation}
      >
        <span className='burgerLine'></span>
      </button>
    </div>
  );
}

export default Navigation;
