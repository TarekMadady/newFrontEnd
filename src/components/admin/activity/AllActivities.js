import React, { useEffect, useState } from "react";
import ActivityCard from "../../UI/activity/ActivityCard";

const AllActivities = () => {
  const token = localStorage.getItem("token");
  const [activ, setActiv] = useState([]);
  useEffect(() => {
    getActiv();
  }, []);
  const getActiv = async () => {
    const respon = await fetch("http://localhost:8000/admin/activity/all", {
      method: "GET",
      headers: {
        Authorization: `${token}`,
      },
    });
    const data = await respon.json();
    setActiv(data);
  };
  return (
    <>
      {activ.length > 0 ? (
        activ.map((act) => (
          <ActivityCard
            key={act._id}
            title={act.title}
            ucount={act.userD.length}
            id={act._id}
          />
        ))
      ) : (
        <div>No Active exist</div>
      )}
    </>
  );
};
export default AllActivities;
