import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Correct way to handle navigation
import './tailcss.css';

const Task9 = () => {
  const [ans, setAns] = useState('');
  const navigate = useNavigate(); // Correct way to handle navigation

  const verify = () => {
    if (ans === "96") {
      window.open("https://forms.google.com/example-form", "_blank");
      navigate("/t10pqrst");  // Use navigate instead of redirect
    }
  };

  return (
    <div className='bg-black grid justify-center h-screen p-16'>
      <h2 className=' text-white color'>Task 9</h2>

      <div className=' p-4 items-stretch '>
        <p className='text-yellow-500 '>
          I started with a secret number X and applied the following transformations:
        </p>
        <p className='text-red-500' >
          XOR with 42 <br/>
          AND with 127 <br/>
          OR with 16<br/>
          Now, the final result is: 90
        </p>
        <p>What was my original number X?</p>

        <div className='flex items-center gap-4 mt-20'>
          <label htmlFor="answer" className='text-white'>Submit Here</label>
          <input
            type="text"
            id="answer"
            value={ans}
            onChange={(e) => setAns(e.target.value)}  // Update state on input change
            className='bg-blue-500 text-white p-2'
          />
          <button
            type="button"
            className='bg-red-500 p-2 text-yellow-300'
            onClick={verify}  // Call verify function correctly
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task9;
