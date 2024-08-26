import mongoose from 'mongoose';

const UpdateSchema = new mongoose.Schema({
  week: Number,
  day: Number,
  email: String,
  description: String,
  files: [String], // Array of file URLs
  uploadedAt: { type: Date, default: Date.now },
});

const Update = mongoose.models.Update || mongoose.model('Update', UpdateSchema);

export default Update;
