const express = require('express');
const router = express.Router();
const jobModel = require('../models/jobModel');  
const bodyParser = require('body-parser');

// Use bodyParser middleware to parse incoming JSON requests
router.use(bodyParser.json());

// POST route to handle job posting
router.post('/job', async (req, res) => {
  try {
    // Log the received job posts to verify data
    console.log("Received job posts:", req.body);
    
    const { jobPosts } = req.body;

    // If jobPosts is empty, return an error message
    if (!jobPosts || jobPosts.length === 0) {
      return res.status(400).json({ message: 'No jobs posted!' });
    }

    // Insert multiple job posts into MongoDB
    await jobModel.insertMany(jobPosts);  

    // Return success message upon successful insertion
    res.status(200).json({ message: 'Jobs successfully posted!' });
  } catch (error) {
    // Log error and return an error response
    console.error('Error while submitting jobs:', error);
    res.status(500).json({ message: 'Error processing the job posts', error });
  }
});
router.get('/job', async (req, res) => {
    try {
      const jobs = await jobModel.find();
      res.json(jobs);
    } catch (err) {
      console.error("Error fetching jobs:", err);
      res.status(500).json({ message: "Error fetching jobs" });
    }
  });
// In your routes file (e.g., `job.js`)
router.get('/job/:id', async (req, res) => {
    try {
      const job = await jobModel.findById(req.params.id);
      if (!job) {
        return res.status(404).json({ message: 'Job not found' });
      }
      res.json(job);
    } catch (error) {
      console.error("Error fetching job details:", error);
      res.status(500).json({ message: 'Error fetching job details' });
    }
  });
  
module.exports = router;
