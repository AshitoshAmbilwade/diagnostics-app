import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import { Toaster } from "react-hot-toast";

// Pages
import HomePage from "./pages/HomePage";
import VideoConsultation from "./components/VideoConsultation";
import FindDoctorsPage from "./pages/FindDoctors";
import Surgeries from "./components/Surgeries";
import AuthPage from "./pages/AuthPage";
import DoctorDashboard from "./pages/DoctorDashboard";
import UserDashboard from "./pages/UserDashboard";

function App() {
  return (
    <Router>
      <div className="min-h-screen w-screen bg-white">
        <Toaster position="top-center" reverseOrder={false} />
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/video-consultation" element={<VideoConsultation />} />
          <Route path="/find-doctors" element={<FindDoctorsPage />} />
          <Route path="/surgeries" element={<Surgeries />} />

          {/* ✅ Protected Dashboard Routes */}
          <Route
            path="/doctor/dashboard"
            element={
              <ProtectedRoute>
                <DoctorDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user/dashboard"
            element={
              <ProtectedRoute>
                <UserDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
