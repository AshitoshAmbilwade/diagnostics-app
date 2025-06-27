import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import doctorRoutes from './routes/doctorRoutes.js';
import testRoutes from './routes/testRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import prescriptionRoutes from './routes/prescriptionRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';
import userRoutes from './routes/userRoutes.js';
import appointmentRoutes from './routes/appointmentRoutes.js';
import articleRoutes from './routes/articleRoutes.js';
import consultationRoutes from './routes/consultationRoutes.js';
import healthPlanRoutes from './routes/healthPlanRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';
import surgeryRoutes from './routes/surgeryRoutes.js';


// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Create Express app
const app = express();
const PORT = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from /uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/doctors', doctorRoutes);
app.use('/api/users', userRoutes);
app.use('/api/tests', testRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/prescriptions', prescriptionRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/articles', articleRoutes);
app.use('/api/consultations', consultationRoutes);
app.use('/api/healthplans', healthPlanRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/surgeries', surgeryRoutes);


// Test Route
app.get("/", (req, res) => {
  res.send("🚀 Server is running successfully.");
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
