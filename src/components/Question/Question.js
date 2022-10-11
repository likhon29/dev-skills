import React from "react";
import Option from "../Option/Option";
import "./Question.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faEye } from "@fortawesome/free-solid-svg-icons";
const Question = ({ question }) => {
  const { options, id, correctAnswer } = question;
  console.log(question);
  const lastDigit = question.id.slice(question.id.length - 1);
  const quizNo = parseInt(lastDigit);
  console.log(quizNo);

  const handleAnswer = () => {
    toast(correctAnswer);
  };
  const getAnswer = (option) => {
    console.log(option);
    if (option === question.correctAnswer) {
      toast("Correct answer");
      const getId = document.getElementById(option);
      // getId.classList.add("right");
    } else {
      toast("Wrong Answer");
    }
  };
  
  return (
    <div className="container question w-50">
      <div className="d-flex question-info">
        <h4>
          {" "}
          Quiz {quizNo + 1}: {question.question}
        </h4>{" "}
        <FontAwesomeIcon onClick={handleAnswer} icon={faEye}></FontAwesomeIcon>
      </div>

      <div className="option-container">
        {options.map((option) => (
          <Option
            option={option}
            question={question}
            getAnswer={getAnswer}
          ></Option>
        ))}
      </div>
      <ToastContainer ></ToastContainer>
    </div>
  );
};

export default Question;
