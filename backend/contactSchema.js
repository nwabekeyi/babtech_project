const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    companyName: { type: String, required: true },
    companyEmail: { type: String, required: true },
    jobTitle: { type: String, required: true },
    country: { type: String, required: true },
    businessType: { type: String, required: true },
    comments: { type: String, required: false },
    receiveInfo: { type: Boolean, required: false }
});

const FormData = mongoose.model('FormData', formDataSchema);

module.exports = FormData;
