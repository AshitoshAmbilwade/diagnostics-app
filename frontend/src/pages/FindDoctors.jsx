import ConsultDoctorSection from "../components/ConsultDoctorSection";
import DoctorsHero from "../components/DoctorsHero";
import SearchSection from "../components/SearchSection";
import SecuritySection from "../components/SecuritySection";

const FindDoctorsPage = () => {
  return (
    <>
      <SearchSection/>
      <DoctorsHero/>
      <SecuritySection/>
      <ConsultDoctorSection/>
      {/* Add more content here like filters, doctor cards, etc. */}
    </>
  );
};

export default FindDoctorsPage;
