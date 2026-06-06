const mongoose = require("mongoose");

const careerSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  position: { type: String, required: true },
  experience: { type: String, required: true },
  resumeUrl: { type: String, required: true },
  appliedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Career", careerSchema);
