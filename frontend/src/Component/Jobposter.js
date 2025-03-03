import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Jobposter.css';

const JobPosterRegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  
    if (!formData.username || !formData.email || !formData.password) {
      alert("Please fill in all fields!");
      return;
    }

  
    console.log('Job Poster Form Data:', formData);

    alert("Registration successful!");

    navigate('/login');
  };

  return (
    <div className="job-poster-register">
      <h2>Job Poster Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>UserName</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required  
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required  
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required  
        />

        <button type="submit">Register as Job Poster</button>
      </form>
    </div>
  );
};

export default JobPosterRegisterPage;