import React, { useEffect, useState } from "react";
import UserOneTrack from "../../components/user/UserOneTrack";

const UserTrack = () => {
  const token = localStorage.getItem("token");
  const [tracks, setTracks] = useState();

  const myData = async () => {
    const response = await fetch(
      "https://api.motiongraphic.tech/track/usertrack",
      {
        method: "GET",
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    const data = await response.json();
    setTracks(data);
  };
  useEffect(() => {
    myData();
  }, []);

  return (
    <div className="container mt-3">
      {tracks &&
        tracks.map((t) => <UserOneTrack key={t._id} trackid={t.track} />)}
    </div>
  );
};

export default UserTrack;
