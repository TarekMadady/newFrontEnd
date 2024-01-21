import React, { useEffect, useState } from "react";
import TrackCard from "../UI/trackCard/TrackCard";

const Track2D = () => {
  const [trackData, setTrackData] = useState([]);
  const token = localStorage.getItem("token");
  const getTrack2d = async () => {
    const response = await fetch("https://api.motiongraphic.tech/track/2d", {
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
    <div className="d-flex justify-content-around flex-wrap">
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

export default Track2D;
