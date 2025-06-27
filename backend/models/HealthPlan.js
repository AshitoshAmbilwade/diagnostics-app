import mongoose from 'mongoose';

const healthPlanSchema = new mongoose.Schema({
  title: String,
  description: String,
  features: [String],
  price: Number,
  duration: String, // e.g. "3 months"
});

export default mongoose.model('HealthPlan', healthPlanSchema);
