import { useEffect, useState } from "react";
import { useUser } from '../context/UserContext';
import './profile.css';

const Profile = () => {
  const { email, logout, getProfile } = useUser();
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await getProfile();
      setProfileData(data);
    };
    fetchProfile();
  }, [getProfile]);

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      {profileData && <p>Email: {profileData.email}</p>}
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Profile;