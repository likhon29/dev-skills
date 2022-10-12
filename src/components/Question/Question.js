import React from "react";
import Option from "../Option/Option";
import "./Question.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faEye } from "@fortawesome/free-solid-svg-icons";
const Question = ({ question, questions }) => {
  const { options, id, correctAnswer } = question;
  const ques = question.question.slice(3, -4);
  // console.log(ques);
  // const ques=question.slice(0,10)
  // console.log(ques)
  const indexNo = questions.indexOf(question);

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
    <div className="container question w-50 ">
      <div className="d-flex question-info">
        <h4>
          {" "}
          Quiz {indexNo + 1}: {ques}
        </h4>{" "}
        <FontAwesomeIcon
          onClick={handleAnswer}
          icon={faEye}
          style={{ color: "blue", fontSize: "20px" }}
        ></FontAwesomeIcon>
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
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Question;
