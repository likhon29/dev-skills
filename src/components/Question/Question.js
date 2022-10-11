import React from "react";
import Option from "../Option/Option";
import './Question.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee  ,faEye } from '@fortawesome/free-solid-svg-icons'
const Question = ({ question }) => {
    const { options } = question;
    console.log(question);
  const lastDigit = question.id.slice(question.id.length - 1);
  const quizNo = parseInt(lastDigit);
  console.log(quizNo);
  return (
    <div className="container question w-50">
      
          <div className="d-flex question-info">
          <h4> Quiz {quizNo + 1}: {question.question}</h4>  <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
            </div>
            
              <div className="option-container">
              {
                  options.map(option=><Option option={option}></Option>)
              }
             </div>
      </div>
   
  );
};

export default Question;
