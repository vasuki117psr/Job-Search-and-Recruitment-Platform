import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
export default function Navbar() {
  return (
    <nav className='primary-nav'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/jobs">JoblistPage</NavLink>
      <NavLink to="/post">Job-Poster</NavLink>
     <NavLink to="/login">Login</NavLink>
     <NavLink to="/register">Register</NavLink>
     <NavLink to="/about">AboutUs</NavLink>
     <NavLink to="/contact">ContactUs</NavLink>
    </nav>
  );
}