import Doctor from '../models/Doctor.js';

// Create a new doctor
export const createDoctor = async (req, res) => {
  try {
    const {
      specialization,
      experience,
      location,
      bio,
      photo,
      price,
    } = req.body;

    // 1️⃣ Check if doctor already exists
    const existing = await Doctor.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Doctor already registered with this email." });
    }

    // 2️⃣ Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3️⃣ Create doctor
    const newDoctor = new Doctor({
      
      
      specialization,
      experience,
      location,
      bio,
      photo,
      price,
    });

    const savedDoctor = await newDoctor.save();

    // 4️⃣ Create JWT token
    const token = jwt.sign({ id: savedDoctor._id, role: "doctor" }, JWT_SECRET, {
      expiresIn: "7d",
    });

    // 5️⃣ Respond
    res.status(201).json({
      message: "Doctor registered successfully",
      doctor: {
        id: savedDoctor._id,
        name: savedDoctor.name,
        email: savedDoctor.email,
        specialization: savedDoctor.specialization,
      },
      token,
    });

  } catch (error) {
    console.error("❌ Error in doctor registration:", error.message);
    res.status(500).json({ message: "Internal server error during doctor registration." });
  }
};

// Get all doctors
export const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get doctor by ID
export const getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) return res.status(404).json({ message: 'Doctor not found' });
    res.json(doctor);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update doctor
export const updateDoctor = async (req, res) => {
  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedDoctor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete doctor
export const deleteDoctor = async (req, res) => {
  try {
    await Doctor.findByIdAndDelete(req.params.id);
    res.json({ message: 'Doctor deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
