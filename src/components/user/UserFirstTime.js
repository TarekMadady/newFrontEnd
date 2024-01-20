import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserFirstTime = () => {
  const token = localStorage.getItem("token");
  let navigate = useNavigate();
  useEffect(() => {
    getuser();
  }, []);
  const getuser = async () => {
    const respon = await fetch(
      "http://34.41.175.203:8000/user/getfirst",
      {
        method: "GET",
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    const data = await respon.json();
    console.log(data);

    if (data.firstTime) {
      navigate("/choose", {
        replace: true,
      });
    } else {
      navigate("/home", {
        replace: true,
      });
    }
  };
  // return <>hello</>;
};

export default UserFirstTime;
