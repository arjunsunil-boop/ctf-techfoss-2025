import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Correct way to handle navigation
import './tailcss.css';
import Navbar from './Navbar';

const Task9 = () => {
  const [ans, setAns] = useState('');
  const [message, setMessage] = useState('');
  const [showNext, setShowNext] = useState(false);
  const navigate = useNavigate();


  var FLAG = 'techfoss<HERLON>';

  const verify = () => {
    if (ans === '4') {
      setMessage(<div className="bg-green-200 text-green-700 p-2 mt-2">Correct Password!</div>);
      setShowNext(true);
    } else {
      setAns('');
      setMessage(<div className="bg-red-200 text-red-700 p-2 mt-2">Wrong Password!</div>);
      setTimeout(() => {
        setMessage('');
      }, 2000);
      setShowNext(false);
    }
  };

  const handleNext = () => {
    navigate('/t10pqrst');
  };


  return (
    <div className='h-full w-full' id='task9bg'>
      <Navbar />
      <div className=' grid justify-center h-full py-8 px-16'>
        <h2 className=' text-white color text-md'>Task 9</h2>

        <div className='h-full p-3 items-stretch '>
          <p className='text-blue-500 '>
            I took a secret number X and performed these operations:

          </p>
          <p className='text-blue-800 ' >
            XORed it with 3<br />
            ANDed it with 7<br />
            ORed it with 12<br />
            The final result is 15.<br />
            8 {'>'} X {'>'} 0 
          </p>
          <p className='text-yellow-300'>What was my original number <strong className='text-red-500'>X</strong>?</p>

          <div className='flex items-center gap-4 '>
            
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
            {message}
          </div>
          {showNext && (
            <div className='py-8 px-2 flex gap-4'>

              <div className="bg-green-100 text-green-700 p-2">flag: {FLAG}</div>
              <button
                type="button"
                className='bg-purple-500 p-2 text-yellow-300'
                onClick={handleNext}  // Call verify function correctly
              >
                Next Task
              </button>


            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Task9;
