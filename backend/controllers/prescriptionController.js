import Prescription from '../models/Prescription.js';

export const uploadPrescription = async (req, res) => {
  try {
    const { userId, orderId } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';

    const newPrescription = new Prescription({
      userId,
      orderId,
      imageUrl,
    });

    const saved = await newPrescription.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getAllPrescriptions = async (req, res) => {
  try {
    const prescriptions = await Prescription.find()
      .populate('userId', 'name')
      .populate('orderId');
    res.json(prescriptions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getPrescriptionById = async (req, res) => {
  try {
    const prescription = await Prescription.findById(req.params.id)
      .populate('userId', 'name')
      .populate('orderId');
    if (!prescription) return res.status(404).json({ message: 'Not found' });
    res.json(prescription);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
