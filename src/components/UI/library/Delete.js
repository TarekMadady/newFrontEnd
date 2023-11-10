import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Delete = () => {
  let navigate = useNavigate();
  const token = localStorage.getItem("token");
  const parm = useParams();
  const { libid } = parm;
  useEffect(() => {
    Dele();
  }, []);
  const Dele = async () => {
    const repon = await fetch(`http://localhost:8000/admin/library/${libid}`, {
      method: "DELETE",
      headers: {
        Authorization: `${token}`,
      },
    });
    const data = await repon.json();
    window.location.reload(false);
    // console.log(data);
    navigate("/admin/track", { replace: true });
  };
  // return <>hello</>;
};

export default Delete;
