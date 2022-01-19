const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: { 
    type: String, 
    enum: ['admin', 'moderator'], 
    required: true,
  },
  profilePhotoLocation: {
    type: String,
  },
  encryptedPassword: {
    type: String,
    required: true,
  },

});

const Company = mongoose.model('AdminAdd', CompanySchema);

module.exports = { CompanySchema, Company };
