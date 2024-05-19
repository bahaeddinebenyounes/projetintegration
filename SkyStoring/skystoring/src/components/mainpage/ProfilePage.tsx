import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProfilePage: React.FC = () => {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    // Fetch user data from API
    axios.get('/api/user/profile')
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      {userData && (
        <div>
          <p>Username: {userData.username}</p>
          <p>Email: {userData.email}</p>
          {/* Additional user profile details */}
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
