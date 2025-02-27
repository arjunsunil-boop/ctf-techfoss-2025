import React, { useState } from 'react';
import Navbar from './Navbar';
import './tailcss.css';
import { useNavigate } from 'react-router-dom';

const Task4 = () => {
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
    <div id='task4bg'>
      <Navbar />
      
      <div className='container p-12'>
        <h2 className='text-md text-white'>Task 4</h2>
        <div className='mt-16 w-3/4'>
          <p className='nes-balloon from-left nes-pointer'>
            Sometimes, the next clue is hidden in plain sight<br />—just reversed.
          </p>
        </div>
        <div className="nes-container is-rounded is-dark py-4 w-1/3">
          <p>moc.delbmarcs.www//</p>
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
  );
};

export default Task4;
