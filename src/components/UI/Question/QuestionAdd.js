import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import GetVideo from "./GetVideo";

const QuestionAdd = (props) => {
  let navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [image, setImage] = useState();

  // let exid;

  let vide = null;
  function videoid(id) {
    vide = id;
  }
  // let file = null;
  // const [formData, setFormData] = useState(null);

  const Qtitle = useRef();
  const Qtype = useRef();
  const qDegree = useRef();
  const inputRef = useRef();
  const HandleImageChange = (event) => {
    event.preventDefault();
    // file = event.target.files[0];
    //console.log(file);
    setImage(event.target.files[0]);
    console.log(image);
  };

  function submitQuestionForm(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", Qtitle.current.value);
    formData.append("imgattach", image);
    formData.append("type", Qtype.current.value);
    formData.append("degree", qDegree.current.value);
    formData.append("video", vide);

    fetch(`http://localhost:8000/admin/question/add/${props.exid}`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `${token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        navigate("/admin/questions", {
          replace: true,
        });
      });
  }

  return (
    <>
      <form onSubmit={submitQuestionForm}>
        <div className="mb-3">{/* <GetExam examID={examID} /> */}</div>
        <div className="mb-3">
          <label className="form-label" htmlFor="questTitle">
            السؤال
          </label>
          <input
            type="text"
            className="form-control"
            id="questTitle"
            ref={Qtitle}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="qimage">
            صورة للسؤال
          </label>
          <input type="file" ref={inputRef} onChange={HandleImageChange} />
          {image ? (
            <img
              src={URL.createObjectURL(image)}
              alt=""
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            />
          ) : (
            <img src="" alt="" />
          )}
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="questType">
            نوع الاجابة
          </label>
          <select className="form-control" id="questType" ref={Qtype}>
            <option value="0">اختر نوع الجابة</option>
            <option value="single">Single</option>
            <option value="multiChoice">Multi choice</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="questDegree">
            درجة السؤال
          </label>
          <input
            type="number"
            id="questDegree"
            className="form-control"
            ref={qDegree}
          />
        </div>
        <div className="mb-3">
          <GetVideo vid={videoid} />
        </div>
        <button type="submit" className="btn btn-success">
          اضافةالسؤال
        </button>
      </form>
    </>
  );
};

export default QuestionAdd;
