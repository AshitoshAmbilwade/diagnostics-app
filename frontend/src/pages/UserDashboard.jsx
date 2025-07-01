import UserProfileForm from "../components/UserProfileForm";

const UserDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-sky-700">User Dashboard</h1>
      <UserProfileForm/>
    </div>
  );
};

export default UserDashboard;