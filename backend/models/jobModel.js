const mongoose = require('mongoose');

// Define the schema for job posts
const jobSchema = mongoose.Schema({
  jobTitle: { type: String, required: true },     // Job title (required)
  ageLimit: { type: Number, required: true },     // Age limit (required)
  location: { type: String, required: true },     // Location (required)
  salary: { type: Number, required: true },       // Salary (required)
  qualification: { type: String, required: true },// Qualification (required)
  applyLink: { type: String, required: true },    // Apply link (required)
  description: { type: String, required: true }   // Job description (required)
});

// Create the Job model using the schema
const JobModel = mongoose.model('Job', jobSchema);  

// Export the Job model
module.exports = JobModel;
