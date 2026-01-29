import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png'
import SearchModal from './SearchModal';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 200 ? setSticky(true) : setSticky(false);
    })
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  }

  const scrollToSection = (id, offsetAdjustment = 0) => {
    const element = document.getElementById(id);
    if (element) {
      // This offset accounts for fixed navbar height
      const headerOffset = 260; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset + offsetAdjustment;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      // Optional: Close mobile menu automatically after clicking
      setMobileMenu(false);
    }
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo' onClick={() => window.scrollTo({top:0, behavior:'smooth'})} style={{cursor:'pointer'}} />
      
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Home</li>
        
        <li onClick={() => scrollToSection('announcements')}>Announcements</li>
        
        <li onClick={() => scrollToSection('about')}>About Us</li>
        
        <li onClick={() => scrollToSection('events')}>Join Us</li>
        
        <li onClick={() => scrollToSection('resources')}>Resources</li>
        
        <li>
            <button className='btn' onClick={() => scrollToSection('contact')}>Contact Us</button>
        </li>

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