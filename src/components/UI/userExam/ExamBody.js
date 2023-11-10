import React, { useState, useEffect } from "react";
import ExamHeader from "./ExamHeader";
import ExamQuestion from "./ExamQuestion";
import ExamAnswer from "./ExamAnswer";
import ExamTail from "./ExamTail";
const ExamBody = ({ data, evn, ad }) => {
  console.log(data);
  const [questions, setQuestions] = useState([{}]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quesCounter, setQuesCounter] = useState([{}]);
  const myDatabase = () => {
    questions.push(data);
    // console.log(questions);
  };

  const HandleAnswer = (event) => {
    event.preventDefault();
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
  };

  const handleSend = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    // console.log("Exam Body");
    myDatabase();
  }, []);

  const activeQuestion = data[currentQuestion];
  const quesCount = activeQuestion.questiontitle;
  // console.log("active ques", activeQuestion);
  // console.log("Question ", quesCount);
  const ansCount = data[currentQuestion].answeres;

  function getanswerID(id) {
    const QandAns = { questionid: data[currentQuestion].id, ansId: id };
    console.log(`Question ${activeQuestion.id} and answer is ${id}`);
    evn(QandAns.questionid, QandAns.ansId);
  }

  function sendA() {
    ad();
  }

  return (
    <>
      <div className="container mt-0" style={{ height: "90vh" }}>
        {/* {data && data.length > 0 ? (
          <div> {data} </div>
        ) : (
          <div> no question </div>
        )} */}
        <ExamHeader
          poCurrent={currentQuestion}
          arin={data.length - 1}
          inc={HandleAnswer}
          exTitle={"preExam"}
          sen={sendA}
        />
        <div className="row" style={{ height: "80%" }}>
          <ExamAnswer answerssend={ansCount} getid={getanswerID} />
          <ExamQuestion
            key={data[currentQuestion].id}
            qtxt={quesCount}
            id={data[currentQuestion].id}
          />
        </div>
        <div className="row" style={{ height: "10%" }}>
          <div className="col-6"></div>
          {/* <ExamTail /> */}
        </div>
      </div>
    </>
  );
};

export default ExamBody;
