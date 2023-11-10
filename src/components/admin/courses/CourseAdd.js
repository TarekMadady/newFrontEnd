import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import GetExam from "../../UI/Question/GetExam";

const CourseAdd = (props) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [instruc, setInstruct] = useState([]);
  const [target, setTarget] = useState([]);

  const [exid, setExid] = useState(null);
  const [mystate, setMystate] = useState(false);

  function getEx(id) {
    setExid(id);
  }

  const cName = useRef();
  const conditiontrue = useRef();
  const conditionfalse = useRef();
  const Author = useRef();
  const about = useRef();
  const instruct = useRef();
  const refTarget = useRef();

  function changeCondition() {
    if (conditiontrue.current.checked) {
      setMystate(true);
    } else if (conditionfalse.current.checked) {
      setMystate(false);
    }
    console.log(mystate);
  }

  function addInstruct(event) {
    event.preventDefault();
    setInstruct((previous) => {
      return [instruct.current.value, ...previous];
    });
  }

  function addTarget(event) {
    event.preventDefault();
    setTarget((previous) => {
      return [refTarget.current.value, ...previous];
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    const Data = {
      coursename: cName.current.value,
      condition: mystate,
      examid: exid,
      Author: Author.current.value,
      aboutCourse: about.current.value,
      instruction: instruc,
      target: target,
    };
    fetch(`http://localhost:8000/admin/course/add/${props.trac}`, {
      method: "POST",
      body: JSON.stringify(Data),
      headers: {
        Authorization: `${token}`,
        "content-type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        navigate("/admin/track", { replace: true });
      });
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <label htmlFor="cname" className="form-label">
          اسم الكورس
        </label>
        <input type="text" id="cname" className="form-control" ref={cName} />
      </div>
      <div className="mb-3">
        <label htmlFor="auth" className="form-label">
          اسم المدرب
        </label>
        <input type="text" className="form-control" id="auth" ref={Author} />
      </div>
      <div className="mb-3">
        <label htmlFor="ab" className="form-label">
          معلومات عن الكورس
        </label>
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="ab"
          ref={about}
          style={{ height: "100px" }}
        ></textarea>
      </div>
      <div className="mb-3">
        <label className="form-label">هل هناك امتحان شرط للكورس</label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="checkname"
          id="chtrue"
          ref={conditiontrue}
          onChange={changeCondition}
        />
        <label className="form-check-label" htmlFor="chtrue">
          True
        </label>
        <br />
        <input
          className="form-check-input"
          type="radio"
          name="checkname"
          ref={conditionfalse}
          id="chfalse"
          onChange={changeCondition}
        />
        <label className="form-check-label" htmlFor="chfalse">
          False
        </label>
      </div>
      <div className="mb-3">{mystate ? <GetExam examID={getEx} /> : <></>}</div>
      <div className="mb-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <div>
                <ul className="list-group list-group-flush">
                  {instruc.map((inst) => (
                    <li key={Math.random()} className="list-group-item">
                      {inst}
                    </li>
                  ))}
                </ul>
              </div>
              <input
                type="text"
                className="fom-control"
                placeholder="التعليمات الخاصة بالكورس"
                ref={instruct}
              />
              <button onClick={addInstruct} className="btn btn-success">
                اضافة
              </button>
            </div>
            <div className="col-6">
              <div>
                <ul className="list-group list-group-flush">
                  {target.map((tar) => (
                    <li key={Math.random()} className="list-group-item">
                      {tar}
                    </li>
                  ))}
                </ul>
              </div>
              <input
                type="text"
                placeholder="الاهداف الخاصة بالكورس"
                className="form-control"
                ref={refTarget}
              />
              <button onClick={addTarget} className="btn btn-success">
                اضافة
              </button>
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-primary">اضافة الكورس</button>
    </form>
  );
};

export default CourseAdd;
