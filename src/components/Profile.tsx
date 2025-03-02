import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import SignInSignUp from "./SignInSignUp";

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const axiosInstance = axios.create({
    baseURL: "https://i.instagram.com/",
    headers: {
      "Content-Type": "application/json",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
      "Accept-Language": "en-US,en;q=0.9,ru;q=0.8",
      "Accept-Encoding": "gzip, deflate, br",
      Accept: "*/*",
      "x-ig-app-id": "", // API KEY GOES HERE
    },
  });

  useEffect(() => {
    const fetchData = async (username: string) => {
      const response = await axiosInstance.get(
        `/api/v1/users/web_profile_info/?username=${username}`
      );
      setProfileData(response.data);
      console.log(profileData);
    };

    fetchData("instagram");
  }, []);
  return (
    <div className="text-white px-3 lg:px-36 text-6xl flex flex-col gap-3">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4 text-better-green">
        PROFILE
      </h2>
      <SignInSignUp />

      {/* I've already Configured the Instagram JSON data type, just take the response into profileData*/}
      {profileData && (
        <>
          <h4 className="text-4xl">{profileData.user.full_name}</h4>
          <h4 className="text-xl">{profileData.user.biography}</h4>
          <h4 className="text-xl">{profileData.user.pronouns}</h4>
          <h4 className="text-2xl">Rank:{}</h4>
          <h4 className="text-2xl">Points:{}</h4>
        </>
      )}
    </div>
  );
};

export default Profile;
