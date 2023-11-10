import React, { useEffect, useState, useRef } from "react";

const GetExam = (props) => {
  const token = localStorage.getItem("token");
  const exid = useRef();
  const [exam, setExam] = useState([]);
  useEffect(() => {
    examData();
  }, []);
  const examData = async () => {
    const response = await fetch("http://localhost:8000/admin/exam/all", {
      method: "GET",
      headers: {
        Authorization: `${token}`,
        "content-type": "application/json",
      },
    });
    const Data = await response.json();
    console.log(Data);
    setExam(Data);
  };

  function changevalue() {
    const id = exid.current.value;
    console.log(id);
    props.examID(id);
  }

  return (
    <select className="form-control" ref={exid} onChange={changevalue}>
      <option value="0">اختر امتحان</option>
      {exam.length === 0 ? (
        <option> مفيش امتحان </option>
      ) : (
        exam.map((exm) => (
          <option key={exm._id} value={exm._id}>
            {exm.examname}
          </option>
        ))
      )}
    </select>
  );
};

export default GetExam;
