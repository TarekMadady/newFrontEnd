import React, { useEffect, useState } from "react";
import TrackCard from "../UI/trackCard/TrackCard";

const Track3D = () => {
  const [trackData, setTrackData] = useState([]);
  const token = localStorage.getItem("token");
  const getTrack2d = async () => {
    const response = await fetch("http://localhost:8000/track/3d", {
      method: "GET",
      headers: {
        Authorization: `${token}`,
      },
    });
    const data = await response.json();
    console.log(data);
    setTrackData(data);
  };

  useEffect(() => {
    getTrack2d();
  }, []);

  return (
    <div>
      {trackData &&
        trackData.map((track) => (
          <TrackCard
            key={track._id}
            title={track.trackName}
            tag={track.tags}
            id={track._id}
            about={track.About_track}
          />
        ))}
    </div>
  );
};

export default Track3D;
