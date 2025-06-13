import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ image, bgColor, title, subtitle, route }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(route)}
      className="rounded-2xl overflow-hidden shadow w-[200px] hover:shadow-lg transition-all duration-300 cursor-pointer bg-white sm:w-[300px] mx-auto"
    >
      {/* Top Section */}
      <div className={`${bgColor} h-52 flex items-center justify-center`}>
        <img src={image} alt={title} className="h-full object-contain" />
      </div>

      {/* Bottom Section */}
      <div className="px-4 py-5 text-center">
        <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-1">
          {title}
        </h3>
        <p className="text-sm text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
};

const ServiceCards = () => {
  const services = [
    {
      title: "Instant Video Consultation",
      subtitle: "Connect within 60 secs",
      bgColor: "bg-blue-100",
      image:
        "https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_instant_video_consulation.png",
      route: "/video-consultation",
    },
    {
      title: "Find Doctors Near You",
      subtitle: "Confirmed appointments",
      bgColor: "bg-teal-100",
      image:
        "https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_find_doctors.png",
      route: "/find-doctors",
    },
    {
      title: "Surgeries",
      subtitle: "Safe and trusted surgery centers",
      bgColor: "bg-purple-100",
      image:
        "https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_surgeries.png",
      route: "/surgeries",
    },
  ];

  return (
    <div className="w-full bg-white py-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
