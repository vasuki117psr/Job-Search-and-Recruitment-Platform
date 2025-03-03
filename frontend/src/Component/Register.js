import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading state

    try {
      const response = await axios.post('http://localhost:3001/users/signup', formData);
      setMessage('Signup Successfully! Redirecting to Login...');
      alert('Signup Successful! You will be redirected to login.');
      
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (error) {
      console.error('Signup Error:', error); // Log the error
      setMessage('Signup failed. Please try again.');
      alert('Error: Signup failed. Please try again.');
    } finally {
      setLoading(false); // Hide loading state
    }
  };

  return (
    <div className='a'>
      <br />
      <form onSubmit={handleSubmit} className='b'>
        <h1 className='c'>Signup</h1>

        <label className='d' htmlFor='name1'>Username</label><br />
        <input
          className='e'
          type='text'
          id='name1'
          placeholder='Username'
          name='username'
          value={formData.username}
          onChange={handleChange}
        /><br />

        <label className='f' htmlFor='mail'>Email</label><br />
        <input
          className='g'
          type='text'
          id='mail'
          placeholder='E-mail ID'
          name='email'
          value={formData.email}
          onChange={handleChange}
        /><br />

        <label className='h' htmlFor='pass'>Password</label><br />
        <input
          className='i'
          type='password'
          id='pass'
          placeholder='Enter your password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        /><br />

        <button className='j' type='submit' disabled={loading}>
          {loading ? 'Signing Up...' : 'Signup'}
        </button>
      </form>

      {message && <p>{message}</p>} 

      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
