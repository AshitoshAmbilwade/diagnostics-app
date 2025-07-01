import { useEffect, useState } from "react";
import axios from "../utils/axios";

function DoctorProfileForm() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await axios.get("/users"); // fetch all users
        const userEmail = localStorage.getItem("userEmail");
        const userRole = localStorage.getItem("userRole");

        if (userEmail && userRole === "doctor") {
          const matchedUser = res.data.find(
            (u) => u.email === userEmail && u.role === "doctor"
          );
          setUser(matchedUser);
          console.log("Matched doctor user:", matchedUser);
        } else {
          console.warn("No valid doctor credentials found.");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }

    fetchUser();
  }, []);

  if (!user) return <p className="text-black">Loading...</p>;

  return (
    <div>
      <h1 className="text-black">Welcome, Dr. {user.name}</h1>
      <p className="text-black">Email: {user.email}</p>
      <p className="text-black">Role: {user.role}</p>
    </div>
  );
}

export default DoctorProfileForm;
