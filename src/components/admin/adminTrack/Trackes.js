import React, { useEffect, useState } from "react";
import TrackCard from "../../UI/Track/TrackCard";

const Trackes = (props) => {
  const token = localStorage.getItem("token");
  const [trackes, setTrackes] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const respons = await fetch("http://localhost:8000/admin/track/all", {
      method: "GET",
      headers: {
        Authorization: `${token}`,
      },
    });
    const Data = await respons.json();
    setTrackes(Data);
  };

  return (
    <div className="accordion">
      {trackes.map((track) => (
        <TrackCard
          key={track._id}
          trackName={track.trackName}
          course={track.Courses.length}
          About={track.About_track}
          tid={track._id}
        />
      ))}
    </div>
  );
};

export default Trackes;
