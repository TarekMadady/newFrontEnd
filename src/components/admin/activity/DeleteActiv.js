import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const DeleteActiv = () => {
  let navigate = useNavigate();
  const token = localStorage.getItem("token");
  const parm = useParams();
  const { actid } = parm;
  useEffect(() => {
    removeActive();
  }, []);
  const removeActive = async () => {
    const respon = await fetch(
      `https://tutorial.tarekmadady.com/admin/activity/${actid}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    const data = await respon.json();
    if (data) {
      navigate("/admin/activities", { replace: true });
    }
  };
  return <div>Delete</div>;
};

export default DeleteActiv;
