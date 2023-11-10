import React, { useState, useEffect } from "react";
import CourseCard from "../UI/CourseCard";

const Courses = () => {
  const [cours, setCours] = useState();
  const myData = async () => {
    const response = await fetch("http://localhost:8000/track/allfree", {
      method: "GET",
    });
    const data = await response.json();
    console.log(data);
    setCours(data);
  };
  useEffect(() => {
    myData();
  }, []);
  return (
    <section id="popular-courses" className="courses" dir="rtl">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          {/* <h2>مسارات</h2> */}
          <p>المديولات التعليمية</p>
        </div>
        <div className="row" data-aos="zoom-in" data-aos-delay="100">
          {cours &&
            cours.map((m) => (
              <CourseCard
                key={m._id}
                tname={m.trackName}
                tabout={m.About_track}
              />
            ))}
          {/* <CourseCard /> */}
        </div>
      </div>
    </section>
  );
};

export default Courses;
