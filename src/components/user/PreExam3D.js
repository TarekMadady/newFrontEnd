import React, { useEffect, useState } from "react";
import Exam from "../UI/userExam/Exam";

const PreExam3D = () => {
  useEffect(() => {
    GetData();
  }, []);
  const [examData, setExamData] = useState([]);
  const [examName, setExamName] = useState("");
  const [examDegree, setExamDegree] = useState(0);
  const [examQuestion, setExamQuestion] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [exid, setExid] = useState();
  const token = localStorage.getItem("token");

  const GetData = async () => {
    const response = await fetch(
      "https://tutorialbackend.onrender.com/exam/preexam3d",
      {
        method: "Get",
        headers: {
          Authorization: `${token}`,
        },
      }
    );

    const data = await response.json();
    if (response.status === 200) {
      setExamData([data]);
      setExid(data.examID);
      setExamName(data.examName);
      setExamDegree(data.Degree);
      setExamQuestion(data.examQuestionCount);
      setQuestions(data.questions);
      // examName = data.examName;
      // console.log("exam", examName);
    }
  };

  return (
    <>
      <Exam
        examid={exid}
        exdata={examData}
        examname={examName}
        examDegree={examDegree}
        Questioncount={examQuestion}
        allQuestions={questions}
      />{" "}
    </>
  );
};

export default PreExam3D;
