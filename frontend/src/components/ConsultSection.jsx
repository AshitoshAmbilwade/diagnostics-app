import React from "react";

// Individual card component
const HealthConcernCard = ({ image, title }) => (
  <div className="w-full h-[210px] flex flex-col items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition cursor-pointer text-center">
    <div className="w-20 h-20 mb-2">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-contain rounded-full"
      />
    </div>
    <div className="flex flex-col justify-between flex-1">
      <p className="text-sm font-medium text-gray-900 leading-tight mb-1">
        {title}
      </p>
      <p className="text-sm text-sky-500 font-semibold">CONSULT NOW</p>
    </div>
  </div>
);

// Main section component
const ConsultSection = () => {
  const healthConcerns = [
    {
      image:
        "https://www.practostatic.com/consult/consult-home/symptoms_icon/irregular-painful+period.png",
      title: "Period doubts or Pregnancy",
    },
    {
      image: "https://www.practostatic.com/consult/consult-home/symptoms_icon/Acne.png",
      title: "Acne, pimple or skin issues",
    },
    {
      image: "https://www.practo.com/consult/static/images/top-speciality-sexology.svg",
      title: "Performance issues in bed",
    },
    {
      image: "https://www.practostatic.com/consult/consult-home/symptoms_icon/coughing.png",
      title: "Cold, cough or fever",
    },
    {
      image: "https://www.practo.com/consult/static/images/top-speciality-pediatric.svg",
      title: "Child not feeling well",
    },
    {
      image: "https://www.practostatic.com/acred/search-assets/2/12-mental-wellness.png",
      title: "Depression or anxiety",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      {/* Header and button */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-6 lg:mb-8">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
            Consult top doctors online for any health concern
          </h2>
          <p className="text-gray-600 text-sm lg:text-base">
            Private online consultations with verified doctors in all specialties
          </p>
        </div>
        <button className="mt-4 lg:mt-0 px-4 py-2 bg-black text-white border border-black rounded-md text-sm font-medium hover:bg-gray-800 transition">
          View All Specialties
        </button>
      </div>

      {/* Grid of fixed-size cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {healthConcerns.map((concern, index) => (
          <HealthConcernCard key={index} {...concern} />
        ))}
      </div>
    </div>
  );
};

export default ConsultSection;
