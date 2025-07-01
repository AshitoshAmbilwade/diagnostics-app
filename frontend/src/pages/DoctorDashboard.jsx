import DoctorProfileForm from "../components/DoctorProfileForm";
const DoctorDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-indigo-700">Doctor Dashboard</h1>
      <DoctorProfileForm />
    </div>
  );
};

export default DoctorDashboard;