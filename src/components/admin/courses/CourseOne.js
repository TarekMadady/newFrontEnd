import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import VideoData from "./VideoData";
import AddVideo from "../videos/AddVideo";
import CourseBaseData from "./CourseBaseData";
import CourseInstruct from "./CourseInstruct";
import CourseTarget from "./CourseTarget";
import CourseVideoes from "./CourseVides";
import CourseActiv from "./CourseActiv";
import AddActivity from "../../UI/activity/AddActivity";
import GetLibrary from "./GetLibrary";
import AddLibrary from "../../UI/library/AddLibrary";

const CourseOne = () => {
  const param = useParams();
  const { cid } = param;
  const token = localStorage.getItem("token");
  const [courseD, setCourseD] = useState();
  const [addPanel, setAddPanel] = useState(false);
  const [addActive, setAddActive] = useState(false);
  const [addLib, setAddLib] = useState(false);

  const myData = async () => {
    const response = await fetch(
      `http://localhost:8000/admin/course/details/${cid}`,
      {
        method: "GET",
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    const data = await response.json();
    setCourseD(data);
  };

  useEffect(() => {
    myData();
  }, []);

  function showaddPanel() {
    setAddPanel(true);
  }

  function hideaddPanel() {
    setAddPanel(false);
  }

  function showAddActive() {
    setAddActive(true);
  }

  function hideAddActive() {
    setAddActive(false);
  }

  function showLib() {
    setAddLib(true);
  }

  return (
    <>
      <h1 className="h3  m-3">{courseD && courseD.coursename}</h1>
      <div className="row mx-3">
        <div
          className="col-12 col-md-6 col-xxl-3 d-flex order-2 order-xxl-3"
          dir="rtl"
        >
          <div className="card flex-fill w-100">
            <div className="card-header">
              <h5 className="card-title mb-0">البيانات الاساسية</h5>
            </div>
            <CourseBaseData
              hour={courseD && courseD.courseDetails.courseHour}
              Author={courseD && courseD.courseDetails.courseAuthor}
              About={courseD && courseD.courseDetails.aboutcourse}
            />
          </div>
        </div>
        <div
          className="col-12 col-md-6 col-xxl-3 d-flex order-2 order-xxl-3"
          dir="rtl"
        >
          <div className="card flex-fill w-100">
            <div className="card-header">
              <h5 className="card-title mb-0">تعليمات الكورس</h5>
            </div>
            <div className="card-body">
              <CourseInstruct id={cid} />
              {/* <ul>
                {courseD &&
                  courseD.courseinstructions.map((c, idx) => (
                    <li key={idx}>{c}</li>
                  ))}
              </ul> */}
            </div>
          </div>
        </div>
      </div>
      <div className="row mx-3">
        <div
          className="col-12 col-md-6 col-xxl-3 d-flex order-2 order-xxl-3"
          dir="rtl"
        >
          <div className="card flex-fill w-100">
            <div className="card-header">
              <h5 className="card-title mb-0">هدف الكورس</h5>
            </div>
            <div className="card-body">
              <CourseTarget id={cid} />
              {/* <ul>
                {courseD &&
                  courseD.coursetarget.map((p, idx) => <li key={idx}>{p}</li>)}
              </ul> */}
            </div>
          </div>
        </div>
        <div
          className="col-12 col-md-6 col-xxl-3 d-flex order-2 order-xxl-3"
          dir="rtl"
        >
          <div className="card flex-fill w-100">
            <div className="card-header">
              <h5 className="card-title mb-0">فيديوهات الكورس</h5>
            </div>
            <div className="card-body">
              <CourseVideoes id={cid} />
              <hr />
              <button className="btn btn-primary" onClick={showaddPanel}>
                اضافة فيدو
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row mx-3">
        <div className="col-6 mx-auto">
          {addPanel ? <AddVideo env={hideaddPanel} course={cid} /> : <></>}
        </div>
      </div>
      <div className="row mx-3" dir="rtl">
        <div className="col-12 col-md-6 col-xxl-3 d-flex order-2 order-xxl-3">
          <div className="card flex-fill w-100">
            <div className="card-header">
              <h5 className="card-title">الانشطة</h5>
            </div>
            <div className="card-body">
              <CourseActiv id={cid} />
              <hr />
              <Link className="btn btn-primary" onClick={showAddActive}>
                اضافة نشاط
              </Link>
              <br />
              {addActive ? <AddActivity id={cid} hid={hideAddActive} /> : <></>}
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xxl-3 d-flex order-2 order-xxl-3">
          <div className="card flex-fill w-100">
            <div className="card-header">
              <h5 className="card-title">المكتبات</h5>
            </div>
            <div className="card-body">
              <GetLibrary id={cid} />
              <Link className="btn btn-primary mt-2" onClick={showLib}>
                اضافة مكتبة
              </Link>
              {addLib ? <AddLibrary id={cid} /> : <></>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseOne;
