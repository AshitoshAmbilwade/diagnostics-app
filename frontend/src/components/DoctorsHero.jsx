import { CheckCircle, Star } from "lucide-react";

const DoctorsHero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row items-center justify-between gap-12">
      
      {/* LEFT SIDE */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6 leading-snug">
          Instant appointment with doctors.
          <span className="font-bold text-gray-900"> Guaranteed.</span>
        </h1>

        <ul className="text-gray-600 space-y-3 mb-6">
          <li className="flex items-center justify-center lg:justify-start">
            <CheckCircle className="text-sky-500 w-5 h-5 mr-2" />
            <span><strong>100,000</strong> Verified doctors</span>
          </li>
          <li className="flex items-center justify-center lg:justify-start">
            <CheckCircle className="text-sky-500 w-5 h-5 mr-2" />
            <span><strong>3M+</strong> Patient recommendations</span>
          </li>
          <li className="flex items-center justify-center lg:justify-start">
            <CheckCircle className="text-sky-500 w-5 h-5 mr-2" />
            <span><strong>25M</strong> Patients/year</span>
          </li>
        </ul>

        <button className="bg-black hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-md mb-8">
          Find me the right doctor
        </button>

        {/* TESTIMONIAL */}
        <div className="mt-4">
          <div className="flex items-center justify-center lg:justify-start text-green-600 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <p className="text-gray-700 text-sm max-w-md mx-auto lg:mx-0">
            Very helpful. Far easier than doing same things on computer.
            Allows quick and easy search with speedy booking.
            Even maintains history of doctors visited.
          </p>
          <div className="mt-3 flex items-center justify-center lg:justify-start gap-2">
            <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 text-xs">
              👤
            </div>
            <span className="text-sm text-gray-800">Amit Sharma</span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE – Only Video */}
      <div className="lg:w-1/2 flex justify-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-[50%] h-[50%] max-w-sm rounded-xl shadow-xl"
          src="https://www.practostatic.com/web-assets/home/assets/videos/appointment.700ce682eaec91bf93b6574cb8f09cd0.webm"
        />
      </div>
    </div>
  );
};

export default DoctorsHero;
