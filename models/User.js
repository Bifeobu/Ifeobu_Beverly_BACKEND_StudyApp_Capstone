const { Schema, model } = require('../config/db-connection');

const userSchema = Schema({
  mood: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
    min: 5,
    max: 5000,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  }
});

module.exports = model('User', userSchema);
