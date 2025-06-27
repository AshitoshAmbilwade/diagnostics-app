import Test from '../models/Test.js';

// Create a new Test
export const createTest = async (req, res) => {
  try {
    const newTest = new Test(req.body);
    const savedTest = await newTest.save();
    res.status(201).json(savedTest);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all Tests
export const getAllTests = async (req, res) => {
  try {
    const tests = await Test.find();
    res.json(tests);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get Test by ID
export const getTestById = async (req, res) => {
  try {
    const test = await Test.findById(req.params.id);
    if (!test) return res.status(404).json({ message: 'Test not found' });
    res.json(test);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update Test
export const updateTest = async (req, res) => {
  try {
    const updatedTest = await Test.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedTest);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete Test
export const deleteTest = async (req, res) => {
  try {
    await Test.findByIdAndDelete(req.params.id);
    res.json({ message: 'Test deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
