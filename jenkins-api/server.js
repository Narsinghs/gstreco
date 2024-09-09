const http = require('http');
const axios = require('axios');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const { URLSearchParams } = require('url');
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PORT = 5000;

// Hard-coded Jenkins credentials
const JENKINS_USERNAME = 'admin';
const JENKINS_API_TOKEN = '1198c8842726832bf31d7f065fc5d2f06a';

// Create an Express app
const app = express();

// CORS configuration
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Body parser middleware to parse JSON data
app.use(bodyParser.json());

// Endpoint to trigger Jenkins job
app.post('/api/runJenkinsJob', async (req, res) => {
  const formData = req.body;

  // Convert JSON payload to URL-encoded format
  const urlEncodedData = new URLSearchParams(formData).toString();

  const jenkinsUrl = 'https://jenkins.theoutsourcepro.com.au/job/Gst_param/buildWithParameters';

  try {
    const response = await axios.post(jenkinsUrl, urlEncodedData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + Buffer.from(`${JENKINS_USERNAME}:${JENKINS_API_TOKEN}`).toString('base64')
      }
    });

    if (response.status === 201) {
      res.status(200).send('Job triggered successfully');
    } else {
      res.status(response.status).send('Failed to trigger job');
    }
  } catch (error) {
    console.error('Error triggering Jenkins job:', error);
    res.status(500).send('Error occurred while triggering Jenkins job');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
