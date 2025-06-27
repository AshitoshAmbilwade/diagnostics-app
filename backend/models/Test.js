import mongoose from 'mongoose';

const testSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  duration: String,
  instructions: String,
});

export default mongoose.model('Test', testSchema);
