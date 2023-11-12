import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Libraries from "./Libraries";
import ContentCard from "./ContentCard";
import ActiveCount from "./ActiveCount";
import LibCount from "./LibCount";

const CourseCard = ({ courid }) => {
  const token = localStorage.getItem("token");
  const [course, setCourse] = useState([]);

  const [couinsta, setCouinsta] = useState();
  const [showInsta, setShowInsta] = useState(false);

  const [targ, setTarg] = useState();
  const [showTag, setShowTag] = useState(false);

  const [aac, setAac] = useState();
  const [showActive, setShowActive] = useState(false);

  const [lib, setLib] = useState();
  const [showLib, setShowLib] = useState(false);

  const [content, setContent] = useState();
  const [showContent, setShowContent] = useState(false);

  const myData = async () => {
    const response = await fetch(
      `https://testb.oneproduct.online//course/${courid}`,
      {
        method: "GET",
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    const data = await response.json();
    setCourse(data);
    setCouinsta(data.courseinstructions);
    setTarg(data.coursetarget);
    setAac(data.courseActivities);
    setLib(data.courselibraries);
    setContent(data.coursevideoes);
    // console.log("cou", data);
  };

  useEffect(() => {
    myData();
  }, []);

  function displayInsta() {
    setShowInsta(true);
    setShowTag(false);
    setShowActive(false);
    setShowLib(false);
    setShowContent(false);
  }

  function displayTag() {
    setShowTag(true);
    setShowInsta(false);
    setShowActive(false);
    setShowLib(false);
    setShowContent(false);
  }

  function displayAct() {
    setShowActive(true);
    setShowTag(false);
    setShowInsta(false);
    setShowLib(false);
    setShowContent(false);
  }

  function DisplayLib() {
    setShowLib(true);
    setShowActive(false);
    setShowTag(false);
    setShowInsta(false);
    setShowContent(false);
  }

  function DisplayContent() {
    setShowContent(true);
    setShowLib(false);
    setShowActive(false);
    setShowTag(false);
    setShowInsta(false);
  }

  return (
    <div className="row my-2" dir="rtl">
      <div className="col-3">
        <div
          className="p-2 vh-50"
          style={{
            backgroundColor: "#0C356A",
            borderRadius: "50px",
          }}
        >
          <ul
            style={{
              listStyle: "none",
            }}
            className="text-center"
          >
            <li className="my-4">
              <Link className="text-white fs-1 fw-bold" onClick={displayInsta}>
                التعليمات{" "}
              </Link>{" "}
            </li>{" "}
            <li className="my-3">
              <Link className="text-white fs-1 fw-bold" onClick={displayTag}>
                الاهداف التعليمية{" "}
              </Link>{" "}
            </li>{" "}
            <li className="my-3">
              <Link
                className="text-white fs-1 fw-bold"
                onClick={DisplayContent}
              >
                المحتوى التعليمى{" "}
              </Link>{" "}
            </li>{" "}
            <li className="my-3">
              <Link className="text-white fs-1 fw-bold" onClick={displayAct}>
                الانشطة التعليمية{" "}
              </Link>{" "}
            </li>{" "}
            <li className="my-3">
              <Link className="text-white fs-1 fw-bold" onClick={DisplayLib}>
                المكتبة الاثرائية{" "}
              </Link>{" "}
            </li>{" "}
          </ul>{" "}
        </div>{" "}
      </div>{" "}
      <div className="col-9 pt-5">
        {" "}
        {showInsta ? (
          <div dir="rtl" className="mt-2">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <h2 className="text-danger fs-3 fw-bold">
                    عزيزى الطالب يجب اتباع الخطوات التالية لضمان اتمام دراسة
                    الموديل بنجاح{" "}
                  </h2>{" "}
                  <ul>
                    {" "}
                    {couinsta &&
                      couinsta.map((c, idx) => (
                        <li className="fw-bold fs-3" key={idx}>
                          {" "}
                          {c}{" "}
                        </li>
                      ))}{" "}
                  </ul>{" "}
                </div>{" "}
                <div className="col-6">
                  <img
                    src="/images/gif 1.gif"
                    alt="insta"
                    className="image-fluid w-100"
                  />
                </div>
              </div>{" "}
            </div>
          </div>
        ) : (
          <> </>
        )}{" "}
        {showTag ? (
          <div dir="rtl" className="mt-2">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <h2 className="text-danger fs-3 fw-bold ">
                    عزيزى الطالب عليك بعد دراسة هذا الموديول ان تكون قادرا عىل:
                  </h2>{" "}
                  <ul>
                    {" "}
                    {targ &&
                      targ.map((c, idx) => (
                        <li className="fs-3 fw-semibold" key={idx}>
                          {" "}
                          {c}{" "}
                        </li>
                      ))}
                  </ul>
                </div>{" "}
                <div className="col-6">
                  <img
                    src="/images/tag.gif"
                    alt="insta"
                    className="image-fluid w-100"
                  />
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        ) : (
          <> </>
        )}{" "}
        {showActive ? <ActiveCount cid={courid} /> : <> </>}{" "}
        {showLib ? <LibCount cid={courid} /> : <> </>}{" "}
        <div className="container">
          {" "}
          {showContent ? (
            content.map((v, indx) => (
              <ContentCard cid={v.video} key={indx} coun={indx + 1} />
            ))
          ) : (
            <> </>
          )}{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default CourseCard;

// <Link key={course && course._id} to={`/course/${course && course._id}`}>
//   {course && course.coursename}
// </Link>
