import React, {
  useState,
  useEffect
} from "react";
import CourseCard from "./CourseCard";

const UserOneTrack = ({
    trackid
  }) => {
    const token = localStorage.getItem("token");
    const [trackD, setTrackD] = useState();
    const [tra, setTra] = useState();
    const myData = async () => {
      const response = await fetch(
        `https://tutorialbackend.onrender.com/track/details/${trackid}`, {
          method: "GET",
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      const data = await response.json();
      setTrackD(data.Courses);
      setTra(data);
      // console.log(data);
      // console.log(trackid);
    };
    useEffect(() => {
      myData();
    }, []);

    return ( <
        div className = "row" >
        <
        h5 className = "card-title mb-0 text-center fs-1 text-danger bg-white p-2 border-1 shadow fw-bold text-primary mb-3 " > {
          tra && tra.trackName
        } < /h5> {
          /* <h5 className="text-center h3">{tra && tra.About_track}</h5> */ } <
        div className = "container mt-3" > {
          trackD &&
          trackD.map((t) => < CourseCard key = {
              t._id
            }
            courid = {
              t.course
            }
            />)} <
            hr / >
            <
            /div> <
            /div>
            // </div>
            // </div>
          );
        };

        export default UserOneTrack;

        //  <CourseCard key={t._id} courid={t.course} />

        //<div key={t._id}>{t.course}</div>

        // <div className="row">
        //   <div className="col-4">
        //     <div className="card">
        //       <div className="card-header" dir="rtl">
        //         <h5 className="card-title mb-0">{tra && tra.trackName}</h5>
        //         <p>{tra && tra.About_track}</p>
        //       </div>
        //       <div className="card-body">
        //         {trackD &&
        //           trackD.map((t) => (
        //             <ul key={t._id} dir="rtl">
        //               <CourseCard courid={t.course} />
        //             </ul>
        //           ))}
        //       </div>
        //     </div>
        //   </div>
        // </div>;