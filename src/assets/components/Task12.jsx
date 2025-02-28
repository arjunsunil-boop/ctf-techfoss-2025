import React, { useState } from 'react';
import Navbar from './Navbar';
import './tailcss.css';
import { useNavigate } from 'react-router-dom';

const Task12 = () => {
  const [ans, setAns] = useState('');
  const [message, setMessage] = useState('');
  const [showNext, setShowNext] = useState(false);
  const navigate = useNavigate();

  var flag = JSON.parse(import.meta.env.VITE_task12);
  const verify = () => {
    if (flag[ans] === undefined) {
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
    navigate('/t11hdhsj');
  };

  return (
    <div className="h-screen">
      <Navbar />

      <div id="task12bg" className="h-full">
        <div className="container">
          <br />
          <h1 style={{ color: 'yellow' }}>Task 10</h1>
          <br />
        
          <p className="nes-balloon from-left nes-pointer">
            Welcome to the lab. It appears the computers are locked . To gain access, you need to enter the correct password.
            <br />
            
            
          </p>

          <div className='py-8 px-2 flex gap-4'>
            <input
              type="password"
              id="answer"
              value={ans}
              onChange={(e) => setAns(e.target.value.toLowerCase())}
              className='bg-white p-2 '
            />

            <button
              type="button"
              className='bg-red-500 p-2 text-yellow-300'
              onClick={verify}
            >
              Check
            </button>


            {message}

          </div>

          <div>
            {showNext && (
              <div className='py-8 px-2 flex gap-4'>

                <div className="bg-green-100 text-green-700 p-2">flag: {Object.values(flag)[0]}</div>
                <button
                  type="button"
                  className='bg-purple-500 p-2 text-yellow-300'
                  onClick={handleNext}
                >
                  Next Task
                </button>
                
               

              </div>
            )}
          </div>
          <a href="https://forms.gle/YEcRMMWpnZTV1VrA7" target='/blank'>
                    <button type="button" className="nes-btn is-primary">Submission</button>

                  </a>

        </div>
      </div>
    </div>
  );
};

export default Task12;