import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
  title: String,
  content: String,
  authorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  tags: [String],
  publishedAt: Date,
});

export default mongoose.model('Article', articleSchema);
