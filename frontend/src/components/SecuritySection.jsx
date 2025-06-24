import { CheckCircle } from "lucide-react";
import lockIcon from "../assets/lock-icon.png";
import isoIcon from "../assets/iso-icon.png";
import serverIcon from "../assets/server-icon.png";
import shieldIcon from "../assets/shield-icon.png";
import securityImg from "../assets/illustration.png"; // the image of 2 guards and file

const SecuritySection = () => {
  const features = [
    "Multi-level security checks",
    "Multiple data backups",
    "Stringent data privacy policies",
  ];

  const badges = [
    {
      labelTop: "256-bit",
      labelBottom: "encryption",
      icon: lockIcon,
    },
    {
      labelTop: "ISO 27001",
      labelBottom: "certified",
      icon: isoIcon,
    },
    {
      labelTop: "HIPAA",
      labelBottom: "compliant data centers",
      icon: serverIcon,
    },
    {
      labelTop: "DSCI",
      labelBottom: "member",
      icon: shieldIcon,
    },
  ];

  return (
    <div className="bg-[#f6f7fb] py-16 px-4 sm:px-8">
      {/* Top Content */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* Left */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 leading-snug mb-6">
            Safety of your data is our <span className="font-bold">top priority.</span>
          </h2>

          <ul className="space-y-4 mb-8">
            {features.map((item, i) => (
              <li key={i} className="flex items-center text-gray-600 text-base">
                <CheckCircle className="w-5 h-5 text-sky-500 mr-3" />
                {item}
              </li>
            ))}
          </ul>

          <button className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-5 py-3 rounded-md">
            Read more
          </button>
        </div>

        {/* Right */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={securityImg}
            alt="Security Illustration"
            className="w-[300px] sm:w-[320px] md:w-[350px] lg:w-[380px]"
          />
        </div>
      </div>

      {/* Badges */}
      <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
        {badges.map((badge, i) => (
          <div key={i} className="flex flex-col items-center">
            <img src={badge.icon} alt={badge.labelTop} className="w-10 h-10 mb-2" />
            <p className="text-sm text-gray-700 font-medium">
              {badge.labelTop} <br /> {badge.labelBottom}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecuritySection;
