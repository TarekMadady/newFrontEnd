import React, { useRef } from "react";
// import { useNavigate } from "react-router-dom";

const ExamCreate = () => {
  const token = localStorage.getItem("token");

  const eName = useRef();
  const eDegree = useRef();
  const sucPersnet = useRef();
  const exQCount = useRef();

  function sendData(event) {
    event.preventDefault();
    const Data = {
      examName: eName.current.value,
      examDegree: eDegree.current.value,
      examSucessPersent: sucPersnet.current.value,
      examQuestionCount: exQCount.current.value,
    };
    fetch("http://localhost:8000/admin/exam/create", {
      method: "POST",
      body: JSON.stringify(Data),
      headers: {
        "content-type": "application/json",
        Authorization: `${token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // navigate("/admin/exam", {
        //   replace: true,
        // });
        window.location.reload(false);
      });
  }
  return (
    <form onSubmit={sendData} className="">
      <div className="mb-3">
        <label htmlFor="eName" className="form-label">
          اسم الامتحان
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Exam Name"
          id="eName"
          ref={eName}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="eDegree" className="form-label">
          درجة الامتحان
        </label>
        <input
          type="number"
          className="form-control"
          placeholder="20"
          id="eDegree"
          ref={eDegree}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="sucPersent">
          نسبة النجاح
        </label>
        <input
          type="number"
          id="sucPersent"
          className="form-control"
          ref={sucPersnet}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="Qcount">
          عدد اسئلة الامتحان
        </label>
        <input
          type="number"
          id="Qcount"
          className="form-control"
          ref={exQCount}
        />
      </div>
      <button className="btn btn-primary" type="submit">
        اضافة الامتحان
      </button>
    </form>
  );
};

export default ExamCreate;
