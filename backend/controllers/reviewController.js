import Review from '../models/Review.js';

// Create a new review
export const createReview = async (req, res) => {
  try {
    const review = new Review(req.body);
    const saved = await review.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: "Failed to create review", error: err });
  }
};

// Get all reviews
export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find().populate('userId', 'name').populate('doctorId', 'name');
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch reviews", error: err });
  }
};

// Get reviews for a specific doctor
export const getReviewsByDoctor = async (req, res) => {
  try {
    const reviews = await Review.find({ doctorId: req.params.doctorId }).populate('userId', 'name');
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch doctor reviews", error: err });
  }
};

// Update a review
export const updateReview = async (req, res) => {
  try {
    const updated = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: "Failed to update review", error: err });
  }
};

// Delete a review
export const deleteReview = async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Review deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete review", error: err });
  }
};
