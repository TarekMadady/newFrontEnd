import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
const DeleteVideo = () => {
  let navigate = useNavigate();
  const param = useParams();
  const { vid } = param;
  const token = localStorage.getItem("token");
  useEffect(() => {
    Del();
  }, []);
  const Del = async () => {
    const respon = await fetch(
      `http://api.motiongraphic.tech/admin/video/${vid}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    const data = await respon.json();
    if (data) {
      navigate("/admin/video/all", {
        replace: true,
      });
    }
  };
  // return <>hello</>;
};

export default DeleteVideo;
