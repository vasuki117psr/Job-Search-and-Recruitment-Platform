import React from "react";
 import { Link } from "react-router-dom"; 
import "./Home.css";

function HomePage() {
  return (
    <div className="home">
      <h1>Welcome to Job Search and Recruitment Platform</h1>
      <p>Your career starts here. Find your dream job or hire the right candidate.</p>
      <Link to="/login">
        <button>Browse Jobs</button>
      </Link>
    </div>
  );
}

export default HomePage;
