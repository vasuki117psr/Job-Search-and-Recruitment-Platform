import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Post.css';

const JobPostingPage = () => {
  const [jobPosts, setJobPosts] = useState([]);
  const [formData, setFormData] = useState({
    jobTitle: '',
    ageLimit: '',
    location: '',
    salary: '',
    qualification: '',
    applyLink: '',
    description: ''
  });
  const [editIndex, setEditIndex] = useState(null);
  const [showThankYou, setShowThankYou] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePostJob = (e) => {
    e.preventDefault();
    if (Object.values(formData).some(value => value.trim() === '')) {
      alert("⚠️ Please fill in all fields!");
      return;
    }
  
    if (editIndex !== null) {
      const updatedPosts = [...jobPosts];
      updatedPosts[editIndex] = formData;
      setJobPosts(updatedPosts);
      setEditIndex(null);
    } else {

      setJobPosts([...jobPosts, formData]);
    }
  
    setFormData({
      jobTitle: '', 
      ageLimit: '', 
      location: '', 
      salary: '', 
      qualification: '', 
      applyLink: '', 
      description: ''
    });
    alert("Job posted successfully!");
  };

  const handleFinalSubmit = () => {
    console.log("Job posts being submitted:", jobPosts); 
    if (jobPosts.length === 0) {
      console.log("No jobs to submit!");
      alert("⚠️ Please post at least one job before submitting!");
      return;
    }
  
    axios.post('http://localhost:3001/jobs/job', { jobPosts }) 
      .then(() => {
        console.log("Job posts successfully submitted!");
        setShowThankYou(true);
        setTimeout(() => {
          setShowThankYou(false);
          navigate('/');  
        }, 2000);
      })
      .catch(err => {
        console.error("Error while submitting jobs:", err);
        alert("⚠️ Something went wrong while submitting jobs.");
      });
  };

  const handleEdit = (index) => {
    setFormData(jobPosts[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedPosts = jobPosts.filter((_, i) => i !== index);
    setJobPosts(updatedPosts);
  };

  const shortenLink = (link) => {
    return link.length > 50 ? link.substring(0, 47) + "..." : link;
  };

  return (
    <div className="job-posting-page">
      {showThankYou && (
        <div className="thank-you-message">
          <h2>🎉 Thank You for Posting Jobs! 🎉</h2>
          <p>Redirecting to home...</p>
        </div>
      )}

      <h2>Post a Job</h2>
      <form onSubmit={handlePostJob}>
        <input
          type="text"
          name="jobTitle"
          placeholder="Job Title"
          value={formData.jobTitle}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="ageLimit"
          placeholder="Age Limit"
          value={formData.ageLimit}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Job Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="salary"
          placeholder="Salary"
          value={formData.salary}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="qualification"
          placeholder="Qualification"
          value={formData.qualification}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Job Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          type="url"
          name="applyLink"
          placeholder="Apply Link"
          value={formData.applyLink}
          onChange={handleChange}
          required
        />
        <button type="submit">
          {editIndex !== null ? "Update Job" : "Post Job"}
        </button>
      </form>

      <h3>Posted Jobs</h3>
      <table>
        <thead>
          <tr>
            <th>Job title</th>
            <th>Age Limit</th>
            <th>Location</th>
            <th>Salary</th>
            <th>Qualification</th>
            <th>Description</th>
            <th>Apply Here</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {jobPosts.map((job, index) => (
            <tr key={index}>
              <td>{job.jobTitle}</td>
              <td>{job.ageLimit}</td>
              <td>{job.location}</td>
              <td>{job.salary}</td>
              <td>{job.qualification}</td>
              <td>{job.description}</td>
              <td>
                <a href={job.applyLink} target="_blank" rel="noopener noreferrer" title={job.applyLink}>
                  {shortenLink(job.applyLink)}
                </a>
              </td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="final-submit-btn" onClick={handleFinalSubmit}>Submit</button>
    </div>
  );
};

export default JobPostingPage;
