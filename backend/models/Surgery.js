import mongoose from 'mongoose';

const surgerySchema = new mongoose.Schema({
  name: String,
  description: String,
  speciality: String,
  hospital: String,
  estimatedCost: Number,
  duration: String,
});

export default mongoose.model('Surgery', surgerySchema);
