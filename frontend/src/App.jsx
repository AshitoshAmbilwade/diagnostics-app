import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SearchSection from "./components/SearchSection";
import ServiceCards from "./components/ServiceCards";
import VideoConsultation from "./components/VideoConsultation";
import FindDoctors from "./components/FindDoctors";
import Surgeries from "./components/Surgeries";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="min-h-screen w-screen bg-white">
        <Header />

        <Routes>
          {/* Home route with Search and Service Cards */}
          <Route
            path="/"
            element={
              <>
                <SearchSection />
                <ServiceCards />
              </>
            }
          />

          {/* Individual service routes */}
          <Route path="/video-consultation" element={<VideoConsultation />} />
          <Route path="/find-doctors" element={<FindDoctors />} />
          <Route path="/surgeries" element={<Surgeries />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
