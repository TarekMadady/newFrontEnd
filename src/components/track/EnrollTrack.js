import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EnrollTrack = () => {
  const token = localStorage.getItem("token");
  let navigate = useNavigate();
  const params = useParams();
  const { trackid } = params;
  const enroll = async () => {
    const response = await fetch(
      `https://tutorial.tarekmadady.com/track/enroll/${trackid}`,
      {
        method: "POST",
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    const data = await response.json();

    navigate("/home", {
      replace: true,
    });
    // console.log(data);
  };

  useEffect(() => {
    enroll();
  }, []);
};

export default EnrollTrack;
