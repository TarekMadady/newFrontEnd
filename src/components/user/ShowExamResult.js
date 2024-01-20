import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const ShowExamResult = (props) => {
  const [examtitle, setExamtitle] = useState("");
  const [examDate, setExamDate] = useState("");
  const [examDegree, setExamDegree] = useState("");
  const [degree, setDegree] = useState("");
  const token = localStorage.getItem("token");
  let navigate = useNavigate();
  const param = useParams();
  const { archive } = param;

  const getData = async () => {
    const response = await fetch(
      `https://api.motiongraphic.tech/exam/showresult/${archive}`,
      {
        method: "GET",
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    const Data = await response.json();
    console.log("hh", Data);
    setExamtitle(Data.title);
    // setExamDate(Data.date);
    setExamDegree(Data.examDegree);
    let date = new Date(Data.date);
    setExamDate(
      `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    );
    setDegree(Data.degree);
  };

  useEffect(() => {
    getData();
    // navigate("/admin", { replace: true });
  }, []);

  return (
    <main className="d-flex w-100">
      <div className="container d-flex flex-column">
        <div className="row vh-100">
          <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto d-table h-100">
            <div className="text-center mt-4" dir="rtl">
              <h1 className="h2"> نتيجة الإختبار القبلي </h1>
            </div>
            <div className="card" dir="rtl">
              <div className="vard-body">
                <div className="m-sm-3">
                  <div className="d-flex flex-column">
                    <div className="d-flex my-2 fs-2">
                      <div className="ms-2"> تاريخ الامتحان </div>
                      <div> {examDate} </div>
                    </div>
                    <div className="d-flex my-2 fs-2">
                      <div> درجة الامتحان </div> <div> {examDegree} </div>
                    </div>
                    <div className="d-flex my-2 fs-2">
                      <div> درجة الطالب </div>
                      <div> {Math.floor((degree * examDegree) / 100)} % </div>
                    </div>
                    <div className="d-flex my-2">
                      {examtitle && examtitle === "preExam2D" ? (
                        <Link
                          to="/track/track2d"
                          className="btn btn-primary fs-3"
                        >
                          ابدء المديولات التعليمية
                        </Link>
                      ) : (
                        <Link to="/track3D" className="btn btn-primary">
                          ابدء المديولات التعليمية
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container" dir="rtl">
              <div className="d-flex flex-column">
                <div className="w-100 d-flex">
                  <h1>اسم الامتحان</h1>
                  <h2>{examtitle}</h2>
                </div>
                <div className="w-100 d-flex">
                  <h1>تاريخ الامتحان</h1>
                  <h2>{examDate}</h2>
                </div>
                <div className="w-100 d-flex">
                  <h1>درجة الامتحان</h1>
                  <h2>{examDegree}</h2>
                </div>
                <div className="w-100 d-flex">
                  <h1>درجة الطالب</h1>
                  <h2>{degree}</h2>
                </div>
              </div>
              {examtitle && examtitle === "preExam2D" ? (
                <Link to="/track/track2d" className="get-started-btn">
                  مسار 2D
                </Link>
              ) : (
                <Link to="/track3D" className="get-started-btn">
                  مسار 3D
                </Link>
              )}
            </div> */}
    </main>
  );
};

export default ShowExamResult;
