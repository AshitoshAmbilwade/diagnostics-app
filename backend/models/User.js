import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String },
  phone: String,
  gender: String,
  dob: Date,
}, { timestamps: true });

export default mongoose.model('User', userSchema);
