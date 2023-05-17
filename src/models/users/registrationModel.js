const mongoose = require('mongoose');

// Schema defining
const userRegSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true
    },
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },
    role: {
      type: String,
      enum: ['user'],
      default: 'user'
    },
    isVerified: {
      type: Boolean,
      default: false
    },
    verificationToken: {
      type: String,
      default: null
    }
    }, 
        {
            timestamps: true
        }
    );

//Collection creation
const User = mongoose.model('Users', userRegSchema);

// Export
module.exports = User;

