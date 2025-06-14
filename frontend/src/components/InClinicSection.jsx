import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SpecialtyCard = ({ title, subtitle, image }) => (
  <div className="min-w-[240px] sm:min-w-[260px] lg:min-w-[280px] bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition duration-300">
    <div className="aspect-video bg-gray-100">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-4">
      <h3 className="text-base font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{subtitle}</p>
    </div>
  </div>
);

const InClinicSection = () => {
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const atStart = container.scrollLeft === 0;
    const atEnd = container.scrollLeft + container.offsetWidth >= container.scrollWidth - 1;

    setShowLeft(!atStart);
    setShowRight(!atEnd);
  };

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = container.offsetWidth * 0.8;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    handleScroll();
  }, []);

  const specialties = [
    {
      title: "General surgeon",
      subtitle: "Need to get operated? Find the right surgeon",
      image: "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-general-surgeon@2x.jpg",
    },
    {
      title: "Orthopedist",
      subtitle: "For Bone and Joints issues, spinal injuries and more",
      image: "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-orthopedist@2x.jpg",
    },
    {
      title: "General physician",
      subtitle: "Find the right family doctor in your neighborhood",
      image: "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-general-doctor@2x.jpg",
    },
    {
      title: "Pediatrician",
      subtitle: "Child Specialists and Doctors for Infant",
      image: "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-pediatrician@2x.jpg",
    },
    {
      title: "Dentist",
      subtitle: "Teething troubles? Schedule a dental checkup",
      image: "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg",
    },
    {
      title: "Gynecologist/Obstetrician",
      subtitle: "Explore for women’s health, pregnancy and infertility treatments",
      image: "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gynecologist@2x.jpg",
    },
    {
      title: "Dietitian/Nutrition",
      subtitle: "Get guidance on eating right, weight management and sports nutrition",
      image: "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dietitian@2x.jpg",
    },
    {
      title: "Physiotherapist",
      subtitle: "Pulled a muscle? Get treated by a trained physiotherapist",
      image: "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-physiotherapist@2x.jpg",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
          Book an appointment for an in-clinic consultation
        </h2>
        <p className="text-gray-600 text-sm lg:text-base">
          Find experienced doctors across all specialties
        </p>
      </div>

      {/* Scrollable Cards with Arrows */}
      <div className="relative">
        {/* Left Arrow */}
        {showLeft && (
          <button
            onClick={() => scroll("left")}
            style={{
              backgroundColor: "white",
              border: "none",
              borderRadius: "50%",
              width: "36px",
              height: "36px",
              padding: 0,
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden lg:flex items-center justify-center shadow hover:bg-gray-100 transition"
          >
            <ChevronLeft className="w-5 h-5 text-black" />
          </button>
        )}

        {/* Scrollable container */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto scroll-smooth py-2 px-1"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style>{`div::-webkit-scrollbar { display: none; }`}</style>
          {specialties.map((item, idx) => (
            <SpecialtyCard key={idx} {...item} />
          ))}
        </div>

        {/* Right Arrow */}
        {showRight && (
          <button
            onClick={() => scroll("right")}
            style={{
              backgroundColor: "white",
              border: "none",
              borderRadius: "50%",
              width: "36px",
              height: "36px",
              padding: 0,
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden lg:flex items-center justify-center shadow hover:bg-gray-100 transition"
          >
            <ChevronRight className="w-5 h-5 text-black" />
          </button>
        )}
      </div>
    </div>
  );
};

export default InClinicSection;
