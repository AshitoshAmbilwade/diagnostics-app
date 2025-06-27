import express from 'express';
import multer from 'multer';
import path from 'path';
import {
  uploadPrescription,
  getAllPrescriptions,
  getPrescriptionById
} from '../controllers/prescriptionController.js';

const router = express.Router();

// Storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Make sure this folder exists
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Routes
router.post('/', upload.single('prescription'), uploadPrescription);
router.get('/', getAllPrescriptions);
router.get('/:id', getPrescriptionById);

export default router;
