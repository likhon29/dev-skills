import React from "react";
import "./Option.css";
const Option = ({ option, question,getAnswer }) => {
    
  return (
    <div ClassName=''>
      <p>
        <input onClick={()=>getAnswer(option)} type="radio" name={question} id={option} value={option} />
        <label for={option} > {option}</label>
      </p>
    </div>
  );
};

export default Option;
