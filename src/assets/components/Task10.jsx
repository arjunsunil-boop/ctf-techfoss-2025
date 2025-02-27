import React, { useState } from 'react';
import Navbar from './Navbar';
import './tailcss.css';
import { useNavigate } from 'react-router-dom';

const Task10 = () => {
  const navigate = useNavigate();
  const [ans, setAns] = useState('');

  const verify = () => {
    if (ans === "//www.scrambled.com") { // Check if the answer is correct
      navigate('/t5qrst'); // Navigate only when answer is correct
    } else {
      alert("Wrong answer! Try again.");
      setAns('');
    }
  };
  return (
    <div className='h-screen'>
      <Navbar/>
      <div className='container h-full py-8' id='task10bg'>
        <h1 className=' '>Task 10</h1>

        <div className='py-16'>

        <p className='text-yellow-500 bg-blue-700 inline p-2 mt-16'>Decode me</p>

        <div className="nes-container is-rounded is-dark py-4">
          <p>- .-. . .- ... ..- .-. . \t  .... .- -.-. -.- . .-. 

          </p>
        </div>
        <div className='flex items-center gap-4 mt-4'>
          <input
            type="text"
            id="answer"
            value={ans}
            onChange={(e) => setAns(e.target.value)}  
            className='bg-blue-500 text-white p-2'
          />
          <button
            type="button"
            className='bg-red-500 p-2 text-yellow-300'
            onClick={verify} // Fix: Pass function reference, not execute it immediately
          >
            Submit
          </button>
        </div>
        </div>

      </div>
    </div>
  )
}

export default Task10