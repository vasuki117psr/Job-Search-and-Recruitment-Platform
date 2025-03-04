const express = require('express');
const router = express.Router();
const jobModel = require('../models/jobModel');  
const bodyParser = require('body-parser');
router.use(bodyParser.json());

router.post('/job', async (req, res) => {
  try {

    console.log("Received job posts:", req.body);
    
    const { jobPosts } = req.body;

    if (!jobPosts || jobPosts.length === 0) {
      return res.status(400).json({ message: 'No jobs posted!' });
    }


    await jobModel.insertMany(jobPosts);  

   
    res.status(200).json({ message: 'Jobs successfully posted!' });
  } catch (error) {
   
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
