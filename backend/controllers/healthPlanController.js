import HealthPlan from '../models/HealthPlan.js';

// Create Health Plan
export const createHealthPlan = async (req, res) => {
  try {
    const newPlan = new HealthPlan(req.body);
    const saved = await newPlan.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: "Failed to create health plan", error: err });
  }
};

// Get all Health Plans
export const getAllHealthPlans = async (req, res) => {
  try {
    const plans = await HealthPlan.find();
    res.status(200).json(plans);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch health plans", error: err });
  }
};

// Get Health Plan by ID
export const getHealthPlanById = async (req, res) => {
  try {
    const plan = await HealthPlan.findById(req.params.id);
    if (!plan) return res.status(404).json({ message: "Health plan not found" });
    res.status(200).json(plan);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch health plan", error: err });
  }
};

// Update Health Plan
export const updateHealthPlan = async (req, res) => {
  try {
    const updated = await HealthPlan.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: "Failed to update health plan", error: err });
  }
};

// Delete Health Plan
export const deleteHealthPlan = async (req, res) => {
  try {
    await HealthPlan.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Health plan deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete health plan", error: err });
  }
};
