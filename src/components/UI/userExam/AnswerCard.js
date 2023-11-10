import React, { useRef } from "react";

const AnswerCard = ({ answertitle, sidechar, id, test, kid }) => {
  const myData = useRef();
  function getid(event) {
    // console.log(event);
    // return;
    console.log("Answer Card");
    if (myData.current.checked) {
      event.preventDefault();
      console.log(myData.current.value);
      // const ID = parseInt(myData.current.value);
      kid(myData.current.value);
    }
  }
  return (
    <div className="form-check">
      <input
        className="form-check-input d-none"
        type="radio"
        name="flexRadioDefault"
        id={id}
        value={id}
        ref={myData}
        onChange={getid}
      />
      <label className="form-check-label  w-100" htmlFor={id}>
        <div className=" m-2 p-3 rounded">
          <div className="position-relative z-0  w-100">
            <h1 className=" opacity-25 top-100 start-100 ansLa">
              {sidechar[test]}
            </h1>
          </div>
          <div className="position-relative z-3 text-dark ">
            <p className="w-100 fs-1" dir="rtl">
              {answertitle}
            </p>
          </div>
        </div>
      </label>
    </div>
  );
};

export default AnswerCard;
