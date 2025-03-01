import React, { useState } from 'react';
import Navbar from './Navbar';
import './tailcss.css';
import { useNavigate } from 'react-router-dom';

const Task4 = () => {
  const [ans, setAns] = useState('');
  const [message, setMessage] = useState('');
  const [showNext, setShowNext] = useState(false);
  const navigate = useNavigate();


  const tasks = JSON.parse(import.meta.env.VITE_task1);

  const verify = () => {
    if (tasks[ans] === undefined) {
      setAns('');
      setMessage(<div className="bg-red-200 text-red-700 p-2 mt-2">Wrong Password!</div>);
      setTimeout(() => {
      setMessage('');
      }, 2000);
      setShowNext(false);
    } else {
      setMessage(<div className="bg-green-200 text-green-700 p-2 mt-2">Correct Password!</div>);
      setShowNext(true);
    }
  };

  const handleNext = () => {
    navigate('/t2efgh');

  };



  return (
    <div id='task4bg'>
      <Navbar />

      <div className='container p-12'>
        <h2 className='text-md text-white'>Task 1</h2>
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
            Check
          </button>
          {message}
        </div>
        {showNext && (
          <div className='py-8 px-2 flex gap-4'>

            <div className="bg-green-100 text-green-700 p-2">flag: {tasks[ans]}</div>



          </div>
        )}
        <br />
        <div className='flex items-center gap-4'>
          <a type="button" className="nes-btn is-success" href='https://forms.gle/He1jh5TWs1jN9ha6A' target='/blank'>Submission</a>
          <button
            type="button"
            className='bg-purple-500 p-2 text-yellow-300'
            onClick={handleNext}  // Call verify function correctly
          >
            Next Task
          </button>
        </div>

      </div>

    </div>
  );
};

export default Task4;
