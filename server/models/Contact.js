const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    name:    { type: String, required: true, trim: true, maxlength: 80 },
    email:   { type: String, required: true, trim: true, lowercase: true, match: /^\S+@\S+\.\S+$/ },
    message: { type: String, required: true, trim: true, maxlength: 2000 },
    read:    { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Contact', contactSchema);
