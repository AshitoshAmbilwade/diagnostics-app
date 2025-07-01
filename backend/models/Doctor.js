import mongoose from 'mongoose';

const patientStorySchema = new mongoose.Schema({
  patientName: String,
  story: String,
  rating: Number,
  date: { type: Date, default: Date.now }
}, { _id: false });

const doctorSchema = new mongoose.Schema({
  email: String,
  photo: { type: String }, // URL to profile image
  specialization: { type: String},
  experience: { type: Number}, // in years
  location: String,
  price: String,
  ratings: { type: Number, default: 0 },
  availableSlots: [Date],
  bio: String,
  patientStories: [patientStorySchema],
}, { timestamps: true });


export default mongoose.model('Doctor', doctorSchema);
