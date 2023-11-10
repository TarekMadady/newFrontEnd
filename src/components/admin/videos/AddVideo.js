import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const AddVideo = (props) => {
  const token = localStorage.getItem("token");
  const inputRef = useRef();
  const title = useRef();
  const [video, setVideo] = useState();

  const HandleImageChange = (event) => {
    event.preventDefault();

    setVideo(event.target.files[0]);
  };

  function addvideoData(event) {
    event.preventDefault();
    console.log(title.current.value);
    const formData = new FormData();
    formData.append("title", title.current.value);
    formData.append("videofile", video);
    fetch(`http://localhost:8000/admin/video/add/${props.course}`, {
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
      });
  }

  function hide() {
    props.env();
  }
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="float-end">
          <Link onClick={hide}>X</Link>
        </h5>
        <h5 className="card-title">اضافة فيديو</h5>
      </div>
      <div className="card-body">
        <form onSubmit={addvideoData}>
          <div className="mb-3">
            <label className="form-label" htmlFor="vtitle">
              عنوان الفيدو
            </label>
            <input
              type="text"
              id="vtitle"
              ref={title}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="vfile">
              ملف الفيديو
            </label>
            <input
              type="file"
              id="vfile"
              ref={inputRef}
              onChange={HandleImageChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            اضافة الفيديو
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddVideo;
