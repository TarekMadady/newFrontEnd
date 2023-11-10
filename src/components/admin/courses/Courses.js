import React, { useEffect, useState } from "react";
import CoursCard from "../../UI/Courses/CourseCard";

const Courses = () => {
  const token = localStorage.getItem("token");
  const [course, setCourse] = useState([]);
  useEffect(() => {
    getAllCourse();
  }, []);
  const getAllCourse = async () => {
    const response = await fetch("http://localhost:8000/admin/course/all", {
      method: "GET",
      headers: {
        Authorization: `${token}`,
      },
    });
    const Data = await response.json();
    setCourse(Data);
  };
  return (
    <>
      {course.map((cour) => (
        <CoursCard
          key={cour._id}
          title={cour.coursename}
          target={cour.coursetarget[0]}
          ins={cour.courseinstructions[0]}
          video={cour.coursevideoes.length}
          id={cour._id}
        />
      ))}
    </>
  );
};
export default Courses;
