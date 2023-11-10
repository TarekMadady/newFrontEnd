import React, { useEffect, useState } from "react";
import VideoCard from "../user/VideoCard";
import CourseName from "./CourseName";
import MCourseActive from "./CourseActivities";

const CourseDetails = ({ courid }) => {
  const token = localStorage.getItem("token");
  const [courVideos, setCourVideos] = useState([]);
  const [cour, setCour] = useState();
  const [acts, setActs] = useState();
  const [libs, setLibs] = useState();
  const [myVideo, setMyVideo] = useState("");

  const [vid, setVid] = useState();
  // const [videoLength, setVideoLength] = useState();

  const fetchCourseData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/course/${courid}`, {
        method: "GET",
        headers: {
          Authorization: `${token}`,
        },
      });
      const data = await response.json();
      console.log(data);
      setCour(data);
      setCourVideos(data.coursevideoes);
      setActs(data.courseActivities);
      setLibs(data.courselibraries);
    } catch (error) {
      console.error("Error fetching course data:", error);
    }
  };

  useEffect(() => {
    fetchCourseData();
  }, [courid]);

  const showVideo = (videoURL) => {
    setMyVideo(videoURL);
  };

  function getvid(id) {
    setVid(id);
  }

  return (
    <main className="container mt-3">
      <div className="navbar bg-success  shadow-lg">
        {courVideos &&
          courVideos.map((c) => (
            <VideoCard
              key={c._id}
              videoid={c.video}
              cl={() =>
                showVideo(`http://localhost:8000/video/show/${c.video}`)
              }
              vi={getvid}
            />
          ))}
      </div>
      <div className="container-fluid bg-white vh-50">
        <div className="row">
          {myVideo && myVideo !== "" ? (
            <video key={myVideo} controls autoPlay className="w-100">
              <source src={myVideo} />
            </video>
          ) : (
            <video controls className="w-100"></video>
          )}
        </div>
        <CourseName key={vid && vid} vid={vid && vid} />
        <div className="row">
          <div className="container-fluid ">
            <div className="row">
              <div className="col-6">
                <div className="container">
                  <div className="row" dir="rtl">
                    <div className="d-flex">
                      <div className="text">
                        عن الكورس: {cour && cour.courseDetails.aboutcourse}
                      </div>
                    </div>
                  </div>
                  <div className="row" dir="rtl">
                    <h1>تعليمات الكورس</h1>
                    <ul>
                      {cour &&
                        cour.courseinstructions.map((t) => (
                          <li key={Math.floor(Math.random() * 1e9)}>{t}</li>
                        ))}
                    </ul>
                  </div>
                  <div className="row" dir="rtl">
                    <h1>الهدف</h1>
                    <ul>
                      {cour &&
                        cour.coursetarget.map((t) => (
                          <li key={Math.floor(Math.random() * 1e9)}>{t}</li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="container">
                  <div className="row" dir="rtl">
                    <div className="h2">
                      اسم المدرب : {cour && cour.courseDetails.courseAuthor}
                    </div>
                  </div>
                  <div className="row" dir="rtl">
                    <h1>الانشطة</h1>
                    <ul>
                      {cour &&
                        cour.courseActivities.map((j) => (
                          <li key={j._id}>
                            <MCourseActive Actid={j.activity} />
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CourseDetails;

// import React, { useEffect, useState } from "react";
// import VideoCard from "../user/VideoCard";

// const CourseDetails = ({ courid }) => {
//   const token = localStorage.getItem("token");
//   const [courVideos, setCourVideos] = useState([]);
//   const [cour, setCour] = useState();
//   const [acts, setActs] = useState();
//   const [libs, setLibs] = useState();
//   const [myVideo, setMyVideo] = useState("");

//   const fetchCourseData = async () => {
//     try {
//       const response = await fetch(`http://localhost:8000/course/${courid}`, {
//         method: "GET",
//         headers: {
//           Authorization: `${token}`,
//         },
//       });
//       const data = await response.json();
//       console.log(data);
//       setCour(data);
//       setCourVideos(data.coursevideoes);
//       setActs(data.courseActivities);
//       setLibs(data.courselibraries);
//     } catch (error) {
//       console.error("Error fetching course data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchCourseData();
//   }, [courid]);

//   const showVideo = (videoURL) => {
//     console.log(videoURL);
//     setMyVideo(videoURL);
//   };

//   return (
//     <main className="container mt-3">
//       <div className="navbar bg-success  shadow-lg">
//         {courVideos &&
//           courVideos.map((c) => (
//             <VideoCard
//               key={c._id}
//               videoid={c.video}
//               cl={() =>
//                 showVideo(`http://localhost:8000/video/show/${c.video}`)
//               }
//             />
//           ))}
//       </div>
//       <div className="container-fluid bg-white vh-50">
//         {myVideo !== "" ? (
//           <video controls autoPlay className="w-100">
//             <source src={myVideo} />
//           </video>
//         ) : (
//           <video controls className="w-100"></video>
//         )}
//       </div>
//     </main>
//   );
// };
