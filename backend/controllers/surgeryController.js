import Surgery from '../models/Surgery.js';

// Create a new surgery entry
export const createSurgery = async (req, res) => {
  try {
    const surgery = new Surgery(req.body);
    const saved = await surgery.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: "Failed to create surgery", error: err });
  }
};

// Get all surgeries
export const getAllSurgeries = async (req, res) => {
  try {
    const surgeries = await Surgery.find();
    res.status(200).json(surgeries);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch surgeries", error: err });
  }
};

// Get a specific surgery by ID
export const getSurgeryById = async (req, res) => {
  try {
    const surgery = await Surgery.findById(req.params.id);
    if (!surgery) return res.status(404).json({ message: "Surgery not found" });
    res.status(200).json(surgery);
  } catch (err) {
    res.status(500).json({ message: "Failed to get surgery", error: err });
  }
};

// Update surgery by ID
export const updateSurgery = async (req, res) => {
  try {
    const updated = await Surgery.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: "Failed to update surgery", error: err });
  }
};

// Delete surgery
export const deleteSurgery = async (req, res) => {
  try {
    await Surgery.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Surgery deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete surgery", error: err });
  }
};
