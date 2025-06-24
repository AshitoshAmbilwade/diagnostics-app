import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage"; // ✅ New home page
import VideoConsultation from "./components/VideoConsultation";
import FindDoctors from "./pages/DoctorsPage";
import Surgeries from "./components/Surgeries";
import FindDoctorsPage from "./pages/FindDoctors";

function App() {
  return (
    <Router>
      <div className="min-h-screen w-screen bg-white">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/video-consultation" element={<VideoConsultation />} />
          <Route path="/find-doctors" element={<FindDoctorsPage />} />
          <Route path="/surgeries" element={<Surgeries />} />
        </Routes>

        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
