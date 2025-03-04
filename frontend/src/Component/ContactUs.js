import React, { useState } from 'react';
import './ContactUS.css';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus('Thank you for contacting us! We will get back to you soon.');
  };

  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <p>If you have any questions or need assistance, feel free to reach out to us using the form below.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea 
            id="message" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required 
          />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
      
      {status && <p className="status-message">{status}</p>}
    </div>
  );
};

export default ContactUs;
