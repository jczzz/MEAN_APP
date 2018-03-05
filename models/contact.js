const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
//const config = require('../config/database');

// Contact Schema
const ContactSchema = mongoose.Schema ({
    
  name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  phone: { mobile: {
                    type: String,
                    required: true
                    },
             work: {
                    type: String,
                    required: true
                }
         }
});
//Contact model
//const Contact = module.exports = mongoose.model('Contact', ContactSchema);
var Contact = mongoose.model('Contact', ContactSchema);
module.exports = Contact ;