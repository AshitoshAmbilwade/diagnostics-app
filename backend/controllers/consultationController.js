import Consultation from '../models/Consultation.js';

// Create consultation
export const createConsultation = async (req, res) => {
  try {
    const { userId, doctorId, symptoms, scheduledAt } = req.body;

    const newConsult = new Consultation({
      userId,
      doctorId,
      symptoms,
      scheduledAt,
    });

    const saved = await newConsult.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create consultation', error: err });
  }
};

// Get all consultations
export const getAllConsultations = async (req, res) => {
  try {
    const consultations = await Consultation.find()
      .populate('userId', 'name email')
      .populate('doctorId', 'name specialization');
    res.json(consultations);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching consultations', error: err });
  }
};

// Get consultation by ID
export const getConsultationById = async (req, res) => {
  try {
    const consult = await Consultation.findById(req.params.id)
      .populate('userId', 'name email')
      .populate('doctorId', 'name specialization');

    if (!consult) return res.status(404).json({ message: 'Not found' });

    res.json(consult);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching consultation', error: err });
  }
};

// Update consultation status or chat
export const updateConsultation = async (req, res) => {
  try {
    const updated = await Consultation.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Error updating consultation', error: err });
  }
};

// Delete consultation
export const deleteConsultation = async (req, res) => {
  try {
    const deleted = await Consultation.findByIdAndDelete(req.params.id);
    res.json({ message: 'Consultation deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting consultation', error: err });
  }
};
