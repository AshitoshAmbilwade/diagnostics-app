import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  testId: { type: mongoose.Schema.Types.ObjectId, ref: 'Test' },
  status: { type: String, enum: ['pending', 'completed', 'cancelled'], default: 'pending' },
  scheduledDate: Date,
}, { timestamps: true });

export default mongoose.model('Order', orderSchema);
