import { useState, useEffect } from 'react';
import axios from 'axios';

const FetchProfilePicture = ({ username }: { username: string }) => {
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const proxyUrl = 'https://api.allorigins.win/get?url=';
        const targetUrl = encodeURIComponent(`https://www.instagram.com/${username}/?__a=1`);
        const response = await axios.get(proxyUrl + targetUrl);
        const data = JSON.parse(response.data.contents.split("window._sharedData = ")[1].split(";</script>")[0]).entry_data.ProfilePage[0].graphql.user;
        setProfileData(data);
      } catch (err) {
        setError(err);
      }
    };

    fetchProfile();
  }, [username]);

  if (error) {
    return <div>Error fetching profile picture</div>;
  }

  if (!profileData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
    </div>
  );
};

export default FetchProfilePicture;