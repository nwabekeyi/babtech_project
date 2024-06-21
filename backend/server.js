const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const FormData = require('./contactSchema');

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = 5000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB', err);
});

// Middleware to handle form submissions
app.post('/contact-us', async (req, res) => {
    try {
        const formData = new FormData({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            companyName: req.body.companyName,
            companyEmail: req.body.companyEmail,
            jobTitle: req.body.jobTitle,
            country: req.body.country,
            businessType: req.body.businessType,
            comments: req.body.comments,
            receiveInfo: req.body.receiveInfo === 'on' || req.body.receiveInfo === true
        });
        await formData.save();
        res.status(200).json({ message: 'Form submitted successfully!' });
    } catch (error) {
        console.error('Error submitting form:', error);
        res.status(500).json({ message: 'Error submitting form' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
