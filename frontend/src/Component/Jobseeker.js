import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Jobseeker.css';
import axios from 'axios';

const JobSeekerRegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    qualifications: '',
    experience: '',
    skills: ''
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password || !formData.qualifications || !formData.experience || !formData.skills) {
      alert("Please fill in all fields!");
      return;
    }

    axios.post('http://localhost:3000/jobs', { formData })
      .then(res => {
        setMessage("Registration Successful!");
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      })
      .catch(err => {
        setMessage('Something went wrong');
        console.log(err);
      });
  };

  return (
    <div className="job-seeker-register">
      <h2>Job Seeker Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
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

        <label>Qualifications</label>
        <input
          type="text"
          name="qualifications"
          value={formData.qualifications}
          onChange={handleChange}
          required
        />

        <label>Experience</label>
        <input
          type="text"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          required
        />

        <label>Skills</label>
        <input
          type="text"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          required
        />

        <button type="submit">Register as Job Seeker</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default JobSeekerRegisterPage;