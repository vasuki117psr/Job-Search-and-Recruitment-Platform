const mongoose = require('mongoose');
const jobSchema = mongoose.Schema({
  jobTitle: { type: String, required: true },     
  ageLimit: { type: Number, required: true },     
  location: { type: String, required: true },     
  salary: { type: Number, required: true },       
  qualification: { type: String, required: true }
  applyLink: { type: String, required: true },    
  description: { type: String, required: true }   
});


const JobModel = mongoose.model('Job', jobSchema);  


module.exports = JobModel;
