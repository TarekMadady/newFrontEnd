import React, { useEffect, useState, useRef } from "react";

const ATrack = (props) => {
  const tid = useRef();
  const token = localStorage.getItem("token");
  const [track, setTrack] = useState([]);
  useEffect(() => {
    search();
  }, []);
  const search = async () => {
    const respons = await fetch("http://localhost:8000/admin/track/all", {
      method: "GET",
      headers: {
        Authorization: `${token}`,
      },
    });
    const data = await respons.json();
    setTrack(data);
  };

  function selecthandle() {
    props.chanTid(tid.current.value);
  }

  return (
    <select
      className="form-select"
      aria-label="Default select example"
      ref={tid}
      onChange={selecthandle}
      defaultValue={"DEFAULT"}
    >
      <option value="DEFAULT">اختر مسار</option>
      {track.map((tr) => (
        <option key={tr._id} value={tr._id}>
          {tr.trackName}
        </option>
      ))}
    </select>
  );
};

export default ATrack;
