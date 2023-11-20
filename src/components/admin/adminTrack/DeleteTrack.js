import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DeleteTrack = (props) => {
  const token = localStorage.getItem("token");
  let navigate = useNavigate();
  useEffect(() => {
    Delete();
  }, []);
  const Delete = async () => {
    const respons = await fetch(
      `https://testb.oneproduct.online/admin/track/${props.id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    const data = await respons.json();
    if (data) {
      navigate("/admin/track", {
        replace: true,
      });
    }
  };
};

export default DeleteTrack;
