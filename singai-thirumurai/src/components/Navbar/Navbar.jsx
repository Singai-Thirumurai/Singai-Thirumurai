import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png'
import { Link } from "react-scroll";
import SearchModal from './SearchModal';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 200 ? setSticky(true) : setSticky(false);
    })
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false)
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo' />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='announcements' smooth={true} offset={-260} duration={500}>Announcements</Link></li>
        <li><Link to='aboutUs' smooth={true} offset={-150} duration={500}>About Us</Link></li>
        <li><Link to='events' smooth={true} offset={-260} duration={500}>Join Us</Link></li>
        <li><Link to='resources' smooth={true} offset={-260} duration={500}>Resources</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link></li>
        <li className="search-trigger" onClick={() => setIsSearchOpen(true)}>
          <FaSearch />
        </li>
      </ul>
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
