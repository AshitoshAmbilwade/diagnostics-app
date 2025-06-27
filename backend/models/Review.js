import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
  rating: Number,
  comment: String,
}, { timestamps: { createdAt: true } });

export default mongoose.model('Review', reviewSchema);
