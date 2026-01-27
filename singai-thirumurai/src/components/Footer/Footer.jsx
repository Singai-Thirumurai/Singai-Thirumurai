import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import './Footer.css';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const [modalType, setModalType] = useState(null); // 'privacy' or 'terms' or null

  return (
    <div className='footer'>

      <div className="footer-content">
        <p>© 2026 Singapore Thirumurai Manadu. All rights reserved.</p>

        {/* Social Media Icons Section */}
        <div className="social-icons">
          <a href="https://www.facebook.com/sivayanama.thirumurai" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook className="social-icon" />
          </a>
          <a href="https://www.instagram.com/singaithirumurai_sg?utm_source=qr&igsh=MTVzYm1wNWlkYzEzZA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="social-icon" />
          </a>
          <a href="https://youtube.com/@sivayanamathirumurai6130?si=u0BKNoCF2IQXdwzN" target="_blank" rel="noopener noreferrer" aria-label="Youtube">
            <FaYoutube className="social-icon" />
          </a>
        </div>
      </div>

      <ul>
        <li onClick={() => setModalType('terms')}>Terms of Service</li>
        <li onClick={() => setModalType('privacy')}>Privacy Policy</li>
      </ul>

      {/* Terms of Service Modal */}
      <Modal
        isOpen={modalType === 'terms'}
        onClose={() => setModalType(null)}
        title="Terms of Service"
      >
        <p>Your terms of service content goes here...</p>
      </Modal>

      {/* Privacy Policy Modal */}
      <Modal
        isOpen={modalType === 'privacy'}
        onClose={() => setModalType(null)}
        title="Privacy Policy"
      >
        <p>Your privacy policy content goes here...</p>
      </Modal>
    </div>
  );
};

export default Footer;