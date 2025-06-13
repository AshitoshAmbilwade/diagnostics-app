import { useState, useRef, useEffect } from "react";
import { Search, MapPin, ChevronDown, X, Navigation } from "lucide-react";

const LOCATIONS = [
  "Jp Nagar",
  "Whitefield",
  "Hsr Layout",
  "Indiranagar",
  "Sarjapur Road",
  "Malleswaram",
  "Bannerghatta Road",
  "Rajajinagar",
  "Vijayanagar",
  "Jayanagar",
];

const SearchSection = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [location, setLocation] = useState("Bangalore");
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleUseLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const res = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const data = await res.json();
            const city =
              data?.address?.city ||
              data?.address?.town ||
              data?.address?.village ||
              "Your Location";
            setLocation(city);
            setDropdownOpen(false);
          } catch {
            alert("Could not detect location name.");
            setLocation("Detected Location");
            setDropdownOpen(false);
          }
        },
        () => alert("Location access denied or unavailable")
      );
    } else {
      alert("Geolocation not supported.");
    }
  };

  const handleSelect = (loc) => {
    setLocation(loc);
    setDropdownOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Searching for "${searchQuery}" in ${location}`);
  };

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 border-b border-gray-200 py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-3 bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">
            Find the Best Healthcare
          </h1>
          <p className="text-gray-700 max-w-xl text-center text-lg">
            Search from thousands of doctors, clinics and hospitals in India
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col  lg:flex-row gap-4 rounded-2xl  border border-gray-300 p-1.5 shadow-inner">
            {/* Location Selector */}
            <div className=" mt-3 relative lg:w-2/5">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-full flex items-center justify-between rounded-xl px-4 py-3 bg-gradient-to-r from-gray-200 to-gray-300 border border-gray-300 hover:border-gray-400 transition-all duration-300 group shadow-sm"
              >
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-gray-700 mr-2 group-hover:text-gray-900" />
                  <span className="font-medium truncate text-gray-800 group-hover:text-gray-900">
                    {location}
                  </span>
                </div>
                <div className="flex items-center">
                  {location !== "Bangalore" && (
                    <X
                      className="h-4 w-4 text-gray-600 hover:text-red-500 mr-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        setLocation("Bangalore");
                      }}
                    />
                  )}
                  <ChevronDown
                    className={`h-4 w-4 text-gray-600 group-hover:text-gray-800 transition-transform ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              {dropdownOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute top-full left-0 mt-2 w-full bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-300 rounded-xl shadow-xl z-10 max-h-80 overflow-y-auto"
                >
                  <button
                    type="button"
                    onClick={handleUseLocation}
                    className="flex items-center w-full text-left px-4 py-3 bg-gradient-to-r from-gray-200 to-gray-300 border border-gray-300 rounded-xl shadow-xl text-green-800 hover:bg-gradient-to-r hover:from-gray-300 hover:to-gray-400 transition-all group"
                  >
                    <Navigation className="h-5 w-5 mr-2 text-green-700 group-hover:text-green-900" />
                    Use my location
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSelect("Bangalore")}
                    className="w-full mt-1 text-left px-4 py-3 bg-gradient-to-r from-gray-200 to-gray-300 border border-gray-300 rounded-xl shadow-xl text-green-800 hover:bg-gradient-to-r hover:from-gray-300 hover:to-gray-400"
                  >
                    Search in entire Bangalore
                  </button>

                  <div className="px-4 py-2 text-sm font-semibold text-gray-700 uppercase tracking-wider border-t border-gray-400">
                    Popular Areas
                  </div>

                  {LOCATIONS.map((area) => (
                    <button
                      type="button"
                      key={area}
                      onClick={() => handleSelect(area)}
                      className="w-full flex items-start gap-3 px-4 py-3 mt-1 bg-gradient-to-r from-gray-200 to-gray-300 border border-gray-300 rounded-xl shadow-xl hover:bg-gradient-to-r hover:from-gray-300 hover:to-gray-400 transition-all"
                    >
                      <MapPin className="h-4 w-4 mt-1 text-gray-700" />
                      <div>
                        <p className="text-base font-medium text-gray-800 group-hover:text-gray-900">
                          {area}
                        </p>
                        <p className="text-sm text-gray-600">Bangalore</p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search Input */}
            <div className="flex items-center bg-gradient-to-r from-gray-200 to-gray-300 rounded-xl px-4 py-3 lg:w-3/5 border border-gray-300 hover:border-gray-400 transition-all duration-300 group shadow-inner">
              <Search className="h-5 w-5 text-gray-600 mr-2 group-hover:text-gray-800" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search doctors, clinics, hospitals, etc."
                className="w-full bg-transparent border-none outline-none text-gray-800 placeholder-gray-600 focus:ring-0 text-base"
              />
              <button
                type="submit"
                className="ml-2 px-5 py-3 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center"
              >
                <Search className="h-5 w-5 mr-1.5" />
                <span className="font-semibold">Search</span>
              </button>
            </div>
          </div>
        </form>

        {/* Popular Searches */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <span className="text-gray-700 text-base">Popular searches:</span>
          {["Dentist", "Cardiologist", "Dermatologist", "Pediatrician", "ENT"].map((tag) => (
            <button
              key={tag}
              onClick={() => setSearchQuery(tag)}
              className="px-4 py-2 bg-gradient-to-r from-gray-200 to-gray-300 border border-gray-300 rounded-xl text-base text-gray-800 font-medium hover:from-gray-300 hover:to-gray-400 hover:border-gray-400 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
