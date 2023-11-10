import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ok from "./ok.svg";
import Danger from "./dangerous.svg";

const QuestionAnswers = (props) => {
  const token = localStorage.getItem("token");
  const [answerData, setAnswerData] = useState([]);

  const getAnswers = async () => {
    const response = await fetch(
      `http://localhost:8000/admin/question/answer/${props.qid}`,
      {
        method: "GET",
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setAnswerData(data);
  };

  useEffect(() => {
    getAnswers();
  }, []);

  function gen() {
    props.ev();
  }

  return (
    <div>
      <Link onClick={gen}>اغلاق</Link>
      <table className="table table-hover my-0" dir="rtl">
        <thead>
          <tr>
            <th>الاجابة</th>
            <th>صح / خطاء</th>
            <th>الدرجة</th>
          </tr>
        </thead>
        <tbody>
          {answerData &&
            answerData.map((answer) => (
              <tr>
                <td>{answer.answerTitle}</td>
                <td>
                  {answer.answerResult ? (
                    <img src={ok} alt="not good" width="24" height="24" />
                  ) : (
                    <img src={Danger} alt="not good" width="24" height="24" />
                  )}
                </td>
                <td>{answer.answerDegree}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuestionAnswers;
