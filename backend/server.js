import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import path from 'path';
import { fileURLToPath } from 'url';

// Routes
import doctorRoutes from './routes/doctorRoutes.js';
import testRoutes from './routes/testRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import prescriptionRoutes from './routes/prescriptionRoutes.js';
import userRoutes from './routes/userRoutes.js';
import appointmentRoutes from './routes/appointmentRoutes.js';
import articleRoutes from './routes/articleRoutes.js';
import consultationRoutes from './routes/consultationRoutes.js';
import healthPlanRoutes from './routes/healthPlanRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';
import surgeryRoutes from './routes/surgeryRoutes.js';
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Proper CORS setup
app.use(cors({
  origin: 'https://diagnostics-app.vercel.app/',
  credentials: true,
}));

app.use("/api/auth", authRoutes);

// Middleware
app.use(express.json());

// Static files (for prescription uploads, etc.)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API Routes
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

// Root Route
app.get("/", (req, res) => {
  res.send("🚀 Server is running successfully.");
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
