// src/components/Quiz.js
import React, { useState } from 'react';
import {Question} from './Question';

 const questions = [
    {
        question: 'What is the capital city of France?',
        options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
        correctAnswer: 'Paris',
    },
    {
          question: 'What is the largest planet in our solar system?',
          options: ['Earth', 'Jupiter', 'Mars', 'Venus'],
          correctAnswer: 'Jupiter',
    },
    {
          question: 'Which famous scientist developed the theory of general relativity?',
          options: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Stephen Hawking'],
          correctAnswer: 'Albert Einstein',
    },
    {
          question: 'In which year did the Titanic sink?',
          options: ['1912', '1920', '1905', '1931'],
          correctAnswer: '1912',
    },
    {
          question: 'What is the capital city of Japan?',
          options: ['Beijing', 'Seoul', 'Tokyo', 'Bangkok'],
          correctAnswer: 'Tokyo',
    },
    {
          question: 'Which planet is known as the "Red Planet"?',
          options: ['Mars', 'Venus', 'Jupiter', 'Mercury'],
          correctAnswer: 'Mars',
    }

  // Add more questions as needed
];

export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [score, setScore] = useState(0);

  const handleOptionSelect = (option) => {
    if(option === questions[currentQuestion].correctAnswer){
        setScore(score+1);
    }
    setSelectedOptions([...selectedOptions, { question: currentQuestion, answer: option }]);
  };

  const handleNextQuestion = () => {
    // Add logic to check if the selected option is correct and update the score
    // console.log(questions[currentQuestion]);
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div>
      {currentQuestion < questions.length ? (
        <Question
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          handleOptionSelect={handleOptionSelect}
        />
      ) : (
        <div className='bg-slate-900 text-white font-bold text-lg h-[200px] flex items-center justify-center flex-col gap-4'>

          <h2>Quiz Completed!</h2>
          <p>Your Final Score: <span className='text-green-600 text-2xl ml-2'>{score}</span></p>
        </div>
      )}
      {currentQuestion < questions.length && (
        <button onClick={handleNextQuestion} className='py-2 px-4 rounded-2xl bg-blue-500 text-white font-bold mt-4' >Next Question</button>
      )}
    </div>
  );
};

// export default Quiz;
