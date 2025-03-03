import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <header>
        <h1>About Us</h1>
      </header>

      <section className="intro">
        <img 
          src="https://th.bing.com/th/id/OIP.RSowHQsH0oBWuVbrrRzo9QHaE3?rs=1&pid=ImgDetMain" 
          alt="About Us"
          className="about-us-image"
        />
        <p>
          Our platform is designed to provide both job seekers and employers with a seamless and efficient experience. We understand that the job search process can be overwhelming, so we offer a wide variety of tools and services to help individuals and companies navigate this journey. Whether you're a job seeker looking for the next career opportunity or an employer seeking the right talent, our platform is here to make that process easier, faster, and more effective.
        </p>
        <p>
          For job seekers, we offer personalized job recommendations based on skills, experience, and preferences, making it easier to find relevant job opportunities. Our platform allows users to create detailed profiles, upload resumes, and apply to jobs with just a few clicks. We provide a seamless, intuitive experience to ensure that job seekers can focus on what matters most—finding the perfect job.
        </p>
        <p>
          Employers can benefit from a streamlined recruitment process, allowing them to post job openings, manage applications, and connect with qualified candidates. Our platform offers powerful features such as advanced filtering, candidate matching, and easy communication tools to help employers quickly find the right fit for their teams. We understand that hiring is a critical part of business growth, which is why we focus on making the process as efficient as possible.
        </p>
        <p>
          At the core of our services is the belief that the right people should always find the right opportunities. We strive to eliminate the barriers between talent and employers, creating a space where everyone has access to the tools and resources they need to succeed. Whether you're searching for a job or looking to hire, we are here to help you achieve your goals and drive your success.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
