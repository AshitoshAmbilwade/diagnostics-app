import mongoose from 'mongoose';

const consultationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
  symptoms: String,
  status: { type: String, enum: ['scheduled', 'completed'], default: 'scheduled' },
  scheduledAt: Date,
  chatTranscript: [{
    message: String,
    sender: { type: String, enum: ['user', 'doctor'] },
    time: Date,
  }],
});

export default mongoose.model('Consultation', consultationSchema);
