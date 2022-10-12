import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './Quiz.css'
const Quiz = () => {
    const quiz = useLoaderData();
    console.log(quiz.data);
    const { name, questions } = quiz.data;
   
    return (
        <div className="mt-5">
            <h1 className="text-primary ">Quiz of {name}</h1>
            
            <div className="quiz-container">
            {
                questions.map((question) =><Question questions={questions} question={question} key={question.id}></Question>)
            }
            </div>
        </div>
    );
};

export default Quiz;