import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DeleteExam = (props) => {
  let navigate = useNavigate();
  const examid = props.parm;
  const token = localStorage.getItem("token");

  const deldata = async () => {
    const response = await fetch(
      `https://api.motiongraphic.tech/admin/exam/${examid}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `${token}`,
        },
      }
    );

    const data = await response.json();
    console.log(data);
    navigate("/admin/exam", {
      replace: true,
    });
  };

  useEffect(() => {
    deldata();
  }, []);
};

export default DeleteExam;
