import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExamCard from "../../UI/exam/ExamCard";
import AddExam from "./AddExam";

const ShowExam = () => {
  const token = localStorage.getItem("token");
  const [exam, setExam] = useState([]);
  const [showadd, setShowadd] = useState(false);
  useEffect(() => {
    SearchExam();
  }, []);
  const SearchExam = async () => {
    const response = await fetch("http://localhost:8000/admin/exam/all", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `${token}`,
      },
    });
    const data = await response.json();
    setExam(data);
  };

  function handleClick(event) {
    setShowadd(true);
  }

  function Clos() {
    setShowadd(false);
  }

  return (
    <>
      <div className="row mt-2">
        <div className="col-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0"> اضافةامتحان </h5>
            </div>
            <div className="card-body">
              <p className="card-text">
                اضافة امتحان الى الموقع لنشرة بين الطلبة و ربطة بالكورسات
              </p>
              <Link className="card-link" onClick={handleClick}>
                اضافة
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        {showadd ? (
          <div className="col-12">
            <AddExam evn={Clos} />
          </div>
        ) : (
          <> </>
        )}
      </div>
      <div className="row mt-2">
        <div className="col-12 col-md-12 col-xxl-12 d-flex order-2 order-xxl-3">
          <div className="card flex-fill w-100">
            <div className="card-header">
              <h5 className="card-title mb-0"> بيانات الامتحانات </h5>
            </div>
            <div className="card-body d-flex">
              <div className="align-self-center w-100">
                <table className="table table-hover my-0">
                  <thead>
                    <tr>
                      <th> الاسم </th> <th> الدرجة </th> <th> نسبة النجاح </th>
                      <th> عدد الاسئلة </th> <th> مفعل </th>
                      <th> تاريخ الانشاء </th> <th> اضافة اسئلة </th>
                      <th> حذف الامتحان </th>
                    </tr>
                  </thead>
                  <tbody>
                    {exam.map((exData) => (
                      <ExamCard
                        key={exData._id}
                        active={exData.active}
                        Examname={exData.examname}
                        examdegree={exData.examDegree}
                        sucesspers={exData.examsuccessPersent}
                        excount={exData.examquestion.length}
                        exid={exData._id}
                        exDate={exData.createdAt}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowExam;
