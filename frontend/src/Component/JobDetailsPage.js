import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './JobDetailsPage.css';

function JobDetailsPage() {
  const [job, setJob] = useState(null);
  const { id } = useParams();  // Get the job ID from the URL

  useEffect(() => {
    axios.get(`http://localhost:3001/jobs/job/${id}`)
      .then(response => {
        setJob(response.data);
      })
      .catch(error => {
        console.error("Error fetching job details:", error);
      });
  }, [id]);

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className="job-details">
      <h2>{job.jobTitle}</h2>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Salary:</strong> {job.salary}</p>
      <p><strong>Age Limit:</strong> {job.ageLimit}</p>
      <p><strong>Qualification:</strong> {job.qualification}</p>
      <p><strong>Description:</strong> {job.description}</p>
      <a href={job.applyLink} target="_blank" rel="noopener noreferrer">
        Apply Here
      </a>
    </div>
  );
}

export default JobDetailsPage;
