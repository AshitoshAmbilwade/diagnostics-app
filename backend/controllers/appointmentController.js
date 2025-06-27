import Appointment from '../models/Appointment.js';

export const createAppointment = async (req, res) => {
  try {
    const { userId, doctorId, appointmentDate, notes } = req.body;

    const appointment = new Appointment({
      userId,
      doctorId,
      appointmentDate,
      notes,
    });

    const saved = await appointment.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: "Error creating appointment", error });
  }
};

export const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .populate('userId', 'name')
      .populate('doctorId', 'name specialization');
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching appointments", error });
  }
};

export const getAppointmentById = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id)
      .populate('userId', 'name')
      .populate('doctorId', 'name specialization');
    if (!appointment) return res.status(404).json({ message: "Appointment not found" });
    res.json(appointment);
  } catch (error) {
    res.status(500).json({ message: "Error fetching appointment", error });
  }
};

export const updateAppointmentStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const updated = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!updated) return res.status(404).json({ message: "Appointment not found" });

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Error updating status", error });
  }
};
