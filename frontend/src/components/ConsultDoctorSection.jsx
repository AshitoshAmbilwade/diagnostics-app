import { CheckCircle, Star, UserCircle } from "lucide-react";

const ConsultDoctorSection = () => {
  return (
    <div className="bg-[#f6f7fb] py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        
        {/* LEFT – Video inside phone frame */}
        <div className="lg:w-1/2 flex justify-center relative max-w-sm">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-[70%] h-[70%]max-w-sm rounded-xl shadow-xl"
            src="https://www.practostatic.com/web-assets/home/assets/videos/consult.099446892618434cc8a038d7844c4380.webm"
          />
        </div>

        {/* RIGHT – Text content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 leading-snug mb-4">
            Skip the waiting room.
            <br />
            <span className="text-gray-900 font-bold">Consult with a doctor</span>
          </h2>

          <ul className="text-gray-700 text-base space-y-3 mb-6">
            <li className="flex items-center justify-center lg:justify-start">
              <CheckCircle className="w-5 h-5 text-sky-500 mr-2" />
              Fees starting at <strong className="ml-1">₹99</strong>
            </li>
            <li className="flex items-center justify-center lg:justify-start">
              <CheckCircle className="w-5 h-5 text-sky-500 mr-2" />
              Verified doctors respond in <strong className="ml-1">5 minutes</strong>
            </li>
            <li className="flex items-center justify-center lg:justify-start">
              <CheckCircle className="w-5 h-5 text-sky-500 mr-2" />
              <strong>100%</strong> Private and confidential
            </li>
          </ul>

          <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
            <button className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-3 rounded-md">
              Consult now
            </button>
            <div className="flex items-center text-sm text-gray-700">
              <span className="w-4 h-4 bg-blue-200 rounded-full mr-1"></span>
              <strong>87786</strong> doctors online
            </div>
          </div>

          {/* Review */}
          <div className="text-left lg:text-left mt-4 max-w-md mx-auto lg:mx-0">
            <div className="flex items-center text-green-600 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-sm text-gray-600">
              Good initiative. The doctors are responsive and provide you a brief consultation
            </p>
            <div className="mt-2 flex items-center gap-2">
              <UserCircle className="w-5 h-5 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Aaron Moitra</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultDoctorSection;
