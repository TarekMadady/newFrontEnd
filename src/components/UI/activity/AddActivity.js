import React, { useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import GetCourses from "../../UI/Courses/GetCourses";

const AddActivity = (props) => {
  // console.log("couid", props.id);
  // let navigate = useNavigate();
  const token = localStorage.getItem("token");
  const atitle = useRef();

  function addActive(event) {
    event.preventDefault();
    const Data = {
      title: atitle.current.value,
    };
    fetch(`http://localhost:8000/admin/activity/add/${props.id}`, {
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
        console.log(data);
        window.location.reload(false);
      });
  }

  return (
    <form onSubmit={addActive}>
      <div className="mb-3">
        <label className="form-label" htmlFor="actitle">
          النشاط
        </label>
        <input type="text" id="actitle" className="form-control" ref={atitle} />
      </div>
      <button type="submit" className="btn btn-primary">
        اضافة النشاط
      </button>
    </form>
  );
};

export default AddActivity;
