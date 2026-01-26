import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import './Footer.css';

const Footer = () => {
  const [modalType, setModalType] = useState(null); // 'privacy' or 'terms' or null

  return (
    <div className='footer'>
      <p>© 2026 Singapore Thirumurai Manadu. All rights reserved.</p>
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