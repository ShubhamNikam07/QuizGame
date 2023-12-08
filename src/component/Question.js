// src/components/Question.js
import React from 'react';

export const Question = ({ question, options, handleOptionSelect }) => {
   
  return (
    <div className='w-2/6 mx-auto text-lg flex gap-4 rounded-2xl justify-center flex-col mt-[100px] '>
      <h2 className=' p-6 bg-orange-300 font-bold'>{question}</h2>
      <form className='bg-green-200 font-medium list-inside'>
        {options.map((option) => (
          <div key={option} className='p-3'>
            <label>
              <input
                type="radio"
                name="answer"
                value={option}
                onChange={() => handleOptionSelect(option)}
              />
              
              {/* {console.log(option)} */}
              {option}
            </label>
            <br/>
          </div>
        ))}
      </form>
    </div>
  );
};


