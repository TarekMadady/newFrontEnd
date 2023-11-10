import React from "react";
import AnswerToAdd from "../../UI/answers/AnswerToAdd";
import AdminSide from "../adminGeneral/AdminSide";

const AddAnswer = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <AdminSide />
        </div>
        <div className="col-10 pt-5">
          <AnswerToAdd id={props.parm} />
        </div>
      </div>
    </div>
  );
};

export default AddAnswer;
