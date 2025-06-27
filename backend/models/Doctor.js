import mongoose from 'mongoose';

const patientStorySchema = new mongoose.Schema({
  patientName: String,
  story: String,
  rating: Number,
  date: { type: Date, default: Date.now }
}, { _id: false });

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  photo: { type: String }, // URL to profile image
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  specialization: { type: String, required: true },
  experience: { type: Number, required: true }, // in years
  location: String,
  price: String,
  ratings: { type: Number, default: 0 },
  availableSlots: [Date],
  bio: String,
  patientStories: [patientStorySchema],
}, { timestamps: true });

export default mongoose.model('Doctor', doctorSchema);
