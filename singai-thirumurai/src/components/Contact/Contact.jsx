import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css';

const Contact = () => {
  const [state, handleSubmit] = useForm("xojdjgdw");

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message</h3>
        <p>Feel free to reach out through the contact form or find our contact information below. Your feedback and questions are important to us.</p>
        <ul>
            <li>Email: sivayanama.thirumurai@gmail.com</li>
            <li>Email: thirumuraiyouthwing@gmail.com</li>
            <li>Address: Singapore</li>
        </ul>
      </div>

      <div className="contact-col">
        {state.succeeded ? (
          <div className="form-success">
            <p>Thanks for your message! We'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>Your Name</label>
            <input type="text" name="name" placeholder='Enter your name' required/>
            
            <label>Email Address</label>
            <input id="email" type="email" name="email" placeholder='Enter your email' required/>
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            
            <label>Write your message here</label>
            <textarea id="message" name="message" rows="6" placeholder='Enter your message' required></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            
            <button type="submit" className='btn dark-btn' disabled={state.submitting}>
              Submit Now
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Contact;
