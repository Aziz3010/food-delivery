import React, { useRef } from 'react';
import { Container } from 'reactstrap';
import logo from '../../assets/images/res-logo.png';
import { NavLink, Link } from 'react-router-dom';
import '../../styles/header.css';

const nav_links = [
  {
    display: 'Home',
    path: '/home'
  },
  {
    display: 'Foods',
    path: '/foods'
  },
  {
    display: 'Cart',
    path: '/cart'
  },
  {
    display: 'Contact',
    path: '/contact'
  }
];

const Header = () => {
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle('show_menu');

  return <header className="header">
    <Container>
      <div className="nav_wrapper d-flex align-items-center justify-content-between">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="res-logo" />
          <h5>Tasty Treat</h5>
        </div>
        {/* Links */}
        <div className="navigation" ref={menuRef} onClick={toggleMenu}>
          <div className="menu d-flex align-items-center gap-5">
            { 
              nav_links.map((link, index) => (
                <NavLink
                  to={link.path}
                  key={index}
                  className={navClass => navClass.isActive ? 'active' : null}
                >
                  {link.display}
                </NavLink>
              ))
            }
          </div>
        </div>
        {/* right icons */}
        <div className="nav_right d-flex align-items-center gap-4">
            
            <span className="cart_icon">
              <i className="ri-shopping-basket-line"></i>
              <span className="cart_badge">0</span>
            </span>

            <span className="user_icon">
              <Link to='/login'>
                <i className="ri-user-line"></i>
              </Link>
            </span>

            <span className="mobile_menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>


        </div>
      </div>
    </Container>
  </header>
}

export default Header;