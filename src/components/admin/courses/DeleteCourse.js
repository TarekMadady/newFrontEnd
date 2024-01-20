import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DeleteCourse = (props) => {
  let navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    Dlete();
  }, []);
  const Dlete = async () => {
    const respon = await fetch(
      `http://34.41.175.203/admin/course/${props.id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    const Data = await respon.json();
    if (Data) {
      navigate("/admin/courses", {
        replace: true,
      });
    }
  };
  // return <> Hello </>;
};

export default DeleteCourse;
