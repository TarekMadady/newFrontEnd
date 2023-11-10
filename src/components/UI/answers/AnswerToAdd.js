import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const AnswerToAdd = (props) => {
  // let navigate = useNavigate();
  const [ansImage, setAnsImage] = useState();
  // const [qid, setQid] = useState("");
  const AnsTitle = useRef();
  const AnsDegree = useRef();
  const AnsResult = useRef();
  const AnsInput = useRef();

  const token = localStorage.getItem("token");
  // setQid(props.id);
  const HandleImageChange = (event) => {
    event.preventDefault();
    setAnsImage(event.target.files[0]);
  };
  function submitQuestionForm(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", AnsTitle.current.value);
    formData.append("imgattach", ansImage);
    formData.append("degree", AnsDegree.current.value);
    formData.append("result", AnsResult.current.checked);
    // console.log(AnsResult.current.checked);
    fetch(`http://localhost:8000/admin/answer/add/${props.id}`, {
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
        window.location.reload(false);
        // console.log(data.status);
        // navigate("/admin/questions", { replace: true });
      });
  }
  function CL() {
    props.clo();
  }
  return (
    <>
      <div className="row">
        <div className="col-11 col-lg-6 mx-auto rounded">
          <div className="card">
            <div className="card-header">
              <Link className="float-end" onClick={CL}>
                X
              </Link>
              <h5 className="card-title mb-0">اضافة اجابة</h5>
            </div>
            <div className="card-body">
              <form onSubmit={submitQuestionForm}>
                <div className="mb-3">
                  <label className="form-label" htmlFor="ansTitle">
                    الاجابة
                  </label>
                  <input
                    type="text"
                    placeholder="Answer Title"
                    className="form-control"
                    id="ansTitle"
                    ref={AnsTitle}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="ansImage">
                    صورة الاجابة
                  </label>
                  <input
                    type="file"
                    ref={AnsInput}
                    onChange={HandleImageChange}
                  />
                  {ansImage ? (
                    <img
                      src={URL.createObjectURL(ansImage)}
                      alt=""
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                      }}
                    />
                  ) : (
                    <img src="" alt="" />
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="degreeN">
                    درجة السؤال
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="degreeN"
                    ref={AnsDegree}
                  />
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="ansResult"
                      id="ans01"
                      value={true}
                      ref={AnsResult}
                    />
                    <label className="form-check-label" htmlFor="ans01">
                      True
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="ansResult"
                      id="ans01"
                      value={false}
                    />
                    <label className="form-check-label" htmlFor="ans02">
                      false
                    </label>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  اضافة الاجابة
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnswerToAdd;
