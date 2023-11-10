import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DeleteQuestion = (props) => {
  let navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    dele();
  }, []);
  const dele = async () => {
    const respons = await fetch(
      `http://localhost:8000/admin/question/${props.parm}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    const Data = await respons.json();
    console.log(Data);
    navigate("/admin/exam", { replace: true });
  };
  // return <div>hello</div>;
};

export default DeleteQuestion;
