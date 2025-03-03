import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Login from './Component/Login';
import Register from './Component/Register';
import JobPoster from './Component/Jobposter';
import JobSeeker from './Component/Jobseeker';
import Post from './Component/Post';
import JoblistPage from './Component/JoblistPage'
import JobDetailsPage from './Component/JobDetailsPage';
import AboutUs from './Component/AboutUs';
import ContactUs from './Component/ContactUs';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/jobs" element={<JoblistPage />} />
        <Route path="/jobs/:id" element={<JobDetailsPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/job-seeker" element={<JobSeeker />} />
        <Route path="/job-poster" element={<JobPoster />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/post" element={<Post />} />
        <Route path='/contact' element={<ContactUs/>}/>
      </Routes>
    </>
  );
}

export default App;
