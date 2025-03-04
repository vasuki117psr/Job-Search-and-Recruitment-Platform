import React, { useEffect, useState } from "react";
import axios from 'axios';
import './JoblistPage.css';

function JobListPage() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    axios.get('http://localhost:3001/jobs/job')
      .then(response => {
        setJobs(response.data); 
      })
      .catch(error => {
        console.error("There was an error fetching the jobs!", error);
      });
  }, []); 
  const filteredJobs = jobs.filter(job => 
    job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="job-list">
      <h2>Job Listings</h2>
      <input
        type="text"
        placeholder="Search by title or location"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <div className="job-table">
        {filteredJobs.length ? (
          <table>
            <thead>
              <tr>
                <th>Job Title</th>
                <th>Location</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {filteredJobs.map(job => (
                <tr key={job._id}>
                  <td>{job.jobTitle}</td>
                  <td>{job.location}</td>
                  <td>
                  <a href={`/jobs/${job._id}`}>View Details</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No jobs found.</p>
        )}
      </div>
    </div>
  );
}

export default JobListPage;
