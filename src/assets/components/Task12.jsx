import React, { useState } from 'react';
import Navbar from './Navbar';
import './tailcss.css';
import { useNavigate } from 'react-router-dom';

const Task12 = () => {
  const [ans, setAns] = useState('');
  const [message, setMessage] = useState('');
  const [showNext, setShowNext] = useState(false);
  const navigate = useNavigate();

  var FLAG = 'TISTIAN';

  const verify = () => {
    if (ans === 'tist') {
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
    navigate('/t13mkvkd');
  };

  return (
    <div className="h-screen">
      <Navbar />

      <div id="task12bg" className="h-full">
        <div className="container">
          <br />
          <p className="nes-balloon from-left nes-pointer">
            Welcome to the lab. It appears the computers are locked . To gain access, you need to enter the correct password.
            <br />
            <br />
            Hint: Consider the passwords that are frequently used at our institution.
          </p>

          <div className='py-8 px-2 flex gap-4'>
            <input
              type="password"
              id="answer"
              value={ans}
              onChange={(e) => setAns(e.target.value)}  // Update state on input change
              className='bg-white p-2 '
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

          <div>
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
    </div>
  );
};

export default Task12;