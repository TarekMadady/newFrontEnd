import React, { useEffect, useRef, useState } from "react";

const GetCourses = (props) => {
  const token = localStorage.getItem("token");
  const [course, setCourse] = useState([]);
  const cid = useRef();
  useEffect(() => {
    courseData();
  }, []);
  const courseData = async () => {
    const respon = await fetch("http://localhost:8000/admin/course/all", {
      method: "GET",
      headers: {
        Authorization: `${token}`,
      },
    });
    const data = await respon.json();
    setCourse(data);
  };
  function changevalue() {
    const id = cid.current.value;
    props.courID(id);
  }
  return (
    <>
      <select
        className="form-select"
        ref={cid}
        aria-label="Default select example"
        onChange={changevalue}
      >
        <option value="0">اختر كورس</option>
        {course.length === 0 ? (
          <option>مفيش كورسات</option>
        ) : (
          course.map((co) => (
            <option key={co._id} value={co._id}>
              {co.coursename}
            </option>
          ))
        )}
      </select>
    </>
  );
};

export default GetCourses;
